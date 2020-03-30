/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Adrian Collier
******************************************/


const listItems = document.querySelectorAll('li');
const itemsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/* Display Page Function - */
const showPage = (list, page) => {
   //console.log(listItems[2]);
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   //console.log(startIndex, endIndex);
   //console.log(li.length);

   for (let i=1; i<list.length; i+=1){
      if (list[i] >= startIndex && list[i]<= endIndex){
        console.log('display none');
        list[i].style.display = '';
      } else {
         console.log('hide');
         list[i].style.display = 'none';

         //hide li's if condition is false
         //list.style.display = 'none';
      }
   }; 
}
   //create a variable that contains li elements in the ul
   
   //Get length of the the variable above
    
   //currentPage would hold the number of pages needed by dividing the number of li's by 10

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

showPage(listItems, 1); 
//appendPageLinks(listItems);
   


// Remember to delete the comments that came with this file, and replace them with your own code comments.