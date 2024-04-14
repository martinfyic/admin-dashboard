import type { Metadata, Viewport } from 'next';
import { inter } from '@/config/font';
import './globals.css';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
	title: {
		template: siteConfig.title.template,
		default: siteConfig.title.default,
	},
	description: siteConfig.description,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='es'
			className='scroll-smooth'
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
