import './App.css';
import InteractiveForm from './Components/InteractiveForm/InteractiveForm';
import questions from './questions.json'

function App() {
  return (
    <InteractiveForm questions={questions}/>
  );
}
export default App;