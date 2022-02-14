// scrolling color changer for navbar
// $(document).ready(function(){
//   $(window).on("scroll",function(){

//       if($(document).scrollTop() > 50)
//       {
//           $(".gym_nav_bar").css('background', 'black !important;');
//       }
//       else
//       {
//           $(".gym_nav_bar").css('background','transparent !important;');
//       }
//   })
// });

// nav bar toggling
const btn=document.querySelector(".open_btn");
const navBar=document.querySelector(".gym_nav_bar");
const closeBtn=document.querySelector(".close-btn");

btn.addEventListener('click',()=>{
  navBar.classList.toggle('add_display');
});
closeBtn.addEventListener('click',()=>{
  navBar.classList.toggle('add_display');
});
// contact us 
const contactBtn=document.querySelector(".link-5");
const openContact=document.querySelector(".gym_contactUs");
contactBtn.addEventListener('click',()=>{
  if(openContact.style.display==="none")
    openContact.style.display="block";
  else
    openContact.style.display="none";
});
// contact button close functionality
const btnn=document.querySelector(".close-bt");
btnn.addEventListener('click',()=>{
    openContact.style.display="none";
});
// form submission
const textAfterSubmission=document.querySelector(".submit_confirm");
function formSubmitter(){
  textAfterSubmission.innerHTML="*Your Form Has Been Submitted Succssfully!";
  console.log(textAfterSubmission);
}