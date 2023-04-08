window.onload = function() {
    var loader = document.querySelector(".loader");
    var loaderBar = document.querySelector(".loader-bar");
    var loaderPercent = document.querySelector(".loader span");
  
    var percent = 0;
    var interval = setInterval(function() {
      percent++;
      loaderBar.style.width = percent + "%";
      loaderPercent.innerHTML = percent + "%";
      if (percent == 100) {
        clearInterval(interval);
        loaderBar.style.backgroundColor = "green";
        loaderPercent.innerHTML = "Удаленный доступ получен";
        loaderBar.style.animation = "none";
      }
    }, 15);
  }
  