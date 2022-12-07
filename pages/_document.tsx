
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react"

// @ts-ignore
import bundleCss from "!raw-loader!../css/output.css";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    // const page = ctx.renderPage((App:any) => (props:any) => <App {...props} />);
    const initialProps: any = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{
            __html: bundleCss
          }} />
        </>
      )
    }  
}

  render() {
    return (
      <Html>
        <Head>
            {/* <script
              async
              custom-element="amp-carousel"
              src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
            ></script> */}
            {/* <meta charSet="utf-8"></meta>
            <script async src="https://cdn.ampproject.org/v0.js"></script>
            <meta name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
