import { Fragment } from "react";

function BookInfo({ info }) {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {Object.keys(info).length > 0 ? (
        <div>
          <p className="fw-bold">Title: {info.title}</p>
          <p className="fw-light">Description: {info.description}</p>
          <p className="fst-italic">Price: {info.price}</p>
          <p className="fst-italic">Inserted by: {info.userName}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet. please select!
        </div>
      )}
    </Fragment>
  );
}

export default BookInfo;
