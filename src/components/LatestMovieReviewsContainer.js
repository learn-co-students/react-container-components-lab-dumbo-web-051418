import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = '249e7b4655ac4b37b4faa32fb191e959';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(r => r.json())
    .then(data => {
      const reviewsArr = data.results.map((review) => [review.display_title, review.headline, review.link.url, review.summary_short])
      this.setState({reviews: reviewsArr})
    })
  }


  render() {
    const reviewsDisplay = this.state.reviews.map((review) => {
      return (<span>
        <h1><a href={review[2]}>{review[0]}</a></h1>
        {review[1]}<br/>
        Summary: {review[3]}<br/>
      </span>)
    })

    return (
      <div className="latest-movie-reviews">
        {reviewsDisplay}
      </div>
    )
  }


}
