import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import './orders.css'
import OrderDetails from './orderDetails'

class Orders extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             orderData: [],
        }
    }
    
    componentDidMount(){
        fetch("https://mystore-nodebackend.herokuapp.com/orders") 
        .then(res => res.json())
        .then(res => this.setState({orderData: res}))
    }

    handleClick(item){
        return (
            <OrderDetails item = {item} />
        )
    }


    render() {
        let data = []
        this.state.orderData.map((orders,index) => {
            return (
                <div key={index}>
                    {data.push(orders)}
                </div>
            ) 
        })
        
        return (
            <div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">Shopify App</a>
                    </div>
                </nav>
                &nbsp; &nbsp; &nbsp;

                {/* Orders */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <h3>Orders</h3> &nbsp; &nbsp;
                                {console.log(data)}
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order Number</th>
                                        <th>Total</th>
                                        <th>Product</th>
                                        <th>Customer</th>
                                        <th>Shipping Address</th>
                                        <th>Date of Purchase</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item,index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.order_number}</td>
                                                <td>{item.total_price}</td>
                                                <td>{
                                                        item.line_items.map((product,index) => {
                                                            return (
                                                                <li> { product.title } </li>
                                                            )
                                                        })
                                                    }
                                                </td>
                                                <td>{item.customer.first_name} {item.customer.last_name}</td>
                                                <td>{item.shipping_address.address1}{item.shipping_address.address2}</td>
                                                <td>{item.created_at.split('T')[0]}</td>
                                                <td>
                                                    <a href={`${process.env.PUBLIC_URL}/orders/${item._id}`} 
                                                    className="btn-sm btn-primary" onClick={() => this.handleClick(item)}>Edit</a>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders