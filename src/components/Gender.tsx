import { FC, useContext } from 'react'
import {FormContext} from '../components/Context'

interface Props{    
}
const Genders: FC<Props> = () => {

    const { formState, setFormState } = useContext(FormContext);
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormState({ ...formState, gender: value === 'male' });
    }


    




    return(
        <fieldset className="form__group">
            <legend className="form__legend h2">Пол</legend>
            <div className="form__btn-radios">
                <div className={`form__btn-radio ${formState.gender === null ? 'form__btn-radio_error' : ''}`}>
                    <input type="radio" id="male" name="gender" value="male" onChange={handleGenderChange} checked={formState.gender == true}/>
                    <label htmlFor="male">Мужской</label>
                </div>
                <div className={`form__btn-radio ${formState.gender === null ? 'form__btn-radio_error' : ''}`}>
                    <input type="radio" id="female" name="gender" value="female" onChange={handleGenderChange} checked={formState.gender == false}/>
                    <label htmlFor="female">Женский</label>
                </div>
                {formState.gender === null && <span className="form__error">Нужно выбрать пол</span>}
            </div>

        </fieldset>
    )
}

export default Genders;