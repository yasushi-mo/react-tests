export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p style={{ fontWeight: "bold" }}>You are on the about page.</p>

      {Array.from({ length: 20 }).map((_, i) => (
        <section key={i}>
          <h2>Section {i + 1}</h2>
          <p>section {i + 1} is good.</p>
        </section>
      ))}
    </div>
  );
};
