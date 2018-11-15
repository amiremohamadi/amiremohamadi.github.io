window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.lineHeight = "50px";
    document.getElementById("logo").style.width = "50px";
    document.getElementById("logo").style.height = "50px";
  } else {
    document.getElementById("header").style.lineHeight = "80px";
    document.getElementById("logo").style.width = "80px";
    document.getElementById("logo").style.height = "80px";
  }
}
