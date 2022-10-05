// get current time
let currentDate = moment().format('dddd, MMMM Do');
let currentTime = moment().format('HHmm');
$('#currentDay').text(currentDate);

// get document objects using jquery
let hourRows = $('.row');
let hourContainer = $('.hour');
let saveButton = $('.saveBtn');


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

// function to save event container contents when save button is clicked
function saveEvent() {
  // let eventContainer = $('textarea').val();
  // localStorage.setItem(hourContainer[i].textContent, eventContainer) 
  // how do i define 'i' based on where click took place
}



// event listener for when div with class of saveBtn is clicked
saveButton.addEventListener('click', function(e) {
  e.preventDefault();

  let saveText = $('saveBtn').click(function(e) {
    let text = $(e.target).text();
  })

  let keyName = $('')

  localStorage.setItem()
})