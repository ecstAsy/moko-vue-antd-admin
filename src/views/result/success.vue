<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 11:56:42
 * @LastEditTime: 2021-12-09 10:47:57
 * @LastEditors: ecstAsy
-->

<template>
  <a-card class="page-result">
    <a-result
      status="success"
      title="提交成功"
      sub-title="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。"
    >
      <template #extra>
        <router-link :to="{ path: '/' }">
          <a-button
            type="primary"
            size="medium"
          >
            返回列表
          </a-button>
        </router-link>
        <router-link :to="{ path: '/' }">
          <a-button
            style="margin: 0 16px;"
            size="medium"
          >
            查看项目
          </a-button>
        </router-link>
        <router-link :to="{ path: '/' }">
          <a-button size="medium">
            打印
          </a-button>
        </router-link>
      </template>
    </a-result>
    <div class="page-result-success">
      <a-descriptions
        title="项目信息"
        size="medium"
      >
        <a-descriptions-item label="项目 ID:">
          20211118
        </a-descriptions-item>
        <a-descriptions-item label="负责人:">
          Sky Moko
        </a-descriptions-item>
        <a-descriptions-item label="生效时间:">
          2021-11-18 ~ 2023-11-17
        </a-descriptions-item>
      </a-descriptions>

      <a-steps
        style="margin-top: 50px;"
        :active="2"
        align-center
        size="medium"
      >
        <a-step
          title="创建项目"
          description="欲买桂花"
        />
        <a-step
          title="部门初审"
          description="同载酒"
        />
        <a-step
          title="财务复核"
          description="终不似"
        />
        <a-step
          title="完成"
          description="少年游"
        />
      </a-steps>
    </div>
  </a-card>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
