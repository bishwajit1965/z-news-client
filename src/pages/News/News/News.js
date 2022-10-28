import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const detailedNews = useLoaderData();
  const { title, author, image_url, details, rating, total_view, category_id } =
    detailedNews;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All news in this category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
