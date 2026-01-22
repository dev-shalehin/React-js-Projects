import React from "react";

const InputFeled = ({name, label, value, onChange}) => {
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-md-12">
          <div className="form-group row">
            <label htmlFor="first_name" className="col-md-3 col-form-label">
              {label}
            </label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFeled;
