window.onscroll = function() {scrollProgress(); scrollFunction()};

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

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled+"%";
}