<template>
  <v-ons-page class="friendsList">
    <div class="max_box flex_center">
      <v-ons-search-input class="flex_center" placeholder="Search someone" v-model="query"></v-ons-search-input>
    </div>
    <div class="list_box">
      <v-ons-list-item
        tappable
        modifier="longdivider"
        v-for="(item,index) in list"
        :key="index"
        @click="toChat(item)"
      >
        <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <div class="center">
          <span class="list-item__title">{{item.name}}</span>
          <span class="list-item__subtitle color_hui">{{item.news}}</span>
        </div>
      </v-ons-list-item>
    </div>
  </v-ons-page>
</template>
<script>
export default {
  name: "chat",
  data() {
    return {
      msg: "这是chat",
      query: "",
      token: localStorage.getItem("token"),
      list: [
        // { name: "danel", messageNo: 0, news: "你好！" }
      ]
    };
  },
  created() {},
  mounted() {
    if (!this.$ws) {
      this.$websocket(this.token).then(() => {
        this.getFriendList();
        this.$ws.onmessage = this.getMsg;
      });
    } else {
      this.getFriendList();
      this.$ws.onmessage = this.getMsg;
    }
  },
  methods: {
    getFriendList() {
      let query = {};
      this.$ws.send(
        JSON.stringify({ url: "friendsList", query: query, token: this.token })
      );
    },
    getMsg(event) {
      let response = JSON.parse(event.data) || {};
      console.log(response);
      if (response.code === 0) {
        this.list = response.data || [];
        console.log(this.list);
      }
    },
    toChat(userInfo) {
      this.$router.push({ path: "/chat", query: { title: userInfo.name } });
    }
  }
};
</script>
<style lang="stylus">
.friendsList {
  .max_box {
    width: 100%;
    height: 5vmax;
    box-sizing: border-box;
    background-color: #ffffff;

    ons-search-input {
      width: 98vw;
      height: 90%;

      .search-input {
        background-color: aliceblue;
      }
    }
  }

  .list_box {
    margin-top: 1vmax;
    background-color: #ffffff;

    .list-item {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
