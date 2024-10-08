<template>
  <v-card class="pa-4" elevation="1">
    <div class="d-flex flex-row align-center justify-center mb-1">
      <div class="h3 mb-1">将文件拖到虚线框里,进行加载↓</div>
      <v-spacer></v-spacer>
      <!-- file path guess -->
      <div v-if="fromSubEditor" class="text-center">
        您的 sub 文件在 <span class="text-primary">Barotrauma 安装目录</span>
      </div>
      <div v-else class="text-center">
        您的 save 文件位置 <span class="text-primary">{{ saveLocation }}</span>
      </div>
      <!-- locate file dialog -->
      <v-btn @click.stop="fileLocDialog = true" size="x-small" icon>
        <v-icon>mdi-file-find-outline</v-icon>
        <v-tooltip anchor="bottom" activator="parent">Where can I find my files?</v-tooltip>
      </v-btn>
      <v-dialog class="filedropper" v-model="fileLocDialog">
        <v-card>
          <v-card-title>
            <span class="text-h5">Where are my {{ fromSubEditor ? '.sub' : '.save' }} files?</span>
            <v-spacer></v-spacer>
            <v-btn color="red" size="x-small" icon @click="fileLocDialog = false">
              <v-icon>mdi-close-thick</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <!-- sub editor -->
          <v-card-text class="pl-8" v-if="fromSubEditor">
            <div class="text-h6 text-center">Submarines are within Barotrauma installation dir:</div>
            <ul>
              <li>
                Vanilla submarines:
                <span class="text-primary"> Barotrauma/Submarines </span>
              </li>
              <li>
                Downloaded temporarily when joining server:
                <span class="text-primary"> Barotrauma/Submarines/Downloaded </span> (it's a hidden directory)
              </li>
              <li>
                Downloaded from Steam Workshop:
                <span class="text-primary"> Barotrauma/Mods/[package name] </span>
              </li>
              <li>
                Created or modified by you:
                <span class="text-primary"> Barotrauma/LocalMods/[package name] </span>
              </li>
            </ul>
            <br />
            <p class="text">
              To open your Barotrauma dir, right click on it in Steam menu and select "Browse Local Files"
            </p>
            <v-img src="~@/assets/browseLocalFiles.png"></v-img>
          </v-card-text>
          <!-- save editor -->
          <v-card-text class="pl-8" v-else>
            <div class="text-h6 text-center">Save location depends on your OS:</div>
            <ul>
              <li>
                Windows:
                <span class="text-primary">
                  C:\Users\%username%\AppData\Local\Daedalic Entertainment GmbH\Barotrauma
                </span>
              </li>
              <li>
                Linux:
                <span class="text-primary"> /home/$USER/.local/share/Daedalic Entertainment GmbH/ </span>
              </li>
              <li>
                MacOS:
                <span class="text-primary"> /$USER/Library/Application Support/Daedalic Entertainment GmbH/ </span>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- help dialog -->
      <v-btn @click.stop="helpDialog = true" size="x-small" icon>
        <v-icon>mdi-help-circle-outline</v-icon>
        <v-tooltip anchor="bottom" activator="parent">What files can I load?</v-tooltip>
      </v-btn>
      <v-dialog class="filedropper" v-model="helpDialog">
        <v-card>
          <v-card-title>
            <span class="text-h5">What files can i load here?</span>
            <v-spacer></v-spacer>
            <v-btn color="red" size="x-small" icon @click="helpDialog = false">
              <v-icon>mdi-close-thick</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <!-- sub editor -->
          <v-card-text class="pl-8" v-if="fromSubEditor">
            <div class="text-h6 text-center">Submarine editor supports following files:</div>
            <ul>
              <li><span class="text-primary font-weight-bold">.sub</span> - Barotrauma submarine files</li>
              <li><span class="text-primary text-bold">.xml</span> - Decompressed Barotrauma submarine files</li>
            </ul>
          </v-card-text>
          <!-- save editor -->
          <v-card-text class="pl-8" v-else>
            <div class="text-h6 text-center">
              Save editor needs to load <span class="text-primary font-weight-bold">.save</span> file first, then it
              accepts:
            </div>
            <ul>
              <li>
                <span class="text-primary font-weight-bold">.sub</span> - Add a new owned submarine or update file of an
                existing one
              </li>
              <li>
                <span class="text-primary font-weight-bold">gamesession.xml</span> - Replace gamesession.xml inside the
                loaded save
              </li>
              <li>
                <span class="text-primary font-weight-bold">(...)_CharacterData.xml</span> - Import player characters
                from multiplayer save as bots
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <div
      class="dropzone"
      @drop.prevent="dropHandler"
      @click="dropzoneClickHandler"
      @dragenter.stop.prevent="dragEnter"
      @dragleave.stop.prevent="dragLeave"
      @dragover.stop.prevent
      :style="{ borderColor: hovered ? getBorderColor : '', backgroundImage: `url(${fileImage})` }"
    ></div>
    <input
      ref="fileInput"
      class="dropzoneInput"
      type="file"
      @change="selectHandler"
      multiple="false"
      :accept="fromSubEditor ? '.sub, .xml' : '.save, .sub, .xml'"
    />
  </v-card>
</template>

<script>
import fileImage from '@/assets/file-upload-outline.png'

import platform from 'platform-detect/os.mjs'
import { Buffer } from 'buffer'

import { DecompressSave } from '@/helpers/CompressionHelpers.js'

export default {
  props: {
    fromSubEditor: Boolean,
  },
  data() {
    return {
      hovered: false,
      fileLocDialog: false,
      helpDialog: false,
    }
  },
  methods: {
    async loadFile(file) {
      await this.$store.dispatch('setLoading', true)
      // give vue time to update component before synchronous decompression
      await new Promise((r) => setTimeout(r, 50))

      const reader = new FileReader()

      reader.readAsArrayBuffer(file)
      reader.onload = (e) => {
        /**@type {ArrayBuffer} */
        const resultRaw = e.target.result
        var resultFile = {
          name: file.name,
          data: null,
        }

        // uploads from submarine editor
        if (this.fromSubEditor) {
          resultFile.data = resultRaw
          this.$store.dispatch('subUploaded', resultFile)
        }
        // uploads from save editor
        else {
          if (file.name.endsWith('.save')) {
            var save = DecompressSave(Buffer.from(resultRaw))
            resultFile.data = save
          } else if (file.name.endsWith('.sub')) {
            resultFile.data = resultRaw
          } else if (file.name.endsWith('.xml')) {
            resultFile.data = Buffer.from(resultRaw).toString('utf-8')
          } else {
            resultFile.data = resultRaw
          }
          this.$store.dispatch('fileUploaded', resultFile)
        }
      }
    },
    selectHandler(ev) {
      if (ev.target?.files[0]) this.loadFile(ev.target.files[0])
      ev.target.value = null
    },
    dropHandler(ev) {
      this.hovered = false
      if (ev.dataTransfer?.files[0]) this.loadFile(ev.dataTransfer.files[0])
    },
    dropzoneClickHandler() {
      this.$refs.fileInput.click()
    },
    dragEnter() {
      this.hovered = true
    },
    dragLeave() {
      this.hovered = false
    },
  },
  computed: {
    getBorderColor() {
      return this.$vuetify.theme.themes.dark.colors.secondary
    },
    fileImage() {
      return fileImage
    },
    /**@type {String} */
    saveLocation() {
      if (platform.windows) return 'C:\\Users\\%username%\\AppData\\Local\\Daedalic Entertainment GmbH\\Barotrauma'
      if (platform.linux) return '/home/$USER/.local/share/Daedalic Entertainment GmbH/'
      if (platform.macos) return '/$USER/Library/Application Support/Daedalic Entertainment GmbH/'
      return 'Your platform was not recognized, use button on the right to see possible save locations'
    },
  },
}
</script>

<style scoped>
input.dropzoneInput {
  display: none;
}
.dropzone {
  border: 2px dashed #bbb;
  border-radius: 5px;
  padding: 50px;
  text-align: center;
  cursor: pointer;
  position: relative;
  background-position: center;
}
</style>

<style>
.v-dialog.filedropper .v-overlay__content {
  max-width: 780px !important;
  max-height: 650px !important;
}
</style>
