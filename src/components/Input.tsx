import React from 'react';
import { ErrorMessage, useField } from 'formik';
import merge from 'clsx';

type IInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

const Input: React.FC<IInputProps> = ({ label, ...props }) => {
  const [field, { error, touched }] = useField(props);
  const { type = 'text', placeholder = `Enter ${label}` } = props;

  return (
    <div className="w-full flex flex-col">
      <label className="mb-2" htmlFor={field.name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        id={field.name}
        placeholder={placeholder}
        className={merge(
          'h-8 border-b-2 focus:outline-none focus:border-gray-700 border-gray-200',
          error && touched && 'border-red-600'
        )}
        type={type}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <p className="text-red-600 font-semibold text-xs">{msg}</p>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
