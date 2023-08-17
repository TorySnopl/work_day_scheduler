
$(function () {


// dayJs used to set current date at top
let dayJsObject = dayjs();
let dateEl = document.querySelector('#currentDay');
dateEl.textContent = dayJsObject.format("MM/D/YYYY hh:mm A");

let saveBtn = document.querySelectorAll('.saveBtn');
let inputField = '';







// function to update classes on the calendar every minute
  function updateBlockClasses() {
    
    var currentHour = dayjs().hour();

    localStorage.getItem('input');

    
    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id'));
     
      $(this).removeClass('past present future');

      if (blockHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
      } else if (blockHour === currentHour) {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
      } else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
      }
    });
  }

  updateBlockClasses();
  setInterval(updateBlockClasses, 60000);
  

  // function to iterate over button node list and save input

 

  

  saveBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
      
      inputField = btn.previousElementSibling;

      let task = inputField.value;
      
      alert('Task Saved: ' + task);

      localStorage.setItem('input', task);
      
      
    
    });
  });




  
});
 



    
