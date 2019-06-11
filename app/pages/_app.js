import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { PageTransition } from "next-page-transitions";
import { withRouter } from "next/router";

// Components
import PageLayout from "../components/global/PageLayout";

// Style
import theme from "../common/theme";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <PageLayout>
            <PageTransition timeout={300} classNames="page-transition">
              <Component {...pageProps} key={router.route} />
            </PageTransition>
          </PageLayout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRouter(MyApp);
