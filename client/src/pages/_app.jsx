import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

// Styles
import '../../public/index.css';

// Libraries
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Providers
import ApolloClient from '../config/ApolloClient';

// Components
// import ScrollToTopOnMount from '../components/shared/ScrollToTopOnMount';
import ScrollToTopButton from '../components/shared/button/ScrollToTopButton';
import ActivityIndicator from '../components/shared/ActivityIndicator';
// Theme
import lightTheme from '../config/themes/light';
import { useRouter } from 'next/router';

function TahitiApp({ Component, pageProps }) {
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloClient>
      <Head>
        {/* <!-- =============== Standard Meta Tags =============== --> */}
        <meta charSet='utf-8' />
        <base href='/' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        {loading ? (
          <ActivityIndicator loading={loading} />
        ) : (
          <Component {...pageProps} />
        )}

        <ScrollToTopButton className={classes.fab} />
        {/* <ScrollToTopOnMount /> */}
      </ThemeProvider>
    </ApolloClient>
  );
}

export default TahitiApp;

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    boxShadow: `0px 0px 10px #5a5a5a`,
  },
}));
