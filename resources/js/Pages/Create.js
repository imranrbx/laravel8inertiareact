import React,{useState, useRef} from 'react'
import Front from '../Layouts/Front'
import {Inertia} from '@inertiajs/inertia'

const Create = ({errors, base_url}) => {
	const thumbnailRef = useRef(null)
	const [ progress,setProgress ] = useState(0);
	Inertia.on('progress', event => {
		setProgress( event.detail.progress.percentage );
	})

	function handleSubmit(e){
		e.preventDefault();
		const formData = new FormData();
		formData.append('thumbnail', thumbnailRef.current.files[0])
		Inertia.post(base_url+'/users', formData);
	}
	return (
		<Front title="Add New User">
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
				<progress max="100" value={progress} />
			  <div className="form-group">
			      <label htmlFor="thumbnail">Email</label>
			      <input ref={thumbnailRef} type="file" className="form-control" id="thumbnail" />
			       {errors.thumbnail && <small className="alert alert-danger">{errors.thumbnail}</small>}
			    </div>
			  <button type="submit" className="btn btn-primary btn-lg">Upload</button>
			</form>
			</div>
		</div>

		</Front>
	)
}

export default Create