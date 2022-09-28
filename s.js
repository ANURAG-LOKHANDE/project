$(document).ready(function () {
  $("nav").click(function () {
    $(this).toggleClass("_expand");
  });
});



gsap.to("#circl2",{
   
    top: 0,
   left:600,
   
    ease: Expo.easeInOut,
    Duration: 5,
    transitionDuration: 5,
   rotate: 0,
   opacity: 1
});
gsap.to("#circle",{
   opacity: 1,
   scale: 1.2,
   delay: 3
})
gsap.to("#circle1",{
    opacity: 1,
    scale: 1.2,
    delay: 3
 })
 gsap.to("#circle2",{
    opacity: 1,
    scale: 1.2,
    delay: 3
 })