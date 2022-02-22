import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Label,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./DishDetailComponent.css";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, FadeTransform, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  handleSubmit = (values) => {
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    this.handleToggle();

  };
  render() {
    return (
      <React.Fragment>
        <Button className="bg-white text-dark" onClick={this.handleToggle}>
          <i className="fa fa-pencil fa-lg"></i> Submit Comment
        </Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.handleToggle}>
          <ModalHeader toggle={this.handleToggle}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="rating" md={4}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={4}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={4}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    className="form-control"
                    validators={{
                      required,
                    }}
                    rows="6"
                  />
                  <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
                      required: "Comment Required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
        <Card>
          <CardImg top src={baseUrl + dish.image} alt={dish.image} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    </div>
  );
}

function RenderComments({ comments, dishId, postComment }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          <Stagger in>
            {comments.map((comment) => {
              return (
                <Fade in>
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}</p>
                  </li>
                </Fade>
              );
            })}
          </Stagger>
        </ul>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="conatainer">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  }

  else if (props.errorMessage) {
    return (
      <div className="conatainer">
        <div className="row">
          <h4>{props.errorMessage}</h4>
        </div>
      </div>
    )
  }

  else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish[0].name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish[0]} />
          <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            dishId={props.dish[0].id}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
