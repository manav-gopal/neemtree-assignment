import "./style/UserForm.scss";
import FormInput from "../utils/FormInput";

const UserForm = ({ isEditing }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted......");
  };

  return (
    <div className="user-form">
      <h2>{isEditing ? "Edit User form" : "Add User form"}</h2>
      <form onSubmit={handleSubmit}>
        <p>All fields are mandatory</p>
        <FormInput label="First Name" name="firstName" placeholder="Name" />
        <FormInput label="Last Name" name="lastName" placeholder="Last Name" />
        <FormInput name="phone" type="tel" placeholder="Phone Number" />
        <FormInput name="email" type="email" placeholder="Email Id" />
        {isEditing ? (
          <>
            <div className="form-group">
              <label>
                Role <span>*</span>
              </label>
              <select name="role">
                <option value="0">User</option>
                <option value="1">Admin</option>
                <option value="2">Role 3</option>
                <option value="3">Role 4</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Department <span>*</span>
              </label>
              <select name="department">
                <option value="0">Department 1</option>
                <option value="1">Department 2</option>
                <option value="2">Department 3</option>
                <option value="3">Department 4</option>
              </select>
            </div>
          </>
        ) : (
          <>
            <FormInput name="role" placeholder="Role" />
            <FormInput name="location" placeholder="Location" />
            <FormInput name="department" placeholder="Department" />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
