<template>
  <div class="home">
    <SecondCounter :seconds="time" @time-is-over="nextStep" @left-three-sec="$timer.start('blink')"/>
    <Light :lights="lights"/>
  </div>
</template>

<script>
import Light from '@/components/light'
import SecondCounter from '@/components/SecondCounter'

export default {
  name: 'green',
  components: {
    Light,
    SecondCounter
  },
  data () {
    return {
      lights: {
        isRed: false,
        isYellow: false,
        isGreen: true
      },
      time: 15
    }
  },
  timers: {
    blink: { time: 500, repeat: true }
  },
  methods: {
    blink () {
      this.lights.isGreen = !this.lights.isGreen
    },
    nextStep () {
      sessionStorage.setItem('url', 'green')
      this.$router.push('yellow')
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
