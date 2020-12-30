import React,{useState, useRef} from 'react'
import Front from '../Layouts/Front'
import {Inertia} from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

const register = ({errors}) => {
	const thumbnailRef = useRef(null)
	const { base_url } = usePage().props
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	})
	function handleChange(e){
		e.persist();
		setValues(values => ({...values, [e.target.id]: e.target.value}));
	}
	function handleSubmit(e){
		e.preventDefault();
		const formData = new FormData();
		formData.append('name', values.name)
		formData.append('email', values.email)
		formData.append('password', values.password)
		formData.append('password_confirmation', values.password_confirmation)
		Inertia.post(base_url+'/register', formData);
	}
	return (
		<Front title="Add New User">
		<div className="container">
		    <div className="row justify-content-center">
		        <div className="col-md-8">
		            <div className="card">
		                <div className="card-header">Register</div>

		                <div className="card-body">
		                    <form method="POST" onSubmit={handleSubmit}>
		                        <div className="form-group row">
		                            <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>

		                            <div className="col-md-6">
		                                <input id="name" type="text" className="form-control" name="name" value={values.name} onChange={handleChange} required autoComplete="name"  />

		                                {errors.name &&
		                                    <span className="text-danger" role="alert">
		                                        <strong>{ errors.name }</strong>
		                                    </span>
		                                }
		                            </div>
		                        </div>

		                        <div className="form-group row">
		                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Addres</label>

		                            <div className="col-md-6">
		                                <input id="email" type="email" className="form-control" name="email" value={values.email} onChange={handleChange} required autoComplete="email" />

		                               { errors.email &&
		                                    <span className="text-danger" role="alert">
		                                        <strong>{ errors.email }</strong>
		                                    </span>
		                                }
		                            </div>
		                        </div>

		                        <div className="form-group row">
		                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

		                            <div className="col-md-6">
		                                <input id="password" type="password" className="form-control" name="password" onChange={handleChange} value={values.password} required autoComplete="new-password" />

		                               { errors.password && <span className="text-danger" role="alert">
		                                        <strong>{ errors.password }</strong>
		                                    </span>
		                                }
		                            </div>
		                        </div>

		                        <div className="form-group row">
		                            <label htmlFor="password_confirmation" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

		                            <div className="col-md-6">
		                                <input id="password_confirmation" type="password" className="form-control" name="password_confirmation" value={values.password_confirmation} onChange={handleChange} required autoComplete="new-password" />
		                            </div>
		                        </div>

		                        <div className="form-group row mb-0">
		                            <div className="col-md-6 offset-md-4">
		                                <button type="submit" className="btn btn-primary">
		                                    Register
		                                </button>
		                            </div>
		                        </div>
		                    </form>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		</Front>
	)
}

export default register