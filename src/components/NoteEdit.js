import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions/notesAction';

class NoteEdit extends Component {
    constructor(props) {
        super(props);
        // state
        this.state = {
            title: this.props.note.title,
            style: this.props.note.style
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // handle submit
    handleSubmit(e) {
        e.preventDefault();
        const note = {
            title: this.state.title,
            style: this.state.style,
            uid: this.props.uid
        };
        this.props.editNote(this.props.match.params.id, note);
        this.setState({
            title: '',
            style: ''
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    type="text"
                                    name="title"
                                    className="form-control no-border"
                                    placeholder="Title..."
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.style}
                                    type="text"
                                    name="style"
                                    className="form-control no-border"
                                    placeholder="style..."
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary col-sm-12">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        note: state.notes[ownProps.match.params.id],
        uid: state.user.uid

    };
}

export default connect(mapStateToProps, { editNote })(NoteEdit);