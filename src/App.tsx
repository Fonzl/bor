import React from 'react';
import { FormProvider } from './components/Context'
import Genders from './components/Gender';
import Parameter from './components/Parameters';
import ListButtons from './components/RadioButtons';
import CalculationOrReset from './components/СalculationOrReset';
import './App.css';
import { InvalidatedProjectKind } from 'typescript';

function App() {
  return (
    <>
    <FormProvider>

        <div className="bg">
                    <div className="bg__overlay"></div>
                    <picture className="bg__img">
                      <source srcSet="/images/bg.webp" type="image/webp" />
                      <img src="/images/bg.jpeg" alt="Фоновое изображение" />
                    </picture>
                </div>
                <div className="counter">
                    <h1 className="counter__title h1">Счетчик калорий</h1>
                    <div className="counter__body wrapper">
                        <form className="form">
                      <Genders></Genders>
                      <Parameter></Parameter>
                      <ListButtons></ListButtons>
                      <CalculationOrReset></CalculationOrReset>
                        </form>
                    </div>
                </div>
                </FormProvider>
    </>
  );
}

export default App;
