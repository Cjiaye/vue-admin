export const validatePassword = (rule, value, callback) => {
  if (value.length < 7) {
    callback(new Error('密码不能少于7位'))
  } else {
    callback()
  }
}
