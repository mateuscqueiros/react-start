/**
Podemos utilizar tanto o ref quando o htmlFor + id, os dois dão o mesmo
resultado.
*/
function Form() {
  const usernameInputRef = React.useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    event.persist();

    const username = event.target.elements.usernameInput.value;
    console.log(username);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" ref={usernameInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

const el = React.createElement('div');

ReactDOM.render(<Form />, document.getElementById('root'));
