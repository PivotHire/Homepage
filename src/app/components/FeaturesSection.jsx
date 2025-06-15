'use client';

import styles from './FeaturesSection.module.scss';
import ScrollReveal from "@/app/components/ScrollReveal";

const PlaceholderIcon = ({style}) => (
    <div style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        color: '#fff', ...style
    }}>
        ★
    </div>
);

const featuresData = [
    {
        id: '01',
        icon: <PlaceholderIcon/>,
        title: 'Streamline the hiring Process via AI-Driven Core Algorithms',
        description: 'PivotHire AI\'s AI agent analyzes project needs and talent profiles by evaluating key requirements and performance metrics for optimal recruiter matches.',
    },
    {
        id: '02',
        icon: <PlaceholderIcon/>,
        title: 'Protect Rights and Safety by Building Trust Through Quality',
        description: 'All corporations undergo legal authorization and background checks before recruiting. Similarly, all freelancers must pass skills tests before working with PivotHire AI.',
    },
    {
        id: '03',
        icon: <PlaceholderIcon/>,
        title: 'Safeguard the Intellectual Property with Confidentiality',
        description: 'Corporations and freelancers sign binding agreements through the PivotHire AI platform to ensure strict confidentiality.',
    },
    {
        id: '04',
        icon: <PlaceholderIcon/>,
        title: 'Power Flexible Collaboration in Multiple Application Scenarios',
        description: 'PivotHire AI expands the boundaries of freelancing by enabling seamless integration across industries, roles, and regions.',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <ScrollReveal>
                        <h2 className={styles.sectionTitle}>Features</h2>
                        <p className={styles.sectionSubtitle}>
                            In 2024, there are an estimated 76.4 million freelancers in the U.S., accounting for
                            approximately 36% of the U.S. workforce. However, outdated freelancing systems lead to poor
                            matches, wasted hiring time, and unprotected freelancers facing wage theft.
                            <br/>
                            <br/>
                            Low efficiency. Low trust. Low sustainability.
                            <br/>
                            <b>Current freelancing patterns will eventually fail under its own weight.</b>
                        </p>
                    </ScrollReveal>
                </div>
                <div className={styles.featuresGrid}>
                    {featuresData.map((feature) => (
                        <ScrollReveal key={feature.id}>
                            <div className={styles.featureCard}>
                                <span className={styles.featureNumber}>{feature.id}</span>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}