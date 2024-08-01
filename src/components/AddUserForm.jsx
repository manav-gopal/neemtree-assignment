import "./style/AddUserForm.scss";
import FormInput from "../utils/FormInput";

const AddUserForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted......");
  };

  return (
    <div className="add-user-form">
      <h2>Add User form</h2>
      <form onSubmit={handleSubmit}>
        <p>All fields are mandatory</p>
        <FormInput label="First Name" name="firstName" placeholder="Name" />
        <FormInput label="Last Name" name="lastName" placeholder="Last Name" />
        <FormInput name="phone" type="tel" placeholder="Phone Number" />
        <FormInput name="email" type="email" placeholder="Email Id" />
        <FormInput name="role" placeholder="Role" />
        <FormInput name="location" placeholder="Location" />
        <FormInput name="department" placeholder="Department" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserForm;
