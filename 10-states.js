function Greeting() {
  const [name, setName] = React.useState('');
  const handleChange = (event) => setName(event.target.value);
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>{name}</strong> : 'Coloque seu nome'}
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
