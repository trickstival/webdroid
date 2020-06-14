<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <q-card dark>
          <div class="viewport-container flex justify-center items-center">
            <div class="viewport rounded-borders">
              <router-view />
            </div>
          </div>
        </q-card>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'Viewport',

  components: {

  },

  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.viewport-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.viewport {
  width: 500px;
  height: 790px;
  border: 1px solid #000;
  overflow: hidden;
}
</style>
