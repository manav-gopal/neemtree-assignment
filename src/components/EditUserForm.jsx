// AddUserForm.js
import "./style/AddUserForm.scss";
import FormInput from "../utils/FormInput";

const EditUserForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted......");
  };

  return (
    <div className="add-user-form">
      <h2>Edit User form</h2>
      <form onSubmit={handleSubmit}>
        <p>All fields are mandatory</p>
        <FormInput label="First Name" name="firstName" placeholder="Name" />
        <FormInput label="Last Name" name="lastName" placeholder="Last Name" />
        <FormInput name="phone" type="tel" placeholder="Phone Number" />
        <FormInput name="email" type="email" placeholder="Email Id" />
        <div className="form-group">
          <label>
            Role <span>*</span>
          </label>
          <select>
            <option value="0">User</option>
            <option value="1">Admin</option>
            <option value="2">Role 3</option>
            <option value="3">Role 4</option>
          </select>
        </div>
        <FormInput name="location" placeholder="Location" />
        <div className="form-group">
          <label>
            Department <span>*</span>
          </label>
          <select>
            <option value="0">Department 1</option>
            <option value="0">Department 2</option>
            <option value="0">Department 3</option>
            <option value="0">Department 4</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditUserForm;
