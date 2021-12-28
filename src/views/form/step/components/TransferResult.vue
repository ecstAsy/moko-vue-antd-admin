<!--
 * @Author: ecstAsy
 * @Date: 2021-12-27 14:00:10
 * @LastEditTime: 2021-12-28 10:24:18
 * @LastEditors: ecstAsy
-->
<template>
  <a-row :gutter="24">
    <a-col :span="24">
      <a-result
        status="success"
        title="操作成功"
        sub-title="预计2小时到账"
      >
        <template #extra>
          <a-button
            type="primary"
            @click="emit('repeat')"
          >
            再转一笔
          </a-button>
          <a-button>
            查看账单
          </a-button>
        </template>
      </a-result>
    </a-col>
    <a-col
      :span="24"
      align="center"
    >
      <div class="result-info">
        <a-descriptions
          class="margin-top"
          title="转账信息"
          :column="1"
        >
          <a-descriptions-item label="收款人姓名">
            Moko
          </a-descriptions-item>
          <a-descriptions-item
            label="付款账户"
          >
            moko-admin@net.com
          </a-descriptions-item>
          <a-descriptions-item
            label="收款账户"
          >
            user@net.com
          </a-descriptions-item>
          <a-descriptions-item label="转账金额">
            <b>500.00</b>元
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
const emit = defineEmits<{(e:"repeat"):void}>();
</script>

<style lang="less" scoped>
.result-info {
  width: 360px;
  padding: 20px;
  background-color: #f0f0f0;
  ::v-deep {
    .a-descriptions__body {
      background: transparent;
    }
  }
}
</style>
