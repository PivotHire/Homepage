import styles from './TeamSection.module.scss';
import Image from "next/image";
import ScrollReveal from "@/app/components/ScrollReveal";

const MemberImagePlaceholder = ({name}) => (
    <div className={styles.imagePlaceholder}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#4A5568"/>
            {/* Dark gray placeholder */}
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="40">
                {name ? name.charAt(0).toUpperCase() : '?'}
            </text>
        </svg>
    </div>
);

const teamMembers = [
    {
        id: 1,
        name: 'Richard Liu',
        role: 'Co-Founder',
        imageUrl: '/avatar/rl.jpg',
        bio: 'UC Berkeley (Class of 2029)',
        li: 'https://www.linkedin.com/in/richard-yliu/',
    },
    {
        id: 2,
        name: 'Kevin Zhong',
        role: 'Co-Founder',
        imageUrl: '/avatar/kz.png',
        bio: 'University of Illinois Urbana-Champaign (Class of 2029)',
        li: 'https://www.linkedin.com/in/clckkkkk/',
    },
    {
        id: 3,
        name: 'Konrad Pan',
        role: 'Co-Founder',
        imageUrl: '/avatar/kp.jpg',
        bio: 'Cornell University (Class of 2029)',
        li: 'https://www.linkedin.com/in/shuyang-pan-b45143352/',
    },
];

export default function TeamSection() {
    return (
        <section id="team" className={styles.teamSection}>
            <div className={styles.container}>
                <ScrollReveal>
                    <h2 className={styles.sectionTitle}>Meet Our Team</h2>
                    <p className={styles.sectionSubtitle}>
                        The founding members include top-finishers in competitive programming and student researchers in
                        engineering, algorithms, and physics. We are a close-knit team with a mission to build the best
                        hiring match.
                    </p>
                </ScrollReveal>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member) => (
                        <div key={member.id} className={styles.teamMemberCard}>
                            {member.imageUrl ? (
                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    width={120}
                                    height={120}
                                    className={styles.memberImage}
                                />
                            ) : (
                                <MemberImagePlaceholder name={member.name}/>
                            )}
                            <h3 className={styles.memberName}>{member.name}</h3>
                            <p className={styles.memberRole}>{member.role}</p>
                            {member.bio && <p className={styles.memberBio}>{member.bio}</p>}
                            <div className={styles.socialLinks}>
                                <a href={member.li} target="_blank" rel="noopener noreferrer"
                                   aria-label={`${member.name} on LinkedIn`}>LinkedIn Page</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}