import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './globals.scss';
import GlobalDynamicBackground from "@/app/components/GlobalDynamicBackground";
import { Montserrat, Geist } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

const geist = Geist({
    subsets: ['latin'],
    variable: '--font-geist',
    display: 'swap',
});

const geistMono = Geist({
    subsets: ['latin'],
    variable: '--font-geist-mono',
    display: 'swap',
})

export const metadata = {
    title: {
        template: '%s | PivotHire',
        default: 'PivotHire - Revolutionary Project Delivery Platform',
    },

    description: 'PivotHire is building a high-trust network where quality-driven companies and skilled professionals collaborate with confidence.',

    keywords: ['startup', 'tech', 'hiring', 'labor market', 'HR', 'AI', 'freelancing', 'outsourcing', 'job matching'],

    authors: [{name: 'Kevin Zhong'}, {name: 'Richard Liu'}],

    creator: 'PivotHire Inc.',

    publisher: 'PivotHire Inc.',

    openGraph: {
        title: 'PivotHire - Revolutionary Project Delivery Platform',
        description: 'PivotHire is building a high-trust network where quality-driven companies and skilled professionals collaborate with confidence.',
        url: 'https://www.pivothire.tech/',
        siteName: 'PivotHire',
        images: [
            {
                url: 'https://www.pivothire.tech/og-image-light(1200x630).png',
                width: 1200,
                height: 630,
                alt: 'PivotHire',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
    },

    icons: {
        icon: {
            url: '/favicon.png',
            type: 'image/png',
            sizes: '96x96',
        },
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <GlobalDynamicBackground/>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}