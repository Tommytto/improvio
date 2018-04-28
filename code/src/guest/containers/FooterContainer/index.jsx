import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Footer} from 'src/common/index.es';

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

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterContainer;