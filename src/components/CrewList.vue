<template>
  <v-card elevation="1" class="pb-2">
    <v-card-header class="flex-column align-center">
      <v-card-title>{{ isMultiPlayer ? '拥有的船员' : '拥有的船员' }}</v-card-title>
    </v-card-header>
    <v-sheet class="mb-2" id="crewListWrapper">
      <v-sheet
        v-for="el of characterArray"
        :key="hashWrapper(el.attributes)"
        :class="`d-flex flex-row justify-center px-4 ${el.elements.find((e) => e.name == 'job').attributes.identifier}`"
      >
        <div class="name">{{ el.attributes.name }}</div>
        <v-spacer></v-spacer>
        <v-icon style="cursor: grabbing" class="grabHandle" color="secondary">mdi-drag-horizontal-variant</v-icon>
        <v-icon title="编辑船员" color="secondary" class="iconButton" @click="editChar(el)">
          mdi-file-edit-outline
        </v-icon>
        <v-icon title="删除船员" color="red" class="iconButton" @click="deleteChar(el)">
          mdi-delete-outline
        </v-icon>
      </v-sheet>
    </v-sheet>
    <v-sheet class="d-flex flex-row align-center pl-4 pr-2">
      <v-btn v-if="canExportPlayers" title="Export player characters" icon size="x-small" @click="exportPlayers">
        <v-icon color="secondary">mdi-file-download-outline</v-icon>
      </v-btn>
      <div class="pt-1">添加:</div>
      <v-spacer></v-spacer>
      <v-btn title="Add new assistant character" icon size="x-small" @click="addNew">
        <v-icon color="secondary">mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-btn title="Add character from xml" icon size="x-small" @click="addCharDialog = true">
        <v-icon color="secondary">mdi-account-edit-outline</v-icon>
        <v-dialog class="editCharacter" v-model="addCharDialog">
          <v-card class="d-flex flex-column" style="width: 100%; height: 100%">
            <v-card-title>
              <span class="text-h5">Add character from xml</span>
            </v-card-title>
            <v-card-text class="d-flex flex-grow-1">
              <textarea
                v-model="addCharDialogVal"
                spellcheck="false"
                class="textArea d-flex px-2 flex-grow-1"
              ></textarea>
            </v-card-text>
            <v-card-actions style="flex: 0 1 auto">
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="addCharDialog = false"> Cancel </v-btn>
              <v-btn color="green darken-1" text @click="addFromInput"> Add </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
      <v-btn title="Paste character xml from clipboard" icon size="x-small" @click="addFromClip">
        <v-icon color="secondary">mdi-clipboard-arrow-up-outline</v-icon>
      </v-btn>
    </v-sheet>
  </v-card>
  <v-dialog persistent class="editCharacter" v-model="editDialog" fullscreen>
    <v-card class="d-flex flex-column mainCard" style="width: 100%; height: 100%">
      <v-card-title style="background-color: rgb(var(--v-theme-primary))">
        <span class="text-h4"
          >Editing <span class="text-black">{{ charClone?.attributes?.name }}</span></span
        >
      </v-card-title>
      <v-card-text v-if="charClone" class="d-flex flex-grow-1">
        <v-row v-if="!showTextarea">
          <v-col>
            <v-card elevation="1">
              <v-card-title>
                <span class="text-h4">General</span>
              </v-card-title>
              <v-card-text class="charEditCardText">
                <div>
                  <v-text-field
                    label="Name"
                    variant="outlined"
                    style="color: white; min-width: 200px"
                    class="mb-4 mt-3"
                    type="text"
                    v-model="charClone.attributes.name"
                  />
                </div>
                <div>
                  <div class="text-h5">Raw xml:</div>
                  <v-btn title="Copy character xml to clipboard" size="x-small" icon @click="copyChar">
                    <v-icon color="secondary">mdi-clipboard-arrow-down-outline</v-icon>
                  </v-btn>
                  <v-btn title="Paste character xml from clipboard" size="x-small" icon @click="pasteChar">
                    <v-icon color="secondary">mdi-clipboard-arrow-up-outline</v-icon>
                  </v-btn>
                  <v-btn title="Edit raw xml" size="x-small" icon @click="rawEditChar">
                    <v-icon color="secondary">mdi-file-edit-outline</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="1">
              <v-card-title>
                <span class="text-h4">Job &amp; Skills</span>
              </v-card-title>
              <v-card-text class="charEditCardText">
                <div>
                  <div class="text-h5">Job:</div>
                  <select :class="cloneJob.attributes.identifier" v-model="cloneJob.attributes.identifier">
                    <option class="captain" value="captain">Captain</option>
                    <option class="securityofficer" value="securityofficer">Security Officer</option>
                    <option class="medicaldoctor" value="medicaldoctor">Medical Doctor</option>
                    <option class="engineer" value="engineer">Engineer</option>
                    <option class="mechanic" value="mechanic">Mechanic</option>
                    <option class="assistant" value="assistant">Assistant</option>
                  </select>
                </div>
                <div>
                  <div class="text-h5">Skills</div>
                  <div>
                    <div v-for="skill of cloneJob.elements" :key="skill.attributes.identifier">
                      <div>{{ skill.attributes.identifier }}</div>
                      <input type="number" min="0" max="100" style="width: 6em" v-model="skill.attributes.level" />
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <textarea v-else v-model="textAreaVal" spellcheck="false" class="textArea d-flex px-2 flex-grow-1"></textarea>
      </v-card-text>
      <v-card-actions style="flex: 0 1 auto">
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="editDialogClose()"> Cancel </v-btn>
        <v-btn color="green darken-1" text @click="editDialogSave()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import Sortable from 'sortablejs'
import sum from 'hash-sum'
import _cloneDeep from 'lodash/cloneDeep'
import { xml2js } from 'xml-js'

import { desanitized_js2xml, gsHeader } from '@/helpers/CompressionHelpers.js'

export default {
  data() {
    return {
      addCharDialog: false,
      addCharDialogVal: '',
      editDialog: false,
      showTextarea: false,
      textAreaVal: '',
      color: {
        captain: '#718fb7',
        engineer: '#d7ac60',
        mechanic: '#60c9d0',
        securityofficer: '#8d776a',
        medicaldoctor: '#b9472b',
        assistant: '#f8f8f8',
      },
      selectedChar: null,
      charClone: null,
    }
  },
  computed: {
    ...mapGetters(['isMultiPlayer']),
    crewList() {
      return this.$store.getters.campaign.elements.find((el) =>
        this.isMultiPlayer ? el.name == 'bots' : el.name == 'crew',
      )
    },
    characterArray() {
      return this.crewList.elements.filter((el) => el.name === 'Character')
    },
    cloneJob() {
      if (!this.charClone) return {}
      return this.charClone.elements.find((el) => el.name == 'job')
    },
    canExportPlayers() {
      return this.$store.state.playerCharacters.length > 0
    },
  },
  methods: {
    hashWrapper(object) {
      return sum(object)
    },
    editChar(el) {
      this.selectedChar = el
      this.charClone = _cloneDeep(el)
      this.editDialog = true
    },
    editDialogClose() {
      // textarea click
      if (this.showTextarea) {
        this.showTextarea = false
        this.textAreaVal = ''
        return
      }
      this.editDialog = false
      this.selectedChar = null
      this.charClone = null
    },
    editDialogSave() {
      // textarea click
      if (this.showTextarea) {
        let xmlString = this.textAreaVal
        let newChar
        try {
          newChar = xml2js(xmlString).elements[0]
        } catch (err) {
          console.warn(err)
          this.$store.dispatch('showAlert', {
            type: 'error',
            text: `XML parser fail: ${err.message}`,
          })
          return
        }
        if (!newChar.attributes.name) {
          this.$store.dispatch('showAlert', {
            type: 'error',
            text: `Failed to read character name - file may be invalid or corrupted`,
          })
          return
        }
        this.charClone = newChar
        this.$store.dispatch('showAlert', {
          type: 'success',
          text: `Loaded ${this.charClone.attributes.name} xml changes.`,
        })
        this.showTextarea = false
        return
      }
      // normal menu click
      this.editDialog = false

      // first name change, idk why game does this, i guess to prevent two 100% identical characters
      if (
        this.charClone.attributes.name !== this.selectedChar.attributes.name &&
        !this.charClone.attributes.originalname
      ) {
        this.charClone.attributes.originalname = this.selectedChar.attributes.name
      }
      let index = this.crewList.elements.indexOf(this.selectedChar)
      this.crewList.elements[index] = this.charClone
      this.selectedChar = null
      this.$store.dispatch('showAlert', {
        type: 'success',
        text: `Modified character ${this.charClone.attributes.name}`,
      })
      this.charClone = null
    },
    deleteChar(el) {
      let index = this.crewList.elements.indexOf(el)
      if (index == -1) return console.error('faled to delete - element not found')
      this.crewList.elements.splice(index, 1)
      this.$store.dispatch('showAlert', {
        type: 'success',
        text: `已删除 ${el.attributes.name} 船员.`,
      })
    },
    async copyChar() {
      let xmlString = desanitized_js2xml({ elements: [this.charClone] }, { spaces: 4 })
      await navigator.clipboard.writeText(xmlString)
      this.$store.dispatch('showAlert', {
        type: 'success',
        text: `Copied ${this.charClone.attributes.name} to system clipboard.`,
      })
    },
    async pasteChar() {
      let xmlString = await navigator.clipboard.readText()
      let newChar
      try {
        newChar = xml2js(xmlString).elements[0]
      } catch (err) {
        console.warn(err)
        this.$store.dispatch('showAlert', {
          type: 'error',
          text: `XML parser fail: ${err.message}`,
        })
        return
      }
      if (!newChar.attributes.name) {
        this.$store.dispatch('showAlert', {
          type: 'error',
          text: `Failed to read character name - file may be invalid or corrupted`,
        })
        return
      }
      this.charClone = newChar
      this.$store.dispatch('showAlert', {
        type: 'success',
        text: `Pasted ${this.charClone.attributes.name} from system clipboard.`,
      })
    },
    rawEditChar() {
      this.textAreaVal = desanitized_js2xml({ elements: [this.charClone] }, { spaces: 4 })
      this.showTextarea = true
    },
    addNew() {
      let newCharacter = {
        type: 'element',
        name: 'Character',
        attributes: {
          name: 'New Assistant',
          originalname: 'New Assistant',
          speciesname: 'human',
          gender: 'female',
          race: 'Asian',
          salary: '2137',
          headspriteid: '6',
          hairindex: '2',
          beardindex: '0',
          moustacheindex: '0',
          faceattachmentindex: '0',
          startitemsgiven: 'false',
          ragdoll: '',
          personality: 'Crazy',
        },
        elements: [
          {
            type: 'element',
            name: 'job',
            attributes: {
              name: 'Assistant',
              identifier: 'assistant',
            },
            elements: [
              {
                type: 'element',
                name: 'skill',
                attributes: {
                  identifier: 'weapons',
                  level: '20',
                },
              },
              {
                type: 'element',
                name: 'skill',
                attributes: {
                  identifier: 'mechanical',
                  level: '20',
                },
              },
              {
                type: 'element',
                name: 'skill',
                attributes: {
                  identifier: 'electrical',
                  level: '20',
                },
              },
              {
                type: 'element',
                name: 'skill',
                attributes: {
                  identifier: 'medical',
                  level: '20',
                },
              },
              {
                type: 'element',
                name: 'skill',
                attributes: {
                  identifier: 'helm',
                  level: '20',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'inventory',
            elements: [],
          },
          {
            type: 'element',
            name: 'health',
            elements: [
              {
                type: 'element',
                name: 'LimbHealth',
                attributes: {
                  i: '0',
                },
              },
              {
                type: 'element',
                name: 'LimbHealth',
                attributes: {
                  i: '1',
                },
              },
              {
                type: 'element',
                name: 'LimbHealth',
                attributes: {
                  i: '2',
                },
              },
              {
                type: 'element',
                name: 'LimbHealth',
                attributes: {
                  i: '3',
                },
              },
              {
                type: 'element',
                name: 'LimbHealth',
                attributes: {
                  i: '4',
                },
              },
              {
                type: 'element',
                name: 'LimbHealth',
                attributes: {
                  i: '5',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'orders',
          },
        ],
      }

      var i = 1
      var newName = 'New Assistant'
      // increment number to get unique originalName
      while (this.characterArray.find((el) => el.attributes.originalname?.startsWith(newName))) {
        newName = `New Assistant${i++}`
        newCharacter.attributes.originalname = newName
      }

      this.crewList.elements.unshift(newCharacter)
    },
    addFromXml(xmlString) {
      let newChar
      try {
        newChar = xml2js(xmlString).elements[0]
      } catch (err) {
        console.warn(err)
        this.$store.dispatch('showAlert', {
          type: 'error',
          text: `XML parser fail: ${err.message}`,
        })
        return false
      }
      if (!newChar.attributes.name) {
        this.$store.dispatch('showAlert', {
          type: 'error',
          text: `Failed to read character name - file may be invalid or corrupted`,
        })
        return false
      }
      this.crewList.elements.unshift(newChar)
      this.$store.dispatch('showAlert', {
        type: 'success',
        text: `Added new character: ${newChar.attributes.name}.`,
      })
      return true
    },
    async addFromClip() {
      let xmlString = await navigator.clipboard.readText()
      this.addFromXml(xmlString)
    },
    addFromInput() {
      if (this.addFromXml(this.addCharDialogVal)) {
        this.addCharDialog = false
        this.addCharDialogVal = ''
      }
    },
    exportPlayers() {
      let exportCount = 0
      let chData = xml2js('<CharacterData></CharacterData>').elements[0]
      chData.elements = []
      for (let ch of this.characterArray) {
        let name = ch.attributes.originalname ?? ch.attributes.name
        let playerData = this.$store.state.playerCharacters.find((el) => el.name == name)
        if (!playerData) continue
        let char = _cloneDeep(ch)
        let chCpData = xml2js(
          `<CharacterCampaignData name="${playerData.name}" endpoint="${playerData.endpoint}" steamid="${playerData.steamid}"></CharacterCampaignData>`,
        ).elements[0]
        chCpData.elements = []
        let inventory = char.elements.splice(
          char.elements.findIndex((el) => el.name == 'inventory'),
          1,
        )[0]
        let health = char.elements.splice(
          char.elements.findIndex((el) => el.name == 'health'),
          1,
        )[0]
        chCpData.elements.push(char)
        chCpData.elements.push(inventory)
        chCpData.elements.push(health)
        chData.elements.push(chCpData)
        exportCount++
      }
      if (!exportCount)
        return this.$store.dispatch('showAlert', {
          type: 'info',
          text: `Could not match any of the crew characters with their CharacterCampaignData`,
        })
      let xmlString = gsHeader + desanitized_js2xml({ elements: [chData] }, { spaces: 4 })
      let a = document.createElement('a')
      a.href = URL.createObjectURL(new Blob([xmlString], { type: 'application/xml' }))
      a.download = this.$store.state.savefileName.slice(0, -5) + '_CharacterData.xml'
      a.click()
      this.$store.dispatch('showAlert', {
        type: 'success',
        text: `Exported and prompted to download ${exportCount} player characters`,
      })
    },
  },
  mounted() {
    var el = document.getElementById('crewListWrapper')
    Sortable.create(el, {
      animation: 150,
      handle: '.grabHandle',
      onSort: (event) => {
        // get real index of moved item
        const movedItem = this.characterArray[event.oldIndex]
        const crewListIndex = this.crewList.elements.indexOf(movedItem)

        // get real index of destination
        const newCrewListIndex = this.crewList.elements.indexOf(this.characterArray[event.newIndex])

        // move item
        this.crewList.elements.splice(crewListIndex, 1)
        this.crewList.elements.splice(newCrewListIndex, 0, movedItem)
      },
    })
  },
}
</script>

<style scoped>
.textArea {
  background: white;
  color: black;
}

.charEditCardText {
  opacity: 100;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-center;
}
.charEditCardText > * {
  margin: 0 8px;
  margin-bottom: 16px;
}

input {
  border: 1px solid white;
  color: white;
  font-size: 2em;
  padding-left: 8px;
}

select {
  border: 1px solid white;
  font-size: 2em;
  padding-left: 8px;
  line-height: 40px;
  cursor: pointer;
  border-radius: 5px;
}

option {
  background: rgb(var(--v-theme-surface));
}

.mainCard.v-card {
  background-color: rgb(var(--v-theme-background));
}

.iconButton {
  cursor: pointer;
}

.captain {
  color: #718fb7;
}

.engineer {
  color: #d7ac60;
}

.mechanic {
  color: #60c9d0;
}

.securityofficer {
  color: #8d776a;
}

.medicaldoctor {
  color: #b9472b;
}

.assistant {
  color: #f8f8f8;
}
</style>
