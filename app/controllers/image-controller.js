import ImageService from "../services/image-service.js";

const _imageService = new ImageService()

function _drawImage() {
  debugger
  let image = _imageService.Image
  document.getElementById('bg-image').style.backgroundImage = image.Template
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _imageService.addSubscriber('image', _drawImage)
    _imageService.getImage()
  }

}

