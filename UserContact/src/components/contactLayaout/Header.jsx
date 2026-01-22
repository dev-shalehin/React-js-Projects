import { Link } from "react-router";

const Header = ({ searchInput, setSearchInput, onSearch, onClearSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="card">
      <div className="card-header card-title">
        <div className="d-flex align-items-center justify-content-between">
          <h2>All Contacts</h2>
          <div className="input-group w-50">
            <input
              type="text"
              className="form-control"
              placeholder="Search contact by name..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={onSearch}
            >
              <i className="fa fa-search me-1"></i> Search
            </button>
          </div>
          <div>
            <Link to={'/CreateNewUser'}>
              <button className="btn btn-success">
                <i className="fa fa-plus-circle"></i> Add New
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;