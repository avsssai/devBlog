import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { FallBackStyles, MagicSciptTag } from "../styles/theme/inlineCssVariables";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<FallBackStyles />
				</Head>
				<body>
					<MagicSciptTag />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}