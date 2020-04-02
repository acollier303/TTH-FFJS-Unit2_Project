/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Adrian Collier
******************************************/

//Global Variables
const listItems = document.querySelectorAll('li'); // targets all li's on the page
const itemsPerPage = 10;



/* Display Page Function - */
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
   `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   const numOfPages = Math.ceil(listItems.length / 10); //rounds number of pages to the next largest integer
   
   //html elements created
   const mainDiv = document.querySelector('.page');
   const buttonDiv = document.createElement('div');
   const ul = document.createElement('ul');
   
   buttonDiv.className = 'pagination';
   mainDiv.appendChild(buttonDiv);
   buttonDiv.appendChild(ul);

   //Loop through pages and add li for every page
   for (let i=0; i < numOfPages; i+= 1){
      const li = document.createElement('li');
      const link = document.createElement('a');
      
      ul.appendChild(li);
      li.appendChild(link);

      //adds page number to each link
      link.textContent = `${i+1}`;
      link.setAttribute('class', ''); 
            
       if (i === 0){
           link.setAttribute('class', 'active');
       };

      //page link event handler
   };      
      buttonDiv.addEventListener('click', (e) =>{
         const currentPage = Number.parseInt(e.target.textContent);
         console.log(currentPage);
         console.log(e.target);
         e.target.setAttribute('class', '');
         if (e.target){
            e.target.setAttribute('class', 'active');
         } else {
            e.target.sib
         }     
                     
         showPage(listItems, currentPage);
      });

   }
appendPageLinks(listItems);
