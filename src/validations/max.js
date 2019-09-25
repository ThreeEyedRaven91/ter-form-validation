const max = ({ key, length, label, translate }) => (values) => {
  if (values && values[key]) {
    const value = values[key];
    if (value.length > length) {
      const message = translate
        ? translate('error')('max', { label: label || key })
        : `${label || key} cannot be longer than ${length} characters`;
      return { key, message };
    }
  }

  return true;
};

export default max;

