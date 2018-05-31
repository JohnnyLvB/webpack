import _ from "lodash"
import printMe from "./print"
import "./style.css"

function component() {
  let ele = document.createElement('div')
  let btn = document.createElement('button')

  ele.innerHTML = _.join(['hello','webpack'],' ')
  btn.innerHTML = "Click me and check the console"

  btn.onclick = printMe

  ele.appendChild(btn)

  return ele
}

// document.body.appendChild(component())

let ele = component()
document.body.appendChild(ele)

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printme module!')
    // printMe()
    document.body.removeChild(ele)
    ele = component()
    document.body.appendChild(ele)
  })
}