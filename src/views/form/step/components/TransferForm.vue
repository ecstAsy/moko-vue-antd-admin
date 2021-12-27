<!--
 * @Author: ecstAsy
 * @Date: 2021-12-27 13:59:42
 * @LastEditTime: 2021-12-27 15:02:01
 * @LastEditors: ecstAsy
-->
<template>
  <a-form
    ref="transfer"
    :model="transferState"
    :rules="rules"
    :label-col="{ span: 12 }"
    :wrapper-col="{ span: 12 }"
  >
    <a-form-item
      label="付款账户"
      required
    >
      <a-input
        v-model:value="transferState.account"
        class="form-item-340"
        placeholder="请输入付款账户"
      />
    </a-form-item>
    <a-form-item
      label="收款账户"
      required
    >
      <div class="form-item-flex">
        <a-form-item prop="date1">
          <a-select
            v-model:value="transferState.way"
            class="form-item-100"
            placeholder="请选择区域"
          >
            <template
              v-for="item in payWaysMap"
              :key="item.value"
            >
              <a-select-option :value="item.value">
                {{ item.label }}
              </a-select-option>
            </template>
          </a-select>
        </a-form-item>
        <a-form-item>
          <span class="line">-</span>
        </a-form-item>
        <a-form-item prop="payment">
          <a-input
            v-model:value="transferState.payment"
            class="form-item-200"
            placeholder="请输入收款人账号"
          />
        </a-form-item>
      </div>
    </a-form-item>
    <!-- <a-form-item
      label="收款人姓名"
      prop="account"
    >
      <a-input
        v-model="transferState.name"
        class="form-item-340"
        placeholder="请输入收款人姓名"
      />
    </a-form-item> -->
    <!-- <a-form-item
      label="转账金额"
      prop="amount"
    >
      <a-input-number
        v-model="transferState.amount"
        :min="1"
        controls-position="right"
      />
    </a-form-item> -->
    <a-form-item
      :colon="false"
      label=" "
    >
      <a-button
        type="primary"
        size="medium"
        @click="onSubmit"
      >
        下一步
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from "vue";
import { TransferStateTypes } from "../type";
import { PayWays } from "@/dataSource";

const transfer = ref<Ref | null>(null);
// const emit = defineEmits<{(e: "next", fields: TransferStateTypes): void}>();
const payWaysMap = reactive<Array<{label:string, value:number}>>(PayWays);
const transferState = reactive<TransferStateTypes>({
  account: null,
  way: 1,
  payment: null,
  name: null,
  amount: 100,
});
const rules = {
  account: [
    {
      required: true,
      message: "请输入付款账号！",
      trigger: "blur",
    },
  ],
  way: [
    {
      required: true,
      message: "请输入收款人姓名！",
      trigger: "change",
    },
  ],
  payment: [
    {
      required: true,
      message: "请输入收款人账户！",
      trigger: "blur",
    },
  ],
  name: [
    {
      required: true,
      message: "请输入收款人姓名！",
      trigger: "blur",
    },
  ],
  amount: [
    {
      required: true,
      message: "请输入转账金额！",
      trigger: "blur",
    },
  ],
};
const onSubmit = async () => {
  try {
    await transfer.value.validate();
    return true;
    // return emit("next", transferState);
  } catch (error) {
    return false;
  }
};
</script>
