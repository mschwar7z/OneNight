import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

function App() {
  const handleNameChange = () => {
    const names = ['Mia', 'Angie', 'Charlie'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <Header />
      
    </div>
  );
}

export default App;
