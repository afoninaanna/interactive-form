import Button from '../Button/Button';
import Step from '../Step/Step';
import './style.css';
function QuestionContainer({ question, onButtonClick }) { 
    const buttons = question.actions?.map((action, indexOfBtn) => { //добавить key
        let isActive = (action.title === 'Yes') ? true : false;
        return <Button onClick={() => onButtonClick(indexOfBtn, action.result)} title={action.title} className={isActive? 'Button yes': 'Button'}/>
    });
    return (
        <div className='QuestionContainer'>
            <Step className='step-circle number' number={question.id}/>
            <h3>{question.title}</h3>
            <div className='content'>{question.content}</div>
            <div className='btn-container'>
                {buttons}
            </div>
        </div>
    );
}
export default QuestionContainer;