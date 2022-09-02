import { useState } from 'react';
import Button from '../Button/Button';
import Step from '../Step/Step';
import './style.css';
function QuestionContainer(props) {
    const [num, setNum] = useState(1);
    const onButtonClick = () => {
        if(num < props.questions.length){
            setNum(num + 1);
        }
    }
    return (
        <div className='QuestionContainer'>
            <Step className='step-circle number' number={num}/>
            <h3>Текст вопроса?</h3>
            <div className='content'>Контент</div>
            <div className='btn-container'>
                <Button onClick={onButtonClick}/>
                <Button />
            </div>
        </div>
    );
}
export default QuestionContainer;