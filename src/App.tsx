import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handleHover = (e: any) => {
      const target = e.target.closest("[data-marker]");
      if (target) {
        window.parent.postMessage(
          {
            type: "USERWEB_HOVER",
            id: target.getAttribute("data-marker"),
          },
          "*"
        );
      }
    };

    const handleClick = (e: any) => {
      const target = e.target.closest("[data-marker]");
      if (target) {
        window.parent.postMessage(
          {
            type: "USERWEB_SELECT",
            id: target.getAttribute("data-marker"),
          },
          "*"
        );
      }
    };

    document.addEventListener("mouseover", handleHover);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <section style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h1>Hello from UserWeb</h1>
        <p>This is a sample paragraph for inspection.</p>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <div>
          <i className="fa fa-star" aria-hidden="true"></i> Icon example
        </div>
        <section>
          <h2>Nested Section</h2>
          <p>More text here</p>
        </section>
      </section>
    </div>
  );
}