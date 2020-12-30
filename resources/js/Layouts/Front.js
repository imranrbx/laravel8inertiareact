import React from 'react'
import Navbar from '../components/Navbar'

const Front = ({title, children}) => {
	React.useEffect(() =>{
		document.title = title;
	})
	return (
		<React.Fragment>
			<Navbar />
			<main className="container">
			{children}
			</main>
		</React.Fragment>
	)
}

export default Front