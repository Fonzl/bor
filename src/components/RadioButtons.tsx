import { FC, useContext } from 'react'
import {FormContext} from './Context'
interface Props{  
}
const ListButtons: FC<Props> = ()=> {
    const {formState, setFormState} = useContext(FormContext);
    const eventCheckBoxs = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.id;           
        setFormState({ ...formState, checkboxs: value});
    }
    return(
        <fieldset className="form__group">
                    <legend className="form__legend h2">Физическая активность</legend>
                    <div className="form__radio"><input type="radio" name="activity" id="min"  checked={formState.checkboxs === "min"} onChange={eventCheckBoxs}/> <label
                            className="text" htmlFor="min">Минимальная <span className="text-light">Сидячая работа, отсутствие
                                физических нагрузок</span></label></div>
                    <div className="form__radio"><input type="radio" name="activity" id="low" checked={formState.checkboxs === "low" }onChange={eventCheckBoxs}/> <label className="text"
                            htmlFor="low">Низкая <span className="text-light">Редкие, нерегулярные тренировки, активность в
                                быту</span></label></div>
                    <div className="form__radio"><input type="radio" name="activity" id="mid"checked={formState.checkboxs === "mid"}onChange={eventCheckBoxs}/> <label className="text"
                            htmlFor="mid">Средняя <span className="text-light">Тренировки 3-5 раз в неделю</span></label></div>
                    <div className="form__radio"><input type="radio" name="activity" id="high" checked={formState.checkboxs === "high"}onChange={eventCheckBoxs}/> <label className="text"
                            htmlFor="high">Высокая <span className="text-light">Тренировки 6-7 раз в неделю</span></label></div>
                    <div className="form__radio"><input type="radio" name="activity" id="very-high" checked={formState.checkboxs === "very-high"}onChange={eventCheckBoxs}/> <label className="text"
                            htmlFor="very-high">Очень высокая <span className="text-light">Больше 6 тренировок в неделю и
                                физическая работа</span></label></div>
                </fieldset>
    )
}
export default ListButtons;