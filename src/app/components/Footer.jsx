"use client";

import styles from './Footer.module.scss';
import { Twitter, Linkedin, Github } from 'lucide-react';

const footerData = {
    main: {
        logoUrl: '/logo-dark-transparent.png',
        // address: 'Singapore',
        certifications: []
    },
    links: [
        // {
        //     title: 'Product',
        //     items: [
        //         { text: 'How it Works', href: '/#' },
        //         { text: 'For Business', href: '/business' },
        //         { text: 'For Freelancers', href: '/freelancers' },
        //     ]
        // },
        {
            title: 'Company',
            items: [
                { text: 'About Us', href: '/about' },
                // { text: 'Blog', href: '/blog' },
                // { text: 'Case Studies', href: '/case-studies' },
            ]
        },
        {
            title: 'Support',
            items: [
                { text: 'Contact Us', href: 'mailto:core@pivothire.tech' },
                { text: 'Join US', href: 'mailto:core@pivothire.tech' },
                // { text: 'FAQ', href: '/faq' },
            ]
        },
        {
            title: 'Legal',
            items: [
                // { text: 'Terms & Conditions', href: '/terms' },
                { text: 'Privacy Policy', href: '/privacy-policy' },
                // { text: 'Cookie Policy', href: '/cookies' },
            ]
        }
    ],
    socials: [
        {
            name: 'X (Twitter)',
            href: 'https://x.com/PivotHireAI',
            icon: <Twitter size={22} strokeWidth={1.5} />
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/pivothire',
            icon: <Linkedin size={22} strokeWidth={1.5} />
        },
        {
            name: 'GitHub',
            href: 'https://github.com/pivothire',
            icon: <Github size={22} strokeWidth={1.5} />
        },
    ]
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.mainSection}>
                    <a href="/" className={styles.logo}>
                        <img src={footerData.main.logoUrl} alt="PivotHire AI Logo" />
                    </a>
                    <p className={styles.address}>{footerData.main.address}</p>
                    <div className={styles.certifications}>
                        {footerData.main.certifications.map(cert => (
                            <img key={cert.name} src={cert.imageUrl} alt={cert.name} className={styles.certIcon} />
                        ))}
                    </div>
                    <p className={styles.copyrightText}>
                        &copy; {currentYear} PivotHire AI
                    </p>
                </div>

                <div className={styles.linksGrid}>
                    {footerData.links.map((section) => (
                        <div key={section.title} className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>{section.title}</h4>
                            <ul className={styles.linkList}>
                                {section.items.map((item) => (
                                    <li key={item.text}>
                                        <a href={item.href} className={styles.link}>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.socialsSection}>
                    {footerData.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className={styles.socialIcon}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}