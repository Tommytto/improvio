import React from 'react';
import bemCn from 'bem-cn';

import './style.less'
import CoursePreview from '../CoursePreview/index';
import CoursePreviewContainer from '../../containers/CoursePreviewContainer/index';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
const block = bemCn('course-preview-list');


class CoursePreviewList extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {

    }

    render () {
        const {bemWrapper, courseIdList, courseList, profile} = this.props;
        return (
            <div className="row">
                {
                    courseList.map((item, index) => {
                        return (
                            <div className="col-3 m-t-20" key={index}>
                                <Link to={`/teaching/courses/${item.id}`}>
                                    <Card>
                                        <CardImg top width="100%" src={item.poster} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardSubtitle>{`${profile.lastName} ${profile.firstName}`}</CardSubtitle>
                                            <CardText>{item.description}</CardText>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )

        // return (
        //     <div className={bemWrapper ? block.mix(bemWrapper(block())) : block()}>
        //         {this.renderCourseList()}
        //     </div>
        // );
    }

    // renderCourseList() {
    //     const {courseIdList} = this.props;
    //     return courseIdList.map((item) => {
    //         return <CoursePreviewContainer key={item} id={item}/>
    //     })
    // }

}

export default CoursePreviewList;