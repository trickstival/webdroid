<template>
  <div
    :style="{
      backgroundImage: `url(${wallpaper})`,
    }"
    ref="swiper"
    class="lock-screen full-height flex row"
  >
    <top-info class="top-info absolute-top" />
    <div
      :style="{
        transform: `scale(${1 - swipePosition * .5 / 100})`,
        opacity: 1 - swipePosition * 2 / 100
      }"
      :class="{ 'transformed-back': swipePosition === 0 }"
      class="full-width transformed"
    >
      <clock />
    <div
      class="absolute-bottom text-center q-mb-lg">
      <q-icon name="lock" />
      <div>
        Slide to unlock
        {{swipePosition}}
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ref } from '@vue/composition-api'
import { useElement } from '../utils/dom/events.composition'
import TopInfo from '../components/system/TopInfo.vue'
import Clock from '../components/system/Clock.vue'

function initSwiper () {
  const swiper = ref(null)
  const swipePosition = ref(0)
  const swipeLimit = 100
  const maxY = 100
  const minY = 0
  let lastY = 0

  function onMouseMove (e: MouseEvent) {
    const nextValue = swipePosition.value + lastY - e.pageY
    swipePosition.value = Math.min(maxY, Math.max(minY, nextValue))
    lastY = e.pageY
    console.log('yo', swipePosition.value)
  }

  useElement(swiper)
    .on('mousedown', () => {
      // @ts-ignore
      swiper.value.addEventListener('mousemove', onMouseMove)
    })
    .on('mouseup', () => {
      // @ts-ignore
      swiper.value.removeEventListener('mousemove', onMouseMove)
      if (swipePosition.value > swipeLimit) {
        console.log('unlock')
      }
      swipePosition.value = 0
      lastY = 0
    })

  return {
    swiper,
    swipePosition
  }
}

export default Vue.extend({
  name: 'LockScreen',
  components: {
    TopInfo,
    Clock
  },
  setup () {
    const { swiper, swipePosition } = initSwiper()
    return {
      wallpaper: ref('statics/wallpaper.jpeg'),
      swiper,
      swipePosition
    }
  }
})
</script>
<style lang="scss" scoped>
.lock-screen {
  user-select: none;
  position: relative;
  background-position: center;
}
.transformed {
  margin-top: 50px;
}
.transformed-back {
  transition: transform .2s;
}
</style>
