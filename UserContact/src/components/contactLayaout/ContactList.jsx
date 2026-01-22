import { useNavigate } from "react-router";
import { useState } from "react";
import Modal from "../Modal";
const contactList = ({ id, fastname, lastname, email, phone, onDelete }) => {
  const navigate = useNavigate();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const deleteHandeler = () => {
    const deleteConfirm = window.confirm("Are You Sure?");
    if (deleteConfirm) {
      onDelete(id);
    }
  };

    const contact = { 
    id, 
    fastname, 
    lastname, 
    email, 
    phone, 
    onDelete 
  };

  return (
   <>
    <tr>
      <td>{id}</td>
      <td>{fastname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td width="150">
        <a
          className="btn btn-sm btn-circle btn-outline-info"
          title="Show"
           onClick={() => setIsPreviewOpen(true)}
        >
          <i className="fa fa-eye"></i>
        </a>
        <a
          onClick={() => navigate(`/edit/${id}`)}
          className="btn btn-sm btn-circle btn-outline-secondary"
          title="Edit"
        >
          <i className="fa fa-edit"></i>
        </a>
        <a
          href="#"
          className="btn btn-sm btn-circle btn-outline-danger"
          title="Delete"
          onClick={deleteHandeler}
        >
          <i className="fa fa-times"></i>
        </a>
      </td>
      <Modal
        contact={contact}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </tr>
   </>
  );
};

export default contactList;
