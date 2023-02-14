import React from "react";
import { useDispatch } from "react-redux";
import { deleteBooks } from "../../store/bookSlice";

function BookList({ isLoading, books, isLogged, getBookId }) {
  const dispatch = useDispatch();
  const deleteHandler = (item) => {
    dispatch(deleteBooks(item));
    // .unwrap()
    // .then((originalPromiseResult) => {
    //   console.log(originalPromiseResult);
    // })
    // .catch((rejectedValueOrSerializedError) => {
    //   console.log(rejectedValueOrSerializedError);
    // });
  };

  const bookList =
    books.length > 0
      ? books?.map((item) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={item.id}
          >
            <div>{item.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => getBookId(item.id)}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                // ref={id}
                onClick={() => deleteHandler(item)}
                disabled={!isLogged}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "There is no books available!";
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
}

export default BookList;
