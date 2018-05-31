// way1
function getComponent1() {

  return import (/* webpackChunkName: "lodash" */ 'lodash').then( _ => {
    var ele = document.createElement('pre')
    
    ele.innerHTML = ['hello webpack', '5 square is '].join('\n\n')

    return ele
  }).catch(error => 'An error occurred while loading the component')
}

// way2
async function getComponent() {
  var element = document.createElement('div')
  const $ = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = $.join(['Hello', 'webpack'], ' ');
  return element
}

getComponent().then(component => {
  document.body.appendChild(component)
})