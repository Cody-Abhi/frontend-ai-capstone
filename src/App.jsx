const highlights = [
  'Professional repository setup',
  'AI-assisted documentation workflow',
  'Beginner-friendly commit guidance',
];

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">FlyRank Internship Phase 1</p>
        <h1>Clean setup for a review-ready AI-assisted frontend workflow.</h1>
        <p className="lead">
          This starter demonstrates professional repository standards, clear documentation, and a
          simple React structure that is easy to explain in an internship review.
        </p>
      </section>

      <section className="card-grid" aria-label="Project highlights">
        {highlights.map((item) => (
          <article className="card" key={item}>
            <span>{item}</span>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;