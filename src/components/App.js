import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from '../actions/notesAction';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      title: '',
      style: '',
      color: '',
      image: ''
    };
    // bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  // lifecycle
  componentDidMount() {
    this.props.getNotes();
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
      color: this.state.color,
      image: this.state.image
    };

    this.props.saveNote(note);
    this.setState({
      title: '',
      style: '',
      color: '',
      image: ''
    });
  }

  // render notes
  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <h2>{note.title}</h2>
          <p>{note.style}</p>
          <p>{note.color}</p>

          <img
            src={note.image}
            alt="productsimage"
          ></img>
          <div>
            <button className="btn btn-danger btn-xs" onClick={() => this.props.deleteNote(key)}>
              Delete
                            </button>
            <button className="btn btn-info btn-xs pull-right">
              <Link to={`/${key}/edit`}>Update</Link>
            </button>
          </div>

        </NoteCard>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10">
            <br />
            <br />
            {this.renderNotes()}
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
                  placeholder="Style..."
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.color}
                  type="text"
                  name="color"
                  className="form-control no-border"
                  placeholder="Color..."
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.image}
                  type="text"
                  name="image"
                  className="form-control no-border"
                  placeholder="Image..."
                  required
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
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
    notes: state.notes
  };
}

export default connect(mapStateToProps, { getNotes, saveNote, deleteNote })(App);