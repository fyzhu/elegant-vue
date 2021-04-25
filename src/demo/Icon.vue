<demo>
基础用法
</demo>

<template>
  <Icon :icon="['fab', 'black-tie']" size="lg"></Icon>
</template>

<script lang="ts">

import Icon from '../lib/Icon/Icon.vue';
import {ref} from 'vue';

export default {
  name: 'IconDemo',
  components: {Icon},
  setup() {
    const checked = ref(false);
    return {checked};
  }
};
</script>

<style lang="scss" scoped>
</style>