let elBtn = document.getElementById("formBtn");
let elForm = document.getElementById("contactForm");
let elList = document.getElementById("contactList");
let elSorting = document.getElementById("sorting");
let elCategory = document.getElementById("category");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let telNumber = document.getElementById("telNumber");

let sortingItem = elSorting.value;

elSorting.addEventListener("click",sorting)


function sorting(e){
  let items = document.getElementsByTagName("li");
  for (let i = 0; i<items.length; i++){
   let item = items[i];
 switch(e.target.value){
   case "all": 
     item.style.display="flex";
 break;
   case "relatives": if(item.classList.contains("Relatives")){
     item.style.display="flex";
   } else{
     item.style.display="none";
   }
 break;
   case "acquaintances": if(item.classList.contains("Acquaintances")){
     item.style.display="flex";
   } else{
     item.style.display="none";
   }
 break; 
  case "friends": if(item.classList.contains("Friends")){
   item.style.display="flex";
 } else{
   item.style.display="none";
 }
 break;
 
 }
  }
}
elForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  let li = document.createElement("li");
  li.innerHTML= ` <li class="contact__item">
  <div class="contact__desc">
    <div class="desc__inner">
      <i class='bx bxs-user'></i>
      <p class="first-name">${firstName.value}</p>
      <p class="last-name">${lastName.value}</p>
    </div>
    <a href="telto: ${telNumber.value}" class="phone_num"><i class='bx bxs-phone' ></i> ${telNumber.value}</a>
    <p class="filter">${elCategory.value}</p>
  </div>
</li>`
li.classList= `${elCategory.value}`;
elList.appendChild(li);
});



