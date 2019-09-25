const same = ({ key1, key2, label1, label2, translate }) => (values) => {
  if (values && values[key1] && values[key2]) {
    const value1 = values[key1];
    const value2 = values[key2];
    if (value1 !== value2) {
      const message = translate
        ? translate('error')('same', { label1: label1 || key1, label2: label2 || key2 })
        : `${label1 || key1} and ${label2 || key2} must be the same`;
      return { key: key2, message };
    }
  }

  return true;
};

export default same;

