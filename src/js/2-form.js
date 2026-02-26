const STORAGE_KEY = "feedback-form-state";

const formData = {
    email : "",
    message : "",
 }


 const form = document.querySelector(".feedback-form");
 const textarea = form.querySelector("textarea");
 const formEmail = form.querySelector("input");

 form.addEventListener("input", even =>{

    formData[even.target.name] = even.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})

 printTextarea();

// on submit
 form.addEventListener("submit", handleSubmit);

 function handleSubmit(event) {
  event.preventDefault();
  if(formData.email ==="" || formData.message ==="" ){
   alert("Email or message are empty");
   return
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset(); 
  formData.email = "";formData.message = "";
  
 }
 
// print textarea from local memory
 function printTextarea(){
   const newMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
   if(newMassage){ 
      textarea.value = newMassage.message;
      formEmail.value = newMassage.email;
      formData.email = newMassage.email;
      formData.message = newMassage.message;
   }
 }
