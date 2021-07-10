import { alertRandomInt } from './modules/random-number.js'
import { listen } from './modules/button.js'

const btn = document.getElementById('btn')
listen(btn, () => alertRandomInt(1, 5))
