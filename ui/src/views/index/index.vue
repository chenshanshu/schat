<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
      </div>
      <div class="center">{{ title }}</div>
      <div class="right" @click="actionSheetVisible = !actionSheetVisible">
        <v-ons-toolbar-button icon="ion-navicon, material: md-menu"></v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex">
    </v-ons-tabbar>
    <v-ons-action-sheet
      :visible.sync="actionSheetVisible"
      cancelable
    >
      <v-ons-action-sheet-button icon="md-square-o">添加好友</v-ons-action-sheet-button>
      <v-ons-action-sheet-button icon="md-square-o" modifier="destructive" @click="signOut">退出登录</v-ons-action-sheet-button>
    </v-ons-action-sheet>
  </v-ons-page>
</template>
<script>
import home from './home.vue';
import friendsList from './friendsList.vue';
import setting from './setting.vue';

import chat from '../chat/index.vue';
export default {
  data () {
    return {
      pageStack:[],
      activeIndex: 0,
      actionSheetVisible:false,
      tabs: [
        {
          icon: this.md() ? null : 'fa-comments-o',
          label: 'AdressList',
          page: friendsList,
          badge: 2,
          key: "friendsList"
        },
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: home,
          props: {
            myProp: 'This is a page prop!'
          },
          key: "home"
        },
        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          page: setting,
          key: "setting"
        }
      ]
    }
  },
  created() {
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    },
    signOut(){
      localStorage.removeItem("token");
      this.$router.push("/login/login")
    }
  },
  computed: {
    title() {
      return 'Schat'
      return this.tabs[this.activeIndex].label;
    }
  }
}
</script>
<style>

</style>
