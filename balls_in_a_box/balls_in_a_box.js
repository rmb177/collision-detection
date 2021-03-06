// Generated by CoffeeScript 1.3.1
(function() {
  var balls, clearCanvas, drawBall, frameTimer, init, nextFrame;

  balls = [
    {
      velocityX: 2,
      velocityY: -3,
      posX: 0,
      posY: 0
    }, {
      velocityX: 1,
      velocityY: 4,
      posX: 0,
      posY: 0
    }, {
      velocityX: 2,
      velocityY: 1,
      posX: 0,
      posY: 0
    }, {
      velocityX: 3,
      velocityY: -2,
      posX: 0,
      posY: 0
    }
  ];

  frameTimer = null;

  clearCanvas = function() {
    var context;
    context = document.getElementById("bounds").getContext('2d');
    return context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  drawBall = function(ball) {
    var context;
    context = document.getElementById("bounds").getContext('2d');
    context.beginPath();
    context.moveTo(ball.posX, ball.posY);
    context.arc(ball.posX, ball.posY, 10, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
    return context.stroke();
  };

  nextFrame = function() {
    var ball, _i, _len;
    clearCanvas();
    for (_i = 0, _len = balls.length; _i < _len; _i++) {
      ball = balls[_i];
      ball.posX = ball.posX + ball.velocityX;
      ball.posY = ball.posY + ball.velocityY;
      drawBall(ball);
      if ((ball.posX < -1 && ball.velocityX < 0) || (ball.posX > 300 && ball.velocityX > 0)) {
        ball.velocityX = -ball.velocityX;
      }
      if ((ball.posY < -1 && ball.velocityY < 0) || (ball.posY > 300 && ball.velocityY > 0)) {
        ball.velocityY = -ball.velocityY;
      }
    }
    return frameTimer = setTimeout(nextFrame, 10);
  };

  init = function() {
    var ball, _i, _len;
    for (_i = 0, _len = balls.length; _i < _len; _i++) {
      ball = balls[_i];
      ball.posX = Math.random() * 250;
      ball.posY = Math.random() * 250;
      drawBall(ball);
    }
    return frameTimer = setTimeout(nextFrame, 10);
  };

  $(document).ready(init);

}).call(this);
