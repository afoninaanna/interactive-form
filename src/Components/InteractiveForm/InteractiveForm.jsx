import { useState } from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import StepProgress from "../StepProgress/StepProgress";

let answers = [];
function InteractiveForm({ questions }){
    const [numOfQuestion, setNumOfQuestion] = useState(0);
    const question = questions[numOfQuestion];

    function changeStep(indexOfBtn) {
        for (let nextStep of question.actions[indexOfBtn].nextStep) {
            if (nextStep.conditions) {
                let filteredAnswers = answers.filter(answer => {
                    for(let condition of nextStep.conditions){
                        if ((answer.id === condition.id) && (answer.result === condition.result)) {
                            return true;
                        }
                    }
                });
                if (JSON.stringify(nextStep.conditions) === JSON.stringify(filteredAnswers)) {
                    return setNumOfQuestion(nextStep.id - 1);
                }
            }
            setNumOfQuestion(nextStep.id - 1);
        }
    }
    function onButtonClick(indexOfBtn, answer) {
        if (numOfQuestion < questions.length) {
            changeStep(indexOfBtn);
            answers.push({ id: question.id, result: answer });
        };
    };
    return(
        <div>
            <StepProgress questions={questions} answers={answers} numOfQuestion={numOfQuestion} />
            <QuestionContainer question={question} onButtonClick={onButtonClick} />
        </div>
    );
}
export default InteractiveForm;