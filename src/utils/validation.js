export const validateInput = (formData) => {
    const errors = {};
  
    if (!formData.id) {
      errors.id = 'ID is required';
    }
  
    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }
  
    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }
  
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!formData.phone) {
      errors.phone = 'Phone is required';
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Invalid phone format';
    }
  
    return errors;
  };
  
  const isValidEmail = (email) => {
    // Простая проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isValidPhone = (phone) => {
    // Простая проверка формата номера телефона
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  
  