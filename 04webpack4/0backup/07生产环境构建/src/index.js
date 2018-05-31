import {
  square
} from "./math"

if (process.env.NODE_ENV !== 'production') {
  console.log('In development mode.')
} else {
  console.log('In production mode.')
}

function component() {
  let ele = document.createElement('pre')

  ele.innerHTML = ['hello webpack', '5 square is ' + square(5)].join('\n\n')

  return ele
}

document.body.appendChild(component())