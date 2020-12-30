import React,{useState} from 'react'
import Front from '../Layouts/Front'
import {Inertia} from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

const register = ({errors}) => {
	const { base_url } = usePage().props
	const [values, setValues] = useState({
		email: '',
		password: ''
	})
	function handleChange(e){
		e.persist();
		setValues(values => ({...values, [e.target.id]: e.target.value}));
	}
	function handleSubmit(e){
		e.preventDefault();
		const formData = new FormData();
		formData.append('email', values.email)
		formData.append('password', values.password)
		Inertia.post(base_url+'/login', formData);
	}
	return (
		<Front title="Add New User">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <form method="POST" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" value={values.email} onChange={handleChange} required autoComplete="email"/>

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
                                        <input id="password" type="password" className="form-control" value={values.password} onChange={handleChange} name="password" required autoComplete="current-password" />

                                         { errors.password &&
                                                    <span className="text-danger" role="alert">
                                                        <strong>{ errors.password }</strong>
                                                    </span>
                                                }
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-6 offset-md-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="remember" id="remember"  />

                                            <label className="form-check-label" htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Login
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