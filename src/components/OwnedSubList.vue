<template>
  <v-card elevation="1" class="pb-2">
    <v-card-header class="flex-column align-center">
      <v-card-title> 拥有的潜艇 </v-card-title>
    </v-card-header>
    <v-sheet class="mb-2">
      <v-sheet
        v-for="sub of ownedSubList.map((el) => el.attributes.name)"
        :key="sub"
        class="d-flex flex-row justify-center px-4"
      >
        <input
          title="设置当前存档使用潜艇"
          class="selectedSub"
          type="radio"
          name="selectedOwnedSub"
          :checked="selectedSub === sub"
          @click="selectSub(sub)"
        />
        <div class="subname">{{ sub }}</div>
        <v-spacer></v-spacer>
        <v-icon title="下载潜艇文件" color="secondary" class="iconButton" @click="downloadSub(sub)">
          mdi-file-download-outline
        </v-icon>
        <v-icon title="编辑潜艇" color="secondary" class="iconButton" @click="editSub(sub)">
          mdi-clipboard-arrow-right-outline
        </v-icon>
        <v-icon title="删除潜艇" color="red" class="iconButton" @click="deleteSub(sub)">
          mdi-delete-outline
        </v-icon>
      </v-sheet>
    </v-sheet>
  </v-card>
</template>

<script>
import { CompressSub, desanitized_js2xml } from '@/helpers/CompressionHelpers.js'

export default {
  computed: {
    ownedSubList() {
      return this.$store.state.gamesession.elements?.[0].elements.find((el) => el.name == 'ownedsubmarines').elements
    },
    selectedSub() {
      return this.$store.state.gamesession.elements[0].attributes.submarine
    },
  },
  methods: {
    test(data) {
      console.log(data)
    },
    deleteSub(subName) {
      // remove from attached files
      let subFiles = this.$store.state.subfiles
      let subFilename = Object.keys(subFiles).find((file) => subFiles[file].elements[0].attributes.name === subName)
      if (!subFilename) return console.error(`Failed to delete ${subName} - not found in attached .sub files`)
      delete subFiles[subFilename]
      // remove from ownedsubmarines
      let index = this.ownedSubList.findIndex((el) => el.attributes.name === subName)
      if (index === -1) {
        this.$store.dispatch('showAlert', {
          type: 'error',
          text: `无法删除 (${subName}) - 在拥有的潜艇中无法找到.`,
        })
        return console.error(`Failed to delete ${subName} - not found in ownedSubmarines`)
      }
      this.ownedSubList.splice(index, 1)
      this.$store.dispatch('showAlert', {
        type: 'success',
        text: `在拥有的潜艇中删除了 (${subName}),在存档文件中删除了 (${subFilename}) 文件.`,
      })
    },
    downloadSub(subName) {
      let subFiles = this.$store.state.subfiles
      let subFilename = Object.keys(subFiles).find((file) => subFiles[file].elements[0].attributes.name === subName)
      if (!subFilename) return console.error(`Failed to download ${subName} - not found in attached .sub files`)
      // compress file
      let compressed = CompressSub(desanitized_js2xml(subFiles[subFilename]))
      // trigger download
      let a = document.createElement('a')
      a.href = URL.createObjectURL(new Blob([compressed.buffer], { type: 'application/gzip' }))
      a.download = subFilename
      a.click()
    },
    editSub(subName) {
      let subFiles = this.$store.state.subfiles
      let subFilename = Object.keys(subFiles).find((file) => subFiles[file].elements[0].attributes.name === subName)
      if (!subFilename) return console.error(`Failed to move ${subName} to editor - not found in attached .sub files`)
      this.$store.dispatch('subUploaded', {
        name: subFilename + '.raw',
        data: JSON.parse(JSON.stringify(subFiles[subFilename])),
      })
      this.$router.push('/SubTools')
    },
    selectSub(subName) {
      this.$store.state.gamesession.elements[0].attributes.submarine = subName
      this.$store.dispatch('showAlert', {
        type: 'success',
        text: `当前存档使用潜艇更改为 (${subName}).`,
      })
    },
  },
}
</script>

<style scoped>
.iconButton {
  cursor: pointer;
}
.selectedSub {
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
