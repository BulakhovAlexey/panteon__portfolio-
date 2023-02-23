// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

// TableHover

// add / remove class
function setClass(tableElement, dateElement, rowElements, toggle = true) {
  if (toggle) {
    rowElements[1].classList.add("_active")
  } else {
    rowElements[1].classList.remove("_active")
  }
  let currentIndex = 0
  rowElements.forEach((item, index) => {
    if (dateElement.innerText === item.innerText) {
      currentIndex = index
    }
  })
  let head = tableElement.querySelector(".subscription-table__head")
  let item = head.querySelectorAll("td")
  if (toggle) {
    item[Math.floor(currentIndex / 2)].classList.add("_active")
  } else {
    item[Math.floor(currentIndex / 2)].classList.remove("_active")
  }
}
//event listener
function listenTable(table) {
  table.addEventListener("mouseover", (e) => {
    if (e.target.innerText.length < 2) {
      e.target.style.textDecoration = "none"
      e.target.style.cursor = "default"
      return false
    }
    if (e.target.closest(".subscription-table__head")) {
      return false
    } else {
      let row = e.target.parentNode.childNodes
      setClass(table, e.target, row)
    }
  })
  table.addEventListener("mouseout", (e) => {
    if (e.target.closest(".subscription-table__head")) {
      return false
    } else {
      let row = e.target.parentNode.childNodes
      setClass(table, e.target, row, false)
    }
  })
}
// init
function initTableHover() {
  let tables = document.querySelectorAll("[data-table]")
  if (tables.length) {
    tables.forEach((table) => {
      listenTable(table)
    })
  }
}
initTableHover()
