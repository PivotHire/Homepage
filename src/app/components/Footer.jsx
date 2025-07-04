import styles from './Footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.copyrightText}>
                    &copy; {currentYear} PivotHire. All rights reserved.
                </p>
                <p className={styles.footerLinks}>
                    <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
                </p>
                <p className={styles.footerIcons}>
                    <a href="https://github.com/pivothire" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path
                                d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path>
                        </svg>
                    </a>
                    <a href="https://x.com/PivotHireAI" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path
                                d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/pivothire" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path
                                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                                fillRule="evenodd"></path>
                        </svg>
                    </a>
                </p>
            </div>
        </footer>
    );
}