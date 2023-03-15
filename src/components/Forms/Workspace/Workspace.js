import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { FormContext } from '../../../App';
import * as yup from 'yup';

function Workspace() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  console.log(formData);
  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    numOfParticipants: yup.number().required(),
    diet: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        numOfParticipants: '',
        diet: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}>
      <Form className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">
            Number of Participants
          </label>
          <Field
            name="numOfParticipants"
            className="rounded-md border-2 p-2"
            placeholder="Number of Participants"
          />
        </div>
        <p className="text-gray-500 text-sm italic mb-2">
          tips: If you plan to participate alone, please enter 1
        </p>
        <ErrorMessage name="numOfParticipants" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Diet Preferences</label>
          <Field
            name="diet"
            as="select"
            // className="form-control"
            className="rounded-md border-2 p-2">
            <option value="">Select an option</option>
            <option value="vegan">Vegan</option>
            <option value="not_vegan">Not Vegan</option>
          </Field>
        </div>
        <ErrorMessage name="diet" render={renderError} />
        <button
          // onClick={() => {
          //   handleSubmit(formData);
          // }}
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="submit">
          Continue
        </button>
      </Form>
    </Formik>
  );
}

export default Workspace;
