export default function Home() {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "#0f0f0f", // matches black navbar
        color: "white",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>
        Welcome to My Portfolio
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", opacity: 0.8 }}>
        Explore my work, skills, and projects.  
        I am a passionate frontend developer skilled in React, Next.js, and modern web design.
      </p>
    </div>
  );
}
