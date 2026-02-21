const STORAGE_KEY = "feedback-form-state";

const formData = {
    email : "",
    message : "",
 }



 const form = document.querySelector(".feedback-form");
 const textarea = form.querySelector("textarea");
 const email = form.querySelector("input");
 printTextarea();

// on submit
 form.addEventListener("submit", handleSubmit);

 function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);

 }
 // on email input 
 email.addEventListener("input", (event) => {
  formData.email = event.target.value;
 })


// on textarea input
 textarea.addEventListener("input", textAreaInput)

 function textAreaInput(event) {
   const areamessage = event.target.value;
   localStorage.setItem(STORAGE_KEY, areamessage);
   formData.message = areamessage;
 }

 // print textarea from local memory
 function printTextarea(){
   const newMassage = localStorage.getItem(STORAGE_KEY);
   if(newMassage){
      textarea.value = newMassage;
   }
 }
