var canvas = document.getElementById('hi');
var c= canvas.getContext('2d');
var Title = "Centennial Art Work";
var TitleColor = Title.fontcolor("red");
c.beginPath(); //left Triangle
c.moveTo(0, 0);
c.lineTo(0, 300);
c.lineTo(682.5, 300);
c.closePath();
c.lineWidth = "1";
c.strokeStyle = "red";
c.fillStyle = "red";
c.fill();
c.beginPath(); //right Triangle
c.moveTo(1350, 0);
c.lineTo(1350, 300);
c.lineTo(682.5, 300);
c.closePath();
c.lineWidth = "1";
c.strokeStyle = "orange";
c.fillStyle = "red";
c.fill();
c.beginPath();
c.moveTo(0, 0); //middle Triangle
c.lineTo(1350, 0);
c.lineTo(682.5, 303);
c.closePath();
c.fillStyle = "black";
c.fill();
c.font="40px Cursive";
c.lineWidth = "0";
c.strokeStyle = "#FFFFFF";
c.fillStyle = "white"; 
c.fillText('Centennial Art Work', 490, 100); 
c.fillStyle = "red"; //Left Side Stripes
c.fillRect(0, 300, 15, 1400);
c.fillStyle = "white";
c.fillRect(15, 300, 15, 1400);
c.fillStyle = "black";
c.fillRect(30, 300, 15, 1400);
c.fillStyle = "red"; //Right Side Stripes
c.fillRect(1335, 300, 15, 1400);
c.fillStyle = "white";
c.fillRect(1320, 300, 15, 1400);
c.fillStyle = "black";
c.fillRect(1305, 300, 15, 1400);
c.fillStyle = "black"; //middle stripes
c.fillRect(675, 300, 15, 1400);
c.fillStyle = "white";
c.fillRect(660, 300, 15, 1400);
c.fillStyle = "white";
c.fillRect(690, 300, 15, 1400);
c.fillStyle = "red";
c.fillRect(705, 300, 15, 1400);
c.fillStyle = "red";
c.fillRect(645, 300, 15, 1400);