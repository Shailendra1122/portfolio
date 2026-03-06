import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/retro.module.css';
import SnakeGame from './SnakeGame';
import BrickBreaker from './BrickBreaker';

export default function TerminalGame() {
  const [mode, setMode] = useState('cli'); // 'cli', 'snake', 'brick'
  const [output, setOutput] = useState([
    "Terminal OS v2.0.0",
    "Available Games:",
    "  [1] snake - Retro Snake Game",
    "  [2] brick - Brick Breaker",
    "Type a command and press Enter.",
    "> "
  ]);
  const [input, setInput] = useState('');

  const endRef = useRef(null);

  useEffect(() => {
    if (mode === 'cli') {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output, mode]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      const currentOutput = [...output.slice(0, output.length - 1), "> " + command];

      if (!command) {
        setOutput([...currentOutput, "> "]);
        setInput('');
        return;
      }

      if (mode === 'cli') {
        if (command === 'snake' || command === '1') {
          setMode('snake');
          setInput('');
          return;
        } else if (command === 'brick' || command === '2') {
          setMode('brick');
          setInput('');
          return;
        } else if (command === 'clear') {
          setOutput(["> "]);
          setInput('');
          return;
        } else {
          currentOutput.push(`Command not found: ${command}. Type 'snake', or 'brick'.`);
        }
      }

      currentOutput.push("> ");
      setOutput(currentOutput);
      setInput('');
    }
  };

  const handleExitGame = () => {
    setMode('cli');
    setOutput((prev) => [
      ...prev.slice(0, prev.length - 1),
      "Exited graphical game.",
      "Available: snake, brick",
      "> "
    ]);
  };

  if (mode === 'snake') {
    return <SnakeGame onExit={handleExitGame} />;
  }
  if (mode === 'brick') {
    return <BrickBreaker onExit={handleExitGame} />;
  }

  return (
    <div 
      className={styles.insetDark || 'bg-black'} 
      style={{ 
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '14px',
        padding: '8px',
        overflowY: 'auto',
        height: '100%',
        backgroundColor: 'black'
      }}
      onClick={() => document.getElementById('terminal-input')?.focus()}
    >
      {output.map((line, i) => {
        if (i === output.length - 1) {
          return (
            <div key={i} className="flex">
              <span className="mr-2 text-green-500">{line}</span>
              <input
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none text-green-500 flex-1"
                autoComplete="off"
                spellCheck="false"
                autoFocus
              />
            </div>
          );
        }
        return <div key={i} className="text-green-500 mb-1">{line}</div>;
      })}
      <div ref={endRef} />
    </div>
  );
}
