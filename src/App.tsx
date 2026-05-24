import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app-shell">
      <div className="hero-badge">✨ Bazil PDF to Kahoot Game ✨</div>

      <section className="hero">
        <div className="hero-copy">
          <h1>Welcome to the Bazil PDF to Kahoot Game</h1>
          <p>Transform your PDFs into engaging Kahoot games in seconds!</p>
          <button onClick={() => setCount((count) => count + 1)}>
            Create a Kahoot: {count}
          </button>
        </div>

        <div className="hero-art">
          <div className="icon-card cat">🐱</div>
          <div className="icon-card unicorn">🦄</div>
          <div className="icon-card heart">💖</div>
        </div>
      </section>

      <footer className="footer">
        Copyright © 2026 Bazil Inc. All rights reserved. Written and designed by Nikki Lockwood
      </footer>
    </main>
  )
}

export default App
