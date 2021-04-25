<template>
  <div>
    <font-awesome-icon :icon="icon" :size="size"/>
  </div>
</template>

<script lang="ts">

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/vue-fontawesome";

export default {
  name: "Icon",
  props: {
    icon: {
      type: [String, Array],
    },
    theme: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
  setup(props) {
    const { theme, icon, size, ...restProps } = props;
    return { theme, icon, size, restProps };

    // const classes = computed(() => {
    //   const loadingClass = loading ? " z-button-loading" : "";

    //   return `z-button-theme-${theme} z-button-size-${size}${loadingClass}`;
    // });

    // return { classes };
  },
};
</script>
