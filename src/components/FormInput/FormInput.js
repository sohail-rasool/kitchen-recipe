import React from 'react';
import Classes from './FormInput.module.scss';

const FormInput = ({ id, label, ...attributes }) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={`mb-3 d-block ${Classes.Label}`}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={`w-100 py-2 ${Classes.FormInput}`}
        {...attributes}
      />
    </>
  );
};

export default FormInput;
