import React from 'react'
import './Footer.css';


const Footer = () => {
	return (
<div>
	<footer>
		<div className="container p-5">
			<div className="footer-element">
				<div className="title">
					<h3 className="fw-bold">A Passionate Front-End Developer</h3>

				</div>
				<div className="owner-details">
				<p className="pb-2">Maruf Ahmed Tushar</p>
					<p>Follow Me</p>
				</div>
				<div className="social d-flex justify-content-center">
					<ul className="sociallist">
						<li>
							<a href="https://www.facebook.com/marufahmedtushar471/">
								<i className="fa-brands fa-facebook-f"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/maruf_tushar">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						
						<li>
							<a href="https://www.linkedin.com/in/maruf-ahmed-tushar/">
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/marufahmedtushar/">
								<i className="fa-brands fa-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="pborder mt-2">
				<div className="cborder"></div>
			</div>
		</div>
		
	</footer>


	<div className=" text-center text-light" style={{backgroundColor: '#000000',padding: '10px'}}>
			<p>Maruf Ahmed Tushar © 2023</p>
		</div>
</div>
	)
}

export default Footer