import React, { FC, useContext } from 'react'
import { FormContext } from './Context'
import { MouseEvent } from 'react';
interface Props {
}

const CalculationOrReset: FC<Props> = () => {

    const eventReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); setFormState({ ...formState, checkboxs: 'min', age: '', height: '', weight: '', visibleСounting: false,gender : true }

        )

    }

    const eventCalculation = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); setFormState({ ...formState, visibleСounting: true }

        )

    }
    const valid = () => {
        if ((   formState.height !== '' && formState.age !== '' && formState.weight !== '') && formState.height > 0 && formState.checkboxs  && formState.age > 0 && formState.age &&
            formState.weight > 0 && formState.age < 150)
            {
                return false
            }
        else return true
           
    }
    const { formState, setFormState } = useContext(FormContext);
    return (
        <div className="form__btns"><button className="form__submit btn" type="submit"
            disabled={valid()} onClick={eventCalculation}>Рассчитать</button>
            <button className="form__reset btn btn_transparent" type="reset" onClick={eventReset}>Очистить поля</button></div>
    )
}
export default CalculationOrReset;