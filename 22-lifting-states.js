function Name({ name, onNameChange }) {
  return (
    <div>
      <label>Name:</label>
      <input value={name} onChange={onNameChange} />
    </div>
  );
}

function FavoriteAnimal() {
  const [animal, setAnimal] = React.useState('');
  return (
    <div>
      <label>FavoriteAnimal:</label>
      <input
        value={animal}
        onChange={(event) => setAnimal(event.target.value)}
      />
    </div>
  );
}

function Display({ name, animal }) {
  return <div>{`Olá ${name}, seu animal favorito é ${animal}!`}</div>;
}

function App() {
  const [name, setName] = React.useState('');

  return (
    <form>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      <FavoriteAnimal />
      <Display name={name} />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
