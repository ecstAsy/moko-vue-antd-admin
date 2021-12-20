<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 11:32:44
 * @LastEditTime: 2021-12-09 13:24:56
 * @LastEditors: ecstAsy
-->

<template>
  <a-row class="row-title">
    <a-col :span="12">
      {{ title }}
    </a-col>
    <a-col
      :span="12"
      align="right"
    >
      <a-tooltip placement="top">
        <template #title>
          {{ tooltip }}
        </template>
        <moko-icon
          class="status-info"
          icon="info-circle-outlined"
        />
      </a-tooltip>
    </a-col>
    <a-col class="row-title-num">
      {{ value }}
    </a-col>
  </a-row>
</template>

<script setup lang="ts">

defineProps<{
  title: string
  tooltip:string
  value?: string
}>();
</script>

<style lang="less" scoped>
@import "@/styles/index.less";
.row-title {
  .f-s-c(14px; @font-color-info);
  &-num {
    .f-s-c(30px; @font-color-primary);
    font-size: 30px;
    line-height: 38px;
    white-space: nowrap;
    margin: 8px 0;
  }
}
</style>
