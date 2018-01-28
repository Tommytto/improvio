import {Button} from "common/components/Button/index";
import {createStage, getStage} from "course/actions/stage.es";
import {Stage} from "course/components/Stage/index";
import {selectorStageListByCourse} from "course/selectors/course.es";
import {selectStageData, selectStageDataByList} from "course/selectors/stage.es";
import {openModal} from "modal/actions/modal.es";
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';
import {MODAL_NAMES} from "teaching/constants/config.es";
import {CreateStageModalContainer} from "teaching/containers/CreateStageModalContainer/index";


/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state, props) {
    const courseId = props.match.params.courseId;
    const stageList = selectorStageListByCourse(state, courseId);

    return {
        stageData: selectStageDataByList(state, stageList),
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
        openModal: () => openModal(MODAL_NAMES.CREATE_STAGE),
        getStage,
    }, dispatch);
}

class StageEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0,
        };
        this.initBem();
    }

    initBem() {
        this.block = bemCn('course-stage-edit')
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount() {
        // this.props.getStage()
    }

    /**
     * Отображение компонента
     */
    render() {
        return (
            <Fragment>
                {this.renderStages()}
                <Button outline color="primary" onClick={this.props.openModal}>
                    Добавить этап
                </Button>
                <CreateStageModalContainer/>
            </Fragment>
        )
    }

    renderStages() {
        const {stageData} = this.props;
        console.log(stageData);
        if (!stageData) {
            return null;
        }
        return Object.values(stageData).map((stage) => <Stage key={stage.id} stageName={stage.name}/>)
    }

}

const StageEditorContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StageEditor));
export {
    StageEditorContainer,
};