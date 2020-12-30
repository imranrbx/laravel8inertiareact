import React,{useState} from 'react'
import Front from '../Layouts/Front'
import {Inertia} from '@inertiajs/inertia'

const Edit = (props) => {
	const { errors, id, name, email } = props
	const [values, setValues] = useState({
		id,name,email,
	})
	function handleChange(e){
		e.persist();
		setValues(values => ({...values, [e.target.id]: e.target.value}));
	}
	function handleSubmit(e){
		e.preventDefault();
		const formData = new FormData();
		formData.append('id',values.id);
		formData.append('name', values.name)
		formData.append('email', values.email)
		formData.append('_method','PUT')

		Inertia.post(base_url+'/users/'+values.id, formData,{});
	}
	return (
		<Front title="Add New User">
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
			 <div className="form-group">
			    <label htmlFor="name">Full Name</label>
			    <input type="text" id="name" className="form-control" placeholder="Enter Name" value={values.name} onChange={handleChange} />
			    {errors.name && <small className="alert alert-danger">{errors.name}</small>}
			  </div>
			   <div className="form-group">
			      <label htmlFor="email">Email</label>
			      <input type="email" className="form-control" id="email" placeholder="Email" value={values.email} onChange={handleChange}  />
			       {errors.email && <small className="alert alert-danger">{errors.email}</small>}
			    </div>

			  <button type="submit" className="btn btn-primary btn-lg">Update</button>
			</form>
			</div>
		</div>

		</Front>
	)
}

export default Edit