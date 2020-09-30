const someData = ['foo', 'bar', 'baz', 'fizz'] // this is raw data from a data server
// someData.forEach(str => {
//   const div = divMaker(str, 'grey')
//   document.body.prepend(div)
// })

function divMaker(text, color) { // COMPONENT takes raw data, returns DOM element(s)
  const theNewDiv = document.createElement('div') // instantiation
  theNewDiv.classList.add('nice-div') // adding attributes
  theNewDiv.textContent = text // adding text
  theNewDiv.style.color = color // adding inline styles
  return theNewDiv // RETURN
}
// function divMaker(data) { // REACT COMPONENT
//   const { text, color } = data
//   return <div style={{ color: color }}>{text}</div>
// }

const div = divMaker('lambda', 'red')
const div2 = divMaker('web 36', 'green')
// document.body.prepend(div)
// document.body.prepend(div2)

// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]
function imgCreator(imgURL) {
  let img = document.createElement('img')
  img.src = imgURL
  return img
}
// function Image(data) { REACT COMPONENT
//   return <img src={data.src}/>
// }
let images = imageData.map((image) => {
  let img = imgCreator(image.imageURL)
  return img
})
let secondary = document.querySelector('.secondary')
// images.forEach((img) => {
//   secondary.prepend(img)
// })

// TASK 1- Import the data we need to "hydrate" our component
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
import panelData from './data/panelData'
import constants from './data/constants'

// const open = constants.open
// const close = constants.close
const { open, close } = constants // destructuring

// TASK 2- Verify our imports using log statements
console.log(panelData) // log the panelData
console.log(open) // log the open arrow
console.log(close) // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector('.accordion')
console.log(accordion)


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel(title, content/* what data does the panel need? */) {


  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement('div')
  const panelBar = document.createElement('div')
  const panelContent = document.createElement('div')
  const panelTitle = document.createElement('h3')
  const panelButtons = document.createElement('div')
  const openButton = document.createElement('button')
  const closeButton = document.createElement('button')


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */
  panel.appendChild(panelBar)
  panel.appendChild(panelContent)
  panelBar.appendChild(panelTitle)
  panelBar.appendChild(panelButtons)
  panelButtons.appendChild(openButton)
  panelButtons.appendChild(closeButton)




  // TASK 7- Add proper class names to our elements (See index.html for reference)


  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)


  // don't forget to return the panel!
  return panel
}
console.log(makePanel('the title', 'the content'))

// TASK 10- Loop through the panelData in the data folder
//  creating panels for each content and title,
//  and append them to the DOM


// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
