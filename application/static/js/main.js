// $(function () {
//    "use strict";

//    var topoffset = 100; //variable for menu height

//    //Activate Scrollspy
//    $("body").scrollspy({
//       target: "header .navbar",
//       offset: topoffset,
//    });

//    let headerContent = document.querySelector(".header-content");
//    let nav = document.querySelector(".navbar");
//    let scrollDown = document.querySelector("#about");
//    let contentScroll = document.querySelectorAll("#about-me");
//    let navHeight = nav.scrollHeight;

//    function inViewPort(el) {
//       let rect = el.getBoundingClientRect();
//       return (
//          (rect.top <= 0 && rect.bottom >= 0) ||
//          (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
//          (rect.top >= 0 && rect.bottom <= window.innerHeight)
//       );
//    }

//    function moveHeader() {
//       let top = window.pageYOffset;
//       let mainOnTop = scrollDown.getBoundingClientRect().top - navHeight;

//       mainOnTop < 0
//          ? nav.classList.add("inbody")
//          : nav.classList.remove("inbody");

//       headerContent.style.transform = `translateY(-${top / 1.5}px)`;
//       headerContent.style.opacity =
//          1 - Math.max(top / (window.innerHeight * 0.2), 0);

//       contentScroll.forEach((item) =>
//          inViewPort(item)
//             ? item.classList.add("appear")
//             : item.classList.remove("appear")
//       );

//       window.requestAnimationFrame(moveHeader);
//    }

//    window.requestAnimationFrame(moveHeader);

//    //Use smooth scrolling when clicking on navigation
//    $(".navbar a[href*=\\#]:not([href=\\#])").click(function () {
//       if (
//          location.pathname.replace(/^\//, "") ===
//          this.pathname.replace(/^\//, "") &&
//          location.hostname === this.hostname
//       ) {
//          var target = $(this.hash);
//          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//          if (target.length) {
//             $("html,body").animate(
//                {
//                   scrollTop: target.offset().top - topoffset + 2,
//                },
//                500
//             );
//             return false;
//          } //target.length
//       } //click function
//    }); //smooth scrolling

//    $(".header-cue a[href*=\\#]:not([href=\\#])").click(function () {
//       if (
//          location.pathname.replace(/^\//, "") ===
//          this.pathname.replace(/^\//, "") &&
//          location.hostname === this.hostname
//       ) {
//          var target = $(this.hash);
//          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//          if (target.length) {
//             $("html,body").animate(
//                {
//                   scrollTop: target.offset().top - topoffset + 2,
//                },
//                1000
//             );
//             return false;
//          } //target.length
//       } //click function
//    }); //smooth scrolling
// });
// AOS.init();
