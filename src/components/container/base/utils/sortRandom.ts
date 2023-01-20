declare global {
  interface Array<T> {
    sortRandom(): Array<T>
  }
}
export const sortRandom = (Array.prototype.sortRandom = function () {
  return this.sort(() => Math.random() - 0.5)
})
