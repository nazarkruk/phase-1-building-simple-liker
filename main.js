// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal')
modal.className = 'hidden'

const allhearts = document.querySelectorAll('.like-glyph')
const hearts = [...allhearts]


for (const heart of hearts) {
  
  heart.addEventListener("click", (el)=>{
    mimicServerCall()
      .then(heartChange(heart))
      .catch(err);
  });

}


function heartChange(heart){
  //const heart = document.querySelector('.like-glyph')
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      return heart.className = 'activated-heart'
    } else if(heart.innerText === FULL_HEART ) {
      heart.innerText = EMPTY_HEART
      return heart.classList.remove('activated-heart')
    }
  }
  
 

function err (){
  modal.classList.remove('hidden')
  setTimeout(()=>{
    modal.className = 'hidden'
  }, 3000)
}







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
