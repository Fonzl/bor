import { FC, useContext } from 'react'
import { FormContext } from '../components/Context'

interface Props {
}

const Parameter: FC<Props> = () => {
    const { formState, setFormState } = useContext(FormContext);
    const eventChange = (key: keyof typeof formState, event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prevState) => ({
            ...prevState,
            [key]: parseInt(event.target.value),
            visibleСounting : false

        }));
    };
    const handleBlur = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setFormState({
            ...formState,
            [field]: !value || (field === "age" && value > 150),
            
        });
    };

    console.log(formState)
    return (
        
        <fieldset className="form__group form__row">
            <legend className="visually-hidden">Параметры человека</legend>
            <div className="form__group"><label className="form__label h2" htmlFor="age">Возраст <span
                className="text-light">лет</span></label> <input className={`form__control ${(formState.age !== '' && (formState.age < 0 || formState.age > 150)) ? 'form__control_error' : ''}`} type="number"
                    id="age" name="age" value={formState.age || ""} min="0" max="150" onChange={(e) => eventChange('age', e)} />
                {(formState.age !== '' && (formState.age < 0 || formState.age > 150)) && 
                    <span className="form__error">Значение должно быть от 0 до 150</span>
                }</div>
            <div className="form__group"><label className="form__label h2" htmlFor="height">Рост <span
                className="text-light">см</span></label> <input className={`form__control ${(formState.height !== '' && formState.height <= 0) ? 'form__control_error' : ''}`}
                    type="number" id="height" name="height" value={formState.height || ""} min="0" onChange={(e) => eventChange('height', e)} />
                {(formState.height !== '' && formState.height <=0)  && <span className="form__error">Значение должно быть больше 0</span>}</div>

            <div className="form__group"><label className="form__label h2" htmlFor="weight">Вес <span
                className="text-light">кг</span></label> <input className={`form__control ${(formState.weight !== '' && formState.weight < 0) ? 'form__control_error' : ''}`} type="number"
                    id="weight" name="weight" value={formState.weight || ""} min="0" onChange={(e) => eventChange('weight', e)} />
                {(formState.weight !== '' && formState.weight < 0) &&<span className="form__error">Значение должно быть больше 0</span>}</div>

        </fieldset>
    )
}
export default Parameter;