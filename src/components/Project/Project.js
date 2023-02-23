import React,{ useState } from 'react'
import './Project.css';
import { Link } from 'react-router-dom';
const Project = (props) => {

const {name, img,id,link,technologies,features,img1} = props.project;

const overflowFunction = (value) =>{
const mainOverflow = document.querySelector("body");
mainOverflow.style.overflowY = value;
mainOverflow.style.overflowX = 'hidden';
}

const [showModal, setShowModal] =  useState(false);

const closeModal = () => setShowModal(false);

const MyModal = () =>{
return (
<>
<div class="modal-dialog p-5">
	<div class="modal-content">
		
		<div class="modal-body">
        <div class="card border-0">
			<img src={img1} class="card-img-top" alt="..."/>
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">{name}</h5>
				<p class="card-text"><span className="fw-bold">Technologies: </span>{technologies}</p>
				<p class="card-text"><span className="fw-bold">Features: </span>{features}</p>
			</div>
		</div>
      </div>
		<div class="modal-footer">
			<button
			onClick={() => {
			closeModal();
			overflowFunction('scroll');
			}}
			type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			
		</div>
	</div>
</div>
</>
);
};
return (
<div className="col-lg-6 col-12 col-sm-12">
	<div className="card mb-3  shadow-lg rounded ">
		<div className="row g-0">
			<div className="col-md-4">
				<img src={img} className="img-fluid rounded-start h-100" alt="..."/>
			</div>
			<div className="col-md-8">
				<div className="card-body ">
					<h5 className="card-title fw-semibold text-capitalize">{name}</h5>
					<div className="">
						<a className="mt-3 livelink-bg text-light btn  w-100 rounded fw-bold" href={link} target="_blank">Live</a>
					<a onClick={() => {setShowModal(true);overflowFunction('hidden')}} className="mt-3 livelink-bg text-light btn  w-100 rounded fw-bold"  >Details</a>
					</div>
					
					{showModal && <MyModal />}
					
				</div>
			</div>
		</div>
	</div>
	
	
</div>
)
}
export default Project