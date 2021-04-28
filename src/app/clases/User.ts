export class User {
    username: String;
    email: String;
    password: String;

    constructor(password: String, username?: string, email?: string) {

      this.username = username;
      this.email = email;
      this.password = password;
    }

  }
