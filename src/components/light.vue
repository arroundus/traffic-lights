<template>
  <div class="traffic-lights">
    <div class="light red"><div v-if="!lights.isRed" class="deactive"></div></div>
    <div class="light yellow"><div v-if="!lights.isYellow" class="deactive"></div></div>
    <div class="light green"><div v-if="!lights.isGreen" class="deactive"></div></div>
  </div>
</template>

<script>
export default {
  name: 'light',
  props: {
    lights: Object
  },
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped>
.traffic-lights {
  width: 280px;
  background-color: #000000;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: auto;
}

.light {
  position: relative;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin: 10px auto;
}

.deactive {
  background-color: black;
  opacity: 50%;
  position: absolute;
  height: 200px;
  width: 200px;
  z-index: 10;
}

.red {
  background-color: #ff0000;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: #1bff00;
}

</style>
