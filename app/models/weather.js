export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
  }

  get Template() {
    return `
      <div class="card" style = "width: 18rem;" >
        <div class="card-body text-center bg-dark text-white">
          <h5 class="card-title">Weather for today</h5>
          <p class="card-text">Current City: ${this.city}<br> Current Temp C : ${Math.floor(this.kelvin - 273.15)}°<br> Current Temp F : ${Math.floor((this.kelvin - 273.15) * 9 / 5) + 32}°</p>
        </div>
		  </div>
    `
  }
}