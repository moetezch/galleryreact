import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchImages } from '../actions'
let pageNumber=1
 class List extends Component {
  componentDidMount() {
    this.props.fetchImages(pageNumber)
  }
  IncrementPage = () => {
    pageNumber++
    this.props.fetchImages(pageNumber)
    console.log(pageNumber);
    
  }
  DecreasePage = () => {
    if (pageNumber>=2) {
      pageNumber--
      this.props.fetchImages(pageNumber)
      console.log(pageNumber);
    }
}
  renderImages (){
    return this.props.images.map((image) => {

      return <div className="column is-one-third" key={image.id}>

        <Link to={`/photo/${image.id}`} className="">
        <div className="card-image">
        <figure className="image is-4by3">
          <img src={image.urls.small} alt=""/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={image.user.profile_image.small} alt=""/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{image.user.name}</p>
            <p className="subtitle is-6">@{image.user.username}</p>
          </div>
        </div>
        </div>
        </Link>
      </div>
    })
  }
  render() {
    return (
      <div className="container">
        <div className="columns is-multiline">
          {this.renderImages()}
        </div>
        <div className="field is-grouped is-pulled-right">
        <div className="control">
        {pageNumber>=2?  <button className="button is-light" onClick={this.DecreasePage}>Back</button>:''}
        </div>
        <button className="button is-light  control" onClick={this.IncrementPage}>Next</button>
        </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { images: state.images }
}

export default connect(mapStateToProps, { fetchImages })(List)