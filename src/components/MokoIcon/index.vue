<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 11:58:46
 * @LastEditTime: 2021-12-27 13:40:49
 * @LastEditors: ecstAsy
-->
<template>
  <component
    :is="icon"
    class="moko-icon"
  />
</template>

<script setup lang="ts">
interface MokoIconProps {
  icon: string
}

defineProps<MokoIconProps>();
</script>

<style>
.moko-icon {
  margin-right: 5px;
}
</style>
