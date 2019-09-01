import ImageService from "../services/image-service.js";

const _imageService = new ImageService()

function _drawImage() {
  debugger
  //let template = _imageService.Image.Template
  let template = _imageService.Image.url
  document.body.style.backgroundImage = template
  //document.getElementById('bg-image').style.backgroundImage = template
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _imageService.addSubscriber('image', _drawImage)
    _imageService.getImage()
  }

}

