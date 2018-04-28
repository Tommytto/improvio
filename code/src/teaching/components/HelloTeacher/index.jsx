import React from 'react';
import './style.less';
import {Link} from "react-router-dom";
import {Button, Jumbotron} from "reactstrap";

function HelloTeacher () {
    return (
        <Jumbotron>
            <h1 className="display-3">Приветствуем тебя!</h1>
            <p className="lead">Прямо сейчас ты находишься в преподавательской.
                Здесь у тебя есть возможность создать курс, которым ты можешь поделиться с друзьями или же начать зарабатывать на нем</p>
            <hr className="my-2" />
            <p>Чувствуй себя как в кабинете!</p>
            <p className="lead">
                <Button tag={Link} to="/teaching/course-creating" color="primary">Создать свой первый курс</Button>
            </p>
        </Jumbotron>
    )
}

export {
    HelloTeacher,
};