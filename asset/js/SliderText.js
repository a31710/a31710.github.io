
var slide1 = document.querySelector('#slide1').offsetTop
var slide2 = document.querySelector('#slide2').offsetTop
var slide3 = document.querySelector('#slide3').offsetTop

var x = window.matchMedia("(max-width: 768px)");
var header = document.querySelector('.tabs-box')
var btns = header.getElementsByClassName("tab");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
        if (x.matches) { 
           if(i == 0){
            document.querySelector('#slide1').style.display = "inline-block"
            document.querySelector('#slide2').style.display = "none"
            document.querySelector('#slide3').style.display = "none"
           }
           if(i == 1){
            console.log('none');
            document.querySelector('#slide1').style.display = "none"
            document.querySelector('#slide2').style.display = "inline-block"
            document.querySelector('#slide3').style.display = "none"
           }
           if(i == 2){
            document.querySelector('#slide1').style.display = "none"
            document.querySelector('#slide2').style.display = "none"
            document.querySelector('#slide3').style.display = "inline-block"
           }
        }
       
  });
}



  

