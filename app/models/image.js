export default class Image {
  constructor(data) {
    this._id = data._id
    this.url = data.url
  }

  get Template() {
    return `
    <body id="bg-image"	style="background-image: url('${this.url}')">
    `
  }

}