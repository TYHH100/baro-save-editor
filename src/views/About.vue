<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet elevation="1" class="buttonWrapper">
          <v-btn :class="{ 'text-black': !subEditor }" color="secondary" class="mx-2" @click="subEditor = false">
            关于存档编辑器
          </v-btn>
          <v-btn :class="{ 'text-black': subEditor }" color="secondary" class="mx-2" @click="subEditor = true">
            关于潜艇工具
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet elevation="1" class="pa-2" style="text-align: center">
          <b>
            注意:下载文件后如果要替换,请备份原文件以防万一<br />
            Even if something had worked for you before, there is always a risk that a game update breaks some stuff.
          </b>
        </v-sheet>
      </v-col>
    </v-row>
    <AboutSubEditor v-if="subEditor"></AboutSubEditor>
    <AboutSaveEditor v-else></AboutSaveEditor>
    <v-row>
      <v-col>
        <v-sheet elevation="1" class="pa-2" style="text-align: center">
          If the editor freezes, crashes or outputs corrupted file feel free to create a
          <a style="color: rgb(var(--v-theme-secondary))" href="https://github.com/ignis05/baro-save-editor/issues">
            github issue
          </a>
          attaching original file(s) and providing steps for reproduction.<br/>
          翻译 by TYHH10 如果有翻译问题，切勿到原作者那边提问.
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutSaveEditor from '@/components/AboutSaveEditor.vue'
import AboutSubEditor from '@/components/AboutSubEditor.vue'

export default {
  data() {
    return {
      subEditor: false,
    }
  },
  components: {
    AboutSaveEditor,
    AboutSubEditor,
  },
}
</script>

<style scoped>
.buttonWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
}
</style>
