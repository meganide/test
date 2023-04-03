import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import Link from 'next/link';
import Scroll from './Scroll';
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Header(props) {
  const [scroll, setScroll] = useState(false);
  const { scrollY } = useScroll();
  const {pathname} = useRouter();

  const isBlogSite = pathname.includes("/[slug]");

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0 && !scroll) {
      setScroll(true);
    }

    if (latest === 0 && scroll) {
      setScroll(false);
    }
  });

  return (
    <div>
      <motion.header
        className="site-header"
        initial={{ backgroundColor: props.backgroundColor }}
        animate={{
          backgroundColor: scroll ? 'rgba(0, 255, 0, 1)' : props.backgroundColor,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
      >
        <div className="site-title wrapper">
          <Link style={{ color: `${props.textColor ? props.textColor : '#050505'}` }} className="site-title" href="/">
            <motion.span
              initial={{ fontSize: '2rem' }}
              animate={{ fontSize: scroll ? '1.5rem' : '2rem', transition: { duration: 0.5, ease: 'easeInOut' } }}
            >
              Disclosing Value
            </motion.span>
          </Link>
          <nav className="site-nav">
            <div className="nav-links">
              <Link
                style={{ color: `${props.textColor ? props.textColor : '#050505'}` }}
                className="page-link"
                href="/about"
              >
                About
              </Link>
              <Link
                style={{ color: `${props.textColor ? props.textColor : '#050505'}` }}
                className="page-link"
                href="/blog"
              >
                Blog
              </Link>
            </div>
          </nav>
        </div>
        {isBlogSite && <Scroll scrollY={scrollY} />}
      </motion.header>
    </div>
  );
}
