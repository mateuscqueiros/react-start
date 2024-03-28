const allItems = [
  { id: 'm', value: 'maça' },
  { id: 'l', value: 'laranja' },
  { id: 'u', value: 'uva' },
  { id: 'p', value: 'pera' },
];

function App() {
  const [items, setItems] = React.useState([]);

  // const el = React.createElement('ul', {
  //   children: ['maça', 'laranja'],
  // });

  // console.log(el);

  function addItem() {
    setItems([...items, allItems.find((item) => !items.includes(item))]);
  }

  function removeItem(itemToRemove) {
    setItems(items.filter((item) => item !== itemToRemove));
  }

  return (
    <div>
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>
            <label htmlFor={`${item.value}-input`}>{item.value}</label>
            <input id={`${item.value}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
