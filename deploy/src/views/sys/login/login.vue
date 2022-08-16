<template>
  <div
    class="loginContainer flex justify-center items-center w-full bg-blue-500"
  >
    <div
      class="centent bg-white rounded-md h-1/3 sm:w-2/4 mobel:w-4/5 shadow-2xl"
    >
      <div class="text-blue-400 sm:text-4xl mobel:text-2xl mb-4">登录</div>
      <a-form
        class=""
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: '请输入你的账号!' }]"
        >
          <a-input
            v-model:value="formState.username"
            aria-placeholder="账号"
            :maxlength="13"
          />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: '请输入你的密码!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit" class="rounded-md"
            >Submit</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { setCookie } from "@/utils/index";
interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  setup() {
    const router = useRouter();
    const formState = reactive<FormState>({
      username: "",
      password: "",
    });
    const onFinish = (values: any) => {
      setCookie("login", "_098Lsdf^5asdf");
      router.push("/dashboard");
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
<style lang="less" scoped>
.loginContainer {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.centent {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  justify-content: center;
}
</style>
