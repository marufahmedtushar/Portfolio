import React from 'react'
import './Project.css';
const Project = (props) => {
	const {name, img, age_required, time, technologies,link} = props.project;

	return (
		
	<div className="col-lg-6 col-12 col-sm-12">
	<div className="card mb-3 border-0 shadow-lg">
	<div className="row g-0">
		<div className="col-md-4">
			<img src={img} className="img-fluid rounded-start h-100" alt="..."/>
		</div>
		<div className="col-md-8">
			<div className="card-body">
				<h5 className="card-title fw-semibold text-capitalize">{name}</h5>
				<p className="card-text"><small>Link : {link}</small></p>
			</div>
		</div>
	</div>
</div>
	</div>

					

		
	)
}

export default Project