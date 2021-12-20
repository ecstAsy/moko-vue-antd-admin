<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 14:09:51
 * @LastEditTime: 2021-12-07 11:43:02
 * @LastEditors: ecstAsy
-->

<template>
  <a-menu
    v-model:selected-keys="selectedKeys"
    v-bind="state"
    theme="light"
    class="menu-side-bar"
    mode="inline"
    @open-change="onOpenChange"
    @click="onMenuItemClick"
  >
    <template
      v-for="item in menus"
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
  </a-menu>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { RouteRecordNormalized, RouteRecordName } from "vue-router";
import router from "@/router";
import MenuBarItem from "./MenuBarItem.vue";

const props = defineProps<{
  menus: Array<RouteRecordNormalized>
}>();

const selectedKeys = ref<Array<string>>([router.currentRoute.value.path]);

const state = reactive<{
  rootSubmenuKeys: Array<RouteRecordName | undefined>
  openKeys: Array<string>
}>({
  rootSubmenuKeys: Array.from(props.menus, ({ children, name }) => children && name)
    .filter((item) => item),
  openKeys: [],
});

const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};

const onMenuItemClick = (e: Event & { key: string }) => {
  router.push({ path: e.key });
};

onMounted(() => {
  // 预留页面刷新 保持菜单高亮并且展开选中项
  // console.log(state);
});

</script>

<style lang="less" scoped>
</style>
