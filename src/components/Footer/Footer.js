import React from 'react'
import './Footer.css';


const Footer = () => {
	return (
<div>
	<footer>
		<div className="container p-5">
			<div className="footer-element">
				<div className="title">
					<h3 className="fw-bold">Maruf Ahmed Tushar</h3>
				</div>
				<div className="owner-details">
					<p>Follow Me</p>
				</div>
				<div className="social d-flex justify-content-center">
					<ul>
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
		</div>
	</footer>
</div>
	)
}

export default Footer