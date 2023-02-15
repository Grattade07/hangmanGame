import './App.css';
import HangmanImage from './components/HangmanImage';
import HangmanWord from './components/HangmanWord';
import HangmanModal from './components/HelpModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App" >
      <h1 id="header">Hangman</h1>
      <HangmanModal />
      <HangmanImage />
      <HangmanWord />
    </div>
  );
}

export default App;
