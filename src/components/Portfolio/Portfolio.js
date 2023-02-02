import React from 'react'
import './Portfolio.css';
import Project from '../../components/Project/Project';
import Skill from '../../components/Skill/Skill';
import Resume from '../../components/Document/Maruf_Ahmed_Tushar.pdf';
import '../../frontend/css/style.css';
import Typical from 'react-typical'
const projects = [
{id:1, name:'Coding Hero', technologies:'HTML5, CSS3, Bootstrap 4', features:'Tried to make a copy of the Programming Hero’s Course landing page . Login and Registration page are also included.',
img:'images/code.png',link:'https://marufahmedtushar.github.io/Coding_Hero-demo.github.io/index.html'},
{id:2, name:'SKOKOV', technologies:'HTML5, CSS3, Bootstrap 4', features:'Here i have tried to convert a psd design to html and this is responsive too.',
img:'images/skokov.jpg',link:'https://marufahmedtushar.github.io/SKOKOV.github.io/index.html'},
{id:3, name:'Abacus Convention Center', technologies:'HTML5, CSS3, Bootstrap 5.', features:'This is a figma to html converted static site and also responsive.',
img:'images/abacus.jpg',link:'https://marufahmedtushar.github.io/convention-center/index.html'},
{id:4, name:'Wise Learners', technologies:'HTML5, CSS3, Bootstrap 5', features:'This is a figma to html converted static site and also responsive.',
img:'images/wise.png',link:'https://wise-learners.netlify.app/' },
{id:5, name:'Best Five', technologies:' HTML5, CSS3, Bootstrap 5, JavaScript', features:'This is a figma to html converted static site and also responsive.',
img:'images/bestfive.png',link:'https://football-team-maker.netlify.app/' },
{id:6, name:'Fast News', technologies:' HTML5, CSS3, Bootstrap 5, JavaScript, REST API', features:'This is a figma to html converted static site and also responsive.',
img:'images/fastnews.png',link:'https://fast-news-blogsite.netlify.app/' },
{id:7, name:'React-Quizers', technologies:'HTML5, CSS3, Bootstrap 5, React ,REST API', features:'This is a online quiz test site. User can test themselves by giving answer of some questions and user could see the correct answer if user want.If user clicks right/wrong answer the current page will notify him by showing toast.',
img:'images/reactq.png',link:'https://fast-news-blogsite.netlify.app/' }
]


const skills = [
{id:1,name:'HTML',img:'images/html5.png'},
{id:2,name:'CSS',img:'images/css3.png'},
{id:3,name:'JavaScript',img:'images/js.png'},
{id:4,name:'Bootstrap',img:'images/bootstrap.jpg'},
{id:5,name:'TailwindCSS ',img:'images/tailwind.png'},
{id:6,name:'GitHub',img:'images/git.png'},
{id:7,name:'Netlify',img:'images/netlify.png'},
{id:8,name:'React Js',img:'images/react.png'}

] 






const Portfolio = () => {
	return (
<div>
	{/*Section-1*/}
	<section className="section1 bg-light pb-5 pt-5" id="home">
		<div className="container-fluid p-0">
			<img src="images/bg.jpg" className="img-fluid" alt=""/>
			<div className="name-container d-flex justify-content-center">
				<div className="name d-flex justify-content-center align-items-center flex-column">
					<h1 className="text-light fw-bold">Hi,</h1>
					<h1 className="text-light fw-bold">I am Md. Maruf Ahmed Tushar</h1>
					
					<p className="text-light">
						<Typical
						steps={['CSE Graduate.', 1500, 'Front-End Developer.', 1500, 'Web Developer.', 1500]}
						loop={Infinity}
						wrapper="b"
						/>
					</p>
				</div>
			</div>
		</div>
	</section>
	{/*Section-1*/}
	<section className="section1 pb-2" id="home1">
		<div className="container p-0">
			<img src="images/bg.jpg" className="img-fluid" alt=""/>
			<div className="caption d-flex justify-content-center align-items-center flex-column p-3">
				<h1 className="text-light fw-bold">Hi,</h1>
				<h1 className="text-light fw-bold">I am Md. Maruf Ahmed Tushar</h1>
				<p className="text-light">
						<Typical
						steps={['CSE Graduate.', 1500, 'Front-End Developer.', 1500, 'Web Developer.', 1500]}
						loop={Infinity}
						wrapper="b"
						/>
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

							<div className="row">
								<div className="col-md-12">
									<div className="resume d-flex align-items-center justify-content-center ">
										<a href={Resume} className="btn text-light  mt-4" target = "_blank">Resume</a>
									</div>
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
					
					{
					projects.map(project => <Project
						key={project.id}
						project={project}
						
						
					></Project>)
					}
					
					
					
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
			<div className="row pt-lg-5 pt-md-5 pt-sm-3">
				{
				skills.map(skill => <Skill
				key={skill.id}
				skill={skill}
				
				
				></Skill>)
				}
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
			
			<div className="row">
				<div className="col-md-6">
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
			
				</div>
				<div className="col-md-6">
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
			</div>
		</div>
	</section>
	<section class="section-7 bg-light pt-5 pb-5" id="experience">
		<div class="container">
			<div class="education-header">
				<h1 class="text-center fw-bold">Experience</h1>
			</div>
			<div class="pborder">
				<div class="aborder"></div>
			</div>
			<div class="card border-0 shadow-lg mt-5">
				<div class="card-body p-5">
					<div>
						<i class="text-light fa-solid fa-briefcase rounded-circle bg-primary p-3"></i>
						<span class="card-title ps-2">Web Development (Intern) | Essential-Infotech | April 2021 – Mid May 2021</span>
					</div>
					<ul>
						<li><p class="card-text">Managed security issues of user during authorized/un-authorized log in.</p></li>
						<li><p class="card-text">Performed daily task about creating some user interface on admin panel. </p></li>
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
						<div className="card-height card border-0 p-5 shadow-lg rounded-start mt-4" >
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
								
								<div className="col-md-12">
									<button type="submit" className="btn text-light py-2 px-4" style= {{backgroundColor: '#289BDE'}}>Submit</button>
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
									<p className="mt-3"> Shalgrampur, Shakhipur, Tangail,Bangladesh</p>
								</div>
							</div>
							<div className="dbox w-100 d-flex align-items-start">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="fa fa-phone"></span>
								</div>
								<div className="">
									<p className="mt-3">+8801306092416,+8801931989411</p>
								</div>
							</div>
							<div className="dbox w-100 d-flex align-items-start">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="fa fa-paper-plane"></span>
								</div>
								<div className="">
									<p className="mt-3">ahmedmaruf.baust@gmail.com</p>
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