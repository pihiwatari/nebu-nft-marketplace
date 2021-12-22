const capitalize = (str) => {
  str = String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
