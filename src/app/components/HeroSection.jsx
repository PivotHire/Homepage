'use client';

import styles from './HeroSection.module.scss';
import { useRef } from 'react';
import { useRollingText } from '@/hooks/useRollingText';
import { motion } from 'motion/react';

const rollingWords = [
    'Evolved.',
    'Reimagined.',
    'Smarter.',
    'Simplified.',
    'Trusted.',
];

const sampleJobs = [
    {
        id: 'job-1',
        title: 'Next.js E-commerce Performance Optimization',
        location: 'Remote, US',
        type: '3-Week Sprint',
        skills: ['Next.js', 'Lighthouse', 'Core Web Vitals', 'Vercel'],
        budget: '$6,000 Project Fee',
    },
    {
        id: 'job-2',
        title: '3D CAD Model for a New Drone Enclosure',
        location: 'Berlin, Germany',
        type: '15-Day Task',
        skills: ['SolidWorks', '3D Printing', 'Injection Molding Design'],
        budget: '$75-$95/hr',
    },
    {
        id: 'job-3',
        title: 'Develop a RESTful API for a Mobile Banking App',
        location: 'Singapore',
        type: '6-Week Project',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
        budget: '$12,000 Project Fee',
    },
    {
        id: 'job-4',
        title: 'PCB Layout for an IoT Weather Station',
        location: 'Remote, UK',
        type: '4-Week Milestone',
        skills: ['KiCad', 'Circuit Design', 'ESP32', 'Firmware'],
        budget: '$4,500 Project Fee',
    },
    {
        id: 'job-5',
        title: 'AWS Infrastructure Setup using Terraform',
        location: 'San Francisco, CA',
        type: '10-Day Task',
        skills: ['Terraform', 'AWS IAM', 'VPC', 'EC2'],
        budget: '$110-$130/hr',
    },
    {
        id: 'job-6',
        title: 'Smart Contract Audit for an NFT Marketplace',
        location: 'Remote, Worldwide',
        type: '2-Week Audit',
        skills: ['Solidity', 'Security Audit', 'Hardhat', 'Ethers.js'],
        budget: '$15,000 Project Fee',
    },
    {
        id: 'job-7',
        title: 'Microservices Arch Design for a Logistics Platform',
        location: 'London, UK',
        type: '3-Week Design Phase',
        skills: ['System Design', 'Microservices', 'RabbitMQ', 'API Gateway'],
        budget: '$150-$200/hr',
    },
    {
        id: 'job-8',
        title: 'Build a Data Ingestion Pipeline with Apache Airflow',
        location: 'Remote, Canada',
        type: '1-Month Project',
        skills: ['Python', 'Airflow', 'ETL', 'BigQuery'],
        budget: '$8,000 Project Fee',
    },
    {
        id: 'job-9',
        title: 'Create a 3D Product Configurator with Three.js',
        location: 'Tokyo, Japan',
        type: '8-Week Project',
        skills: ['Three.js', 'WebGL', 'React Three Fiber', 'Blender'],
        budget: '$20,000 Project Fee',
    },
    {
        id: 'job-10',
        title: 'Finite Element Analysis (FEA) of a Mech Bracket',
        location: 'Munich, Germany',
        type: '5-Day Analysis',
        skills: ['ANSYS', 'FEA', 'Stress Analysis', 'Mechanical Design'],
        budget: '$90/hr',
    }
];

export default function HeroSection() {
    const heroSectionRef = useRef(null);
    const { word, key, isExiting } = useRollingText(rollingWords, {
        duration: 2000,
        animationTime: 500
    });

    const cardWidth = 300;
    const gap = 16;
    const scrollWidth = (cardWidth + gap) * sampleJobs.length;

    return (
        <section id="hero" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>
                    <span className={styles.staticWord}>Freelancing,</span><br/>
                    <span className={styles.rollingWrapper}>
                        <span key={key} className={isExiting ? styles.exit : styles.enter}>
                            {word}
                        </span>
                    </span>
                </h1>
                <p className={styles.tagline}>
                    PivotHire AI is building a high-trust network where quality-driven companies and skilled freelance
                    professionals collaborate with confidence.
                </p>

                <div className={styles.previewScroller}>
                    <motion.ul
                        className={styles.jobList}
                        animate={{ x: -scrollWidth }}
                        transition={{
                            ease: 'linear',
                            duration: 60,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    >
                        {[...sampleJobs, ...sampleJobs].map((job, index) => (
                            <li key={`${job.id}-${index}`} className={styles.jobCard}>
                                <div className={styles.cardHeader}>
                                    <h6 className={styles.cardTitle}>{job.title}</h6>
                                </div>
                                <p className={styles.cardLocation}>{job.location}</p>
                                <div className={styles.cardSkills}>
                                    {job.skills.map(skill => (
                                        <span key={skill} className={styles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                                <div className={styles.cardFooter}>
                                    <span className={styles.cardBudgetType}>{job.type}</span>
                                    <span className={styles.cardBudget}>{job.budget}</span>
                                </div>
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <a href={'https://app.pivothire.tech/'}>
                    <button className={styles.ctaButton}>
                        Get Started
                    </button>
                </a>
            </div>
        </section>
    );
}