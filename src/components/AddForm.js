import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBooks } from "../store/bookSlice";

function AddForm() {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.auth);

  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };
    dispatch(insertBooks(data));
    title.current.value = null;
    price.current.value = null;
    description.current.value = null;
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              ref={title}
              type="text"
              className="mt-2 mb-3 form-control"
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              ref={price}
              type="number"
              className="mt-2 mb-3 form-control"
              id="price"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Description ">Description</label>
            <textarea
              ref={description}
              className="form-control mt-2"
              id="Description"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLogged}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
