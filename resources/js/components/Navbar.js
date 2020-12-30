import React from 'react'
import {InertiaLink, usePage} from '@inertiajs/inertia-react'
const Navbar = (props) => {
	const {url} = history.state
	const { base_url, user } = usePage().props
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <InertiaLink className="navbar-brand" href={base_url}>Navbar</InertiaLink>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className={ url == '/' ? 'nav-item active' : 'nav-item'}>
		        <InertiaLink className="nav-link" href={base_url}>Home <span className="sr-only">(current)</span></InertiaLink>
		      </li>
		      <li className={ url == '/users' ? 'nav-item active' : 'nav-item'}>
		        <InertiaLink className="nav-link" href={base_url+'/users'}>Users</InertiaLink>
		      </li>

		    </ul>

                    <ul className="navbar-nav ml-auto">

                    	{ !user.isLoggedIn && <React.Fragment>
                                <li className="nav-item">
                                    <InertiaLink className="nav-link" href={base_url+'/login'}>Login</InertiaLink>
                                </li>

                          		<li className="nav-item">
                                        <InertiaLink className="nav-link" href={base_url+'/register'}>Register</InertiaLink>
                                </li>
                             </React.Fragment>
                        }
                        {user.isLoggedIn &&  <li className="nav-item dropdown">
                                <InertiaLink id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                	{user.name}
                                </InertiaLink>

                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <InertiaLink method="post" className="dropdown-item" href={base_url+'/logout'}
                                      >
                                        Logout
                                    </InertiaLink>
                                </div>
                            </li>
						}
                    </ul>
		  </div>
		</nav>
	)
}

export default Navbar