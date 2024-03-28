function Form() {
  const [username, setUsername] = React.useState('Mateus');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(username);
  }

  function handleChange(event) {
    console.log('change');
    setUsername(event.target.value.toLowerCase());
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={username}
          type="text"
          id="usernameInput"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

const el = React.createElement('div');

ReactDOM.render(<Form />, document.getElementById('root'));
