import React from 'react';

const Modal = ({ contact, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="modal-backdrop fade show"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1040
        }}
        onClick={onClose}
      ></div>
      
      <div 
        className="modal fade show"
        style={{
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1050,
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">
                <i className="fa fa-user me-2"></i>
                Contact Details
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            
            <div className="modal-body">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="fw-bold" style={{ width: '120px' }}>ID:</td>
                    <td>#{contact.id}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">First Name:</td>
                    <td>{contact.fastname}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Last Name:</td>
                    <td>{contact.lastname || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Email:</td>
                    <td>
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-decoration-none"
                      >
                        {contact.email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Phone:</td>
                    <td>
                      <a 
                        href={`tel:${contact.phone}`} 
                        className="text-decoration-none"
                      >
                        {contact.phone}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
              >
                <i className="fa fa-times me-1"></i> Close
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  window.location.href = `/edit/${contact.id}`;
                }}
              >
                <i className="fa fa-edit me-1"></i> Edit Contact
              </button>
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => {
                  onClose();
                  if (window.confirm("Are you sure you want to delete this contact?")) {
                    contact.onDelete?.(contact.id);
                  }
                }}
              >
                <i className="fa fa-trash me-1"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;