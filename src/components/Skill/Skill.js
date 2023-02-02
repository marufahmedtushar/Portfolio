import React from 'react'
const Skill = (props) => {
	const {name, img,id} = props.skill;

	return (

	<div className="skill_margin col-md-3 col-sm-12 mt-3">
		<div className="card  border-0 shadow-lg">
					<img src={img} className="card-img-top d-flex justify-content-center" alt="..." style={{height: "200px"}} />
					<div className="card-body">
						<h5 className="card-title text-center fw-bold">{name}</h5>
					</div>
				</div>		
			</div>
		
	

					

		
	)
}

export default Skill