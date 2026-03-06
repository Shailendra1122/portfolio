import React, { useRef, useEffect, useState, useCallback } from 'react';

export default function BrickBreaker({ onExit }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  
  const stateRef = useRef({
    x: 200, y: 150, dx: 2, dy: -2, ballRadius: 5,
    paddleHeight: 10, paddleWidth: 70, paddleX: (400 - 70) / 2,
    rightPressed: false, leftPressed: false,
    score: 0,
    brickRowCount: 3, brickColumnCount: 6,
    brickWidth: 55, brickHeight: 15, brickPadding: 10,
    brickOffsetTop: 30, brickOffsetLeft: 10,
    bricks: []
  });

  const initBricks = useCallback(() => {
    const st = stateRef.current;
    st.bricks = [];
    for(let c = 0; c < st.brickColumnCount; c++) {
      st.bricks[c] = [];
      for(let r = 0; r < st.brickRowCount; r++) {
        st.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  }, []);

  const resetGame = useCallback(() => {
    stateRef.current = {
      ...stateRef.current,
      x: 200, y: 150, dx: 2, dy: -2,
      paddleX: (400 - stateRef.current.paddleWidth) / 2,
      score: 0, rightPressed: false, leftPressed: false
    };
    initBricks();
    setScore(0);
    setGameOver(false);
    setWon(false);
  }, [initBricks]);

  useEffect(() => {
    initBricks();
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const keyDownHandler = (e) => {
      if(e.key === "Right" || e.key === "ArrowRight") stateRef.current.rightPressed = true;
      else if(e.key === "Left" || e.key === "ArrowLeft") stateRef.current.leftPressed = true;
    };
    const keyUpHandler = (e) => {
      if(e.key === "Right" || e.key === "ArrowRight") stateRef.current.rightPressed = false;
      else if(e.key === "Left" || e.key === "ArrowLeft") stateRef.current.leftPressed = false;
    };

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    const drawBall = (st) => {
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.ballRadius, 0, Math.PI*2);
      ctx.fillStyle = "#00FF00";
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = (st) => {
      ctx.beginPath();
      ctx.rect(st.paddleX, canvas.height - st.paddleHeight, st.paddleWidth, st.paddleHeight);
      ctx.fillStyle = "#00FF00";
      ctx.fill();
      ctx.closePath();
    };

    const drawBricks = (st) => {
      for(let c = 0; c < st.brickColumnCount; c++) {
        for(let r = 0; r < st.brickRowCount; r++) {
          if(st.bricks[c][r].status === 1) {
            let brickX = (c*(st.brickWidth+st.brickPadding))+st.brickOffsetLeft;
            let brickY = (r*(st.brickHeight+st.brickPadding))+st.brickOffsetTop;
            st.bricks[c][r].x = brickX;
            st.bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, st.brickWidth, st.brickHeight);
            ctx.fillStyle = "#00FF00";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    };

    const collisionDetection = (st) => {
      let win = true;
      for(let c = 0; c < st.brickColumnCount; c++) {
        for(let r = 0; r < st.brickRowCount; r++) {
          let b = st.bricks[c][r];
          if(b.status === 1) {
            win = false;
            // Collision boundary
            if(st.x > b.x && st.x < b.x + st.brickWidth && st.y > b.y && st.y < b.y + st.brickHeight) {
              st.dy = -st.dy;
              b.status = 0;
              st.score++;
              setScore(st.score);
            }
          }
        }
      }
      if(win) {
        setWon(true);
        setGameOver(true);
      }
    };

    const draw = () => {
      if (gameOver) return;
      const st = stateRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawBricks(st);
      drawBall(st);
      drawPaddle(st);
      collisionDetection(st);

      // Bounce off walls
      if(st.x + st.dx > canvas.width - st.ballRadius || st.x + st.dx < st.ballRadius) {
        st.dx = -st.dx;
      }
      // Top wall
      if(st.y + st.dy < st.ballRadius) {
        st.dy = -st.dy;
      } else if(st.y + st.dy > canvas.height - st.ballRadius) {
        // Paddle collision
        if(st.x > st.paddleX && st.x < st.paddleX + st.paddleWidth) {
          st.dy = -st.dy;
        } else {
          setGameOver(true);
          return;
        }
      }

      // Move paddle
      if(st.rightPressed && st.paddleX < canvas.width - st.paddleWidth) {
        st.paddleX += 4;
      } else if(st.leftPressed && st.paddleX > 0) {
        st.paddleX -= 4;
      }

      st.x += st.dx;
      st.y += st.dy;
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [initBricks, gameOver]);

  return (
    <div className="h-full w-full bg-black text-green-500 font-mono relative select-none flex flex-col items-center justify-center">
      <div className="w-full h-8 flex items-center justify-between px-4 pb-2">
        <span>Score: {score}</span>
        <button className="border border-green-500 px-2 hover:bg-green-900 active:bg-green-700" onClick={onExit}>[ Exit ]</button>
      </div>

      <div className="flex-1 w-full flex justify-center items-center">
         <canvas ref={canvasRef} width={400} height={250} className="border border-green-800 bg-black block shadow shadow-green-900/50" />
      </div>

      {gameOver && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
          <h2 className="text-xl mb-4 font-bold text-green-500">{won ? `YOU WIN!` : `GAME OVER`}</h2>
          <p className="mb-4">Final Score: {score}</p>
          <div className="flex gap-4">
            <button 
              className="border border-green-500 px-4 py-2 hover:bg-green-900 active:bg-green-700"
              onClick={resetGame}
            >
              Restart
            </button>
            <button 
              className="border border-green-500 px-4 py-2 hover:bg-green-900 active:bg-green-700"
              onClick={onExit}
            >
              Quit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
