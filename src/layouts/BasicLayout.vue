<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 11:52:45
 * @LastEditTime: 2021-12-09 10:31:05
 * @LastEditors: ecstAsy
-->
<template>
  <a-layout class="basic-layout">
    <a-layout-header class="basic-layout-header">
      <global-header :collapsed="collapsed" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        theme="light"
        class="basic-layout-sider"
        :collapsed="collapsed"
      >
        <div class="sider-menu">
          <menu-side-bar
            :menus="menus"
          />
        </div>
        <div class="sider-link">
          <moko-icon
            :icon="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'"
            @click="onCollapse"
          />
        </div>
      </a-layout-sider>
      <a-layout-content class="basic-layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "@/store";

const store = useStore();

const menus = ref<[]>([]);

const menuRoute: any = store.state.permission.routers.find((item: any) => item.path === "/");

if (menuRoute) menus.value = menuRoute.children;

const collapsed = computed(() => store.state.app.collapsed);

const onCollapse = () => store.dispatch("setCollpase");
</script>

<style lang="less" scoped>
@import "@/styles/index.less";

.basic-layout {
  .wh(100%; 100%);

  &-header {
    .wh(100%; 48px);
    padding: 0 20px;
    background-color: #fff;
  }

  &-sider {
    :deep(.ant-layout-sider-children) {
      .flex-column();
      .ant-menu-sub.ant-menu-inline {
        background-color: #fff;
      }
    }

    .sider-menu {
      width: 100%;
      background-color: aqua;
    }

    .sider-link {
      line-height: 45px;
      text-align: center;
    }
  }

  &-content {
    margin: 16px;
  }
}
</style>
