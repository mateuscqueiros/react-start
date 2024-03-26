function Form() {
  const inputRef = React.useRef(null);
  const countRef = React.useRef(0);

  function handleClick() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  console.log('render');

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Incrementar</button>
    </>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
