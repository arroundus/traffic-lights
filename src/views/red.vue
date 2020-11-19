<template>
  <div class="home">
    <SecondCounter :seconds="time" @time-is-over="nextStep" @left-three-sec="$timer.start('blink')"/>
    <Light :lights = "lights"/>
  </div>
</template>

<script>
import Light from '@/components/light'
import SecondCounter from '@/components/SecondCounter'

export default {
  components: {
    SecondCounter,
    Light
  },
  name: 'red',
  data () {
    return {
      lights: {
        isRed: true,
        isYellow: false,
        isGreen: false
      },
      time: 10
    }
  },
  timers: {
    blink: { time: 500, repeat: true }
  },
  methods: {
    blink () {
      this.lights.isRed = !this.lights.isRed
    },
    nextStep () {
      sessionStorage.setItem('url', 'red')
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
