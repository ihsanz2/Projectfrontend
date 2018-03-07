import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import '../styles/Header.css';

class Header extends Component {
    render(){
        return(
            <div>
            <header id="header">
		<div class="header-middle">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="logo pull-left">
						<div class="companyinfo">
						<Link to="/Slider"><h2><span class="glyphicon glyphicon-camera">{ }Ihsan</span>-Shop</h2></Link>
						</div>
						</div>
						
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav">
                <li><i><Link to = "/Slider"> Account</Link></i></li>
                <li><i><Link to = ""> Wishlist</Link></i></li>
                <li><i><Link to = ""> Checkout</Link></i></li>
                <li><i><Link to = ""> Cart</Link></i></li>
                <li><i><Link to = ""> Login</Link></i></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="header-bottom">
			<div class="container">
				<div class="row">
					<div class="col-sm-9">

						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								
			  <li><Link to = "/Slider">MENU</Link></li>
              <li><Link to = "/Retro">RETRO</Link></li>
              <li><Link to = "Mirrorless/">MIRORLESS</Link></li>
              
								</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div>
  </header></div>
        );
    }
}
export default Header;
//===========================================================AKHIR DOM=============================================