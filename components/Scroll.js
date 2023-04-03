import { motion, useScroll } from 'framer-motion';

function Scroll({ scrollY }) {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress)

  return (
    <motion.div
      initial={{ backgroundColor: 'rgba(0, 255, 0, 0)' }}
      animate={{
        backgroundColor: scrollYProgress.current > 0 ? 'rgba(55, 23, 0, 1)' : 'rgba(0, 255, 0, 0)',
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      style={{
        scaleX: scrollYProgress,
        height: 4,
        transformOrigin: '0%',
      }}
    ></motion.div>
  );
}

export default Scroll;
