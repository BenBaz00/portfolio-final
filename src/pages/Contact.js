
import { Component } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";

import axios from 'axios';

class Contact extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
            validated: false,
            mailSent: false,
            error: null,
        }
    }

    componentDidMount(){
        document.title = "Contact - Benjamin Bazan"
    }

    handleSubmit = (event) =>{
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else{
            console.log(this.state)

            axios({
                method: "POST",
                url:"http://localhost:3002/send",
                data:  this.state
              }).then((response)=>{
                if (response.data.status === 'success') {
                  alert("Message Sent.");
                  this.resetForm()
                } else if(response.data.status === 'fail') {
                  alert("Message failed to send.")
                }
              })
        }



        this.setState({
            validated: true,
        })
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render(){
        return(
            <>
            <Row className="text-center">
                <p>Let me know if you have any questions, comments, or inquires. I will respond back as soon as possible.</p>
            </Row>
            <Row>
            {/* Email Form */}
            <Col xs={12} sm={6} md={6} lg={6} className="bg-dark mx-auto py-2">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} className="mb-2">
                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text" placeholder="Please enter your name" onChange={e => this.setState({name: e.target.value})}/>
                        <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="form.Email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter Email" onChange={e => this.setState({email: e.target.value})}/>
                        <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Message</Form.Label>
                        <Form.Control required as="textarea" rows={8} placeholder="What would you like to say?" onChange={e => this.setState({message: e.target.value})}/>
                        <Form.Control.Feedback type="invalid">At least say hello..</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="secondary" type="submit">Submit</Button>
                </Form>
            </Col>
    
            </Row>
    
            </>
        )
    }

}

export default Contact;