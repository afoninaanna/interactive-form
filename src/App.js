import { useState } from 'react';
import './App.css';
import QuestionContainer from './Components/QuestionContainer/QuestionContainer';
import StepProgress from './Components/StepProgress/StepProgress';

let answers = [];

function App({questions}) {
  const [numOfQuestion, setNumOfQuestion] = useState(0);
  const question = questions[numOfQuestion];
  const [isAgree, setAgree] = useState();

  function changeStep(indexOfBtn){
    for (let nextStep of question.actions[indexOfBtn].nextStep) { 
      if(nextStep.conditions){
        if (JSON.stringify(nextStep.conditions) === JSON.stringify(answers)){
          return setNumOfQuestion(nextStep.id - 1);
        }
      }
      setNumOfQuestion(nextStep.id - 1);
    }
  }
  function changeStepColor(answer){
    (answer === 'y') ? setAgree(true) : setAgree(false);
  }
  function onButtonClick (indexOfBtn, answer) {
    if (numOfQuestion < questions.length) {
      changeStep(indexOfBtn);
      answers.push({id: question.id, result: answer});
      changeStepColor(answer);
    };
  };
  return (
    <div>
      <StepProgress questions={questions} isAgree={isAgree}/>
      <QuestionContainer question={question} onButtonClick={onButtonClick}/>
    </div>
  );
}
export default App;
