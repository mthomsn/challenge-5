// get current time
let currentDate = moment().format('dddd, MMMM Do');
let currentTime = moment().format('HHmm');
$('#currentDay').text(currentDate);

// get document objects using jquery
let hourRows = $('.row');
let hourContainer = $('.hour');
let saveButtons = $('.saveBtn');
let eventText = $('textarea');
// let eventID = eventText.getAttribute('id');


// --- styling containers --- \\
for(let i = 0; i < hourContainer.length; i++) {

  if(currentTime == hourContainer[i].textContent) {
    // hourContainer.removeAttribute() REMOVE OTHER ATTRIBUTES IF NEEDED?
    $('textarea').addClass('present');
  } else if(currentTime > hourContainer[i].textContent) {
    $('textarea').addClass('past');
  } else {
    $('textarea').addClass('future');
  }
} 
// event listener for when div with class of saveBtn is clicked
// for (var btn of saveButtons) {
//   btn.addEventListener('click', function(e) {
    // THIS DID NOT WORK
    // e.preventDefault();
    // GET ELEMENT ID OF BTN
    // let item = $('textarea').getAttribute('id');
    // console.log(item);

    // THIS IS WHAT WORKED
    // let saveText = $('#0900').val();
    // let keyName = $('#0900').attr('id');
    // localStorage.setItem(keyName, saveText)
    // console.log(keyName + ' and ' + saveText);
//   })
// }

// SECOND TYPE OF EVENT LISTENER/LOCAL STORAGE FUNC - ALSO POPULATES TEXT FROM LOCAL STORAGE
for (let i = 0; i < saveButtons.length; i++) {
  let eventID = eventText[i].getAttribute('id'); // getting the id of the container
  console.log(eventID);

  let textCheck = localStorage.getItem(eventID); // storing local storage value into variable

  if(textCheck) { // if there is an item in local storage that is the same as time id, populate text box
    eventText[i].textContent = textCheck;
  }

  saveButtons[i].addEventListener('click', function() {
    
    let text = $('#' + eventID).val(); // getting the text that the user input
    console.log(text);
    localStorage.setItem(eventID, text);
  })
}
