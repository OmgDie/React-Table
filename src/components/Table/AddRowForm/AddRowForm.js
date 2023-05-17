import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tableActions } from '../../../redux/reducers/tableReducer';
import { validateInput } from '../../../utils/validation';

const AddRowForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInput(formData);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(tableActions.addRow(formData));
      setFormData({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
        className={errors.id ? 'error' : ''}
      />
      {errors.id && <span className="error-message">{errors.id}</span>}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className={errors.firstName ? 'error' : ''}
      />
      {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className={errors.lastName ? 'error' : ''}
      />
      {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={errors.email ? 'error' : ''}
      />
      {errors.email && <span className="error-message">{errors.email}</span>}
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className={errors.phone ? 'error' : ''}
      />
      {errors.phone && <span className="error-message">{errors.phone}</span>}
      <button type="submit">Add</button>
    </form>
  );
};

export default AddRowForm;
