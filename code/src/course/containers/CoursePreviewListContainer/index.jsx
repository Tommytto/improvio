import React from 'react';
import bemCn from 'bem-cn';

import './style.less'
import {connect} from "react-redux";
import {CoursePreviewContainer} from "src/course/containers/CoursePreviewContainer";
import {bindActionCreators} from "redux";

function mapStateToProps (state) {
    return {
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
    }, dispatch);
}

class CoursePreviewList extends React.Component {
    constructor() {
        super();
        this.initBem();

        this.courseWidth = 200;
        this.rightMargin = 10;
        this.maxWidth = 1200;
        this.prevIntCount = 0;
        this.state = {
            width: '100%',
        }
    }

    initBem() {
        this.block = bemCn('course-preview-list')
    }

    componentDidMount() {
        this.resizeCourseContainer();
        window.addEventListener('resize', this.resizeCourseContainer);

    }

    resizeCourseContainer = () => {
        const currentWidth = window.innerWidth > this.maxWidth ? this.maxWidth : window.innerWidth;
        const intCountCourse = Math.floor(currentWidth/(this.courseWidth + this.rightMargin + 40));

        // if (intCountCourse !== this.prevIntCount) {
            this.setState({
                width: `${intCountCourse * (this.courseWidth + this.rightMargin)}px`,
            });
            this.prevIntCount = intCountCourse;
        // }

    };

    render() {
        const {courseData, posterLink, title} = this.props;
        const {width} = this.state;

        return (
            <section ref="coursePreviewList" style={{width}} className={this.block.mix("clearfix")()}>
                <h3 className={this.block('title').mix("m-b-20")()}>{title}</h3>
                {
                    Object.keys(courseData).map((courseId) => <CoursePreviewContainer key={courseId} course={courseData[courseId]} link={posterLink}/>)
                }
            </section>
        );
    }
}

const CoursePreviewListContainer = connect(mapStateToProps, mapDispatchToProps)(CoursePreviewList);

export {
    CoursePreviewListContainer,
};

