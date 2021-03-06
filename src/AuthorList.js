import React from "react";
import AuthorCard from "./AuthorCard";
import authors from "./data";

const AuthorList = props => {
  const cards = authors.map(author => <AuthorCard author={author} />);

  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{cards}</div>
      </div>
    </div>
  );
};

export default AuthorList;
