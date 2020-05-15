export class User { 
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  admin: boolean;

  about(): string {
      return "userName = "+this.userName+", firstName = "+this.firstName+", lastName="+this.lastName;
  }

  constructor(inId: number = 0, uName: string = '', pwd: string = '', fName: string = '', lName: string = '', ph: string = '', adm: boolean = false) {
      this.id = inId;
      this.userName = uName;
      this.password = pwd;
      this.firstName = fName;
      this.lastName = lName;
      this.phoneNumber = ph;
      this.admin = adm;
  }
}
