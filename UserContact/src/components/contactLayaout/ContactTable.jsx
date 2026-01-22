import ContactList from "./contactList";
const ContactTable = ({users, deleteUser}) => {
  return (
    <div className="card-body">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <ContactList key={user.id} {...user} onDelete={deleteUser}/>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
