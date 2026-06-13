import React, { useState, useRef, useEffect } from 'react';
import SnakeGame from './SnakeGame';
import BrickBreaker from './BrickBreaker';

export default function TerminalGame() {
  const [mode, setMode] = useState('cli'); // 'cli', 'snake', 'brick'
  const [output, setOutput] = useState([
    "SPS_OS Terminal [Version 3.5.0]",
    "(c) 2026 Shailendra Pratap Singh. All rights reserved.",
    "",
    "Type 'help' to list available interactive commands.",
    ""
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    if (mode === 'cli') {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output, mode]);

  const handleCommandSubmit = (e) => {
    if (e.key === 'Enter') {
      const commandText = input.trim();
      const command = commandText.toLowerCase();

      // Append user command input line to history
      const newOutput = [...output, `sps_os://user$ ${commandText}`];

      if (!command) {
        setOutput(newOutput);
        setInput('');
        return;
      }

      switch (command) {
        case 'help':
          newOutput.push(
            "Available commands:",
            "  about      - Display professional developer biography",
            "  skills     - View categorized technical skills",
            "  projects   - Showcase software engineering projects",
            "  resume     - Print resume metrics and contact detail summaries",
            "  contact    - Print social profile URLs and email channels",
            "  snake      - [GAME] Launch retro Snake game in terminal window",
            "  brick      - [GAME] Launch retro Brick Breaker game in window",
            "  clear      - Clear console buffers",
            "  help       - Display list of executable shell programs"
          );
          break;

        case 'about':
          newOutput.push(
            "About Shailendra Pratap Singh:",
            "  Backend-focused Computer Science student skilled in Java & Spring Boot,",
            "  passionate about building scalable REST APIs and efficient distributed systems.",
            "  Studies Information Technology (B.Tech CSE) at KIIT University, Bhubaneswar."
          );
          break;

        case 'skills':
          newOutput.push(
            "Technical Skills Inventory:",
            "  - LANGUAGES: Java, JavaScript, Python, C++, HTML/CSS",
            "  - BACKEND: Spring Boot, FastAPI, Node.js, Express, Laravel",
            "  - DATABASES: MySQL, MongoDB, SQLite",
            "  - DEVOPS: Git/GitHub, Docker, Linux OS",
            "  - SPECIALTY: AI & Machine Learning, REST API Design, MVC Architecture"
          );
          break;

        case 'projects':
          newOutput.push(
            "Featured Software Projects:",
            "  - JobQuest: Job Application Tracker using Java, Spring Boot, SQLite",
            "  - JPMorganChase: Microservice system validated using Spring Boot, Kafka, H2 DB",
            "  - KrishiSeva: AI Agriculture Plattform using FastAPI, React, Python ML",
            "  - CoLab Connect: Team Recruitment Platform using JavaScript, Node.js, Express, MongoDB",
            "  - 1Stop: Laravel-based event booking and blogging system"
          );
          break;

        case 'resume':
          newOutput.push(
            "Resume Details Summary:",
            "  - Name: Shailendra Pratap Singh",
            "  - Education: B.Tech CSE (KIIT DU) - CGPA: 7.1",
            "  - Internships: Frontend Developer Intern at Tech Solutions Inc. (TSI, 2025)",
            "  - Note: Use the 'Resume PDF' application in launcher to download full resume document."
          );
          break;

        case 'contact':
          newOutput.push(
            "Contact & Communication Channels:",
            "  - Email: shailendraprbns@gmail.com",
            "  - Phone: +91 7080692505",
            "  - GitHub: https://github.com/Shailendra1122/",
            "  - LinkedIn: https://www.linkedin.com/in/shailendra-pratap-singh-067281362/",
            "  - LeetCode: https://leetcode.com/u/Shailendra1122/"
          );
          break;

        case 'clear':
          setOutput([]);
          setInput('');
          return;

        case 'snake':
          setMode('snake');
          setInput('');
          return;

        case 'brick':
          setMode('brick');
          setInput('');
          return;

        default:
          newOutput.push(`bash: command not found: '${commandText}'. Type 'help' to see list of valid programs.`);
          break;
      }

      newOutput.push(""); // add spacer line
      setOutput(newOutput);
      setInput('');
    }
  };

  const handleExitGame = () => {
    setMode('cli');
    setOutput((prev) => [
      ...prev,
      "Exiting game application container...",
      "Type 'help' for options.",
      ""
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
      className="bg-black text-green-400 font-mono text-xs p-4 overflow-y-auto h-full flex flex-col items-stretch w-full scrollbar-none"
      onClick={() => document.getElementById('terminal-cli-input')?.focus()}
    >
      <div className="flex-1 select-text">
        {output.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap leading-relaxed select-text">
            {line}
          </div>
        ))}
      </div>

      {/* Current command input line */}
      <div className="flex items-center gap-1.5 shrink-0 mt-3 border-t border-green-900/40 pt-3">
        <span className="text-green-500 font-bold shrink-0">sps_os://user$</span>
        <input
          id="terminal-cli-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommandSubmit}
          className="bg-transparent border-none outline-none text-green-400 flex-1 font-mono text-xs p-0 m-0 caret-green-500"
          autoComplete="off"
          spellCheck="false"
          autoFocus
        />
      </div>
      
      {/* Scroll anchor */}
      <div ref={endRef} />
    </div>
  );
}
