//get the first letter of string for avatar
export const getFirstLetterFromString = (name: string | undefined) => {
  if (!name) return '\u00A0';

  //remove spaces from string
  let noSpace = name.split(' ').join('');
  //remove special char from string
  let noSpecialChar = noSpace.replace(/[^a-zA-Z0-9]/g, '');

  //get the 1st letter of string
  return noSpecialChar.charAt(0);
};
