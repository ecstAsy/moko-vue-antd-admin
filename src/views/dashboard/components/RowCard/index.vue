<!--
 * @Author: ecstAsy
 * @Date: 2021-12-09 11:28:11
 * @LastEditTime: 2021-12-09 13:53:58
 * @LastEditors: ecstAsy
-->

<template>
  <a-row
    class="dashbord-card"
    :gutter="18"
    type="flex"
    justify="start"
  >
    <a-col :span="6">
      <sale-card />
    </a-col>
    <a-col :span="6">
      <traffic-card />
    </a-col>
    <a-col :span="6">
      <payment-card />
    </a-col>
    <a-col :span="6">
      <effect-card />
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import SaleCard from "./SaleCard.vue";
import TrafficCard from "./TrafficCard.vue";
import PaymentCard from "./PaymentCard.vue";
import EffectCard from "./EffectCard.vue";
</script>

<style lang="less" scoped>
@import "@/styles/index.less";
.dashbord-card {

  :deep(.content) {
    .flex-column(@type:flex-end;@align:flex-start);
    height: 46px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f3f3f3;
  }

  :deep(.footer) {
    margin-top: 16px;
  }
}
</style>
