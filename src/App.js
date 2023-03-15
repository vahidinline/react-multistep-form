import { createContext, useState } from 'react';
import Step from './components/Step/Step';
import Stepper from './components/Stepper';
import { Helmet } from 'react-helmet';
export const FormContext = createContext();

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}>
      <Helmet title="Nowruz registration form" />

      <div className="w-screen h-screen flex flex-col items-center justify-start">
        <Stepper />
        <Step />
        <p className="text-center text-gray-500 text-xs italic mt-4">
          Powered by{' '}
          <a href="https://iraniansupportive.org">
            Iranian supportive Organization
          </a>
        </p>
      </div>
    </FormContext.Provider>
  );
}

export default App;
