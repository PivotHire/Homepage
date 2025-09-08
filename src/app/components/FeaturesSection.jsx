'use client';

import styles from './FeaturesSection.module.scss';
import ScrollReveal from "@/app/components/ScrollReveal";

const PlaceholderIcon = ({style}) => (<div style={{
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
    </div>);

const featuresData = [{
    id: '01',
    icon: <PlaceholderIcon/>,
    title: 'Intelligent Central AI Agent',
    description: 'Our AI agent analyzes project requirements and team capabilities to ensure optimal, data-driven pairings for successful delivery. The following project and progress management is also facilitated.',
}, {
    id: '02',
    icon: <PlaceholderIcon/>,
    title: 'Verified & Vetted Ecosystem',
    description: 'We conduct rigorous legal verification for clients and multi-stage skill assessments for our delivery partners, creating a high-trust marketplace.',
}, {
    id: '03',
    icon: <PlaceholderIcon/>,
    title: 'Ironclad IP Protection',
    description: 'The platform manages binding legal agreements and uses Web3 for immutable records, safeguarding your intellectual property throughout the project lifecycle and onwards.',
}, {
    id: '04',
    icon: <PlaceholderIcon/>,
    title: 'Borderless Collaboration',
    description: 'Our platform is built for versatility, enabling seamless, project-based work across any industry, role, or region to power global innovation.',
},];

export default function FeaturesSection() {
    return (<section id="features" className={styles.featuresSection}>
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
                            While new platforms focus on elite recruitment or open hiring, they still sell access to people. PivotHire is different: <b>we provide a fully managed, project-delivery service that sells guaranteed outcomes.</b>
                        </p>
                    </ScrollReveal>
                </div>
                <div className={styles.featuresList}>
                    {featuresData.map((feature, index) => (<ScrollReveal key={feature.id}>
                            <div
                                key={feature.id}
                                className={`${styles.featureItem} ${index % 2 !== 0 ? styles.reversed : ''}`}
                            >
                                <div className={styles.featureContent}>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                                <div className={styles.featureVisual}>
                                    <span className={styles.featureNumber}>{feature.id}</span>
                                    {/*<div className={styles.featureIcon}>{feature.icon}</div>*/}
                                </div>
                            </div>
                        </ScrollReveal>))}
                </div>
            </div>
        </section>);
}