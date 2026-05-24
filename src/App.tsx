import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app-shell">
      <div className="hero-badge">✨ Cats + Unicorns + Pink Magic ✨</div>

      <section className="hero">
        <div className="hero-copy">
          <h1>Welcome to the Pink Purr-fect World</h1>
          <p>Everything here is soft, sparkly, and full of rainbow fluff.</p>
          <button onClick={() => setCount((count) => count + 1)}>
            Pet the unicorns: {count}
          </button>
        </div>

        <div className="hero-art">
          <div className="icon-card cat">🐱</div>
          <div className="icon-card unicorn">🦄</div>
          <div className="icon-card heart">💖</div>
        </div>
      </section>

      <section className="card-grid">
        <article className="card">
          <h2>Pink Kitty</h2>
          <p>Soft paws, glittery whiskers, and sleepy rainbow naps.</p>
        </article>
        <article className="card">
          <h2>Unicorn Dreams</h2>
          <p>Gallop through cotton-candy clouds and sparkling stardust.</p>
        </article>
        <article className="card">
          <h2>Magic Button</h2>
          <p>Tap it to add more love to the page.</p>
        </article>
      </section>

      <footer className="footer">
        Made with pink vibes, cats, unicorns, and a whole lot of sparkle.
      </footer>
    </main>
  )
}

export default App
