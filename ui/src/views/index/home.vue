<template>
  <v-ons-page class="home">
    {{msg}}
  </v-ons-page>
</template>

<script>
export default {
  props:['myProp'],
  data () {
    return {
      msg: '这是home'
    }
  },
  created() {
  },
  methods: {
  }
}
</script>