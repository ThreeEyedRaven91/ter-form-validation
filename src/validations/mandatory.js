const mandatory = ({ key, label, translate }) => (values) => {
  if (values) {
    const value = values[key];
    if (value === undefined || value === null || value.length === 0) {
      const message = translate
        ? translate('error')('mandatory', { label: label || key })
        : `${label || key} is required`;
      return { key, message };
    }
  }

  return true;
};

export default mandatory;

