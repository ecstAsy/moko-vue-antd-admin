<!--
 * @Author: ecstAsy
 * @Date: 2021-12-06 11:56:04
 * @LastEditTime: 2021-12-27 14:27:31
 * @LastEditors: ecstAsy
-->

<template>
  <a-card title="分步表单">
    <a-steps
      :current="activeStep"
    >
      <template
        v-for="item in StepsMap"
        :key="item.title"
      >
        <a-step
          :title="item.title"
        >
          <template #icon>
            <moko-icon :icon="item.icon" />
          </template>
        </a-step>
      </template>
    </a-steps>
    <a-row>
      <a-col
        :span="24"
        class="step-form-content"
      >
        <template v-if="activeStep<1">
          <transfer-form
            ref="transfer"
            @next="onNext"
          />
        </template>
        <template v-else-if="activeStep===1">
          <transfer-info
            @prev="activeStep -= 1"
            @next="onNext"
          />
        </template>
        <template v-else>
          <transfer-result @repeat="activeStep = 0" />
        </template>
      </a-col>
      <a-col
        :span="24"
        class="step-form-toast"
      >
        <b>说明</b>
        <br>转账到银行卡
        <br>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        <br>转账到微信账户
        <br>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        <br>转账到支付宝账户
        <br>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        <br>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { StepItemTypes } from "./type";
import { TransferForm, TransferInfo, TransferResult } from "./components";

const StepsMap = reactive<Array<StepItemTypes>>([
  { title: "填写转账信息", icon: "form-outlined" },
  { title: "确认转账信息", icon: "carry-out-outlined" },
  { title: "完成", icon: "info-circle-outlined" },
]);

const activeStep = ref<number>(0);

const onNext = () => {
  activeStep.value += 1;
};
</script>

<style lang="less" scoped>
@import "@/styles/index.less";

.step-form-content {
  margin: 50px 0;
}
.step-form-toast {
  .f-s-c(13px; @font-color-info);
  padding: 16px;
  border-top: 1px dashed @font-color-info;
  line-height: 24px;
}
</style>
