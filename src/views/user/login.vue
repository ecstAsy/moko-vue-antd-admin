<template>
  <div class="page-login">
    <div class="login-img">
      <img
        src="@/assets/login-bg.png"
        alt="login-bg"
      >
    </div>
    <div class="login-form">
      <div class="header">
        <img
          class="logo"
          src="@/assets/logo.png"
          alt="logo"
        >
        <span class="title">Moko Admin</span>
        <div class="desc">
          Vue3 Antd Design Vuex Vite TypeScript !
        </div>
      </div>
      <a-form
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item
          label="账号"
          v-bind="validateInfos.account"
        >
          <a-input
            v-model:value="formState.account"
            placeholder="moko.admin"
          />
        </a-form-item>
        <a-form-item
          label="密码"
          v-bind="validateInfos.passward"
        >
          <a-input
            v-model:value="formState.password"
            placeholder="admin"
            type="password"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 6 }">
          <a-checkbox v-model:checked="checked">
            记住密码
          </a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
          <a-button
            type="primary"
            style="width:100%"
            :loading="loading"
            @click.prevent="onSubmit"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { Form, message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";

const store = useStore();

const router = useRouter();

const loginForm = Form.useForm;

const checked = ref<boolean>(true);

const loading = ref<boolean>(false);

const labelCol = reactive<{
  span:number;
}>({ span: 6 });

const wrapperCol = reactive<{
  span:number;
}>({ span: 18 });

const formState = reactive<{
  account:string;
  password:string;
}>({
  account: "",
  password: "",
});

const { validate, validateInfos } = loginForm(formState, reactive({
  account: [
    {
      required: true,
      message: "Please input account",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input sub password",
    },
  ],
}));

const onSubmit = async () => {
  try {
    await (loading.value = true);
    await validate();
    const res = await store.dispatch("login", formState);
    await (loading.value = false);
    if (res.code) {
      return message.error(res.message);
    }
    return Promise.all([
      message.success(res.message),
      router.push({ path: "/" }),
    ]);
  } catch (error) {
    await (loading.value = false);
    return false;
  }
};
</script>

<style lang="less" scoped>
@import "@/styles/index.less";
.login {
  width: 553px;
  height: 100%;
  min-height: 700px;
}
.page-login {
  .wh(1106px;700px);
  min-height: 700px;
  .flex-row(@type:center);
  box-shadow: 0 0 20px 8px #f8f8f8;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  .login-img {
    &:extend(.login);
  }
  .login-form {
    &:extend(.login);
    .flex-column(@type:center);
    .header {
      margin-bottom: 80px;
      .logo {
        height: 38px;
        vertical-align: middle;
        margin-right: 16px;
        border-style: none;
      }

      .title {
        .f-s-c(33px; @font-color-primary);
        .f-w-r(@family:Avenir, "Helvetica Neue", Arial; @weight: 600);
        vertical-align: middle;
      }

      .desc {
        margin-top: 20px;
        color: @font-color-info;
      }
    }
  }
}
</style>
