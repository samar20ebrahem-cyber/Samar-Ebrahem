
import { useState } from "react";
import "./InteractiveTerminal.css";

export  function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    {
      type: "output",
      text: "Welcome to Samar's Terminal!",
    },
    {
      type: "output",
      text: "Type 'help' to see available commands.",
    },
  ]);

  function handleCommand(e) {
    e.preventDefault();

    const value = command.trim().toLowerCase();

    if (!value) return;

    const newHistory = [
      ...history,
      { type: "command", text: command },
    ];

    let output = "";

    switch (value) {
      case "help":
        output =
          "Available commands: about, skills, projects, contact, clear";
        break;

      case "about":
        output =
          "I'm Samar Ebrahem, a Frontend Developer and UI/UX Designer.";
        break;

      case "skills":
        output =
          "HTML, CSS, JavaScript, React, UI/UX Design";
        break;

      case "projects":
        output =
          "Explore my projects in the Projects section of my portfolio.";
        break;

      case "contact":
        output =
          "You can contact me through the Contact section.";
        break;

      case "clear":
        setHistory([]);
        setCommand("");
        return;

      default:
        output = `Command not found: ${value}. Type 'help'.`;
    }

    setHistory([
      ...newHistory,
      { type: "output", text: output },
    ]);

    setCommand("");
  }

  return (
    <section className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>

        <p> samar@portfolio ~ </p>
      </div>

      <div className="terminal-body">
        {history.map((item, index) => (
          <p
            key={index}
            className={`terminal-${item.type}`}
          >
            {item.type === "command" && (
              <span>visitor@samar:~$ </span>
            )}
            {item.text}
          </p>
        ))}

        <form onSubmit={handleCommand}>
          <label htmlFor="terminal-input">
            visitor@samar:~$
          </label>

          <input
            id="terminal-input"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            autoComplete="off"
            spellCheck="false"
            aria-label="Enter a terminal command"
          />
        </form>
      </div>
    </section>
  );
}
