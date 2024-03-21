const rootElement = document.getElementById('root');

const props = {
  className: 'container',
  children: 'Hello world',
  hello: 'world',
  name: 'Mateus',
};

const element = (
  <>
    <div className="container" id="hello-world">
      Hello world
    </div>
    <div>Goodbye world</div>
  </>
);

ReactDOM.render(element, rootElement);
