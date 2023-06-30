const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

var btn1 = document.getElementById('btn1')

function activeClick() {
	btn1.style.left = '0'
}

function deactiveClick() {
	btn1.style.left = '110px'
}



function showPreview(event){
if(event.target.files.length > 0){
  var src = URL.createObjectURL(event.target.files[0]);
  var preview = document.getElementById("file-ip-1-preview");
   preview.src = src;
  preview.style.display = "block";
}
}





// Set the date we're counting down to
var countDownDate = new Date("Apr 2, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="clock"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "AVAILABLE";
  }
}, 1000);



// Modal

'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

document.getElementById('addnew')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)


// Pagination


function getCurrentPageGroup(currentPage = 1) {
  
    let exactCurrent = [1, 2].indexOf(currentPage) != -1 ? 1 : currentPage - 2;
  
  
    let currentPageGroup = range(exactCurrent, exactCurrent + 4);
  
    return currentPageGroup;
  }
  
  function _animatePagination(btn, move = "top") {
    btn.classList.add(`pagination--move-${move}`);
    window.setTimeout(() => {
      btn.classList.remove(`pagination--move-${move}`);
    }, 850);
  }
  
  function updatePagination(currentPage = 1, BUTTONS, prevPage = 1) {
    let pageItems = getCurrentPageGroup(currentPage);
  
 
    let targetedPage = currentPage == 1 ? 0 : currentPage == 2 ? 1 : 2;
  
    BUTTONS.map((btn, index) => {
      btn.removeAttribute(`data-level`);
      btn.textContent = pageItems[index];
    });
  

    BUTTONS[targetedPage].dataset.level = "target";
    let _temp_page_content_ = BUTTONS[targetedPage].textContent;
    BUTTONS[targetedPage].innerHTML = `<strong>${_temp_page_content_}</strong>`;
    _animatePagination(
      BUTTONS[targetedPage],
      currentPage == prevPage ? "top" : currentPage < prevPage ? "next" : "prev"
    );
  }
 
  (function () {
    const PAGINATION = document.querySelector(`.pagination`);
    const BUTTON_PREV = document.querySelector(`#pg-button-prev`);
    const BUTTON_NEXT = document.querySelector(`#pg-button-next`);
    const BUTTONS = [
      document.querySelector(`#pg-button-1`),
      document.querySelector(`#pg-button-2`),
      document.querySelector(`#pg-button-3`),
      document.querySelector(`#pg-button-4`),
      document.querySelector(`#pg-button-5`)
    ];
  
    const state = {
      currentPage: 1
    };
  
    function _eventPagination(btn) {
      btn.addEventListener(
        `click`,
        () => {
          let lastPage = state.currentPage;
          state.currentPage = parseInt(btn.textContent);
          updatePagination(state.currentPage, BUTTONS, lastPage);
        },
        false
      );
    }
  
    // default pagination
    updatePagination(state.currentPage, BUTTONS);
  
    // pagination events
    PAGINATION.onmousedown = () => {
      BUTTONS.map((btn) => {
        (btn.classList.contains("pagination--move-next") &&
          btn.classList.remove("pagination--move-next")) ||
          (btn.classList.contains("pagination--move-prev") &&
            btn.classList.remove("pagination--move-prev")) ||
          (btn.classList.contains("pagination--move-top") &&
            btn.classList.remove("pagination--move-top"));
      });
    };
  
    BUTTONS.map((btn) => _eventPagination(btn));
  
    BUTTON_PREV.onclick = () => {
      let lastPage = state.currentPage;
  
    
      state.currentPage = state.currentPage - 1 <= 1 ? 1 : state.currentPage - 1;
      updatePagination(state.currentPage, BUTTONS, lastPage);
    };
    BUTTON_NEXT.onclick = () => {
      let lastPage = state.currentPage;
  

      state.currentPage += 1;
      updatePagination(state.currentPage, BUTTONS, lastPage);
    };
  })();
  

  function range(start = 0, stop, step = 1, func = { onPush: (index) => index }) {
    let from = stop ? start : 0;
    let to = stop ? stop : start;
    let _range = [];
    if (from < to) {
      for (let index = from; index <= to; index += step) {
        func.beforePush && func.beforePush(index);
        _range.push(func.onPush(index));
        func.afterPush && func.afterPush(index);
      }
    } else {
      for (let index = from; index >= to; index -= step) {
        func.beforePush && func.beforePush(index);
        _range.push(func.onPush(index));
        func.afterPush && func.afterPush(index);
      }
    }
    return _range;
  }
  

 