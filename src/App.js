import { useState } from 'react';
import './App.css';
import QuestionContainer from './Components/QuestionContainer/QuestionContainer';
import StepProgress from './Components/StepProgress/StepProgress';

let answers = [];

function App({questions}) {
  const [numOfQuestion, setNumOfQuestion] = useState(0);
  const question = questions[numOfQuestion];

  function changeStep(indexOfBtn){
    for (let nextStep of question.actions[indexOfBtn]?.nextStep) { //возникает ошибка после 3 вопроса
      console.log(question.actions[indexOfBtn]?.nextStep)
      if (JSON.stringify(nextStep.conditions) === JSON.stringify(answers)){
        console.log('проверка входа');
        setNumOfQuestion(nextStep.id - 1);
      }
      setNumOfQuestion(nextStep.id - 1);
    }
  }
  function onButtonClick (indexOfBtn, answer) {
    if (numOfQuestion < questions.length) {
      setNumOfQuestion(numOfQuestion + 1);
      answers.push({id: question.id, result: answer});
      console.log(answers);
      changeStep(numOfQuestion, indexOfBtn);
    };
  };
  return (
    <div>
      <StepProgress questions={questions}/>
      <QuestionContainer question={question} onButtonClick={onButtonClick}/>
    </div>
  );
}
export default App;
