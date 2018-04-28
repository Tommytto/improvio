import React from 'react';
import bemCn from 'bem-cn';

// import './style.less'
import CoursePreview from "../CoursePreview";


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

        return Object.keys(courseData).map((courseId) => <CoursePreview key={courseId} course={courseData[courseId]} link={posterLink}/>)
    }
}

export default CoursePreviewList;