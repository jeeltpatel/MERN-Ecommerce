import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
  const signinForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form=group">
              <label className="text-light">Email</label>
              <input className="form-control" type="text" />
            </div>
            <div className="form=group">
              <label className="text-light">Password</label>
              <input className="form-control" type="text" />
            </div>
            <div className="py-3">
              <button className="btn btn-success btn-block form-control">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  return (
    <Base title="Sign in page" description="A page for user to sigin up !">
      {signinForm()}
    </Base>
  );
};

export default Signin;