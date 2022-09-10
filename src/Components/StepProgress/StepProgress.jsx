import Step from '../Step/Step';
import './style.css';

function StepProgress({ questions, isAgree}) {
    const stepElements = questions.map((elem, index) => {
        if(elem.id < questions.length){
            return (<Step key={index} number={elem.id} className={`step-circle line`}/>);
        } else {
            return (<Step key={index} number={elem.id} className={'step-circle'} />);
        }
    });
    return (
        <div className="StepProgress">
            {stepElements}
        </div>
    );
}
export default StepProgress;