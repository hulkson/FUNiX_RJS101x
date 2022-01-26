import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import "./DishDetailComponent.css";


  function RenderDish({dish}) {
    if (dish === undefined) {
      return <div></div>;
    } else {
      return (
        <div className="container selected-box">
          <Card className="col-lg-6 col-md-6 col-sm-12">
            <CardImg
              width="100%"
              object
              src={dish.image}
              alt={dish.name}
            />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
            <Card className="col-lg-6 col-md-6 col-sm-12">
              <CardTitle>Comment</CardTitle>
              <CardText>
                {dish.comments.map((comment) => {
                  return (
                    <p key={comment.id}>
                      {comment.comment}
                      <br />
                      {comment.author}
                    </p>
                  );
                })}
              </CardText>
            </Card>
        </div>
      );
    }
  }

export default RenderDish;
