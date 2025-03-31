import React, { createContext, useState } from 'react';

interface FormState {
    gender: boolean ;
    age: number| '' ;
    height: number | '';
    weight: number | '';
    checkboxs: string ;
    visibleСounting: boolean;
}

const Form: FormState = {
    gender: true,
    age: '',
    height: '',
    weight: '',
    checkboxs: "min",
    visibleСounting: false,
}

interface FormContextType {
    formState: FormState;
    setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

export const FormContext = createContext<FormContextType>({
    formState: Form,
    setFormState: () => {},
});

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [formState, setFormState] = useState<FormState>(Form);

    return (
        <FormContext.Provider value={{ formState, setFormState }}>
            {children}
        </FormContext.Provider>
    );
};


