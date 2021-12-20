<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 11:53:02
 * @LastEditTime: 2021-12-07 10:15:05
 * @LastEditors: ecstAsy
-->

<template>
  <a-layout class="user-layout">
    <a-layout-content class="user-layout-content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="user-layout-footer">
      <div class="footer-links">
        <a href="_self">帮助</a>
        <a href="_self">隐私</a>
        <a href="_self">条款</a>
      </div>
      <div class="footer-copyright">
        Copyright &copy; 2021 MokoPro
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@import "@/styles/index.less";

.user-layout {
  .wh(100%; 100%);
  min-height:1000px;
  background-color: #fff;

  &-content {
    padding-top: 100px;
  }

  &-footer {
    line-height: 30px;
    background-color: #fff;
    text-align: center;
    .flex-column();
    .footer-links {
      a {
        .f-s-c(12px; @font-color-info);
        transition: all 0.3s;
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }

    .footer-copyright {
      .f-s-c(12px; @font-color-info);
      letter-spacing: 1px;
    }
  }
}
</style>
