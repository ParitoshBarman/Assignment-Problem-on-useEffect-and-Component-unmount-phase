// src/components/Stopwatch.jsx

import { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  const timerID = useRef();

  useEffect(() => {
    timerID.current = setInterval(() => {

      setCount((privval) => {
        console.log("Counting...")
        if (privval >= 9) {
          console.log("Check");
          // clearInterval(timerID.current);
          cleanupFunc()
        }

        return privval + 1;
      });


    



    }, 1000)


    function cleanupFunc() {
      console.log("Cleared");
      clearInterval(timerID.current);
    }

    return cleanupFunc
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
