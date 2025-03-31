import React, { FC, useContext } from 'react'
import {FormContext} from './Context'
import { error } from 'console';

interface Props{}

const Calculation: FC<Props> =() =>
{
    const { formState, setFormState } = useContext(FormContext);
    const chekBoxResult = () => {
      
        switch (formState.checkboxs) {
            case "min": return 1.2;
            case "low": return 1.375;
            case "mid": return 1.55;
            case "high": return 1.725;
            case "very-high": return 1.9;
            default: return 0;
    }
};

const caloriesResult = () =>
{
    if(formState.height && formState.age && formState.weight && formState.visibleСounting ){
        if(formState.gender)
            {
                return(
                    66.5 +(13.75 * formState.height)   + (5.003 *formState.weight) - (6.775 *formState.age))
            }
        else{
                return(
                    655.1+(9.563 * formState.height)   + (1.85 *formState.weight) - (4.676 *formState.age))
            }
    }
    else return 0;
}

if(!(formState.visibleСounting)){
    return(    <div 
        className={`counter-result wrapper ${formState.visibleСounting ? 'counter-result_active' : 'counter-result_hidden'}`}
        style={{ display: formState.visibleСounting ? 'block' : 'none' }}
    >
        {/* содержимое */}
    </div>);
}
else
return( <div className="counter-result counter-result_active wrapper">
         
    <h2 className="counter-result__title h2">Ваш результат</h2>
    <div className="counter-result__body">
        <p className="counter-result__text text">Суточная норма - <strong>{`${caloriesResult()}`} ккал</strong>, необходимая организму для
            нормального функционирования.</p>
        <p className="counter-result__text text">Для поддержания веса нужно употреблять <strong>{`${caloriesResult() * chekBoxResult()}`}ккал</strong> в
            день.</p>
    </div>
</div>
)
}
export default Calculation;