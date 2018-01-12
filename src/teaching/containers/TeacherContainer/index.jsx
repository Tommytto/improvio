import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

// import {exampleSimple, exampleGet, exampleCreate, exampleUpdate, exampleDelete} from 'src/redux/actions/example';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
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
function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        // exampleSimple,
        // exampleGet,
        // exampleCreate,
        // exampleUpdate,
        // exampleDelete,
    }, dispatch);
}

class Teacher extends React.Component {

    /**
     * Отображение компонента
     */
    render () {
        return null;
    }

}

const TeacherContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Teacher));
export {
    TeacherContainer,
};
