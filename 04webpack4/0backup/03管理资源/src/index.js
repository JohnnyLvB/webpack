import _ from "lodash"
import "./css/style.css"
import logo from "./images/Diorlogo.jpg"
import data from "./data.xml"

function component() {
  var ele = document.createElement('div')
  ele.innerHTML = _.join(['hello','webpack'],' ')
  ele.style.color = 'yellow'

  var myLogo = new Image()
  myLogo.src = logo
  ele.appendChild(myLogo)

  console.log(data)

  return ele
}

document.body.appendChild(component())