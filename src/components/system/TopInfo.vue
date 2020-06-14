<template>
  <div class="top-info q-px-md q-py-xs flex justify-between">
    <span>
      {{ mobileOperator }}
    </span>
    <div>
      <q-icon name="volume_off" />
      <q-icon name="signal_wifi_4_bar" />
      <q-icon name="signal_cellular_4_bar" />
      100%
      <q-icon name="battery_full" />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup () {
    return {
      mobileOperator: ref('VIVO, Claro BR')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
