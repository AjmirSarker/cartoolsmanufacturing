import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/firebase.init';

const AddReview = () => {
  const [user] = useAuthState(auth);
  const HandleAddItem = (e) => {
    e.preventDefault();

    const ratings = e.target.rating.value;
    if (ratings > 0 && ratings <= 5) {
      const username = e.target.username.value;
      const image = e.target.image.value;

      const description = e.target.review.value;
      const data = { image, ratings, username, description };
      console.log(data);
      const url = 'https://sarkermanufacturers.herokuapp.com/reviews';
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      toast.success('Your review have been saved');
      e.target.reset();
    } else {
      toast.error('Enter rating between 1 to  5');
    }
  };
  return (
    <div>
      <div className="w-50 my-5 mx-auto ">
        <h1>Add New Review</h1>
        <form onSubmit={HandleAddItem}>
          <div class="mb-3">
            <input
              type="text"
              value={user?.displayName}
              name="username"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <input
              placeholder="Enter your image link if not enter nothing"
              type="text"
              name="image"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <input
              name="rating"
              required
              placeholder="Ratings"
              type="number"
              class="form-control"
            />
            <p className="d-flex text-danger fw-bold">Rating from 1 to 5</p>
          </div>
          <div class="mb-3">
            <textarea
              name="review"
              placeholder="review"
              class="form-control"
              required
              rows="3"
            ></textarea>
          </div>
          <div class="mb-3">
            <input
              className="btn fw-bold btn-success  btn-outline-warning"
              type="submit"
              value="Add review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
