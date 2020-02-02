/*eslint-disable*/
import React,{useContext,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../Layout/Spinner';

import AuthContext from "../../Context/auth/authContext";
const Profile = () => {
    const authContext=useContext(AuthContext);
    const {user}=authContext;
    if(user){
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-4">
                    <div className="card card-cascade narrower">
                        <div className="view view-cascade gradient-card-header mdb-color lighten-3">
                         {/* <h5 className="mb-0 font-weight-bold">Edit Photo</h5> */}
                        </div>
                        <div className="card-body card-body-cascade text-center">
                        <img src={user.img} alt="User Photo" className="z-depth-1 mb-3 mx-auto" />
                        <p className="text-muted"><small>Profile photo</small></p>
                        <div className="row flex-center">
                            {/* <button className="btn btn-warning btn-rounded btn-sm">Upload New Photo</button><br/> */}
                            {/* <button className="btn btn-danger btn-rounded btn-sm">Delete</button> */}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                <div className="card card-cascade narrower">
                        <div className="view view-cascade gradient-card-header mdb-color lighten-3">
                        {/* <h5 className="mb-0 font-weight-bold">Edit Account</h5> */}
                        </div>
                        <div className="card-body card-body-cascade text-center">
                        <form>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form1" className="form-control validate"  disabled/>
                                <label for="form1" data-error="wrong" data-success="right">Name : {user.name}</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form2" className="form-control validate" disabled/>
                                <label for="form2" data-error="wrong" data-success="right">Email : {user.email}</label>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="tel" id="form81" className="form-control validate" disabled/>
                                <label for="form81" data-error="wrong" data-success="right">Phone : {user.number}</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form82" className="form-control validate" disabled/>
                                <label for="form82" data-error="wrong" data-success="right">Profession : {user.profession}</label>
                                </div> 
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="email" id="form76" className="form-control validate" value={user.address} disabled/>
                                <label for="form76"> </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form77" className="form-control validate" disabled/>
                                <label for="form77" data-error="wrong" data-success="right">City : {user.city}</label>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="email" id="form78" className="form-control validate" disabled/>
                                <label for="form76">Pincode : {user.pincode}</label>
                                </div>
                            </div>
                           
                            </div>
                            <div className="row">
                            <div className="col-md-12 text-center my-4">
                                <Link to='/profile/edit' type="button" class="btn btn-warning">Edit Profile</Link>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    } else {
        return(<Spinner />)
    }
}

export default Profile







 