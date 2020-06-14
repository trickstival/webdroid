import { onMounted, onUnmounted, Ref } from '@vue/composition-api'

export function useElement (element: Ref<HTMLDivElement | null>) {
  return {
    on (event: keyof HTMLElementEventMap, callback: Function) {
      onMounted(() => {
        // @ts-ignore
        element.value.addEventListener(event, callback)
      })
      onUnmounted(() => {
        // @ts-ignore
        element.value.removeEventListener(event, callback)
      })

      return this
    }
  }
}
