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
    }

    initBem() {
        this.block = bemCn('course-preview-list')
    }

    render() {
        const {courseData, posterLink} = this.props;
        return Object.keys(courseData).map((courseId) => <CoursePreviewContainer key={courseId} course={courseData[courseId]} link={posterLink}/>)
    }
}

const CoursePreviewListContainer = connect(mapStateToProps, mapDispatchToProps)(CoursePreviewList);

export {
    CoursePreviewListContainer,
};

