import Document, {Html, Main, Head, NextScript} from "next/document";

class MainDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                {/*Below we add the modal wrapper*/}
                <div id="modal-root"></div>
                </body>
            </Html>
        );
    }
}

export default MainDocument;