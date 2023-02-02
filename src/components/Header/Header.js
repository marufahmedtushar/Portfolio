import React from 'react'
import './Header.css';


const Header = () => {
	return (
<div>
	<nav className="navbar navbar-expand-lg bg-light fixed-top p-2 shadow" id="nav">
		<div className="container">
			<a className="navbar-brand fw-bold" href="">Maruf Ahmed Tushar</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav  mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#home">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#about">About</a>
					</li>
					
					<li className="nav-item">
						<a className="nav-link" href="#projects" >Projects</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#skills" >Skills</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#education" >Education</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#experience" >Experience</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contact" >Contact</a>
					</li>
				</ul>
				
			</div>
			
		</div>
	</nav>
	<nav className="navbar navbar-expand-lg fixed-top bg-light p-4 shadow" id="nav1">
		<div className="container">
			<a className="navbar-brand fw-bold" href="#">Maruf Ahmed Tushar</a>
			<div className="d-flex justify-content-between">
				
				<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav  mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#home">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#about">About</a>
					</li>
					
					<li className="nav-item">
						<a className="nav-link" href="#projects" >Projects</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#skills" >Skills</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#education" >Education</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#experience" >Experience</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contact" >Contact</a>
					</li>
				</ul>
				
			</div>
			
		</div>
	</nav>
	<nav className="navbar navbar-expand-lg bg-light p-4 shadow" id="nav2">
		<div className="container">
			<a className="navbar-brand fw-bold" href="#">Maruf Ahmed Tushar</a>
			<div className="d-flex justify-content-between">
				
				<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav  mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#home">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#about">About</a>
					</li>
					
					<li className="nav-item">
						<a className="nav-link" href="#projects" >Projects</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#skills" >Skills</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#education" >Education</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#experience" >Experience</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contact" >Contact</a>
					</li>
				</ul>
				
			</div>
			
		</div>
	</nav>
</div>
	)
}
export default Header