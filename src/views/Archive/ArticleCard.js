import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';

import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.js';

import { cardTitle } from 'assets/jss/material-kit-react.js';

import './ArticleCard.scss';

const styles = {
  ...imagesStyles,
  cardTitle
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
  const classes = useStyles();
  return (
    <Card style={{ width: '23rem', margin: '40px' }} className='card'>
      <img
        style={{ height: '180px', width: '100%', display: 'block' }}
        className={classes.imgCardTop}
        src={props.img}
        alt='Card-img-cap'
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{props.title}</h4>
        <p>{props.desc}</p>
        <Button
          className='read-more'
          color='twitter'
          round
          href={props.link}
          target='blank'
        >
          Read More
        </Button>
        <div className='other-data'>
          <span className='date'>{props.date}</span>
          <span className='min-read'>{props.min} min read</span>
        </div>
      </CardBody>
    </Card>
  );
}
