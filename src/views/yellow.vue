<template>
  <div class="home">
    <SecondCounter :seconds="time" @time-is-over="nextStep"/>
    <Light :lights="lights"/>
  </div>
</template>

<script>
import Light from '@/components/light'
import SecondCounter from '@/components/SecondCounter'

export default {
  components: {
    Light,
    SecondCounter
  },
  name: 'yellow',
  data () {
    return {
      lights: {
        isRed: false,
        isYellow: true,
        isGreen: false
      },
      time: 3
    }
  },
  methods: {
    nextStep () {
      const oldURL = sessionStorage.getItem('url')
      if (oldURL === 'green') {
        this.$router.push('red')
      } else {
        this.$router.push('green')
      };
    }
  },
  beforeMount () {
    const lastTime = sessionStorage.getItem('time')
    if (lastTime) {
      this.time = +lastTime
    }
  }
}
</script>

