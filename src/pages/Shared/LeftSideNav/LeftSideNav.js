import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h4>Categories: {categories.length}</h4>
      <div className="categories">
        {categories.map((category) => (
          <ListGroup>
            <ListGroup.Item className="mb-2 bg-light py-1 px-2 category-links">
              <p className="m-0 p-0" key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>{" "}
              </p>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
