<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 13:03:40
 * @LastEditTime: 2021-12-06 15:04:22
 * @LastEditors: ecstAsy
-->

<template>
  <div class="moko-global-header">
    <div class="moko-global-header-logo">
      <img
        src="@/assets/logo.png"
        class="moko-logo-img"
        alt="logo"
      >
      <span
        v-if="!collapsed"
        class="moko-logo-title"
      >
        Moko Pro
      </span>
    </div>
    <div class="moko-global-header-breadcrumb">
      <div class="menu-icon">
        <moko-icon icon="appstore-outlined" />
      </div>
      <a-breadcrumb>
        <template
          v-for="item in breadListRef"
          :key="item.name"
        >
          <a-breadcrumb-item>
            <router-link
              :to="{
                path: item.path
              }"
            >
              {{ item.meta.title }}
            </router-link>
          </a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </div>
    <div class="moko-global-header-action">
      <div class="action-notice">
        <moko-icon icon="bell-outlined" />
      </div>
      <div class="action-user">
        <a-dropdown>
          <a-avatar>
            <template #icon>
              <moko-icon icon="user-outlined" />
            </template>
          </a-avatar>
          <template #overlay>
            <a-menu size="small">
              <a-menu-item @click="onLogout">
                退出登录
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const breadListRef = computed(() => router.currentRoute.value.matched);

defineProps<{collapsed:boolean}>();

const onLogout = () => router.push({ path: "/user/login" });
</script>

<style lang="less" scoped>
@import "@/styles/index.less";
.moko-global-header {
  .wh(100%; 100%);
  line-height: 48px;
  .flex-row(@type:flex-start);
  &-logo {
    .flex-row(@type:flex-start);
    justify-content: flex-start;
    .moko-logo {
      &-img {
        .wh(30px; 30px);
        margin-left: 5px;
      }
      &-title {
        .f-s-c(20px; @primary-color);
        font-weight: 600;
        margin-left: 16px;
        margin-right: 26px;
        transition: all 0.3s;
      }
    }
  }
  &-breadcrumb {
    margin-left: 20px;
    .flex-row();
    .menu-icon {
      color: rgba(0, 0, 0, 0.45);
      height: 48px;
      line-height: 50px;
      vertical-align: text-bottom;
      &:hover {
       color: @primary-hover-color;
      }
    }
  }

  &-action {
    margin-left: auto;
    height: 100%;
    .flex-row();
    .action {
      &-notice {
        margin-right: 24px;
        .f-s-c(@size:18px; @color:rgba(0, 0, 0, 0.45))
      }
      &-user {
        line-height: 0px;
      }
    }
  }
}
</style>
