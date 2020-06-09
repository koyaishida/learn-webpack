import _ from "lodash"
import "./style.css"
import "./style.scss"
import logo from "./logo.png"
// import {Nijou,NAME} from "./utilitys"
// import * as  utilitys from "./utilitys"
//名前の競合を避ける
//import {NAME as NAME_OF_HAM } from "./utilitys"

//defaultの場合はLionで無くても名前はなんでもOK
import Lion from "./utilitys"

// console.log(Nijou(10))
// console.log(NAME)
// console.log(utilitys.Nijou(10))
// console.log(utilitys.NAME)
//console.log(NAME_OF_HAM)

// console.log(Lion.say())
//console.log(style.toString())

function component (){
  const element = document.createElement("div");
  const array = ["hello", "webpack","!!"]
  element.innerHTML = _.join(array,"")
  return element
}

document.body.appendChild(component())
document.body.classList.add("haikei")

const image = new Image()
image.src = logo
document.body.appendChild(image)
