import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <div>
            
            <div class="footer-top">
			<div class="container">
			</div>
		</div>
		
		<div class="footer-widget">
			<div class="container">
				<div class="row">
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Service</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><Link to="">Online Help</Link></li>
								<li><Link to="">Contact Us</Link></li>
								<li><Link to="">Order Status</Link></li>
								<li><Link to="">Change Location</Link></li>
								<li><Link to="">FAQ’s</Link></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Quock Shop</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><Link to="">T-Shirt</Link></li>
								<li><Link to="">Mens</Link></li>
								<li><Link to="">Womens</Link></li>
								<li><Link to="">Gift Cards</Link></li>
								<li><Link to="">Shoes</Link></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Policies</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><Link to="">Terms of Use</Link></li>
								<li><Link to="">Privecy Policy</Link></li>
								<li><Link to="">Refund Policy</Link></li>
								<li><Link to="">Billing System</Link></li>
								<li><Link to="">Ticket System</Link></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>About Shopper</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><Link to="">Company Information</Link></li>
								<li><Link to="">Careers</Link></li>
								<li><Link to="">Store Location</Link></li>
								<li><Link to="">Affillate Program</Link></li>
								<li><Link to="">Copyright</Link></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3 col-sm-offset-1">
                    <div class="companyinfo">
							<h2><span>Ihsan</span>-Shop</h2>
				
						</div>
					</div>
					
				</div>
			</div>
        </div>
        </div>
		

        )
    }
}
export default Footer;