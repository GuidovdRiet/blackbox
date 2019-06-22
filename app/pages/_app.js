import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
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
            <Component {...pageProps} key={router.route} />
          </PageLayout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRouter(MyApp);
