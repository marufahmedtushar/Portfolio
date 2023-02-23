import React,{ useState, useEffect } from 'react'
import './Header.css';
const Header = () => {
const [showMediaIcon,setShowMediaIcon] = useState(false);
const[theme, setTheme] = useState("light-theme");
const toggleTheme = () =>{
if(theme === "dark-theme"){
setTheme("light-theme");
}else {
setTheme("dark-theme");
}
}
useEffect(() => {
document.body.className = theme;
}, [theme]);
return (
<div>
	<nav className="navbar navbar-expand-lg fixed-top p-2 shadow" id="nav">
		<div className="container">
			<a className="navbar-brand fw-bold" href="/">Maruf Ahmed Tushar</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon" ></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav  mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link" aria-current="page" href="#home">Home</a>
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
					<li className="nav-item mt-2">
						<input type="checkbox" class="checkbox " id="checkbox"onClick ={() => toggleTheme()}  />
						<label for="checkbox" class="label">
							<i class="fas fa-moon"></i>
							<i class='fas fa-sun'></i>
							<div class='ball'></div>
						</label>
					</li>
				</ul>
				
			</div>
			
		</div>
	</nav>
	
	<nav className="navbar navbar-expand-md fixed-top  p-4 shadow" id="nav1">
		<div className="container">
			<a className="navbar-brand fw-bold" href="#home">Maruf Ahmed Tushar</a>
			<button  className="navbar-toggler" type="button" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon" onClick ={() => setShowMediaIcon (!showMediaIcon)}></span>
			</button>
			
			<div >
				<ul className={showMediaIcon ? "navbar-nav" :  "collapse navbar-collapse"} >
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
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
					<li className="nav-item mt-2">
						<input type="checkbox" class="checkbox " id="checkbox"onClick ={() => toggleTheme()}  />
						<label for="checkbox" class="label">
							<i class="fas fa-moon"></i>
							<i class='fas fa-sun'></i>
							<div class='ball'></div>
						</label>
					</li>
				</ul>
				
			</div>
			
		</div>
	</nav>
	
	<nav className="navbar navbar-expand-lg  p-4 shadow" id="nav2">
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
					<li className="nav-item mt-2">
						<input type="checkbox" class="checkbox " id="checkbox"onClick ={() => toggleTheme()}  />
						<label for="checkbox" class="label">
							<i class="fas fa-moon"></i>
							<i class='fas fa-sun'></i>
							<div class='ball'></div>
						</label>
					</li>
				</ul>
				
			</div>
			
		</div>
	</nav>
</div>
)
}
export default Header