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

const caloriesResult =() =>
{
    if(formState.gender)
        {
            return((10 * formState.height)   + (6.25 *formState.weight) - (5 *formState.age) +5)
        }
    else{
            return((10 * formState.height)   + (6.25 *formState.weight) - (5 *formState.age) - 161)
        }
}

if(!(formState.visibleResult && 
    formState.age && 
    formState.age <= 150 && 
    formState.height && 
    formState.weight && 
    formState.checkboxs)){
    return(null);
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