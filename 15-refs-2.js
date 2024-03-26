function Stopwatch() {
  const [startTime, setStartTime] = React.useState(null);
  const [now, setNow] = React.useState(null);
  const idRef = React.useRef(null);

  function handleStart() {
    // Start counting.
    if (startTime === null) {
      setStartTime(Date.now());
    }
    setNow(Date.now());

    const id = setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now());
    }, 10);

    idRef.current = id;
  }

  console.log('render');

  function handleStop() {
    setStartTime(now);
    clearInterval(idRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
