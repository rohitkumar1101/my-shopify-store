import React, { Component } from 'react'
import { toast } from 'react-toastify'
import './orderDetails.css'
import { Redirect } from 'react-router-dom'

class OrderDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email : '',
             phone: '',
             first_name: '',
             last_name: '',
             address: '',
             contact_phone: '',
             contact_name: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const postData = {
            email: this.state.email,
            phone: this.state.phone,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            contact_name: this.state.contact_name,
            contact_phone: this.state.contact_phone,
        }
        fetch(`https://mystore-nodebackend.herokuapp.com/orders/${this.props.match.params.order_id}`,{
            method: 'PUT',
            headers : {
                "content-type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    handleClick(){
        return(
            toast.success("Details Updated", {
                position: toast.POSITION.BOTTOM_LEFT
            }),
            <Redirect to="/orders/" />
        )
    }

    render() {

        //Destructuring the state
        const { email, phone, first_name,last_name, contact_name, contact_phone, address }  = this.state

        return (
            <div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">Shopify App</a>
                    </div>
                </nav>
                {console.log("items", this.props.item)}
                &nbsp; &nbsp; &nbsp;
                <div className="container">
                    <div className="layout_item">
                        <form onSubmit={this.onSubmit} >
                            {/* Contact Information */}
                            <h3>Contact Information</h3> <br />
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name</label>
                                        <input type="text"className="form-control" name="first_name" onChange={this.onChange} value={first_name} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input type="text" className="form-control" name="last_name" onChange={this.onChange} value={last_name} required />
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email"className="form-control" name="email" onChange={this.onChange} value={email} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" className="form-control" name="phone" onChange={this.onChange} value={phone} required />
                                    </div>
                                </div>
                            </div> <br /><br />

                            {/* Shipping Address */}
                            <h3>Shipping Address</h3> <br />
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="contact_name">Contact Person Name</label>
                                        <input type="text" className="form-control" name="contact_name" onChange={this.onChange} value={contact_name} required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="contact_phone">Contact Person Number</label>
                                        <input type="number" className="form-control" name="contact_phone" onChange={this.onChange} value={contact_phone} required />
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea className="form-control" name="address" onChange={this.onChange} value={address} required></textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <button type="submit" className="btn-primary btn-sm" onClick={this.handleClick}>Save</button>
                        </form>
                        &nbsp; &nbsp; &nbsp;
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDetails
