export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }

  get Template() {
    return `
      <div class="card" style = "width: 18rem;" >
        <div class="card-body bg-dark text-white">
          <h5 class="card-title">Quote of the day</h5>
          <p class="card-text">${this.quote}<br> ~${this.author}<br>
        </div>
		  </div>
    `
  }
}