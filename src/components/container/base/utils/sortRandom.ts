/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable no-extend-native */
declare global {
  interface Array<T> {
    sortRandom(): T[]
  }
}
export const sortRandom = (Array.prototype.sortRandom = function () {
  return this.sort(() => Math.random() - 0.5)
})
