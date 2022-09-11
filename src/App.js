import React, { useRef, useEffect, useState } from "react";

const App = () => {
  const [render, setRender] = useState(false);
  const renderCounter = useRef(0);

  useEffect(() => {
    renderCounter.current = renderCounter.current + 1;
  });

  return (
    <div className="app">
      <div className="number">Render counter: {renderCounter.current}</div>
      <button className="btn" onClick={() => setRender(!render)}>Render</button>
    </div>
  );

};
export default App;
