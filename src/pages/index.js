import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import UpdatesMarkdown from '@site/src/data/landing-page-updates.md';

export default function Home() {
  return (
    <Layout>
      {/* First Section */}
      <section className="section-1">
        <div className="container-1">
          <div className="landing-card-grid">
            <AnimatedCard title="Home" link="/about" description="Description of site." />
            <AnimatedCard title="Blog" link="/blog" description="Description of site." />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="section-2">
        <div className="container-2">
          <motion.div
            className="card-updates"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <UpdatesMarkdown />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

// AnimatedCard using Framer Motion
function AnimatedCard({ title, link, description }) {
  return (
    <motion.div
      className="landing-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h3><Link to={link}>{title}</Link></h3>
      <p>{description}</p>
    </motion.div>
  );
}
