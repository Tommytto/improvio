import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';

import 'bootstrap/dist/css/bootstrap.css';
import FooterContainer from '../../containers/FooterContainer';
import {ModalLoginContainer} from '../../containers/ModalLoginContainer';
import ModalRegisterContainer from '../../containers/ModalRegisterContainer';

import CoursePreviewList from "src/course/components/CoursePreviewList";
import {selectorCourseData} from "src/course/selectors/course.es";
import {CoursePreviewListContainer} from "src/course/containers/CoursePreviewListContainer";

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */

function mapStateToProps(state) {
    return {
        courseData: selectorCourseData(state),
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

class MainPage extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('main-page');
    }

    render() {
        return (
            <main className={this.block()}>
                <section>
                    <div className={this.block('poster')()}
                         style={{backgroundImage: `url(/images/main.jpg)`}}>
                    </div>
                    <div className={this.block('poster-text')()}>
                        <h1>
                            Hello World! <br/>
                            Let's improve yourself!
                        </h1>
                    </div>
                </section>
                <section className="center-block clearfix">
                    {this.renderCourseData()}
                </section>
                <ModalRegisterContainer/>
                <ModalLoginContainer/>
            </main>
        );
    }

    renderCourseData() {
        const {courseData} = this.props;
        if (courseData && Object.keys(courseData).length) {
            return (
                <CoursePreviewListContainer title="Все курсы" courseData={courseData}/>
            )
        }
        return <h3>Извините курсов еще нет, скорее регистрируйтесь и станьте первым преподавателем</h3>
    }

}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export {
    MainPageContainer,
};