import Line from '../Line/Line';
import Step from '../Step/Step';
import './style.css';

function StepProgress({ questions, answers, numOfQuestion}) {
    let isAgree;
    const stepElements = questions.map((elem, index) => {
        let current = (numOfQuestion === index)? 'step-current': '';
        for (let answer of answers) {
            if (answer.id === elem.id){
               isAgree = (answer.result === 'y') ? 'step-yes' : 'step-no';
            } else if (answer.id < elem.id){
                isAgree = '';
            }
        }
        return (<Step key={index} number={elem.id} className={`step-circle ${current} ${isAgree}`} />);
    });
    return (
        <div className="StepProgress">
            <Line />
            {stepElements}
        </div>
    );
}
export default StepProgress;