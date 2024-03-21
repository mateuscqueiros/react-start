const rootElement = document.getElementById('root');

function tick() {
  const time = new Date().toLocaleTimeString();

  const element = (
    <>
      <input value={time} />
    </>
  );

  ReactDOM.render(element, document.getElementById('root'));
}

function tick2() {
  const time = new Date().toLocaleTimeString();

  const element = document.createElement('input');
  element.value = time;

  rootElement.textContent = '';
  rootElement.appendChild(element);
}

setInterval(tick, 1000);
