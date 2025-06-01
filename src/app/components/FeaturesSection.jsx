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
        ★ {/* Example icon */}
    </div>
);


const featuresData = [
    {
        id: '01',
        icon: <PlaceholderIcon />,
        title: '111',
        description: '111',
    },
    {
        id: '02',
        icon: <PlaceholderIcon style={{ color: '#777' }} />,
        title: '222',
        description: '222',
    },
    {
        id: '03',
        icon: <PlaceholderIcon />,
        title: '333',
        description: '333',
    },
    {
        id: '04',
        icon: <PlaceholderIcon />,
        title: '444',
        description: '444',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className={styles.featuresSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
                <p className={styles.sectionSubtitle}>
                    Discover the core advantages that set our project apart from the rest.
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