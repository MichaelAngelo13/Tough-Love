//  window.alert('Are you sure you want to do this?')
//  window.alert('For real?')
//  window.alert('Well I don\'t think you do.')
//  window.alert('You do?')
//  window.alert('How many alerts are too many?')
//  window.alert('Apparently not this many.')
//  window.alert('What about this many?')
//  window.alert('Can our extension just be alerts?')
//  window.alert('Almost so bad it\'s good right?')
//  window.alert('Yea this is pretty genius actually')
//  window.alert('This is pretty much an OSP tbh')
//  window.alert('Seniors take note')
//  window.alert('Sorry to flex so hard rn')
//  window.alert('Okay here\'s the rest of our extension')
//  window.alert('In....')
//  window.alert('100')
//  window.alert('99')
//  window.alert('98')
//  window.alert('Fine fine here\'s youtube')
const body = document.getElementsByTagName('body');


document.querySelector("#search-container").addEventListener("click", function() {
  chrome.downloads.download({
    url: "https://i.pinimg.com/originals/0a/bb/e5/0abbe546e479edc1eb62f5a8ccd66328.jpg",
    filename: "icon.jpg"
  });
});
// function moveAll(el) {
// if (el.hasChildNodes()) {
//     el.childNodes.forEach(moveAll)
// } 
// else if(el.nodeType === Text.TEXT_NODE) {
//     console.log(el);
//     el.innerText = el.textcontent.replace(/[a-z]/gi, 'bruh');
// }
// }
// assign search button and then remove
document.getElementById('search-icon-legacy').remove()


// console.log('nice')
// var myAudio = new Audio(chrome.runtime.getURL("dentist-drill.mp3"));
// myAudio.play();
// //Uncomment this after adding the audio
// document.addEventListener('DOMContentLoaded', () => {
  // playAnnoyingAudio();

  // function playAnnoyingAudio() {
  // const audio = new Audio('dentist-drill.mp3');
  // audio.play()
  // }
// })
// })

// document.getElementById('search-icon-legacy').remove()
// function appendVideo() {
    
// }

// const audio = document.createElement('audio');
// audio.setAttribute('autoplay', true);
// audio.setAttribute('src','break-website/dentist-drill.mp3');
// body[0].append(audio);