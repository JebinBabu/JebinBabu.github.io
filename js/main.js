// slider
var myRange = document.getElementById("slider");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  var slideValue = this.value;
  document.getElementById('perc').innerHTML = slideValue/10 + "%";
  document.getElementById('perc2').innerHTML = slideValue/10 + "%";
  if((slideValue <= 200)&&(slideValue >= 0)){
    window.activate('homeL',1001);
    document.getElementById('navBar').style.visibility ="visible";
    document.getElementById('perc2').style.visibility ="visible";
  }
  else if ((slideValue <= 400)&&(slideValue >= 200)) {
    window.activate('iiserL',1001);
    document.getElementById('navBar').style.visibility ="visible";
    document.getElementById('perc2').style.visibility ="visible";
  }
  else if ((slideValue <= 600)&&(slideValue >= 400)) {
    window.activate('workL',1001);
    document.getElementById('navBar').style.visibility ="visible";
    document.getElementById('perc2').style.visibility ="visible";
  }
  else if ((slideValue <= 800)&&(slideValue >= 600)) {
    window.activate('photosL',1001);
    document.getElementById('navBar').style.visibility ="visible";
    document.getElementById('perc2').style.visibility ="visible";
  }
  else if ((slideValue <= 999)&&(slideValue >= 800)) {
    window.activate('contactL',1001);
    document.getElementById('navBar').style.visibility ="visible";
    document.getElementById('perc2').style.visibility ="visible";
  }
  else if (slideValue == 1000) {
    window.activate('perfectL',1001);
    document.getElementById('navBar').style.visibility ="hidden";
    document.getElementById('perc2').style.visibility ="hidden";
  }
}

var active = "homeL";
var display = "home";

function activate(a,b){


// changeing display pages
  document.getElementById(window.display).style.display = "none";
  window.display = a.slice(0,-1);
  document.getElementById(window.display).style.display = "flex";

  var removeClass = document.getElementById(window.active).className.slice(0,-6);
  document.getElementById(window.active).className = removeClass;
  window.active = a;
  var className = document.getElementById(window.active).className;
  document.getElementById(window.active).className = className + " active";

// changing percentage Value

  if(b == 1001){
    return;
  }
  else{
    document.getElementById('slider').value = b;
    document.getElementById('perc').innerHTML = b/10 + "%";
  }

}





// onload activities

function load(){

// for hiding load ripples
  const load = document.getElementById('loading').className;
  document.getElementById('loading').className = load + " hide";



// caching remaining image files

  for (var i = 2; i <= 16; i++) {

    var img = "img" + i;
    var name = "image" + i;
    img = new Image();
    img.src = "images/" + name + ".jpg";
    img.style.display = "none";

    var body = document.querySelector('body');
    body.appendChild(img);
  }

}


    // caching first 2 pages background images
    for (var i = 0; i <= 1; i++) {

      var img = "img" + i;
      var name = "image" + i;
      img = new Image();
      img.src = "images/" + name + ".jpg";
      img.style.display = "none";

      var body = document.querySelector('body');
      body.appendChild(img);
    }




// for hiding contact form after successful submission
function submitBtn(){
  const load = document.getElementById('submit-form').className;
  document.getElementById('submit-form').className = load + " slide-out";
  document.getElementById('successMessage').style.display = "flex";
}




// ajax for contact form sumbission
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxTBjGCIn8O0fAvoKCiYQVLjHlKmTtrr0Ly46mu/exec",
        data:$("#submit-form").serialize(),
        method:"post",

        error:function (err){
            alert("Something Error")
            window.location.reload()

        }
    })
})



// celebration
  $("#celebrate").click(function(){
    confetti({
  particleCount: 100,
  startVelocity: 30,
  spread: 360,
  origin: {
    x: Math.random(),
    // since they fall down, start a bit higher than random
    y: Math.random() - 0.2
  }
  });
  });


// using arrow keys for changing page

var position = 1;

document.onkeydown = function(e) {
  document.getElementById('navBar').style.visibility ="visible";

    switch (e.keyCode) {
        case 37:
            window.position -- ;
        break;

        case 39:
            window.position ++ ;
        break;

        case 38:
            window.position -- ;
        break;

        case 40:
            window.position ++ ;
        break;

        default:
          return;
        break;
    }


    switch (window.position) {
        case 0:
            window.activate('contactL',900);
            window.position = 5 ;
        break;
        case 1:
            window.activate('homeL',100);
        break;

        case 2:
            window.activate('iiserL',350);
        break;

        case 3:
            window.activate('workL',550);
        break;

        case 4:
            window.activate('photosL',750);
        break;

        case 5:
            window.activate('contactL',900);
        break;
        case 6:
            window.activate('homeL',100);
            window.position = 1 ;
        break;

    }
  }
