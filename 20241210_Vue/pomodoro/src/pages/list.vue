<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">未完成</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field
          ref="inputTextField"
          v-model="input"
          append-icon="mdi-plus"
          label="新增事項"
          clearable
          :rules="[rules.required, rules.length]"
          @keydown.enter="onInputSubmit"
          @click:append="onInputSubmit"
        ></v-text-field>
        <v-table>
          <thead>
            <tr>
              <th>事項</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="item.id">
              <td>
                <v-text-field
                  v-show="item.edit"
                  ref="editTextField"
                  v-model="item.model"
                  :rules="[rules.required, rules.length]"
                  autofocus
                  @keydown.enter="onEditSubmit(item.id, i)"
                ></v-text-field>
                <span v-show="!item.edit">{{ item.text }}</span>
              </td>
              <td>
                <template v-if="item.edit">
                  <v-btn icon="mdi-check" @click="onEditSubmit(item.id, i)"></v-btn>
                  <v-btn icon="mdi-undo" @click="cancelEditItem(item.id)"></v-btn>
                </template>
                <template v-else>
                  <v-btn icon="mdi-pencil" @click="editItem(item.id)"></v-btn>
                  <v-btn icon="mdi-delete" @click="delItem(item.id)"></v-btn>
                </template>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/stores/list'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const list = useListStore()
//引用stores裡 list.js的變數及func
const { addItem, editItem, delItem, cancelEditItem, confirmEditItem } = list

const { items } = storeToRefs(list)

const input = ref('')
const inputTextField = ref(null)
const editTextField = ref([])

const rules = {
  required: (value) => {
    return Boolean(value) || '欄位必填'
  },
  length: (value) => {
    return value.length >= 3 || '必須三個字以上'
  },
}

const onInputSubmit = () => {
  console.log(inputTextField.value.isValid)
  if (!inputTextField.value.isValid) return
  addItem(input.value)
  inputTextField.value.reset()
}

const onEditSubmit = (id, i) => {
  if (!editTextField.value[i].isValid) return
  confirmEditItem(id)
}
</script>

<route lang="yaml">
meta:
  title: 清單
</route>
