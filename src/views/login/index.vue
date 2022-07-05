<template>
  <div class="login">
    <el-form :model="loginForm" ref="LoginForm" :rules="loginRules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="loginForm.code" />
        <img src="../../assets/logo.png" class="tu" @click="dj" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="hanldeSubmit">登录</el-button>
        <el-button>获取密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { validatePassword } from './rules'
const LoginForm = ref()

const loginForm = reactive({
  username: 'test'
})
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})
const dj = async () => {}
</script>
<style lang="scss">
.login {
  width: 300px;
  position: relative;
  top: 200px;
  left: 300px;
  .tu {
    width: 80px;
    height: 30px;
    position: absolute;
    right: 0%;
  }
}
</style>
