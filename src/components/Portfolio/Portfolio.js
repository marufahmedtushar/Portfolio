import React from 'react'
import './Portfolio.css';


const Portfolio = () => {
	return (
<div>
	{/*Section-1*/}
	<section className="section1 bg-light pb-5 pt-5" id="slider">
		<div className="container mt-4">
			
			
			<div className="name-container d-flex justify-content-center">
				<div className="name d-flex justify-content-center align-items-center flex-column">
					<h1 className="text-light fw-bold">Hi,</h1>
					<h1 className="text-light fw-bold">I am Md. Maruf Ahmed Tushar</h1>
					
					<p>
						<span
							className="txt-rotate"
							data-period="2000"
						data-rotate='[ "CSE Graduate.", "Web Developer." ]'></span>
					</p>
				</div>
			</div>
		</div>
	</section>
	 {/*Section-1*/}
	<section className="section1 pb-2" id="slider1">
		<div className="container py-5">
			<img className="img-fluid" src="images/bg.jpg" alt=""/>
			<div className="caption d-flex justify-content-center align-items-center flex-column p-3">
				<h1 className="text-light fw-bold">Hi,</h1>
				<h1 className="text-light fw-bold">I am Md. Maruf Ahmed Tushar</h1>
				<p>
					<span
						className="txt-rotate"
						data-period="3000"
					data-rotate='[ "CSE Graduate.", "Front-End Developer.", "Web Developer." ]'></span>
				</p>
			</div>
		</div>
	</section>
	<section className="intro bg-light pt-5 pb-5 ">
		<div className="container">
			<div className="card-heading">
				<h1 className="text-center fw-bold">Introduction</h1>
			</div>
			<div className="pborder">
				<div className="aborder"></div>
			</div>
			<div className="card border-0 shadow-lg mt-5">
				<div className="card-body p-5">
					<p className="card-text">I am a Computer science graduate who is currently looking for an organization where I can give my 100% to prove my ability and improve my skills. My passion is about Web Development and capable of completing couple of self-made projects. In short, I am reliable, hard-working with strong attention to detail and eager to learn about new technologies.</p>
				</div>
			</div>
		</div>
	</section>
	
</div>
	)
}
export default Portfolio