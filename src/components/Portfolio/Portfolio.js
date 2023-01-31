import React from 'react'
import './Portfolio.css';


const Portfolio = () => {
	return (
<div>
	{/*Section-1*/}
	<section className="section1 bg-light pb-5 pt-5" id="slider">
		<div className="container-fluid p-0">
			<img src="images/bg.jpg" className="img-fluid" alt=""/>
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
			<img src="images/bg.jpg" className="img-fluid" alt=""/>
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
					<p className="card-text">I am a Computer science graduate who is currently looking for
						an organization where I can give my 100% to prove my ability and improve my skills.
						My passion is about Web Development and capable of completing couple of self-made
						projects. In short, I am reliable, hard-working with strong attention to detail and
					eager to learn about new technologies.</p>
				</div>
			</div>
		</div>
	</section>
	{/*Section-3*/}
	<section className="section3 bg-light pt-5 pb-2" id="about">
		<div className="container">
			<div className="card mb-3 border-0 shadow-lg">
				<div className="row g-0">
					<div className="col-md-6 col-lg-4 ">
						<img src="images/img.png" className="img-fluid h-100 rounded-start" alt="..."/>
					</div>
					<div className="col-md-6  col-lg-8 py-5 px-4">
						<div className="card-body py-5 px-4">
							<h5 className="card-title fw-bold text-center">About Me</h5>
							<div className="pborder">
								<div className="bborder"></div>
							</div>
							
							<div className="row mt-3">
								<div className="col-lg-6">
									<p><span className="title-s">Name: </span> <span>Maruf Ahmed Tushar</span></p>
									<p><span className="title-s">Profile: </span> <span>CSE Graduate</span></p>
								</div>
								<div className="col-lg-6">
									<p className="fw-bold"> B.Sc.Eng in Computer Science and Engineering,</p>
									<p className="fw-bold"> Department of Computer Science and Engineering </p>
									<p className="fw-bold"> Bangladesh Army University of Science and Technology (BAUST)</p>
									<p className="fw-bold">Saidpur Cantonment, Saidpur, Nilphamari</p>
									<p className="fw-bold">Bangladesh</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/*Section-2*/}
	<section className="section2 bg-light pt-5 pb-2" id="projects">
		<div className="container">
			<div className="course-details">
				<h1 className="text-center fw-bold">Projects</h1>
			</div>
			<div className="pborder">
				<div className="aborder"></div>
			</div>
			<div className="courses mt-4">
				<div className="row">
					<div className="col-lg-6 col-12 col-sm-12">
						<div className="card mb-3 border-0 shadow-lg">
							<div className="row g-0">
								<div className="col-md-4">
									<img src="images/code.png" className="img-fluid rounded-start" alt="..."/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title fw-semibold text-capitalize">Coding Hero</h5>
										<p className="card-text">This static side is inspired from Programming hero.Here i have tried to make same properties of font-end of Programming hero.</p>
										<p className="card-text"><small>Link :  https://marufahmedtushar.github.io/Coding_Hero-demo.github.io/index.html</small></p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<div className="card mb-3 border-0 shadow-lg">
							<div className="row g-0">
								<div className="col-md-4">
									<img src="images/skokov.jpg" className="img-fluid rounded-start h-100" alt="..."/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title fw-semibold text-capitalize">skokov</h5>
										<p className="card-text">Here i have tried to convert a psd design to html and this is responsive too.</p>
										<p className="card-text"><small>Link : https://marufahmedtushar.github.io/SKOKOV.github.io/index.html</small></p>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div><div className="row">
				<div className="col-lg-6 col-md-12 col-sm-12">
					<div className="card mb-3 border-0 shadow-lg">
						<div className="row g-0">
							<div className="col-md-4">
								<img src="images/world_cup.jpg" className="img-fluid rounded-start h-100" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title fw-semibold">World Cup</h5>
									<p className="card-text">This is a figma to html converted static site and also responsive.</p>
									<p className="card-text"><small>Link : https://marufahmedtushar.github.io/world_cup/index.html</small></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12">
					<div className="card mb-3 border-0 shadow-lg">
						<div className="row g-0">
							<div className="col-md-4">
								<img src="images/abacus.jpg" className="img-fluid rounded-start h-100" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title fw-semibold">Abacus Convention Center</h5>
									<p className="card-text">This is a figma to html converted static site and also responsive.</p>
									<p className="card-text"><small>Link : https://marufahmedtushar.github.io/convention-center/index.html</small></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-12 col-sm-12">
					<div className="card mb-3 border-0 shadow-lg">
						<div className="row g-0">
							<div className="col-md-4">
								<img src="images/donate.jpg" className="img-fluid rounded-start h-100" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title fw-semibold">Photography Basic Rules</h5>
									<p className="card-text">This is a figma to html converted static site and also responsive.</p>
									<p className="card-text"><small>Link : https://marufahmedtushar.github.io/donate/</small></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
	</div>
</section>
{/*Section-4*/}
<section className="section4 bg-light pt-5 pb-5">
<div className="container rounded-3 p-5 d-flex justify-content-between">
	<div className="modal-details">
		<h3 className="text-light">Hire Me !!</h3>
		<p className="text-light">If you want to hire me <br/> contact me now.</p>
	</div>
	<div className="modal-details d-flex justify-content-center align-items-center">
		<a href="#contact" className="btn btn-light ">Contact Now</a>
	</div>
</div>


</section>
{/*Section5*/}
<section className="section5 bg-light pt-5 pb-5" id="skills">
	<div className="container">
		<div className="elements d-flex justify-content-center">
			<h5 className=" fw-bold">Skills</h5>
		</div>
		<div className="pborder">
			<div className="aborder"></div>
		</div>
		<div className="row pt-lg-5 pt-md-5 pt-sm-2">
			<div className="col-md-3 ">
				<div className="card  border-0 shadow-lg">
					<img src='images/c.png' className="card-img-top d-flex justify-content-center" alt="..." style={{height: "200px"}} />
					<div className="card-body">
						<h5 className="card-title text-center">C</h5>
					</div>
				</div>
			</div>
			<div className="col-md-3 ">
				<div className="card  border-0 shadow-lg">
					<img src='images/c.png' className="card-img-top d-flex justify-content-center" alt="..." style={{height: "200px"}} />
					<div className="card-body">
						<h5 className="card-title text-center">C</h5>
					</div>
				</div>
			</div>
			<div className="col-md-3 ">
				<div className="card  border-0 shadow-lg">
					<img src='images/c.png' className="card-img-top d-flex justify-content-center" alt="..." style={{height: "200px"}} />
					<div className="card-body">
						<h5 className="card-title text-center">C</h5>
					</div>
				</div>
			</div>
			<div className="col-md-3 ">
				<div className="card  border-0 shadow-lg">
					<img src='images/c.png' className="card-img-top d-flex justify-content-center" alt="..." style={{height: "200px"}} />
					<div className="card-body">
						<h5 className="card-title text-center">C</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/*Section6*/}
<section className="section-6 bg-light pt-5 pb-5" id="education">
<div className="container">
	<div className="education-header">
		<h1 className="text-center fw-bold">Education</h1>
	</div>
	<div className="pborder">
		<div className="aborder"></div>
	</div>
	<div className="card border-0 shadow-lg mt-5">
		<div className="card-body p-5">
			<div>
				<i className="text-light fa-solid fa-graduation-cap rounded-circle bg-primary p-3"></i>
			<span className="card-title ps-2 text-justify">B.Sc. Eng. in Computer Science and Engineering</span>
			</div>
			<ul>
				<li><p className="card-text">Dept. of CSE, Bangladesh Army University of Science and Technology (BAUST)</p></li>
				<li><p className="card-text">Saidpur,Nilphamari, Bangladesh)</p></li>
			</ul>
		</div>
		
	</div>
	
	<div className="card border-0 shadow-lg mt-5">
		<div className="card-body p-5">
			<div>
				<i className="text-light fa-solid fa-graduation-cap rounded-circle bg-primary p-3"></i>
			<span className="card-title ps-2">HSC</span>
			</div>
			<ul>
				<li><p className="card-text">Cantonment Public School & College ,Jahanabad Cantonment,Khulna</p></li>
				<li><p className="card-text">Jessore Board</p></li>
				<li><p className="card-text">Khulna, Bangladesh</p></li>
			</ul>
		</div>
		
	</div>
	<div className="card border-0 shadow-lg mt-5">
		<div className="card-body p-5">
			<div>
				<i className="text-light fa-solid fa-graduation-cap rounded-circle bg-primary p-3"></i>
			<span className="card-title ps-2">SSC</span>
			</div>
			<ul>
				<li><p className="card-text">Cantonment Public School & College ,Jahanabad Cantonment,Khulna</p></li>
				<li><p className="card-text">Jessore Board</p></li>
				<li><p className="card-text">Khulna, Bangladesh</p></li>
			</ul>
		</div>
		
	</div>
</div>
</section>
<section className="section-8 bg-light pt-5 pb-5" id="contact">
<div className="container">
	<div className="contact-header">
		<h1 className="text-center fw-bold">Contact</h1>
	</div>
	<div className="pborder">
		<div className="aborder"></div>
	</div>
	<div className="contact-form  pt-3">
		<div className="row">
			<div className="col-lg-8 col-md-8 col-sm-12 g-0">
				<div className="card border-0 p-5 shadow-lg rounded-start mt-4" style= {{height:'380px'}} >
					<form className="row g-3">
						<div className="col-md-6">
							<input type="text" className="form-control rounded-0" placeholder="Name"/>
						</div>
						<div className="col-md-6">
							<input type="email" className="form-control rounded-0"  placeholder="Email"/>
						</div>
						<div className="col-md-12">
							<input type="text" className="form-control rounded-0"  placeholder="Subject"/>
						</div>
						<div className="col-md-12">
							<textarea className="form-control rounded-0"  rows="6" placeholder="Message"></textarea>
						</div>
						
						<div className="col-12">
							<button type="submit" className="btn text-light py-2 px-4" style= {{backgroundColor: '#289BDE'}}>Sign in</button>
						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12 g-0" >
				<div className="card border-0 p-4" style={{ height:'425px', backgroundColor: '#289BDE'}}>
					<div className="dbox w-100 d-flex align-items-start">
						<div className="icon d-flex align-items-center justify-content-center">
							<span className="fa fa-map-marker"></span>
						</div>
						<div className="">
							<p className="mt-3"><span>Address:</span> Shalgrampur, Shakhipur, Tangail,Bangladesh</p>
						</div>
					</div>
					<div className="dbox w-100 d-flex align-items-start">
						<div className="icon d-flex align-items-center justify-content-center">
							<span className="fa fa-phone"></span>
						</div>
						<div className="">
							<p className="mt-3"><span>Phone:</span>+8801306092416,+8801931989411</p>
						</div>
					</div>
					<div className="dbox w-100 d-flex align-items-start">
						<div className="icon d-flex align-items-center justify-content-center">
							<span className="fa fa-paper-plane"></span>
						</div>
						<div className="">
							<p className="mt-3"><span>Email:</span>ahmedmaruf.baust@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</section>



</div>
	)
}
export default Portfolio