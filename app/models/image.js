export default class Image {
  constructor(data) {
    this._id = data._id
    this.large_url = data.large_url
  }

  get Template() {
    return `
    <body id="bg-image"	style="background-image: url('${this.large_url}')">
    `
  }

}