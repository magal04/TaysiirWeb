
// Blog page Read More
    function myFunction() {
        // var dots = document.getElementById("dots");
        // var moreText = document.getElementById("more");
        // var btnText = document.getElementById("myBtn");
        var dots = document.getElementsByClassName("dots");
        var moreText = document.getElementsByClassName("more");
        var btnText = document.getElementsByClassName("myBtn")
        
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }      }


