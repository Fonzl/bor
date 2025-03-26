import React, { FC, useContext } from 'react'
import {FormContext} from './Context'
import { MouseEvent } from 'react';
interface Props{  
}

const CalculationOrReset: FC<Props> = () =>
{
    
     const eventReset=(event: React.MouseEvent<HTMLButtonElement>) => 
        {
            event.preventDefault(); setFormState({ ...formState, checkboxs: null ,age: 0,height:0,weight:0,visibleResult: false}
                
            )  
              
        }
        
        const eventCalculation=(event: React.MouseEvent<HTMLButtonElement>) => 
            {
               event.preventDefault(); setFormState({ ...formState, visibleResult: true}
                    
                )  
                  
            }
    const { formState, setFormState } = useContext(FormContext);
    return(
        <div className="form__btns"><button className="form__submit btn" type="submit"
        disabled={!formState.age || !formState.checkboxs || !formState.height || !formState.weight ||  formState.age >= 150} onClick={eventCalculation}>Рассчитать</button> 
        <button className="form__reset btn btn_transparent" type="reset" onClick={eventReset}>Очистить поля</button></div>
    )
}
export default CalculationOrReset;