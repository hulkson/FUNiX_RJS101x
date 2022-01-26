import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import "./DishDetailComponent.css";

class DishDetail extends Component {
  render() {
    if (this.props.dish === undefined) {
      return <div></div>;
    } else {
      const selectedDish = this.props.dish;
      return (
        <div className="container selected-box">
          <Card className="col-lg-6 col-md-6 col-sm-12">
            <CardImg
              width="100%"
              object
              src={selectedDish.image}
              alt={selectedDish.name}
            />
            <CardBody>
              <CardTitle>{selectedDish.name}</CardTitle>
              <CardText>{selectedDish.description}</CardText>
            </CardBody>
          </Card>
            <Card className="col-lg-6 col-md-6 col-sm-12">
              <CardTitle>Comment</CardTitle>
              <CardText>
                {this.props.dish.comments.map((comment) => {
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
}

export default DishDetail;
