import React, { Component } from 'react';
import { connect } from 'react-redux'
class Photo extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image.urls.full} alt=""/>
      </div>
    );
  }
}

function mapStateToProps(state,props) {
  return {   image: state.images.find((image) => image.id === props.match.params.id), }
}

export default connect(mapStateToProps)(Photo)