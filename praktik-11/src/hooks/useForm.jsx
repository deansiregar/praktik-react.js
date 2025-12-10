import { useState } from 'react';

function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => setValues(initialValues);
  
  const setValue = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    values,
    handleChange,
    resetForm,
    setValue
  };
}

export default useForm;