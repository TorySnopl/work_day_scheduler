
$(function () {


// dayJs used to set current date at top
let dayJsObject = dayjs();
let dateEl = document.querySelector('#currentDay');
dateEl.textContent = dayJsObject.format("MM/D/YYYY hh:mm A");

//variables
let saveBtn = document.querySelectorAll('.saveBtn');
let taskInput = JSON.parse(localStorage.getItem('tasks')) || {};
const toDo = localStorage.getItem('tasks');








// function to update classes on the calendar every minute
  function updateBlockClasses() {
    
    let currentHour = dayjs().hour();

    

    
    $('.time-block').each(function() {
      let blockHour = parseInt($(this).attr('id').replace('div', ''));
      
     
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
  

 
//If statement and displayToDo function show tasks in local storage
  if (toDo){
    taskInput = JSON.parse(toDo);
    displayToDo();
  };
  
  
    function displayToDo(){
      Object.keys(taskInput).forEach(function(key){
          let items = taskInput[key];
          let itemSpace = document.querySelector(`#${key} .description`);
          console.log(itemSpace)
          console.log(items)
          if(itemSpace){
            itemSpace.value = items;
          }
      });
    
    }

  

  
  // Event listener for save button to confirm task and save to local storage
  saveBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
      
      inputField = btn.previousElementSibling;

      let task = inputField.value.trim();
      
      if (task !== '') {
        let divId = inputField.closest('.time-block').id;
        taskInput[divId] = task;
        localStorage.setItem('tasks', JSON.stringify(taskInput) );
        alert ('Task Saved:' + task);
      }
      
      
    
    });
  });




  


  
});
 



    
