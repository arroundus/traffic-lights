<template>
  <div>
    <h2>Осталось секунд: {{ leftTime }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SecondCounter',
  props: {
    seconds: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      leftTime: this.seconds
    }
  },
  timers: {
    counterSec: { time: 1000, autostart: true, repeat: true }
  },
  methods: {
    counterSec () {
      sessionStorage.setItem('time', this.leftTime)
      this.leftTime = this.leftTime - 1
      if (this.leftTime === 0) {
        this.$emit('time-is-over')
        this.$timer.stop('counterSec')
      } else if (this.leftTime === 3) {
        this.$emit('left-three-sec')
      }
    }
  }
}
</script>

<style scoped>

h2 {
  color: rgb(174, 194, 211);
}

</style>
