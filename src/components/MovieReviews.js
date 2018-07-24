import React from 'react';
// Code MovieReviews Here

const Review = props => {
  return (<div className="review">{ props.review.display_title }</div>);
}

const MovieReviews = props => {

  const eachReview = () => {
    return props.reviews.map((review) => <Review key={review.display_title} review={review} />);
  }

  return (
    <div className="review-list">
      <div>{ eachReview() }</div>
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
