import React from 'react'
import Front from '../Layouts/Front';
import {InertiaLink, usePage} from '@inertiajs/inertia-react'
const Users = ({users, create_url}) => {
	const {isLoggedIn} = usePage().props.user
	return (
		<Front title="User Crud Page">
			<div className="row d-block">
				{
					users.map(user => {
					return (
						<div key={user.id}>
							<p>{user.id} - {user.name} </p>
					{ (isLoggedIn && user.edit_url && user.delete_url)   && <p>
						<InertiaLink href={user.edit_url}>Edit</InertiaLink> |
					<InertiaLink replace method="post" data={{_method:'delete'}} href={user.delete_url}>Delete</InertiaLink>
					</p> }
					</div>)
				})
			}
			</div>
		</Front>
	)
}

export default Users