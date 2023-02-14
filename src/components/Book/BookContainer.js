import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BookList from "./BookList";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";

function PostContainer() {
  const [selectedBook, setSelectedBook] = useState({});
  const { isLoading, books } = useSelector((state) => state.books);
  const { isLogged } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const getBookId = (id) => {
    const selectedBook = books.find((item) => item.id === id);
    setSelectedBook((prevState) => {
      return { ...prevState, ...selectedBook };
    });
  };
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BookList
            isLoading={isLoading}
            books={books}
            isLogged={isLogged}
            getBookId={getBookId}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
}

export default PostContainer;
