import React, { Component } from 'react'
import './orderDetails.css'

class homepage extends Component {
    render() {
        return (
            <div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">Shopify App</a>
                    </div>
                </nav>
                &nbsp; &nbsp; &nbsp;
                <div className="container">
                    <div className="jumbotron">
                        <h2>Welcome to the store..!</h2>
                        <p>A place which captures the orders when a purchase is made on the spotify store.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>To visit the store and choose among your favourite character tshirts to buy</h4>
                            <a href="https://rohitkumar1105.myshopify.com/" className="btn btn-sm btn-primary">Click here</a>
                        </div>

                        <div className="col-sm-6">
                            <h4>View the order which you recently placed and edit any details if you like</h4>
                            <a href={`${process.env.PUBLIC_URL}/orders/`} className="btn btn-sm btn-primary">Orders</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default homepage
