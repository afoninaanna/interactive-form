import Step from '../Step/Step';
import './style.css';

function StepProgress({ questions}) {
    const stepElements = questions.map((elem) => {
        if(elem.id < questions.length){
            return (<Step number={elem.id} className='step-circle line'/>);
        } else {
            return (<Step number={elem.id} className='step-circle' />);
        }
    });
    return (
        <div className="StepProgress">
            {stepElements}
        </div>
    );
}
export default StepProgress;