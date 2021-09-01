import React from 'react'
import Base from "../core/Base"
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/index";

const UserDashboard = ()=>{


    const {
        user: { name, email, role },
      } = isAuthenticated();

    const adminLeftSide = () =>{

        return (
            <div className="card">
        
                <h4 className="card-header bg-dark text-white">User Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                     <Link  to="/admin/create/category" className="nav-link text-success"> Create Categories</Link>
                    </li>
                    <li className="list-group-item">
                     <Link  to="/admin/create/product" className="nav-link text-success"> Create Products</Link>
                    </li>
                    <li className="list-group-item">
                     <Link  to="/admin/orders" className="nav-link text-success"> Manage Orders</Link>
                    </li>
                    <li className="list-group-item">
                     <Link  to="/admin/products" className="nav-link text-success"> Manage Products</Link>
                    </li>
                </ul>
            </div>
        )
        
        }

        const adminRightSide =() =>{
            return (
                <div className="card mb-4">
                    <h4 className="card-header">Admin Information</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                        <span className="badge badge-success mr-2 text-success">Name:</span> {name}
                        </li>
                        <li className="list-group-item">
                        <span className="badge badge-success mr-2 text-success">Email:</span> {email}
                        </li>
                        {/* <li className="list-group-item">
                         <span className="badge text-danger">Admin Area</span>
                        </li> */}
                    </ul>
                    
                </div>
            )
           
           }
    return (
        <Base title="UserDashboard Page"
        description="Manage all your ordered products here"
        className="container bg-success p-4"
        >
        {/* <div className="row">
       <div className="col-3">
       {adminLeftSide()}
       </div>
       <div className="col-9">
       {adminRightSide()}
       </div>
        </div> */}
        This is User Dashboard
        </Base>
    )
}

export default UserDashboard;