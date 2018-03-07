import React, { Component } from 'react';
class Mirrorless extends Component {
    render(){
        return(
            <div>
            <div class="col-sm-4">
							<div class="product-image-wrapper">
								<div class="single-products">
									<div class="productinfo text-center">
										<img src="https://images.unsplash.com/photo-1487004820913-ccbc3ebb15d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3add39dbebf4d6a6899c5faf0b6e8881&auto=format&fit=crop&w=500&q=60 " alt="" height="300px"/>
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
								<div class="choose">
								</div>
							</div>
						</div>
						<div class="col-sm-4">
						<div class="product-image-wrapper">
							<div class="single-products">
								<div class="productinfo text-center">
									<img src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91a7bb1e7fc21eec6ac3e07720d19ddd&auto=format&fit=crop&w=500&q=60" alt="" height="300px"/>
									<h2>Rp 50.000</h2>
									<p>FUJIFILM</p>
									
								</div>
								<div class="product-overlay">
									<div class="overlay-content">
										<h2>Rp 50.000</h2>
										<p>FUJIFILM</p>
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
								<img src="https://images.unsplash.com/photo-1474376700777-eb547d9bed2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5432a7dcbb9405c38b34280739cf42a&auto=format&fit=crop&w=500&q=60" alt="" height="300px" />
								<h2>Rp 50.000</h2>
								<p>CANON</p>
								
							</div>
							<div class="product-overlay">
								<div class="overlay-content">
									<h2>Rp 50.000</h2>
									<p>CANON</p>
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
export default Mirrorless;