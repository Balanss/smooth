import { useEffect,useState } from 'react';
import { motion,  useAnimation, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HorizontalText = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });


    // eslint-disable-next-line no-unused-vars
    const [pos, setPos] = useState(false);

    const { scrollY } = useViewportScroll(); // Get the current scroll position

    // Trigger animation when in view
    useEffect(() => {
        if (!inView) {
            controls.start({
                x: ['-60vw', '100vw'], // This will create a continuous horizontal scrolling effect
                transition: { duration: 20, repeat: Infinity } // This will make the animation repeat indefinitely
            });
        }

        // Stop the animation when the scroll position is greater than 200px
        const stopAnimation = () => {
            if (scrollY.get() > 400) {
                controls.stop();
                setPos(true);
            }
        };

        // Listen for scroll events
        const unsubscribe = scrollY.onChange(stopAnimation);

        // Clean up the event listener when the component is unmounted
        return () => {
            unsubscribe();
        };
    }, [controls, inView, scrollY]);

    return (
        <motion.div
            ref={ref}
            initial={{ x: '100%' }}
            animate={controls}
            style={{ position: 'absolute' }}
            className={`w-screen  ${pos? '!transform translate-x-0 translate-z-0': ''}`}
        >
            <h1 className={`${pos? 'text-center': 'special tracking-widest text-7xl shadow-card'} text-6xl relative top-[-40px] font-bold `}>
                Lorem ipsum dolor 
            </h1>
        </motion.div>
    );
};

export default HorizontalText;