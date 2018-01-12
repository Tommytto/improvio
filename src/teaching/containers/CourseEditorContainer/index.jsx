import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {
    Button,
    Card, CardText, CardTitle,
    Col,
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContent,
    TabPane
} from "reactstrap";
import bemCn from 'bem-cn';
import './style.less';
import {InfoCourseContainer} from "../InfoCourseContainer";

// import {exampleSimple, exampleGet, exampleCreate, exampleUpdate, exampleDelete} from 'src/redux/actions/example';

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
        // exampleSimple,
        // exampleGet,
        // exampleCreate,
        // exampleUpdate,
        // exampleDelete,
    }, dispatch);
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
        console.log(this.state.activeTab);
        return (
            <div className={this.block()}>
                <Row>
                    <div className="col-3">
                        <Nav vertical pills>
                            {this.renderNavLinks()}
                        </Nav>
                    </div>
                    <TabContent className="col-9" activeTab={this.state.activeTab}>
                        <TabPane tabId={0}>
                            <InfoCourseContainer/>
                        </TabPane>
                        <TabPane tabId={1}>
                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional
                                            content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
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