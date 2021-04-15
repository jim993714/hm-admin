<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密　码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('form')">登录</el-button>
        <el-button @click="reset('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: ['blur', 'change'],
          },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: ['blur', 'change'],
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change'],
          },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: ['blur', 'change'],
          },
        ],
      },
    };
  },
  created() {
    // console.log(this);
  },
  methods: {
    login(form) {
      // 发送请求前 先校验表单,通过后再发送请求
      this.$refs[form].validate(async (valid) => {
        if (!valid) {
          return;
        }
        // 发送请求
        const res = await this.$axios.post('/login', this.form);
        const { statusCode, data, message } = res.data;
        if (statusCode == 200) {
          // 将token放入本地缓存中
          localStorage.setItem('token', data.token);
          // 跳转到首页,并且有登录提示
          this.$message.success(message);
          this.$router.push('/home');
        }
        // 如果账号或者密码错误提示错误信息
        if (statusCode == 401) {
          this.$message.error(message);
        }
      });
    },
    reset(form) {
      console.log('重置');
      this.$refs[form].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  .el-form {
    margin: 200px auto;
    padding: 0 20px;
    width: 400px;
    border: 1px solid #ccc;
    .el-form-item__content {
      .el-button {
        width: 60px;
        margin-right: 100px;
        text-align: center;
        padding: 12px 10px;
      }
    }
  }
}
</style>
