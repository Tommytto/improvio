import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import bemCn from 'bem-cn';
import './style.less';
import {StageEditorContainer} from "teaching/containers/StageEditorContainer/index";
import {InfoCourseContainer} from "../InfoCourseContainer";


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
    return bindActionCreators({}, dispatch);
}

class CourseEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0,
        };
        this.initBem();
        this.linkList = [
            "Основная информация",
            "Создание этапов",
            "Результат",
            "Модерация",
        ]
    }

    initBem() {
        this.block = bemCn('course-edit')
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
            <div className={this.block.mix('center-block h-100')()}>
                <Row>
                    <div className="col-3">
                        <Nav vertical pills>
                            {this.renderNavLinks()}
                        </Nav>
                    </div>
                    <TabContent className="col-9" activeTab={this.state.activeTab}>
                        <TabPane tabId={0}>
                            <div className="white-box clearfix">
                                <InfoCourseContainer/>
                            </div>
                        </TabPane>
                        <TabPane tabId={1}>
                            <div className="white-box clearfix">
                            <StageEditorContainer/>
                        </div>
                        </TabPane>
                    </TabContent>
                </Row>
            </div>
        )
    }

    renderNavLinks() {
        return this.linkList.map((link, index) => {
            return (
                <NavItem key={index}>
                    <NavLink
                        className={this.block('tab-link').mix(index === this.state.activeTab ? 'active' : '')()}
                        onClick={() => this.toggle(index)}>
                        {link}
                    </NavLink>
                </NavItem>
            )
        })
    }
}

const CourseEditorContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CourseEditor));
export {
    CourseEditorContainer,
};