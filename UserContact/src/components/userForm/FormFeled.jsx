import { useState, useEffect } from "react";
import InputFeled from "./InputFeled";
import FormButtons from "./FormButtons";
const FormFeled = ({ editUser, onSubmit }) => {
  const initialState = { fastname: "", lastname: "", email: "", phone: "" };
  const [user, setNewUser] = useState(initialState);
  useEffect(()=>{
    if(editUser){
      setNewUser(editUser);
    }
  },[editUser])
  const changeHandler = (name, value) => {
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(user)
    setNewUser(initialState);
  };


  return (
    <>
      <form onSubmit={submitHandler}>
        <InputFeled
          label={"Fast Name"}
          name="fastname"
          value={user.fastname}
          onChange={changeHandler}
        />
        <InputFeled
          label={"Last Name"}
          name="lastname"
          value={user.lastname}
          onChange={changeHandler}
        />
        <InputFeled
          label={"Email"}
          name="email"
          value={user.email}
          onChange={changeHandler}
        />
        <InputFeled
          label={"Phone"}
          name="phone"
          value={user.phone}
          onChange={changeHandler}
        />
        <FormButtons />
      </form>
    </>
  );
};

export default FormFeled;
