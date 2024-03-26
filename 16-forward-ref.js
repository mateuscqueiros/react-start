const Input = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

function Form() {
  const inputRef = React.useRef(null);

  function handleClick() {
    inputRef.currrent.focus();
  }

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Incrementar</button>
    </>
  );
}

ReactDOM.render(<Form />, document.getElementById('root'));
