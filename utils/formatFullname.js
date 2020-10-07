
module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  if(fullName <= 0) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  const wordsLength = fullName.split(' ').length;
  if(wordsLength !== 2) return 'Error';
  if(typeof firstName !== 'string' && typeof lastName !== 'string') return 'Error';
  if(!firstName || !lastName) return 'Error';
  return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
};
