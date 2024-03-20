const rootElement = document.getElementById('root');

const props = {
  className: 'container',
  children: 'Hello world',
};

const element = <div {...props} />;
// const element = <div className="container">Hello world</div>

ReactDOM.render(element, rootElement);
