/* function addEvents() {
  document.querySelector('#click-me').addEventListener('click', () => {
    console.log('click');
  });
} 

addEvents();
*/

const state = { eventCount: 0, username: '' };

function App() {
  console.log('render');

  function handleClick() {
    console.log('click');
    setState({ eventCount: state.eventCount + 1 });
  }

  return (
    <div>
      <p>Houveram {state.eventCount} eventos.</p>
      <p>
        <button onClick={handleClick}>Clique</button>
      </p>
      <p>Input: {state.username}</p>
      <p>
        <input
          onChange={(event) => setState({ username: event.target.value })}
        />
      </p>
    </div>
  );
}

function setState(newState) {
  Object.assign(state, newState);
  renderApp();
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();
