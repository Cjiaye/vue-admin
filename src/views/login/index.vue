<template>
  <div class="login">
    <el-form :model="loginForm" ref="LoginForm" :rules="loginRules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="loginForm.code" />
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy
MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoAHgDASIA
AhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQA
AAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3
ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm
p6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEA
AwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSEx
BhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK
U1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3
uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0IU8U
0CvOvHuseKvC2uWmu2jLcaEiiOW2UYAJ67/c8Ybt0xz8wB6WKkArJ8Pa/p/iXSYtR06XfE/DKfvR
t3Vh2IrXFADxSpJGzlFdS68FQeR0P9R+YpDnYcEA44J7V5F4W1KSX4i3E0UzpA6xCPey/Ok375FA
Yj5mUszckjbgZOBQB7IBUgpikEAggg9CKeWVELuwVVGSScACgCQVItQtJHEAZHVATgFjjmksr22v
4vNtZkmjGPmU5HKhh/46wP40AWlqQCo2dIo2kkdURRlmY4AHua5W9+JXh23uTaafLPrN8P8Al20q
E3Df99D5R+dAHZCpBXntxq/jnUovMFtpXhWxPH2jUZhPPj1CAhAfZjWv4Y8NJb3g1mfxPqGuXbIU
817geQAcZ2Rp8o6e9AHXCinAUUAcWBRLBFcwSQTxrJFIpV0cZDA9QRSipBQB4Frk1x8K/HEp8P3O
+1nQNJaS5IAPO0+uOoPUd++dqHxp8QtV0KTWrCPTxYxkhvLAZgRjgjOQeR6dao/GHRbm38U2mrqx
SG4VUabHyxkHAz+FcRdTNo4uE07xKJftOBcRWgkiVxnp0AP8v5UAe6fDvxzP4otp4dRWJZ7ZGaZ1
4AGcDP4AmvNvC3hu78TeM9TBvJ7Ly7zzUZCAflY/dz3VSMexqbwpfzwaZdw+F/B97frKsge+updo
wVww4AH4bqybI+LINXupXu5dLDOZJriOEsE3KM7SAcfKOuR93kjBNAHo2ia7rvg7xZF4b1q5+32c
igQ3DDaVwnC/QBevrmj4g+KRpV4Eh1hfscsZUx288cjqxGfmiY8qSeT1A6YNecQ2kGt+LLHT5rvU
tVk8wxzPduRzk7sDccDPOc898dvUPF+meF/DGlWelWuk2UN3dttV0ty8hOD7gnn1YgehxQBwzeJt
X8a6jBbW0Grz2ce0+Rb42tIvCnJwFByxx9PSu48R+KfGnh/RBLHo2meHrBQkabpRczAAYyAuF4AH
Xpx1ri9LsPEngLxBY3UcEk9jdYHy/d5+YgE+nJz05J561674p0weOPBZk08oZpIGCFweAwBIA9Th
etAHi+kad478eE6jKP7XiiYERX05EWcZGEBC8/SvaPh/d6ra6DqS61olrpIsGIWO1jCI4C5JAHFc
r8G/FFhYWUvhq+8qwvIJHYxyttJJboM+lelzahZ6/YX2n6bdRzSNEY5ChyE3fKQT64zQB4kusaH8
QfEd/qXjDX1s9Gtn8u0sPPKluOuByfc4q38PNdsdA+K7aFoOpte+H9QGIwSSFbGRjPOeDXOaRpUH
hHWLyDXfAt1q7ByIWwxGMnHHQ8Y7GvQPA40TWPGVm6fDqbRZoA0sV2N6BGA6EDAOQSORQB7UBRSi
igDjFrg/GfirxVYa0mi+HdCNxLJEJBdFS4AJI6cBcEdWNFFAGHb/AAu8SeJ51u/GWvy4zkW0Lbyv
sP4F/AGunsvg/wCEbSRXa1nnK9ppiQevpj1/SiigDuLKyttPtkt7SFIYkGAqDAqdrWCWNo5IY3Ru
qsoINFFAFGy8MaPYXwvLWxijnChQwGSMDA5PPTA69h6Cqmp+BtH1vWU1PUlmuJY8GNGlPlxkdCF6
Z69c0UUAdIltEIo4ygcIu1d4ycYxU8aKgwqhR6AYoooA5nxJ8OvDviqUT31psuQR+/gOxzyOp78D
H41oeFfB+leEbWSDTEcebt813OS5GcH/AMeP4YoooA6IAelSqKKKAJFooooA/9k="
          class="tu"
        />
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
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const LoginForm = ref()
const store = useStore()
const router = useRouter()
const loginForm = reactive({
  username: 'test',
  password: '1234567'
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
  ],
  code: [
    {
      required: true,
      trigger: 'blur',
      message: '验证码必填项'
    }
  ]
})
const hanldeSubmit = async () => {
  if (!loginForm.value) return
  await loginForm.value.validate(async (valid) => {
    if (valid) {
      const response = await store.dispatch('/login', loginForm)
      await store.dispatch('/sys/userInfo')
      console.log(response)
      if (response.token) router.push('/')
    }
  })
}
</script>
<style lang="scss">
.login {
  width: 300px;
  position: relative;
  top: 200px;
  left: 300px;
  .tu {
    width: 90px;
    height: 30px;
    position: absolute;
    right: 0%;
  }
}
</style>
