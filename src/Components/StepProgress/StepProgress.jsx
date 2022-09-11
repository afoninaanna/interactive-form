import Step from '../Step/Step';
import './style.css';

function StepProgress({ questions, isAgree}) {
    const stepElements = questions.map((elem, index) => {
        let line = (elem.id < questions.length)? 'line': '';
        return (<Step key={index} number={elem.id} className={`step-circle ${line}`} />);
    });
    return (
        <div className="StepProgress">
            {stepElements}
        </div>
    );
}
export default StepProgress;