import './styles/App.css';
import './styles/Quotes.css';
import Calculator from './Components/calculator';
import Quotes from './Components/Quotes';

function App() {
  return (
    <div className="container">
      <Calculator />
      <Quotes />
    </div>
  );
}

export default App;
