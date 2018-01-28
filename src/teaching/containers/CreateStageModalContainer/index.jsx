import bemCn from "bem-cn";
import {createStage} from "course/actions/stage.es";
import {Modal} from "modal/components/Modal/index";
import {closeModal, selectorModal} from "modal/index.es";
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {bindActionCreators} from 'redux';
import {createCourse} from "src/course/actions/course.es";
import {MODAL_NAMES} from "teaching/constants/config.es";
import {selectorProfileId} from "../../../profile/selectors/profile.es";

// import {exampleSimple, exampleGet, exampleCreate, exampleUpdate, exampleDelete} from 'src/redux/actions/example';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state, props) {
    const courseId = props.match.params.courseId;
    return {
        isOpen: selectorModal(state, MODAL_NAMES.CREATE_STAGE),
        profileId: selectorProfileId(state),
        courseId,
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeModal: () => closeModal(MODAL_NAMES.CREATE_STAGE),
        createStage,
    }, dispatch);
}

class CreateStageModal extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
        };
        this.initBem();
    }

    initBem() {
        this.block = bemCn('create-stage-modal');
    }

    changeInputData = (event) => {
        const target = event.currentTarget;
        this.setState({
            [target.name]: target.value,
        });
    };

    handleCreate = async (event) => {
        event.preventDefault();
        const {createStage, closeModal, courseId} = this.props;
        await createStage({
            name: this.state.name,
            courseId,
        });
        closeModal();
    };

    /**
     * Отображение компонента
     */
    render() {
        const {isOpen, closeModal} = this.props;

        return (
            <Modal isOpen={isOpen} toggle={closeModal}>
                <Form onSubmit={this.handleCreate}>
                    <ModalHeader toggle={closeModal}>
                        Создание нового этапа
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="stageName">Название этапа</Label>
                            <Input type="stageName" name="name" value={this.state.name} onChange={this.changeInputData} id="stageName" placeholder="Введите название"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='success' type="submit">
                            Подтвердить
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>
        )
    }

}

const CreateStageModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateStageModal));
export {
    CreateStageModalContainer,
};
