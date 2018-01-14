import React from 'react';
import bemCn from 'bem-cn';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
const block = bemCn('modal-register');


class ModalRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
        this.initBem();
    }

    initBem() {

    }

    getFormData() {
        const {firstName, email, lastName, password} = this.state;
        return {
            firstName,
            lastName,
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
                        Регистрация
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="firstName">Имя</Label>
                            <Input type="firstName" name="firstName" value={this.state.firstName} onChange={this.changeInputData} id="register-firstName" placeholder="Введите имя"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Фамилия</Label>
                            <Input type="lastName" name="lastName" value={this.state.lastName} onChange={this.changeInputData} id="register-lastName" placeholder="Введите фамилию"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" value={this.state.email} onChange={this.changeInputData} id="register-email" placeholder="Введите email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Пароль</Label>
                            <Input type="password" name="password" value={this.state.password} onChange={this.changeInputData} id="register-password" placeholder="Введите пароль"/>
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

export default ModalRegister;