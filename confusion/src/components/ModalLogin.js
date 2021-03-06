import {Modal, ModalHeader, ModalBody, Form, Label, FormGroup, Input, Button} from 'reactstrap';
import React from 'react';

class ModalLogin extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);     

    }
    handleLogin(event) {
        this.toggleModal();
        
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
            
        event.preventDefault();

    }
    render(){
        return(
            <Modal isOpen={this.props.isModalOpen} >
                <ModalHeader>Loginss
                
                </ModalHeader>
                <ModalBody> 
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input}  />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>             
                </ModalBody>
            </Modal>

        );
    }
}; export default ModalLogin;
