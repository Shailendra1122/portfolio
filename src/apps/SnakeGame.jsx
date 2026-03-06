import React, { useState, useEffect, useCallback, useRef } from 'react';

const GRID_WIDTH = 20;
const GRID_HEIGHT = 15;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

export default function SnakeGame({ onExit }) {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const snakeRef = useRef(snake);
  snakeRef.current = snake;

  const directionRef = useRef(direction);
  directionRef.current = direction;

  const handleKeyDown = useCallback((e) => {
    const { key } = e;
    if (key === 'ArrowUp' && directionRef.current.y === 0) setDirection({ x: 0, y: -1 });
    if (key === 'ArrowDown' && directionRef.current.y === 0) setDirection({ x: 0, y: 1 });
    if (key === 'ArrowLeft' && directionRef.current.x === 0) setDirection({ x: -1, y: 0 });
    if (key === 'ArrowRight' && directionRef.current.x === 0) setDirection({ x: 1, y: 0 });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const newHead = { x: head.x + directionRef.current.x, y: head.y + directionRef.current.y };
        
        if (newHead.x < 0 || newHead.x >= GRID_WIDTH || newHead.y < 0 || newHead.y >= GRID_HEIGHT) {
          setGameOver(true);
          return prev;
        }
        
        if (prev.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [newHead, ...prev];
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10);
          setFood({
            x: Math.floor(Math.random() * GRID_WIDTH),
            y: Math.floor(Math.random() * GRID_HEIGHT)
          });
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [gameOver, food]);

  return (
    <div className="h-full w-full bg-black text-green-500 font-mono flex flex-col items-center justify-center relative select-none">
      <div className="absolute top-2 left-4 text-xs">Score: {score}</div>
      <button className="absolute top-2 right-4 text-xs border border-green-500 px-2 py-1 hover:bg-green-900 active:bg-green-700" onClick={onExit}>[ Exit ]</button>
      
      <div 
        className="border-2 border-green-500 grid" 
        style={{ 
          gridTemplateColumns: `repeat(${GRID_WIDTH}, 14px)`,
          gridTemplateRows: `repeat(${GRID_HEIGHT}, 14px)`
        }}
      >
        {Array.from({ length: GRID_HEIGHT }).map((_, y) => 
          Array.from({ length: GRID_WIDTH }).map((_, x) => {
            const isSnake = snake.some(seg => seg.x === x && seg.y === y);
            const isFood = food.x === x && food.y === y;
            return (
              <div 
                key={`${x}-${y}`} 
                className={`w-full h-full ${isSnake ? 'bg-green-500' : isFood ? 'bg-red-500' : 'bg-black'}`}
              />
            );
          })
        )}
      </div>

      {gameOver && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
          <h2 className="text-xl mb-4 font-bold text-red-500">GAME OVER</h2>
          <p className="mb-4">Final Score: {score}</p>
          <div className="flex gap-4">
            <button 
              className="border border-green-500 px-4 py-2 hover:bg-green-900"
              onClick={() => {
                setSnake(INITIAL_SNAKE);
                setDirection(INITIAL_DIRECTION);
                setScore(0);
                setGameOver(false);
              }}
            >
              Restart
            </button>
            <button 
              className="border border-green-500 px-4 py-2 hover:bg-green-900"
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
