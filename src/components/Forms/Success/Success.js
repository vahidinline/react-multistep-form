import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FormContext } from '../../../App';

function Success() {
  const { formData } = useContext(FormContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    setIsLoading(true);
    const result = await axios.post(
      'https://iso-backend.herokuapp.com/nowruz',
      {
        formData,
      }
    );
    console.log(result);
    setIsLoading(false);
  };

  return (
    <div className="font-medium">
      <p className="text-lg text-center">
        Dear {formData.name}; please click on the submit button to complete your
        registration
      </p>
      <p className="text-lg text-center">
        {formData.numOfParticipants}{' '}
        {formData.diet === 'vegan' ? 'Vegan' : 'Not Vegan'} people will
        participate in the event
      </p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        onClick={handleSubmit}>
        <div role="status">
          <span class="sr-only">{isLoading ? 'Loading...' : 'Submit'}</span>
        </div>
        Submit
      </button>
    </div>
  );
}

export default Success;
