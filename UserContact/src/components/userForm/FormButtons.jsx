import { Link } from "react-router";
const FormButtons = () => {
  return (
    <>
      <hr />
      <div className="form-group row mb-0">
        <div className="col-md-9 offset-md-3">
          <button type="submit" className="btn btn-primary mx-3">
            Save
          </button>
          <Link to={"/"}><button className="btn btn-outline-secondary">
            Back To Home
            </button></Link>
        </div>
      </div>
    </>
  );
};

export default FormButtons;
