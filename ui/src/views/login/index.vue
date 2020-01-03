<template>
  <v-ons-page>
    <div class="login">
      <div class="text_center login_box">
        <p>{{title}}</p>
        <p v-for="(value,key,index) in form" :key="index">
          <v-ons-input
            v-if="key=='username'"
            modifier="underbar"
            placeholder="请输入用户名"
            float
            v-model="form[key]"
          ></v-ons-input>
          <v-ons-input
            v-if="key=='password'"
            type="password"
            modifier="underbar"
            placeholder="请输入密码"
            float
            v-model="form[key]"
          ></v-ons-input>
          <v-ons-input
            v-if="key=='rePassworld'"
            type="password"
            modifier="underbar"
            placeholder="请再次输入密码"
            float
            v-model="form[key]"
            @keyup.enter="submit"
          ></v-ons-input>
          <v-ons-input
            v-if="key=='identifyCode'"
            type="text"
            modifier="underbar"
            placeholder="请输入验证码"
            float
            v-model="form[key]"
          ></v-ons-input>
        </p>
        <p class="mt_30">
          <v-ons-button modifier="large outline" class="mb_8" @click="submit">{{btn1.text}}</v-ons-button>
          <router-link class="pull-left" :to="'/login'+btn2.url">{{btn2.text}}</router-link>
          <router-link v-if="btn3" class="pull-right" :to="'/login'+btn3.url">{{btn3.text}}</router-link>
        </p>
      </div>
    </div>
  </v-ons-page>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      form: {},
      btn1: {},
      btn2: {},
      btn3: {},
      list: {
        login: {
          title: "登录",
          form: {
            username: "",
            password: ""
          },
          btn1: { text: "登录", url: "" },
          btn2: { text: "忘记密码？", url: "/resetPasswd" },
          btn3: { text: "新用户注册", url: "/register" }
        },
        register: {
          title: "注册",
          form: {
            username: "",
            password: "",
            identifyCode: ""
          },
          btn1: { text: "注册", url: "" },
          btn2: { text: "去登录", url: "/login" }
        },
        resetPasswd: {
          title: "忘记密码",
          form: {
            username: "",
            password: "",
            rePassworld: "",
            identifyCode: ""
          },
          btn1: { text: "提交", url: "" },
          btn2: { text: "去登录", url: "/login" },
          btn3: { text: "新用户注册", url: "/register" }
        }
      }
    };
  },
  created() {
    this.getList(this.$route.params.type);
  },
  mounted() {},
  methods: {
    getList(type) {
      this.form = this.list[type];
      this.btn1 = this.form.btn1;
      this.btn2 = this.form.btn2;
      this.btn3 = this.form.btn3;
      this.title = this.form.title;
      this.form = this.form["form"];
    },
    submit() {
      let reg = /^\s*$/;
      let type = this.$route.params.type;
      let url = `/${type}`;
      let flag = Object.keys(this.form).some(item => {
        if (reg.test(this.form[item])) {
          return this.$ons.notification.toast("输入项不得为空！", {
            timeout: 600,
            animation: "fall"
          });
        }
      });
      if (flag) return;
      this.$ajax({
        type: "post",
        url: url,
        data: this.form
      })
        .then(res => {
          let e = JSON.parse(res);
          if (e.code === 0) {
            switch (type) {
              case "login":
                localStorage.setItem("token", e.token);
                this.$websocket(e.token).then(() => {});
                this.$router.push("/");
                this.$ons.notification.toast("登录成功！", {
                  timeout: 600,
                  animation: "fall"
                });
                break;
              case "register":
                this.$router.push("/login/login");
                this.$ons.notification.toast("请登录！", {
                  timeout: 600,
                  animation: "fall"
                });
                break;
              default:
                break;
            }
          } else {
            this.$ons.notification.toast(e.title, {
              timeout: 600,
              animation: "fall"
            });
          }
        })
        .catch(err => {
          this.$ons.notification.toast(err.message, {
            timeout: 600,
            animation: "fall"
          });
        });
    }
  },
  watch: {
    $route(to, from) {
      this.getList(to.params.type);
    }
  }
};
</script>
<style lang="stylus">
@import url('../../common/css/common.styl');

.login {
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    // filter: blur(0.2px);
    opacity: 0.5;
    background: url('../../common/img/loginbg.jpg') no-repeat;
    background-size: cover;
  }

  .login_box {
    position: fixed;
    width: 86%;
    left: 7%;
    top: 40vmax;
    transform: translate(0, -50%);

    &>p>ons-input {
      width: 100%;
      border-bottom: 1px solid gray;
    }

    &>p>ons-button {
      background-color: rgba(#0076ff, 0.4);
    }

    .mt_30 {
      margin-top: 30px;
    }

    .mb_8 {
      margin-bottom: 8px;

      &:hover {
      }
    }
  }
}
</style>
