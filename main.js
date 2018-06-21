//Page Load
$(window).bind("load", function() {
  $('.content').animate({opacity:1}, 2000);
});

//Canvas Setup
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', resize, false);

function resize()
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

//Running Variables
var points = [], pointNumber = 200, fps = 60, triggerDistance = 100,  mouse = {x : 0,y : 0};

function setup(){
  for(var i = 0; i < pointNumber; i++){
    points.push({
      x: canvas.width - (Math.random() * canvas.width / (Math.random() * 4)),
      y: canvas.height - (Math.random() * canvas.height),
      radius: Math.random() * 1 + 1,
      nx : Math.floor(Math.random() * 50) - 25,
      ny : Math.floor(Math.random() * 50) - 25
    });
  }

  document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.globalCompositeOperation = "lighter";

  for(var i = 0; i < pointNumber; i++){
    ctx.fillStyle = "rgb(229, 154, 182)";
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, points[i].radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  ctx.beginPath();
  for(var i = 0; i < pointNumber; i++){
    ctx.moveTo(points[i].x, points[i].y);

    if(dist(points[i], mouse) < 200)
      ctx.lineTo(mouse.x,mouse.y);

    for (var j = 0; j < pointNumber; j++) {
      if(dist(points[i], points[j]) < triggerDistance)
        ctx.lineTo(points[j].x,points[j].y);
    }
  }
  ctx.lineWidth = 0.05;
  ctx.strokeStyle = 'rgb(210, 83, 131)';
  ctx.stroke();

}

function movePoints()
{
  for (var i = 0; i < pointNumber; i++) {
    points[i].x += points[i].nx / fps;
    points[i].y += points[i].ny / fps;

    if (points[i].x < 0 || points[i].x > canvas.width)
      points[i].nx = -points[i].nx;
    if (points[i].y < 0 || points[i].y > canvas.height)
      points[i].ny = -points[i].ny;
  }
}

function dist(p1, p2){
  var x = (p2.x - p1.x) * (p2.x - p1.x);
  var y = (p2.y - p1.y) * (p2.y - p1.y);
  return Math.sqrt(x + y);
}

function update() {
  draw();
  movePoints();
  requestAnimationFrame(update);
}

//Runs
setup();
update();
