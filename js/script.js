/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Adrian Collier
******************************************/


const listItems = document.querySelectorAll('li'); // targets all li's on the page
const itemsPerPage = 10;


/* Display Page Function - */
const showPage = (list, page) => {
   // Variables for start and end of list items  from page
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = (page * itemsPerPage);

   //Cycles throught list and shows 10 students
   for (let i=0; i<list.length; i+=1){
      if (i >= startIndex && i <= endIndex) {
         console.log('show');
        list[i].style.display = '';
      }else{
         list[i].style.display = 'none';
      }
   };
}
  
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   const numOfPages = Math.ceil(listItems.length / 10); //rounds number of pages to the next largest integer
   //console.log(numOfPages);
   const mainDiv = document.querySelector('.page');
   const buttonDiv = document.createElement('div');
   buttonDiv.className = 'pagination';
   mainDiv.appendChild(buttonDiv);


   
}

showPage(listItems, 3); 
//appendPageLinks(listItems);
   