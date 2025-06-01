import styles from './FeaturesSection.module.scss';

const PlaceholderIcon = ({ style }) => (
    <div style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        color: '#888',
        ...style
    }}>
        ★
    </div>
);


const featuresData = [
    {
        id: '01',
        icon: <PlaceholderIcon />,
        title: 'AI-Driven Core Algorithms',
        description: 'PivotHire AI\'s AI agent analyzes project needs and talent profiles (evaluating key requirements and performance metrics) for optimal recruiter matches. We streamline the hiring process.',
    },
    {
        id: '02',
        icon: <PlaceholderIcon />,
        title: 'Building Trust Through Quality',
        description: 'All corporations undergo legal authorization and background checks before recruiting. Similarly, all freelancers must pass skills tests before working with PivotHire AI. ',
    },
    {
        id: '03',
        icon: <PlaceholderIcon />,
        title: 'Confidentiality Matters',
        description: 'Corporations and freelancers sign binding agreements through the PivotHire AI platform to ensure strict confidentiality. We safeguard your intellectual property.',
    },
    {
        id: '04',
        icon: <PlaceholderIcon />,
        title: 'Multiple Application Scenarios',
        description: 'PivotHire AI expands the boundaries of freelancing by enabling seamless integration across industries, roles, and regions. We power flexible, global collaboration.',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className={styles.featuresSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Why Us?</h2>
                <p className={styles.sectionSubtitle}>
                    In 2024, there are an estimated 76.4 million freelancers in the U.S., accounting for approximately 36% of the U.S. workforce.
                    <br/>
                    <br/>
                    However, outdated freelancing systems lead to poor matches, wasted hiring time, and unprotected freelancers facing wage theft.
                    <br/>
                    <br/>
                    Low efficiency. Low trust. Low sustainability.
                    <br/>
                    Current freelancing patterns will eventually fail under its own weight.
                </p>
                <div className={styles.featuresGrid}>
                    {featuresData.map((feature) => (
                        <div key={feature.id} className={styles.featureItem}>
                            <div className={styles.featureHeader}>
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <span className={styles.featureNumber}>{feature.id}</span>
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}