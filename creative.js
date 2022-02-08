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
