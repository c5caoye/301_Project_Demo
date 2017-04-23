var canvas = document.getElementById('picView');
var context = canvas.getContext('2d');

var background = new Image();

background.src = "https://rioaraki.github.io/addLogo/backspend.png";

$('#inputPic').change(function () {

  var fr = new FileReader;

  fr.onload = function() {
    var img = new Image();
    img.onload = function() {
        // var sourceX = img.width/2 - canvas.width/2;
        // var sourceY = img.height/2 - canvas.height/2;
        // var sourceWidth = canvas.width;
        // var sourceHeight = canvas.height;
        // var destWidth = sourceWidth;
        // var destHeight = sourceHeight;
        // var destX = canvas.width / 2  - destWidth / 2;
        // var destY = canvas.height / 2 - destHeight / 2;
        // if(img.width < canvas.width || img.height < canvas.height ){
        //     context.drawImage(img,0,0,500,500);
        // }else{
        //   context.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        // };

        context.drawImage(img, 0, ((img.height-img.width)/2), img.width, img.width, 0, 0, canvas.width, canvas.width);
        context.drawImage(background, 0, 0);
    };
    img.src = fr.result;
  };
  fr.readAsDataURL(this.files[0]);
});

////add info such as title, cost and tags////
$("#addInfo").click(function(){
  var inputTitle = $("#inputTitle").val();
  var inputCost = $("#inputCost").val();

  // modify these lines for style
  context.font = "50px Calibri";
  context.fillText(inputTitle, 50, 830);
  context.font = "30px Calibri";
  context.fillText(inputCost, 50, 875);
  // modify these lines for style
})
