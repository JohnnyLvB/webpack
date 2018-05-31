function component() {
  let ele = document.createElement('pre')

  ele.innerHTML = ['hello webpack', '5 square is '].join('\n\n')

  return ele
}

document.body.appendChild(component())