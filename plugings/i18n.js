export default defineNuxtPlugin(() => {
  return {
    provide: {
      t: useI18n().t
    }
  }
})