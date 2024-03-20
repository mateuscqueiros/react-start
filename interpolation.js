function CharacterCount({ text }) {
  return (
    <div>
      {text && text.length > 0
        ? `O texto tem ${text.length} caracteres`
        : 'Por favor coloque um texto'}
    </div>
  );
}

const element = (
  <>
    <CharacterCount text="Hello world" />
    <CharacterCount text="" />
    <CharacterCount />
  </>
);

ReactDOM.render(element, document.getElementById('root'));
