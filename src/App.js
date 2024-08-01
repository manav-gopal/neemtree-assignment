import "./styles.css";
import Nav from "./components/Nav";
import AddUserForm from "./components/AddUserForm";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditUserForm from "./components/EditUserForm";
import UserLists from "./components/UserLists";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add-user" element={<AddUserForm />} exact />
          <Route path="/edit-user" element={<EditUserForm />} exact />
          <Route path="/user-list" element={<UserLists />} exact />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
