import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="dark:bg-darkModeBackgroundColor">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
