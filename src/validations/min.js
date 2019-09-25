const min = ({ key, length, label, translate }) => (values) => {
  if (values && values[key]) {
    const value = values[key];
    if (value.length < length) {
      const message = translate
        ? translate('error')('min', { label: label || key })
        : `${label || key} cannot be less than ${length} characters`;
      return { key, message };
    }
  }

  return true;
};

export default min;

