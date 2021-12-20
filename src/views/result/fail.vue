<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 11:56:47
 * @LastEditTime: 2021-12-09 10:45:11
 * @LastEditors: ecstAsy
-->

<template>
  <a-card class="page-result">
    <a-result
      status="error"
      title="提交失败"
      sub-title="请核对并修改以下信息后，再重新提交。"
    >
      <template #extra>
        <router-link :to="{ path: '/' }">
          <a-button
            type="primary"
            size="medium"
          >
            返回修改
          </a-button>
        </router-link>
      </template>
    </a-result>
    <div class="page-result-fail">
      <p>
        <b>您提交的内容有如下错误：</b>
      </p>
      <p>
        <moko-icon
          class="status-error"
          icon="close-circle-outlined"
        />
        <span>您的账户已被冻结</span>
        <router-link :to="{ path: '/' }">
          <span>
            立即解冻 >
          </span>
        </router-link>
      </p>
      <p>
        <moko-icon
          class="status-error"
          icon="close-circle-outlined"
        />
        <span>您的账户还不具备申请资格</span>
        <router-link :to="{ path: '/' }">
          <span>
            立即升级 >
          </span>
        </router-link>
      </p>
    </div>
  </a-card>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
