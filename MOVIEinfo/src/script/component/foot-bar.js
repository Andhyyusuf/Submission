class FootBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <p>Belajar Fundamental Front-End Web Development &#169; 2020, Dicoding Academy</p>
    `
  }
}

customElements.define('foot-bar', FootBar)