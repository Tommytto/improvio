import React, {Component} from 'react';
import bemCn from 'bem-cn';
import {ModalHeader, ModalBody, ModalFooter, Form, Modal, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';

import {Button} from 'reactstrap';

const block = bemCn('modal-login');


class ModalLogin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.initBem();
    }

    initBem() {

    }

    getFormData() {
        const {email, password} = this.state;
        return {
            email,
            password,
        }
    }

    changeInputData = (event) => {
        const target = event.currentTarget;
        this.setState({
            [target.name]: target.value,
        });
    };

    render() {
        const {isOpen, closeModal, onSubmit} = this.props;

        return (
            <Modal isOpen={isOpen} toggle={closeModal}>
                <Form onSubmit={(event) => onSubmit(event, this.getFormData())}>

                    <ModalHeader toggle={closeModal}>
                        Авторизация
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" value={this.state.email} onChange={this.changeInputData} id="login-email" placeholder="Введите email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Пароль</Label>
                            <Input type="password" name="password" value={this.state.password} onChange={this.changeInputData} id="login-password" placeholder="Введите пароль"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='success' type="submit">
                            Подтвердить
                        </Button>
                    </ModalFooter>
                </Form>

            </Modal>
        );
    }

}

export {
    ModalLogin,
};