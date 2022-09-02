import Step from '../Step/Step';
import './style.css';

function StepProgress(props) {
    let stepElements = props.questions.map((elem) => {
        if(elem.id < props.questions.length){
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