import { useState, useMemo } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Filter from "./Filter";
import ContactTable from "./ContactTable";
import useUserContact from "../../hook/useUserContact";

const LeyoutContact = () => {
  const { users, delteUser } = useUserContact();
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const searchedUsers = useMemo(() => {
    if (!searchTerm.trim()) return users;

    return users.filter(
      (user) =>
        user.fastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (user.lastname &&
          user.lastname.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [users, searchTerm]);

  const sortedAndFilteredUsers = useMemo(() => {
    const usersToSort = [...searchedUsers];

    switch (sortOption) {
      case "firstNameAsc":
        return usersToSort.sort((a, b) => a.fastname.localeCompare(b.fastname));

      case "lastNameAsc":
        return usersToSort.sort((a, b) =>
          (a.lastname || "").localeCompare(b.lastname || ""),
        );

      case "oldest":
        return usersToSort.sort((a, b) => a.id - b.id);

      default:
        return usersToSort;
    }
  }, [searchedUsers, sortOption]);

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleClearFilters = () => {
    setSearchInput("");
    setSearchTerm("");
    setSortOption("default");
  };

  const getSortLabel = () => {
    switch (sortOption) {
      case "firstNameAsc":
        return "First Name (A→Z)";
      case "lastNameAsc":
        return "Last Name (A→Z)";
      case "oldest":
        return "Oldest First";
      default:
        return "Default";
    }
  };

  return (
    <>
      <Navbar />
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                onSearch={handleSearch}
                onClearSearch={handleClearSearch}
              />

              <Filter onSort={handleSort} sortOption={sortOption} />

              <div className="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded">
                <div className="text-muted">
                  {sortOption !== "default" && (
                    <span className="ms-3">
                      <strong>Sorted by:</strong> {getSortLabel()}
                    </span>
                  )}
                </div>

                {(searchTerm || sortOption !== "default") && (
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={handleClearFilters}
                  >
                    <i className="fa fa-times me-1"></i> Clear All
                  </button>
                )}
              </div>

              <ContactTable
                users={sortedAndFilteredUsers}
                deleteUser={delteUser}
              />

              {searchTerm && sortedAndFilteredUsers.length === 0 && (
                <div className="text-center py-5">
                  <i className="fa fa-search fa-3x text-muted mb-3"></i>
                  <h4>No contacts found for "{searchTerm}"</h4>
                  <p className="text-muted">Try a different search term</p>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={handleClearSearch}
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LeyoutContact;
