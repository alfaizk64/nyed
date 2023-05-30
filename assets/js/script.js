// $(document).ready(function(){
//     $(".toogle_menu").click(function(){
//         $(".nyed_nav_list").slideToggle("slow");
//     });
// });

let menutoggle = document.querySelector('.toggle');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
}

$(document).ready(function(){
    $(".toogle_menu").click(function(){
      $(".toogle_nav").slideToggle("slow");
    });
  });