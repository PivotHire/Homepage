'use client';

import { motion } from 'motion/react';

/**
 * 一个全局的滚动显示动画组件。
 * @param {object} props
 * @param {React.ReactNode} props.children - 需要被包裹和应用动画的子元素。
 * @param {number} [props.delay=0.25] - 动画延迟时间（秒）。
 * @param {number} [props.duration=0.8] - 动画持续时间（秒）。
 * @param {number} [props.y=75] - 元素从下方滑入的距离（像素）。
 * @param {string} [props.className] - 允许传入额外的CSS类名。
 */
export default function ScrollReveal({ children, delay = 0.25, duration = 0.5, y = 25, className }) {

    const variants = {
        hidden: { opacity: 0, y: y },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: 'easeOut'
            }}
        >
            {children}
        </motion.div>
    );
}