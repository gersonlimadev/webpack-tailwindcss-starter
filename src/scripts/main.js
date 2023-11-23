import '../styles/style.css'

class App {
  constructor() {
    this.attachEvents()
  }

  attachEvents() {
    for (const anchor of document.querySelectorAll('a[href^="#"]')) {
      anchor.addEventListener('click', function (event) {
        event.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        })
      })
    }
  }
}

;(function () {
  document.addEventListener('DOMContentLoaded', () => {
    window.App = new App()
  })
})()
