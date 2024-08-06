import "./styles.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLists from "./components/UserLists";
import UserForm from "./components/UserForm";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/add-user" element={<UserForm isEditing={false} />} exact />
          <Route path="/edit-user" element={<UserForm isEditing={true} />} exact />
          <Route path="/user-list" element={<UserLists />} exact />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
