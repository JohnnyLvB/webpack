import _ from "lodash"

 function component() {
  var element = document.createElement('div')
  var button = document.createElement('button')
  var br = document.createElement('br')

  button.innerHTML = 'click me and look at the console'
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.appendChild(button)
  element.appendChild(br)

  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default

    print()
  })

  return element
}

document.body.appendChild(component())