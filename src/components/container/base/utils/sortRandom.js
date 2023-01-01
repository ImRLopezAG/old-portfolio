export const sortRandom = (Array.prototype.sortRandom = function () {
  return this.sort(() => Math.random() - Math.random())
})
