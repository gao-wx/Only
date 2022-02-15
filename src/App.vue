<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/starrySky">星空</router-link>
    <router-link to="/starrySky2">星空2</router-link>
    <router-link to="/CreateDevice.vue">创建设备</router-link>
    <button @click="goToCreateDevice">创建设备</button>
    <router-view/> -->
    <!-- <line-chart :value="this.data" /> -->
    <div class="test" data-aos="fade-up" data-aos-anchor-placement="top-center">
      {{firstName}}
    </div>

  </div>
</template>

<script>
import LineChart from '@/components/Echarts/LineChart'
export default {
  components: { 'line-chart':LineChart },
  name: 'App',
  created () {
    // AOS.init();
  },
  mounted() {
    // AOS.init();
  },
  data () {
    return {
      data: [
        ["2021-10-13 12:51:37", 11],
        ["2021-10-13 12:52:37", 13],
        ["2021-10-13 12:54:37", 1],
        ["2021-10-13 12:55:37", 4],
        ["2021-10-13 12:56:37", 22],
        ["2021-10-13 12:57:37", 10],
        ["2021-10-13 12:58:37", 17],
        ["2021-10-13 12:59:37", 17],
      ],
      firstName: '炸',
      lastName: '耦合',
      // fullName: firstName + '-' + lastName
    }
  },
  mounted(){
      this.data = [
        ["2021-10-13 12:51:37", 11],
        ["2021-10-13 12:52:37", 13],
        ["2021-10-13 12:54:37", 1],
        ["2021-10-13 12:55:37", 4],
        ["2021-10-13 12:56:37", 22],
        ["2021-10-13 12:57:37", 10],
        ["2021-10-13 12:58:37", 17],
        ["2021-10-13 12:59:37", 17],
      ]
  },
  computed: {
    firstName() {
      // return setTimeout(() => {
      //   console.log('会不会显示')
      //   this.firstName = '999'
      // }, 1000);
      console.log('会不会显示')
    }
  },
  methods: {
    goToCreateDevice () {
      this.$router.push('CreateDevice').catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
};
.test{
  color: #000;
  width: 20px;
  height: 20px;
}
</style>
