function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}

function Greeting() {
  const [name, setName] = useLocalStorageState('name');
  const [email, setEmail] = useLocalStorageState('email');
  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);

  const message = name + ' é legal';

  React.useEffect(() => {
    console.log('no deps');
  });

  React.useEffect(() => {
    console.log('deps vazio');
  }, []);

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
