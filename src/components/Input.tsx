import React from 'react';

interface IInputProps {
  label: string;
  inputType?: string;
  placeholder?: string;
  value: string | number | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
  label,
  inputType = 'text',
  placeholder = `Enter ${label}`,
  value,
  onChange,
}) => {
  return (
    <div className="w-full flex flex-col">
      <label className="mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="h-8 border-b-2 focus:outline-none focus:border-gray-400 border-gray-200"
        type={inputType}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
