// function requiredParam(paramName) {
//   throw new Error(`Parameter '${paramName}' is required.`);
// }

class Mailbox {
  constructor(inputObject = {}) {
    const { _id, boxSize, boxOwner } = inputObject;
    this._id = _id || 0;
    this.boxSize = boxSize || 'Small';
    this.boxOwner = boxOwner || '';
  };

  /* This is an example of validating the variable before setting it:

    Note: This is not implemented to allow the value to be an empty string during state management

  set boxSize(str){
    if(typeof str !== 'string') throw new Error(`Parameter 'boxSize' must be a string value`);
    const sizes = ['Small', 'Medium', 'Large'];
    if(!sizes.includes(str)) throw new Error(`'boxSize' must be one of the following: ${sizes.join(', ')}`);
    this.boxSize = str;
  };
  */
};

export {
  Mailbox,
}