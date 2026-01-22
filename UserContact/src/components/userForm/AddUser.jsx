import Navbar from "../contactLayaout/Navbar";
import FormFeled from "./FormFeled";
import { useState, useEffect } from "react";
import useUserContact from "../../hook/useUserContact";
import { useNavigate, useParams } from "react-router";
const AddUser = () => {
  const {id } = useParams();
  const navigate = useNavigate();
  const {users, postUser, updateUser}=useUserContact();
  const [editUser, setEditUser] = useState(null);
useEffect(()=>{
    if(id){
    const user = users.find((u)=> u.id === Number(id));
    setEditUser(user)
  }
}, [id, users])

  const submitHandle = (data)=>{
    if(editUser){
      updateUser(editUser.id, data )
    }else {
      postUser(data)
    }

    navigate('/')
  }
  return (
    <>
      <Navbar />
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <div className="card-header card-title">
                <strong>{editUser ? "Update Contact Info.." : "Add New Contact"}</strong>
              </div>
            <FormFeled 
            editUser = {editUser}
            onSubmit={submitHandle}
            />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddUser;
