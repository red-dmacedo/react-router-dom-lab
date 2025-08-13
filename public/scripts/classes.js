class Mailbox {
  constructor(_id, boxSize, boxOwner) {
    this._id = _id || 0;
    this.boxSize = boxSize || 'Small';
    this.boxOwner = boxOwner || '';
  };

  static from(obj = {}) {
    const { _id, boxSize, boxOwner } = obj;
    return new Mailbox(_id, boxSize, boxOwner);
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