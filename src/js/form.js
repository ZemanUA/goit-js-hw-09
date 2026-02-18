const STORAGE_KEY = "feedback-form-state";

const formData = {
    email : "",
    message : "",
 }

 printTextarea();

 const form = document.querySelector(".feedback-form");
 const textarea = form.querySelector("textarea");

 form.addEventListener("submit", handleSubmit);

 function handleSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
 }

 textarea.addEventListener("input", textAreaInput)

 function textAreaInput(event) {
   const message = event.target.value;
   localStorage.setItem(STORAGE_KEY, message)
 }

 function printTextarea(){
   const newMassage = localStorage.getItem(STORAGE_KEY);
   if(newMassage){
      textarea.value = newMassage;
   }
 }