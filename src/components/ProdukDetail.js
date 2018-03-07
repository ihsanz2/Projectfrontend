import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from "react-router-dom";

class ProductDetail extends Component {
    render(){
        return(
<div>
<div class="product-details">
						<div class="col-sm-5">
							<div class="view-product">
								<img src="images/product-details/1.jpg" alt="" />
								
							</div>
							
						</div>
						<div class="col-sm-7">
							<div class="product-information">
							<h2>{this.props.img}</h2>
								<h2>{this.props.name}</h2>
								

								<span>
								<h2>{this.props.price}</h2>
									
									<button className="btn btn-fefault cart" type="button" >
										<i class="fa fa-shopping-cart"></i>
										Add to cart
									</button>
								</span>
								<p><b>Availability:</b> In Stock</p>
								<p><b>Condition:</b> New</p>
								<p><b>Brand:</b> Ihsan-SHOP</p>
								<img src="images/product-details/share.png" class="share img-responsive"  alt="" />
							</div>
						</div>
					</div>
</div>                   
                    
        );
    }
}
export default ProductDetail;