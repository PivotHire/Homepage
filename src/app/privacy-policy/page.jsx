import styles from './pp.module.scss';

export const metadata = {
    title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.ppContainer}>
            <h1 id="privacy-policy">Privacy Policy</h1>
            <p>Last updated: June 11, 2025</p>
            <h2 id="scope">Scope</h2>
            <p>This privacy policy applies solely to visitors of the PivotHire AI homepage. It does not cover the PivorHire AI product (including demo), services, or application, which are governed by separate terms and privacy policies agreed upon during customer onboarding.</p>
            <h2 id="information-we-collect">Information We Collect</h2>
            <p>When you visit our homepage, we collect minimal information solely to improve your browsing experience:</p>
            <ul>
                <li>Basic analytics data (page views, general geographic location)</li>
                <li>Technical data necessary for website functionality</li>
            </ul>
            <h2 id="how-we-use-your-information">How We Use Your Information</h2>
            <p>We use the collected information exclusively to:</p>
            <ul>
                <li>Improve website performance and user experience</li>
            </ul>
            <h2 id="data-sharing">Data Sharing</h2>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share information only when required by law or to protect our rights.</p>
            <h2 id="your-rights">Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access information we have about you</li>
                <li>Request deletion of your information</li>
                <li>Opt out of any communication and conversations</li>
            </ul>
            <h2 id="security">Security</h2>
            <p>We implement reasonable security measures to protect the limited information collected through our homepage. However, no internet transmission is completely secure.</p>
            <h2 id="changes-to-this-policy">Changes to This Policy</h2>
            <p>We may update this privacy policy periodically. Any changes will be posted on this page with an updated revision date.</p>
            <h2 id="contact-us">Contact Us</h2>
            <p>If you have questions about this privacy policy or our practices, please contact us at <a href="mailto:core@pivothire.tech">core@pivothire.tech</a>.</p>
        </div>
    );
}