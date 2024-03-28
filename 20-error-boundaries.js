const ErrorBoundary = ReactErrorBoundary.ErrorBoundary;

// class ErrorBoundary extends React.Component {
//   state = { error: null };
//   static getDerivedStateFromError(error) {
//     return { error };
//   }
//   render() {
//     const { error } = this.state;
//     if (error) {
//       return <this.props.FallbackComponent error={error} />;
//     }
//     return this.props.children;
//   }
// }

function Bomb() {
  return new Error('Houve um erro!');
}

function App() {
  const [explode, setExplode] = React.useState(false);

  function ErrorFallback() {
    return <>Eu sou seu pai!</>;
  }
  return (
    <div>
      <div>
        <button onClick={() => setExplode(true)}>Boom</button>
      </div>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {explode ? <Bomb /> : 'Aperte o botão!'}
        </ErrorBoundary>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
