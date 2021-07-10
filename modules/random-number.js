function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function alertRandomInt(min, max) {
  alert(
    `Random number between ${min} and ${max} (inclusive): ${random(min, max)}`
  )
}

export { alertRandomInt }
