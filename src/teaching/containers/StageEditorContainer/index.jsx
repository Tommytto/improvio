import {Button} from "common/components/Button/index";
import {createStage} from "course/actions/stage.es";
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';


/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(state) {
    return {
        // example: state.example,
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
        createStage,
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

    /**
     * Отображение компонента
     */
    render() {
        return (
            <Fragment>
                <div>Этапы курса</div>
                <Button color="info" onClick={this.props.createStage}>
                    Добавить этап
                </Button>
            </Fragment>
        )
    }

}

const StageEditorContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StageEditor));
export {
    StageEditorContainer,
};