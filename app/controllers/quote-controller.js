import QuoteService from "../services/quote-service.js";

let _quoteService = new QuoteService()

function _drawQuote() {
  let quote = _quoteService.Quote
  document.getElementById("quote").innerHTML = quote.Template
}

//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    _quoteService.addSubscriber('quote', _drawQuote)
    _quoteService.getQuote()
  }
}
