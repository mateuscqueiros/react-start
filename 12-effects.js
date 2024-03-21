function Greeting() {
  const [name, setName] = React.useState(
    window.localStorage.getItem('name') || ''
  );
  const [email, setEmail] = React.useState(
    window.localStorage.getItem('email') || ''
  );
  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);

  const message = name + ' é legal';

  React.useEffect(() => {
    console.log('no deps');
  });

  React.useEffect(() => {
    console.log('deps vazio');
  }, []);

  React.useEffect(() => {
    console.log('change name');
    window.localStorage.setItem('name', name);
  }, [name]);

  React.useEffect(() => {
    console.log('change email');
    window.localStorage.setItem('email', email);
  }, [email]);

  console.log('render');

  return (
    <div>
      <form>
        <p>
          <label htmlFor="name">Name: </label>
          <input value={name} onChange={handleChangeName} id="name" />
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input
            value={email}
            onChange={handleChangeEmail}
            id="email"
            type="email"
          />
        </p>
      </form>
      <p>{message}</p>
      {name ? <strong>{name}</strong> : 'Coloque seu nome'}
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
