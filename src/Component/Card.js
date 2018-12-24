import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import './Card.css';

const Cards = props => {
  const { judul, update, author, id } = props;
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{id}</CardTitle>
          <CardSubtitle>{author}</CardSubtitle>
          <CardSubtitle>{judul}</CardSubtitle>
          <CardSubtitle>{update}</CardSubtitle>
          <CardText />
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
