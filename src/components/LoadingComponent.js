import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter you can get access to the history object's property
import { getNotes } from '../actions/notesAction';

class LoadingComponent extends Component {
    componentWillMount() {
        this.props.getNotes();
    }


    render() {
        const { children } = this.props;
        return <div>{children}</div>;

    }
}

function mapStateToProps(state) {
    return {
        notesLoading: state.loading.notes
    }
}


export default connect(mapStateToProps, { getNotes })(LoadingComponent)
