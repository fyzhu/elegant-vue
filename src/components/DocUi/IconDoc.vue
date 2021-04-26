<template>
  <doc-title>Icon 图标示例</doc-title>
  <CodePer :component="IconDemo"/>
  <Attr :columns="columns" :data="data"></Attr>
</template>

<script lang="ts">
import IconDemo from '../../demo/Icon.vue';
import CodePer from '../CodePer.vue';
import Markdown from '../Markdown.vue';
import Attr from '../Attr.vue';
import {ref} from 'vue';
import {columns} from '../../lib/data';
import DocTitle from '../DocTitle.vue';

export default {
  name: 'SwitchDoc',
  components: {DocTitle, Attr, Markdown, CodePer},
  setup() {
    const data = ref([
      {
        params: 'icon',
        desc: '图标',
        type: 'string / array',
        select: '',
        default: '',
      }
    ]);
    return {IconDemo, data, columns};
  }
};
</script>

<style lang="scss" scoped>

</style>