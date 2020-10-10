
var imgsArray = [];

function poulate(){
  imgsArray = ["https://i.imgur.com/4n6mKY5.jpg",
  "https://i.imgur.com/ew09XHs.jpg",
  "https://cdn.discordapp.com/attachments/559419003161018376/572464474972487680/Pics-Art-03-07-12-18-10.png",
  "https://i.imgur.com/9g9IF82.jpg",
  "https://i.imgur.com/LXlR3cI.jpg",
  "https://i.imgur.com/c3aMXJt.jpg",
  "https://i.imgur.com/GaPcuTk.jpg",
  "https://i.imgur.com/EHBY30m.jpg",
  "https://i.imgur.com/B8jHox6.jpg",
  "https://i.imgur.com/3XiGw35.jpg",
  "https://i.imgur.com/9FRnNKy.jpg",
  "https://i.imgur.com/bBmsZPM.jpg",
  "https://i.imgur.com/qjajx4A.jpg",
  "https://i.imgur.com/KM8z1Ao.png",
  "https://i.imgur.com/1DIpX3f.jpg",
  "https://i.imgur.com/exNz1vC.png",
  "https://cdn.discordapp.com/attachments/488459057993089024/555092859099807776/IMG_3794.JPG",
  "https://i.imgur.com/lbdhpgk.jpg",
  "https://i.imgur.com/UIwtvWH_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
  "https://i.imgur.com/7xgi4Z2_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
  "https://i.imgur.com/di75wgZ.jpg",
  "https://i.imgur.com/Jj9FcdY.jpg",
  "https://i.imgur.com/jWHrQAj.jpg"];

  var first = document.getElementsByClassName("first")[0];
  var second = document.getElementsByClassName("second")[0];
  var third = document.getElementsByClassName("third")[0];
  var forth = document.getElementsByClassName("forth")[0];

  for (var i = 0; i < imgsArray.length; i++) {
    
    var imgEle = document.createElement("img");
    imgEle.src = imgsArray[i];
    imgEle.style.width = "100%";
    imgEle.onclick = function(){
      showImgPopup(this);
    }

    switch((i+1) % 4){
      case 0 :
        forth.appendChild(imgEle);
      break;
      case 3 :
        third.appendChild(imgEle);
      break;
      case 2 :
        second.appendChild(imgEle);
      break;
      case 1 :
      default :
        first.appendChild(imgEle);
      break;
    }
  }
}

  /*------------------------------*/

  function showImgPopup(img){
    var modal = document.getElementById("myModal");// Get the modal
    var btn = document.getElementById("myBtn");// Get the button that opens the modal
    var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
    var expandImg = document.getElementById("expandedImg");
    var left = document.getElementsByClassName("left")[0];
    var right = document.getElementsByClassName("right")[0];

    var imgs = document.getElementsByClassName("column");
    var currClass = 0;

    for (var i = 0; i < imgsArray.length; i++) {
      if(imgsArray[i] == img.src){
        currClass = i;
      }
    }

    left.onclick = function(){
      if(currClass != 0)
        currClass = currClass-1;
      else
        currClass = imgsArray.length - 1;
      expandImg.src = imgsArray[currClass];
    }

    right.onclick = function(){
      if(currClass != imgsArray.length-1)
        currClass = currClass+1;
      else
        currClass = 0 ;
      expandImg.src = imgsArray[currClass];
    }

    expandImg.src = imgsArray[currClass];

    modal.style.display = "block";// When the user clicks the button, open the modal

    span.onclick = function() {
      modal.style.display = "none";// When the user clicks on <span> (x), close the modal
    }

  }

