/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/* global variables [each used or passed in more than one function] */
const ul = document.querySelector('ul');
const listItems = ul.getElementsByTagName('li');
const perPage = 10; // number of items to display per 'page'

/* function to display only the list items starting index [0] to ending index [9] 
[total of 10 list items] */
function showPage(list, page) {
   const startIndex = (page * perPage) - perPage; // 1 * 10 - 10 = 0;
   const endIndex = (page * perPage) - 1;  // 1 * 10 - 1 = 9
   for (let i = 0; i < list.length; i++) {
      if ((i >= startIndex) && (i <= endIndex)) { 
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

/*
function to display navigation links at bottom
how many pages needed? 
divide the total number of list items by the max number of items per page
total number of list items = listItems.length / 10 
*/
const appendPageLinks = (list) => {
   const pageDiv = document.querySelector('.page');
   const totalNumberOfItemsPerPage = Math.ceil(listItems.length / (perPage));
   let navDiv = document.createElement('div');
   navDiv.className = 'pagination';
   let navUl = document.createElement('ul');
   navDiv.appendChild(navUl);
   pageDiv.appendChild(navDiv);
   
   for (let i = 1; i <= totalNumberOfItemsPerPage; i++) {
      let navLi = document.createElement('li');
      let navLink = document.createElement('a');
      navLink.textContent = i;
      navLi.appendChild(navLink);
      navUl.appendChild(navLi);

      navLink.addEventListener('click', (event) => {
         showPage(listItems, i);
         /*https://www.w3schools.com/howto/howto_js_active_element.asp*/
         let activeNow = document.getElementsByClassName('active');
         if (activeNow.length > 0) { 
            activeNow[0].className = activeNow[0].classList.remove('active');
         }/* end citation */
         event.target.className = 'active';
      })
   }  
}

/* function to set the first nav link at bottom to class of active on page load*/
function setFirstNavLiToActive() {
   let getTheNavDiv = document.querySelector('.pagination');
   let getTheNavUl = getTheNavDiv.firstElementChild;
   let getTheFirstNavLi = getTheNavUl.firstElementChild;
   let getTheFirstNavLink = getTheFirstNavLi.firstElementChild;
   getTheFirstNavLink.className = 'active';   
}


// from https://stackoverflow.com/questions/39917192/search-function-filter-lis-in-pure-js
// create search box and button
const page = document.querySelector('.page');
const pageHeaderDiv = document.querySelector('.page-header');
const studentList = document.querySelector('.student-list');
const studentItem = document.querySelectorAll('.student-item');
const studentDetails = document.querySelectorAll('.student-details');
const joinedDetails = document.querySelectorAll('.joined-details');
const searchDiv = document.createElement('div');
searchDiv.setAttribute('class', 'student-search');
searchDiv.className = 'student-search';

const form = document.createElement('form');   
const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search for students...');
searchInput.setAttribute('id', 'inputSearch');
searchInput.className = 'page-header student-search';
   
const searchButton = document.createElement('button');
searchButton.setAttribute('type', 'button');
searchButton.className = 'page-header student-search';
searchButton.textContent = 'Search';


form.appendChild(searchButton);
form.appendChild(searchInput);
searchDiv.appendChild(form);
pageHeaderDiv.appendChild(searchDiv);

   // function to make search form work 

const searchFunction = (() => {
   //let valueOfA = studentDetails.querySelector('h3').innerHTML;
   //console.log(valueOfA + ' this is value of A')
   let searchValue = searchInput.value;
   console.log('value of input box ' + searchValue)
   
   for (let i = 0; i < studentDetails.length; i++) {
      var name = studentDetails[i].innerHTML;
      console.log(name + 'this is name')
      if (name.includes(searchValue)) {
         studentDetails[i].style.display = 'list-item';
      } else {
         studentDetails[i].style.display = 'none';
      }
   }
}); 

// listen for submit (press enter key) or click the search button
searchButton.addEventListener('click', (e) => {
   //e.preventDefault();
   searchFunction();
});

searchInput.onkeyup = function () {
   // let valueOfA = studentDetails.querySelector('h3').innerHTML;
   //console.log(valueOfA + ' this is value of A')
   let searchValue = searchInput.value;
   console.log('value of input box ' + searchValue)

   for (let i = 0; i < studentDetails.length; i++) {
      var name = studentDetails[i].querySelector('h3').innerHTML;
      console.log(name + 'this is name')
      if (name.includes(searchValue) > -1) {
         studentDetails[i].style.display = 'list-item';
      } else {
         studentDetails[i].style.display = 'none';
      }
   }
};


// when page loads execute these functions
document.addEventListener('DOMContentLoaded', () => {
   showPage(listItems, 1); // call this function and page two arguments 1) listitems const above and 2) current page to display
   appendPageLinks(listItems); // call this function and pass one argument 1) global listitems const above
   setFirstNavLiToActive(); // call this function to set the first navigation link to active class on page load
}, false);


