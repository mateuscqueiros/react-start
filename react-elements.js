const rootElement = document.getElementById('root');

const element = React.createElement('div', {
  className: 'container',
  children: ['Hello world'],
});

ReactDOM.render(element, rootElement);
