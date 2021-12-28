<!--
 * @Author: ecstAsy
 * @Date: 2021-12-27 14:00:01
 * @LastEditTime: 2021-12-28 10:21:11
 * @LastEditors: ecstAsy
-->
<template>
  <a-row :gutter="24">
    <a-col
      :span="24"
      align="center"
    >
      <a-tag
        color="warning"
        closable
      >
        确认转账后，资金将直接打入对方账户，无法退回。
      </a-tag>
    </a-col>
    <a-col
      :span="24"
      align="center"
    >
      <table class="info-table">
        <tr>
          <th>付款账户</th>
          <td>moko-admin@net.com</td>
        </tr>
        <tr>
          <th>收款账户</th>
          <td>user@net.com</td>
        </tr>
        <tr>
          <th>收款人姓名</th>
          <td>Moko</td>
        </tr>
        <tr>
          <th>转账金额</th>
          <td>
            <b>500.00</b>元
          </td>
        </tr>
      </table>
    </a-col>
    <a-col :span="24">
      <a-form
        ref="infoForm"
        :model="infoState"
        :rules="infoRules"
        :label-col="{ span: 11 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-form-item
          label="支付密码"
          name="passward"
        >
          <a-input
            v-model:value="infoState.passward"
            type="password"
            class="form-item-220"
            placeholder="请输入支付密码"
          />
        </a-form-item>
      </a-form>
    </a-col>
    <a-col
      :span="24"
      align="center"
    >
      <a-button
        style="margin-right: 16px;"
        @click="emit('prev')"
      >
        上一步
      </a-button>
      <a-button
        type="primary"
        @click="onSubmit"
      >
        下一步
      </a-button>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { ref, Ref, reactive } from "vue";

const infoForm = ref<Ref | null>(null);
const infoState = reactive<{
  passward:string
}>({
  passward: "",
});
const infoRules = {
  passward: [{ required: true, message: "请输入支付密码！", trigger: "blur" }],
};

const emit = defineEmits<{(e: "prev"): void, (e: "next"): void}>();

const onSubmit = async () => {
  try {
    await infoForm.value.validate();
    return emit("next");
  } catch (error) {
    return false;
  }
};
</script>

<style lang="less" scoped>
.info-table {
  border-collapse: collapse;
  text-align: left;
  width: 500px;
  margin: 20px auto;
  th,
  td {
    border: 1px solid #f0f0f0;
    padding: 10px;
  }
  th {
    background: #fafafa;
  }
}
</style>
