/*eslint-disable*/
import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext';
import AlertContext from '../../Context/alert/alertContext';
import {Link} from 'react-router-dom';
import Spinner from '../Layout/Spinner';


const EditProfile = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const {user,editUser} = authContext;
    const { setAlert } = alertContext;
    
    const [euser, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        number: '',
        address: '',
        city: '',
        pincode: '',
        profession:'',
        img:''
      });

      useEffect(() => {
          setUser(user);
        //   console.log(euser);
      }, [authContext, user]);

    const onChange = e =>{
    setUser({ ...euser, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
          editUser(euser);
        props.history.push('/profile')
      };
if(euser){
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-4">
                    <div className="card card-cascade narrower">
                        <div className="view view-cascade gradient-card-header mdb-color lighten-3">
                         {/* <h5 className="mb-0 font-weight-bold">Edit Photo</h5> */}
                        </div>
                        <div className="card-body card-body-cascade text-center">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="User Photo" className="z-depth-1 mb-3 mx-auto" />
                        <p className="text-muted"><small>Profile photo</small></p>
                        <div className="row flex-center">
                            <input type="file" className="btn btn-warning btn-rounded btn-sm" /><br/>
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
                        <form onSubmit={onSubmit}>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form1" name="name" className="form-control " onChange = {onChange} value={euser.name} />
                                <label for="form1">Name: </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form2" className="form-control " name="email" onChange = {onChange} value={euser.email}/>
                                <label for="form2" data-error="wrong" data-success="right">Email: </label>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="tel" id="form81" className="form-control " name="number" onChange = {onChange} value={euser.number}/>
                                <label for="form81" data-error="wrong" data-success="right">Phone: </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form82" className="form-control " name="profession" onChange = {onChange} value={euser.profession}/>
                                <label for="form82" data-error="wrong" data-success="right">Profession: </label>
                                </div> 
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form76" className="form-control " name="address" onChange = {onChange} value={euser.address}/>
                                <label for="form76">Address: </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form77" className="form-control " name="city" onChange = {onChange} value={euser.city}/>
                                <label for="form77" data-error="wrong" data-success="right">City:</label>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                <input type="text" id="form79" value={euser.pincode} name="pincode" onChange = {onChange} className="form-control" />
                                <label for="form76">Pincode:</label>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12 text-center my-4">
                                <button type="submit" >Save changes</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}else{
    return(<Spinner/>);
}
}

export default EditProfile
