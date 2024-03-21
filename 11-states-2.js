function Count() {
  const [count, setCount] = React.useState(0);

  const timesFive = count * 5;

  console.log('render');

  return (
    <div>
      <p>Cliques: {count}</p>
      <p>Multiplicado por 5: {timesFive}</p>
      <button
        onClick={() => {
          setCount((previous) => previous + 1);
        }}
      >
        Clique aqui
      </button>
    </div>
  );
}

ReactDOM.render(<Count />, document.getElementById('root'));
