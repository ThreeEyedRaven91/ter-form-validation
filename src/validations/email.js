const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const email = ({ key, label, translate }) => (values) => {
  if (values && values[key]) {
    const value = values[key];
    if (!validateEmail(value)) {
      const message = translate
        ? translate('error')('email', { label: label || key })
        : `${label || key} must be in email format`;
      return { key, message };
    }
  }

  return true;
};

export default email;

