const rootElement = document.getElementById('root');

function Message({ children }) {
  return <div className="message">{children}</div>;
}

const element = (
  <div className="container">
    <Message>Hello world</Message>
    <Message>Goodbye world</Message>
  </div>
);

ReactDOM.render(element, rootElement);
