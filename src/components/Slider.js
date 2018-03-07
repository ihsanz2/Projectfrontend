import React, { Component } from 'react';
import '../styles/Header.css';


class Slider extends Component {
    render(){
        return(
    <div>
    
    <section id="slider">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div id="slider-carousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
						</ol>
						
						<div className="carousel-inner">
							<div className="item active">
								<div className="col-sm-6">
									<h1><span class="glyphicon glyphicon-camera"></span>Ihsan-SHOP</h1>
									
									
									<button type="button" class="btn btn-default get">Get it now</button>
								</div>
								<div className="col-sm-6">
								<div className="girl1"></div>
									<img src="https://images.unsplash.com/photo-1432821397715-257962351702?ixlib=rb-0.3.5&s=d8161a382b6fd9092462b23d630b6b88&auto=format&fit=crop&w=500&q=60" className="girl img-responsive" alt="" />
									<img src="#/home/pricing.png"  className="pricing" alt="" />
								</div>
							</div>
							<div className="item">
								<div className="col-sm-6">
									<h1><span class="glyphicon glyphicon-camera">Ihsan</span>-SHOP</h1>
									
									
									<button type="button" className="btn btn-default get">Get it now</button>
								</div>
								<div className="col-sm-6">
									<img src="https://images.unsplash.com/photo-1422898645387-1db58c9dea01?ixlib=rb-0.3.5&s=ee1a19492411ef7bf07c2c62aee3fb89&auto=format&fit=crop&w=500&q=60" className="girl img-responsive" alt="" />
									<img src="#/home/pricing.png"  className="pricing" alt="" />
								</div>
							</div>
							
							<div className="item">
								<div className="col-sm-6">
									<h1><span class="glyphicon glyphicon-camera">Ihsan</span>-SHOP</h1>
									<h2></h2>
									
									<button type="button" className="btn btn-default get">Get it now</button>
								</div>
								<div className="col-sm-6">
									<img src="https://images.unsplash.com/photo-1460134846237-51c777df6111?ixlib=rb-0.3.5&s=d450f54beb550d4b362ef3270f336856&auto=format&fit=crop&w=500&q=60" className="girl img-responsive" alt="" />
									<img src="#" className="pricing" alt="" />
								</div>
							</div>
							
						</div>
						
						<a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
							<i className="fa fa-angle-left">{"<"}</i>

						</a>
						<a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
							<i className="fa fa-angle-right">{">"}</i>
						</a>
					</div>
					
				</div>
			</div>
		</div>
    </section>
    
    </div>
        );
    }
}
export default Slider;