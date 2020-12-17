import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor() {
    super();
    //We don't need to use the constructor.
  }

  render() {
    return html`
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <form onsubmit="javascript: return false;" id="userForm" method="POST">
      <div class="form-group pt-3 ml-5" style="width: 20rem;">
        <label for="email"><b>Username</b></label>
        <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
        <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
      </div>

      <div class="form-group pt-1 ml-5" style="width: 20rem;">
        <label for="firstName"><b>First Name</b></label>
        <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
      </div>

      <div class="form-group pt-1 ml-5" style="width: 20rem;">
        <label for="lastName"><b>Last Name</b></label>
        <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
      </div>

      <div class="form-group pt-1 ml-5" style="width: 20rem;">
        <label for="oldpwd"><b>Old Password</b></label>
        <input type="password" class="form-control" id="oldpwd" name="oldpwd" type="text" value="">
      </div>

      <div class="form-group pt-1 ml-5" style="width: 20rem;">
        <label for="newpwd"><b>New Password</b></label>
        <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
      </div>

      <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>
    </form>
    `
  }

  updateUser(e) {

    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("Updated user");
        } else {
            console.log("Error! Didn't update user");
        }
      })
  }

}
customElements.define('edit-user', EditUser);
