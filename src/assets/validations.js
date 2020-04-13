export const requiredFirstName = (value) => (value ? undefined : 'Required First Name');
export const requiredLastName = (value) => (value ? undefined : 'Required Last Name');

export const requiredThrows = (value) => (value ? undefined : 'Throws Required');
export const requiredBats = (value) => (value ? undefined : 'Bats Required');

export const required = (value) => (value ? undefined : 'Required');
export const minPassLength = (value) => (value.length >= 6 ? undefined : 'Must contain more than 6 characters');
// export const passValue = (v) => ({ v });
// export const equalPass = (value) => {
//   console.log(passValue)
//   console.log(value)
// }

export const maxAge = (value) => (
  (Number.isNaN(value) || value < 30) ? undefined : 'Must not be older than 30'
);

export const requiredAge = (value) => (value ? undefined : 'Age Required');

export const requiredFeet = (value) => (value ? undefined : 'Feet Required');
export const minFeet = (value) => (value >= 4 ? undefined : 'Minimal height is 4');
export const maxFeet = (value) => (value <= 7 ? undefined : 'Maximum height is 7');
export const mustBeNumber = (value) => (Number.isNaN(value) ? 'Must be a number' : undefined);

export const validInches = (value) => ((value >= 0 && value <= 11) ? undefined : 'Inches can be from 0 to 11');
export const requiredInches = (value) => (value ? undefined : 'Inches Required');

export const minWeight = (value) => (value >= 50 ? undefined : 'Minimal weight is 50 lbs');
export const maxWeight = (value) => (value <= 350 ? undefined : ' Maximum weight is 350 lbs');

export const composeValidators = (...validators) => (value) => (
  validators.reduce((error, validator) => error || validator(value), undefined));
