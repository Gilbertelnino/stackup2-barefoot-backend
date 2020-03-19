export default {
  signupData: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidFirstname: {
    firstName: 'Jo 3hn',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidLastname: {
    firstName: 'John',
    lastName: 'Do 3e',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidUsername: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdo,e',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidEmail: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  invalidGender: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'none',
  },
  invalidPassword: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kigali',
    password: 'hellowo',
    gender: 'Male',
  },
  invalidAddress: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'john@doe.com',
    address: 'Kiga 3li',
    password: 'helloworld3',
    gender: 'Male',
  },
  realLoginDataFromTheDb: {
    email: 'john@doe.com',
    password: 'helloworld3'
  },
  WrongLoginPasswordData: {
    email: 'john@doe.com',
    password: '12334ewe'
  },
  WrongLoginEmailData: {
    email: 'emmamugi@gmail.com',
    password: 'helloworld3'
  },
  emptyLoginPassword: {
    email: 'john@doe.com',
    password: ''
  },
  emptyLoginEmail: {
    email: '',
    password: 'hheerr'
  },
  userServiceData: {
    firstName: 'Jane',
    lastName: 'Doe',
    username: 'Jdoe',
    email: 'jane@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Female',
  },
  usernameGeneratorUtil: {
    firstName: 'Joe',
    lastName: 'Doe',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Male',
  },
  usernameGeneratorUtilOne: {
    firstName: 'Joy',
    lastName: 'Doe',
    email: 'joy@doe.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Female',
  },
  usernameGeneratorUtilTwo: {
    firstName: 'Jeff',
    lastName: 'Brad',
    email: 'andela@user.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Female',
  },
  usernameGeneratorUtilThree: {
    firstName: 'Lyse',
    lastName: 'Brown',
    email: 'andela@user.com',
    address: 'Kigali',
    password: 'helloworld3',
    gender: 'Female',
  },
  emailGeneratorUtil: {
    email: 'andela@user.com'
  },
  oneWayTripRequester: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'onewaytripreqr',
    email: 'onewaytripreqr@example.com',
    address: 'Kigali',
    password: 'Onewaytripreq123',
    gender: 'Male',
  },
  oneWayTripRequest: {
    travelFrom: 'kigali',
    travelTo: 'Butare',
    travelDate: new Date().toDateString(),
    travelReason: 'business meeting',
    travelType: 'One-way',
    accommodation: true,
  },
  realLoginDataFromDbVerifiedUser: {
    email: 'john@doe.com',
    password: 'markjoe45'
  },
  realLoginDataFromDbVerifiedUserwithUsername: {
    username: 'Jdoe',
    password: 'markjoe45'
  },
  realLoginDataFromDbUnVerifiedUser: {
    email: 'barefootnomad2@gmail.com',
    password: 'barefootnomad2'
  },
  updateProfileWithValidData: {
    firstName: 'Emma',
    lastName: 'descholar',
    username: 'descholartr',
    gender: 'Male',
    birthDate: '2000-01-01',
    preferredCurrency: 'USD',
    preferredLanguage: 'English',
    department: 'IT',
    idCardNumber: '123456789'
  },
  updateProfileWithEmailWithinThem: {
    email: 'barefootnomad@gmail.com',
    firstName: 'Emma',
    lastName: 'descholar',
    username: 'descholartr',
    gender: 'Male',
    birthDate: '2000-01-01',
    preferredCurrency: 'USD',
    preferredLanguage: 'English',
    department: 'IT',
    idCardNumber: '123456789'
  },
  updateProfileWithEmptyUsername: {
    firstName: 'Emma',
    lastName: 'descholar',
    username: '',
    gender: 'Male',
    birthDate: '2000-01-01',
    preferredCurrency: 'USD',
    preferredLanguage: 'English',
    department: 'IT',
    idCardNumber: '123456789'
  },
  updateProfileWithAlreadyExistsUsername: {
    firstName: 'Emma',
    lastName: 'descholar',
    username: 'UDivine',
    gender: 'Male',
    birthDate: '2000-01-01',
    preferredCurrency: 'USD',
    preferredLanguage: 'English',
    department: 'IT',
    idCardNumber: '123456789'
  },
  changeUserPasswordWithValidDataAndVerified: {
    passwordToUpdate: 'Mugirase1', oldPassword: 'clueradevil'
  },
  changeUserPasswordWithValidData: {
    passwordToUpdate: 'Mugirase1', oldPassword: 'markjoe45'
  },
  changeUserPasswordWithoutOldPassword: {
    passwordToUpdate: 'Mugirase1' },
  findUserByEmailOfUsername: 'barefootnomad2@gmail.com'
};
