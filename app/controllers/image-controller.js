import ImageService from "../services/image-service.js";

const _imageService = new ImageService()

function _drawImage() {
  let image = _imageService.Image
  let template = ''
  image.forEach(i => template += i.Template)
  document.getElementById('bg-image').innerHTML = template
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _imageService.addSubscriber('image', _drawImage)
    _imageService.getImage()
  }

}

