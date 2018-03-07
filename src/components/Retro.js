import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import katalog from '../produk/Men.json';


class Retro extends Component  {
    render(){
        return(
            <div>
            <div class="col-sm-4">
							<div class="product-image-wrapper">
								<div class="single-products">
									<div class="productinfo text-center">
										<img src="https://images.unsplash.com/photo-1472950755543-5293dbab893a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4aa22fb6c5d76712fb1ca6d151bb1242&auto=format&fit=crop&w=500&q=60 " alt="" height="300px"/>
										<h2>Rp 50.000</h2>
										<p>INSTAMATIC</p>
										
									</div>
									<div class="product-overlay">
										<div class="overlay-content">
											<h2>Rp 50.000</h2>
											<p>INSTAMATIC</p>
											<button className="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Detail</button>
										</div>
									</div>
								</div>
								<div class="choose">
								</div>
							</div>
						</div>
						<div class="col-sm-4">
						<div class="product-image-wrapper">
							<div class="single-products">
								<div class="productinfo text-center">
									<img src="https://images.unsplash.com/photo-1432821397715-257962351702?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=394636a16b303118b9f9f1dade4cddcb&auto=format&fit=crop&w=500&q=60" alt="" height="300px"/>
									<h2>Rp 50.000</h2>
									<p>FUJINON</p>
									
								</div>
								<div class="product-overlay">
									<div class="overlay-content">
										<h2>Rp 50.000</h2>
										<p>FUJINON</p>
										<button className="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Detail</button>
									</div>
								</div>
							</div>
							<div class="choose">
							</div>
						</div>
					</div>
					<div class="col-sm-4">
					<div class="product-image-wrapper">
						<div class="single-products">
							<div class="productinfo text-center">
								<img src="https://images.unsplash.com/reserve/HwHDcyQARvK6rFF84VT8_15154010855_3ac36f3e56_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c93dcfe02b31aca0ffed7581e7aca6f&auto=format&fit=crop&w=500&q=60" alt="" height="300px" />
								<h2>Rp 50.000</h2>
								<p>NIKON</p>
								
							</div>
							<div class="product-overlay">
								<div class="overlay-content">
									<h2>Rp 50.000</h2>
									<p>NIKON</p>
									<button className="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Detail</button>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}
export default Retro;