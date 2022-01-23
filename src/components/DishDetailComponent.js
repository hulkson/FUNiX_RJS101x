import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <Card>
            <CardImg
              width="100%"
              object
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="row">
          <CardBody>
            <CardTitle>Comment</CardTitle>
            <CardText>{this.props.dish.comments.map((comment) => {
              return (
                  <p key={comment.id}>{comment.comment}<br/>
                  {comment.author}
                  </p>
              )
            })}</CardText>
          </CardBody>
        </div>
      </Fragment>
    );
  }
}

export default DishDetail;
