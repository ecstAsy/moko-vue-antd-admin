<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 14:10:03
 * @LastEditTime: 2021-12-06 17:47:33
 * @LastEditors: ecstAsy
-->

<template>
  <a-sub-menu :key="menuInfo.name">
    <template
      v-if="menuInfo.meta.icon"
      #icon
    >
      <moko-icon :icon="menuInfo.meta.icon" />
    </template>
    <template #title>
      {{ menuInfo.meta.title }}
    </template>
    <template
      v-for="item in menuInfo.children"
      :key="item.path"
    >
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <template
            v-if="item.meta.icon"
            #icon
          >
            <moko-icon :icon="item.meta.icon" />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <menu-bar-item
          :key="item.name"
          :menu-info="item"
        />
      </template>
    </template>
  </a-sub-menu>
</template>

<script setup lang="ts">

interface MenuBarProps {
  menuInfo: any
}
defineProps<MenuBarProps>();
</script>
