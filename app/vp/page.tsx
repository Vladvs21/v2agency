'use client';

import { useState } from 'react';
import styles from './page.module.scss';

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span>Pulse<span className={styles.accentText}>Sync</span></span>
          </div>

          <nav className={styles.nav}>
            <a href="#integrations">Platforms</a>
            <a href="#features">Features</a>
            <a href="#security">Security</a>
          </nav>

          <a href="#integrations" className={styles.primaryBtnSmall}>
            Launch App
          </a>
        </div>
      </header>

      {/* HERO */}
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Enterprise Social Automation Engine
          </div>
          <h1 className={styles.heroTitle}>
            Cross-Platform Content Distribution <span className={styles.gradientText}>at Pure Scale</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Automated publishing, scheduling, and analytics across TikTok, YouTube Shorts, 
            Meta Instagram, Threads, and Pinterest via official platform APIs.
          </p>
          <div className={styles.heroActions}>
            <a href="#integrations" className={styles.primaryBtn}>Connect Channels</a>
            <a href="#features" className={styles.secondaryBtn}>Explore Architecture</a>
          </div>
        </section>

        {/* PLATFORMS / APIS (ДЛЯ МОДЕРАТОРОВ) */}
        <section id="integrations" className={styles.integrationsSection}>
          <div className={styles.sectionHeader}>
            <h2>Direct Platform API Integrations</h2>
            <p>Strictly utilizing official OAuth 2.0 and approved direct-publishing endpoints.</p>
          </div>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span>ByteDance</span>
                <span className={styles.tag}>Content Posting API</span>
              </div>
              <h3>TikTok</h3>
              <p>Direct Video Posting API integration to schedule and publish short-form video assets directly to feed.</p>
              <div className={styles.codeSnippet}>
                Scopes: <code>user.info.basic, video.upload, video.publish</code>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span>Google Cloud</span>
                <span className={styles.tag}>Data API v3</span>
              </div>
              <h3>YouTube Shorts</h3>
              <p>Chunked video uploads, automated tagging, and automated Shorts release scheduling.</p>
              <div className={styles.codeSnippet}>
                Scopes: <code>.../auth/youtube.upload, .../auth/youtube</code>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span>Meta Platform</span>
                <span className={styles.tag}>Graph API</span>
              </div>
              <h3>Instagram & Threads</h3>
              <p>Direct carousel and Reels delivery for Instagram Professional accounts, plus post scheduling on Threads.</p>
              <div className={styles.codeSnippet}>
                Scopes: <code>instagram_content_publish, threads_content_publish</code>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2>Core Infrastructure</h2>
            <p>Engineered for asynchronous batch queuing and continuous zero-downtime execution.</p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <h4>Automated Dispatch</h4>
              <p>Queued server pipelines trigger scheduled publications strictly within optimal audience activity windows.</p>
            </div>
            <div className={styles.featureItem}>
              <h4>Encrypted Token Vault</h4>
              <p>User OAuth tokens and credentials are encrypted using AES-256 with auto-rotating refresh cycles.</p>
            </div>
            <div className={styles.featureItem}>
              <h4>Unified Analytics</h4>
              <p>Aggregates engagement, completion rate, and view velocity metrics across connected channels via webhooks.</p>
            </div>
          </div>
        </section>

        {/* COMPLIANCE */}
        <section id="security" className={styles.securitySection}>
          <div className={styles.securityBox}>
            <h3>Platform Compliance & Data Safety</h3>
            <p>
              PulseSync strictly complies with TikTok Developer Terms, YouTube API Terms of Service, Meta Platform Terms, and Pinterest Developer Guidelines.
            </p>
            <ul>
              <li>No personal identifying data is sold, rented, or distributed to third parties.</li>
              <li>Users can request immediate revocation and permanent deletion of stored access tokens at any time.</li>
              <li>All requests strictly follow platform rate-limiting guidelines.</li>
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER (ОБЯЗАТЕЛЬНЫЕ КЛИКАБЕЛЬНЫЕ ССЫЛКИ ДЛЯ МОДЕРАТОРОВ) */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <span>Pulse<span className={styles.accentText}>Sync</span></span>
            <small>© 2026 PulseSync Inc. All rights reserved.</small>
          </div>
          <div className={styles.footerLinks}>
            <a href="/vp/privacy-policy">Privacy Policy</a>
            <a href="/vp/terms-of-service">Terms of Service</a>
            <button type="button" onClick={() => openModal('contact')}>Data Deletion & Contact</button>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      {activeModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>
                {activeModal === 'contact' && 'Data Deletion & Contact'}
              </h3>
              <button type="button" onClick={closeModal} className={styles.closeBtn}>✕</button>
            </div>

            <div className={styles.modalBody}>
              {activeModal === 'contact' && (
                <>
                  <p>To request data erasure or revoke platform access tokens:</p>
                  <div className={styles.contactEmail}>vp.social.grw@gmail.com</div>
                  <p><small>All associated tokens and metadata will be permanently purged within 24 hours of request verification.</small></p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}