
class Clients {
  constructor (
    name = '',
    ssn = '',
    age = Number, 
    birthday = '',
    address = '',
    zipCode = '',
    active = Boolean,
    relationship = Number,
  ) {
    this.name = name;
    this.ssn = ssn;
    this.age = age
    this.birthday = birthday;
    this.address = address;
    this.zipCode = zipCode
    this.active = active;
    this.relationship = relationship;
  }
}

module.exports = Clients