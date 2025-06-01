import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './globals.scss';

export const metadata = {
    title: {
        template: '%s | PivotHire AI',
        default: 'PivotHire AI - Revolutionary freelancing platform',
    },

    description: 'The AI-driven freelancing platform for hiring match. Request a demo today!',

    keywords: ['startup', 'tech', 'hiring', 'labor market', 'HR', 'AI', 'freelancing', 'job matching'],

    authors: [{name: 'Kevin Zhong'}, {name: 'Richard Liu'}, {name: 'Konrad Pan'}],

    creator: 'PivotHire AI',

    publisher: 'PivotHire AI',

    openGraph: {
        title: 'PivotHire AI - Revolutionary freelancing platform',
        description: 'The AI-driven freelancing platform for hiring match. Request a demo today!',
        url: 'https://www.pivothire.tech/',
        siteName: 'PivotHire AI',
        images: [
            {
                url: 'https://www.pivothire.tech/og-image-light(1200x630).png',
                width: 1200,
                height: 630,
                alt: 'PivotHire AI',
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
        <html lang="en">
        <body>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}