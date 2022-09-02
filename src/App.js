import { MyContext } from '.';
import './App.css';
import QuestionContainer from './Components/QuestionContainer/QuestionContainer';
import StepProgress from './Components/StepProgress/StepProgress';

function App() {
  return (
    <MyContext.Consumer>
      { questions => (
          <div className="App">
            <StepProgress questions={questions}/>
            <QuestionContainer questions={questions}/>
          </div>
      )}
    </MyContext.Consumer>
  );
}

export default App;
