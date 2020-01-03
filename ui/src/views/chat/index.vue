<template>
  <v-ons-page class="chat">
    <v-ons-toolbar>
      <div class="left">
        <div class="return_btn" @click="goBack">
          <v-ons-icon icon="fa-angle-left"></v-ons-icon>
        </div>
      </div>
      <div class="center">{{ title }}</div>
      <div class="right"></div>
    </v-ons-toolbar>
    <div class="content_box">
      <div v-for="(item,key,index) in talkList" :key="index">
        <div :class="item.type=='receive'? 'pull-left' : 'pull-right'" class="header_box">
          <v-ons-icon icon="fa-keyboard-o"></v-ons-icon>
        </div>
        <v-ons-card
          :class="item.type=='receive'? 'pull-left' : 'pull-right bgcolor_aqua'"
          class="max_66"
        >
        
          <div>{{item.msg}}</div>
        </v-ons-card>
        <div class="clearfix"></div>
      </div>
    </div>
    <v-ons-bottom-toolbar class="flex_toolbar">
      <v-ons-icon icon="fa-microphone"></v-ons-icon>
      <!-- <v-ons-icon icon="fa-keyboard-o"></v-ons-icon> -->
      <textarea
        class="textarea"
        rows="1"
        placeholder="请输入"
        v-model="msg"
        @keyup.ctrl.enter="sendMsg"
      ></textarea>
      <v-ons-icon icon="fa-smile-o"></v-ons-icon>
      <v-ons-icon icon="fa-plus"></v-ons-icon>
    </v-ons-bottom-toolbar>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.query.title,
      msg: "",
      talkList: []
    };
  },
  created() {
  },
  mounted() {
    if (!this.$ws) {
      let token = localStorage.getItem("token");
      this.$websocket(token).then(() => {
        this.$ws.onmessage = this.getMsg;
      });
    }else{
      this.$ws.onmessage = this.getMsg;
    }
  },
  destroyed() {
    // this.$ws.close()
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/", query: { activeIndex: 1 } });
    },
    sendMsg() {
      this.$ws.send(JSON.stringify({msg:this.msg,token:localStorage.getItem("token")}));
      this.msg = "";
    },
    getMsg(event) {
      this.talkList.push({ msg: event.data });
    }
  },
  watch: {}
};
</script>
<style lang="stylus">
.chat {
  .card {
    margin-left: 0;
    margin-right: 0;
    padding: 8px;
  }

  .header_box {
    padding: 10px;
    width: 2vmax;
    height: 2vmax;
    border-radius: 1vmax;
    border: 1px solid gray;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
  }

  .flex_toolbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;

    .textarea {
      // flex: 1;
      width: 70%;
    }

    .ons-icon {
      width: 26px;
      height: 26px;
      text-align: center;
      line-height: 26px;
      border-radius: 13px;
      background-color: lightgray;
      color: gray;
    }
  }
}
</style>