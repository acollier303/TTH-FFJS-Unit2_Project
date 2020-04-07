/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Adrian Collier
******************************************/

//Global Variables
const listItems = document.querySelectorAll('li'); // targets all li's on the page
const itemsPerPage = 10;
let currentPage = 1;


/***
showPage(): Creates a page that shows 10 students at a time
***/
const showPage = (list, page) => {
   // Variables for start and end of list items  from page
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = (page * itemsPerPage)-1;

   //Cycles throught list and shows 10 students
   for (let i=0; i<list.length; i+=1){
      if (i >= startIndex && i <= endIndex) {
        list[i].style.display = '';
      }else{
         list[i].style.display = 'none';
      }
   };
}

/*** 
   appendPageLinks() Generates, appends, and adds 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   const numOfPages = Math.ceil(listItems.length / 10); //rounds number of pages to the next largest integer
   //html elements created
   const mainDiv = document.querySelector('.page');
   const buttonDiv = document.createElement('div');
   const ul = document.createElement('ul');
   
   buttonDiv.className = 'pagination';
   
   // Add div elements to the DOM
   mainDiv.appendChild(buttonDiv);
   buttonDiv.appendChild(ul);

   //run showPage function to show page 1
   showPage(listItems, currentPage);
   
   //Loop through pages and add li and link for every page
   for (let i=0; i < numOfPages; i+= 1){
      const li = document.createElement('li');
      const link = document.createElement('a');
      let currentPage = i+1;
      
      // adds li and link to the DOM
      ul.appendChild(li);
      li.appendChild(link);

      //adds page number to each link
      link.textContent = `${currentPage}`;
      link.className = '';     
      
      // Sets the first li link to active
      ul.firstChild.firstChild.setAttribute('class', 'active');
         
   };      
      //page link event handler
      buttonDiv.addEventListener('click', (e) =>{
         let currentPage = Number.parseInt(e.target.textContent);
         const a = document.getElementsByTagName('a');
         const selectedPage = currentPage;
         
        // Remove
         for (let j = 0; j< a.length; j+=1){
            a[j].classList.remove('active');
         }
         
         e.target.classList.add('active');
        
         showPage(listItems, currentPage);
      });
   }
   
appendPageLinks(listItems);
