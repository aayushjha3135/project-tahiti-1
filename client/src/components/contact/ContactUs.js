import React from 'react';

import Image from 'next/dist/client/image';

// libararies
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import theme from '../../config/themes/light';

// images
import SACimagemd from '../../assets/images/contact/sac1.png';
import SACimagexs from '../../assets/images/contact/sac2.png';

const ContactUs = () => {
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid container className={classes.wrapper}>
      {!matches && (
        <>
          <Grid item>
            <Image
              src={SACimagemd}
              alt='SACimage'
              layout='fill'
              className={classes.image1}
            />
          </Grid>
          <Typography variant='h1' className={classes.title1}>
            CONTACT US
          </Typography>
        </>
      )}
      {matches && (
        <>
          <Grid item>
            <Image
              src={SACimagexs}
              alt='SACimage'
              layout='fill'
              className={classes.image2}
            />
          </Grid>
          <Typography variant='h1' className={classes.title2}>
            ↓ Contact Us
          </Typography>
        </>
      )}
    </Grid>
  );
};

export default ContactUs;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '1.5rem',
    position: 'relative',
    minHeight: '216px',
    [theme.breakpoints.down('xs')]: {
      minHeight: '191px',
      marginTop: '1rem',
    },
  },
  image1: {
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      visibility: 'none',
    },
  },
  image2: {
    position: 'absolute',
    visibility: 'none',
    backgroundColor: theme.palette.text.disabled,
    [theme.breakpoints.down('xs')]: {
      visibility: 'visible',
      filter: 'brightness(50%)',
    },
  },
  title1: {
    position: 'absolute',
    top: '75%',
    left: '40%',
    color: theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      visibility: 'none',
    },
  },
  title2: {
    visibility: 'none',
    color: theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      visibility: 'visible',
      position: 'absolute',
      top: '75%',
      left: '5%',
      color: theme.palette.common.white,
    },
  },
}));
