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
  if(formData.email ===""&& formData.message ==="" ){
   alert("Email or message are empty");
  }
  console.log(`email -${formData.email}, message -${formData.message}`);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY); 
  
 }
 
// on email input 
 email.addEventListener("input", (event) => {
  formData.email = event.target.value;
  localStorage.setItem(STORAGE_KEY, event.target.value);
 })

// on textarea input
 textarea.addEventListener("input", textAreaInput)

 function textAreaInput(event) {
   const areamessage = event.target.value;
    formData.message = areamessage;
    localStorage.setItem(STORAGE_KEY, areamessage);
   
 }

// print textarea from local memory
 function printTextarea(){
   const newMassage = localStorage.getItem(STORAGE_KEY);
   if(newMassage){
      textarea.value = newMassage;
   }
 }
