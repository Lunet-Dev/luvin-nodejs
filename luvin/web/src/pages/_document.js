import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            id="wp-block-library-css"
            href="/css/block-library/style.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wc-block-vendors-style-css"
            href="/css/woocommerce/vendors-style.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="wc-block-style-css"
            href="/css/woocommerce/style.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="woocommerce-layout-css"
            href="/css/woocommerce/woocommerce-layout.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="woocommerce-smallscreen-css"
            href="/css/woocommerce/woocommerce-smallscreen.css"
            type="text/css"
            media="only screen and (max-width: 768px)"
          />
          <link
            rel="stylesheet"
            id="woocommerce-general-css"
            href="/css/woocommerce/woocommerce.css"
            type="text/css"
            media="all"
          />
          <style id="woocommerce-inline-inline-css" type="text/css">
            {`.woocommerce form .form-row .required {
              visibility: visible;
            }`}
          </style>
          <link
            rel="stylesheet"
            id="hello-elementor-css"
            href="/css/hello-elementor/style.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="hello-elementor-theme-style-css"
            href="/css/hello-elementor/theme.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-css"
            href="/css/elementor/elementor-icons.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-animations-css"
            href="/css/elementor/animations.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-frontend-legacy-css"
            href="/css/elementor/frontend-legacy.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-frontend-css"
            href="/css/elementor/frontend.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-frontend-css"
            href="/css/elementor/inline.css"
            type="text/css"
            media="all"
          />

          <link
            rel="stylesheet"
            id="elementor-pro-css"
            href="/css/elementor-pro/frontend.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="google-fonts-1-css"
            href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;subset=vietnamese"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-shared-0-css"
            href="/css/elementor/fontawesome.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-fa-solid-css"
            href="/css/elementor/solid.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-fa-regular-css"
            href="/css/elementor/regular.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-icons-fa-brands-css"
            href="/css/elementor/brands.min.css"
            type="text/css"
            media="all"
          />
        </Head>
        <body>
          {/* <script
            type="text/javascript"
            src="/js/jquery.min.js"
            id="jquery-core-js"
          ></script>
          <script
            type="text/javascript"
            src="/js/jquery.min.js"
            id="jquery-core-js"
          ></script> */}
          <Main />
          <NextScript />
          <div id="lv-popup"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
