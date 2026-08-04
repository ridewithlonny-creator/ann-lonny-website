"use client";

/* eslint-disable @next/next/no-img-element -- Local WebP assets are already responsive and avoid the unavailable preview image service. */
import { useEffect, useMemo, useState } from "react";
import {
  Locale,
  contactPlatforms,
  content,
  instructors,
  lessons,
  siteConfig,
  testimonials,
} from "./content";

const contactPeople = ["lonny", "ann"] as const;

function buildContactHref(
  person: (typeof contactPeople)[number],
  platform: (typeof contactPlatforms)[number]["key"],
  locale: Locale,
) {
  const value = siteConfig.contact[person][platform].href;
  const message = siteConfig.prefilledMessage[locale];

  if (!value) return null;

  if (platform === "whatsapp" && /^\+?[\d\s()-]+$/.test(value)) {
    return `https://wa.me/${value.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  }

  return value;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>(siteConfig.defaultLocale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingRegion, setBookingRegion] = useState<"japan" | "australia">("japan");
  const t = content[locale];
  const activeBooking = t.booking.regions[bookingRegion];

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("site-locale") as Locale | null;
    if (storedLocale === "en" || storedLocale === "zh") {
      // Restore the saved preference after hydration to avoid a server/client text mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
    window.localStorage.setItem("site-locale", locale);
  }, [locale]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const navigation = useMemo(
    () => [
      { href: "#about", label: t.nav.about },
      { href: "#lessons", label: t.nav.lessons },
      { href: "#instructors", label: t.nav.instructors },
      { href: "#booking", label: t.nav.booking },
      { href: "#faq", label: t.nav.faq },
      { href: "#contact", label: t.nav.contact },
    ],
    [t],
  );

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setMenuOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.nav.skipContent}
      </a>
      <header className="site-header">
        <div className="header-inner container">
          <a className="brand" href="#top" aria-label={t.nav.home}>
            <span className="brand-mark" aria-hidden="true">◇</span>
            <span>{siteConfig.brandName}</span>
          </a>

          <nav
            id="primary-navigation"
            className={menuOpen ? "primary-nav is-open" : "primary-nav"}
            aria-label={t.nav.aria}
          >
            <div className="nav-links">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="language-switcher" aria-label={t.nav.language}>
            <button
              type="button"
              className={locale === "zh" ? "is-active" : ""}
              aria-pressed={locale === "zh"}
              onClick={() => changeLocale("zh")}
            >
              繁中
            </button>
            <button
              type="button"
              className={locale === "en" ? "is-active" : ""}
              aria-pressed={locale === "en"}
              onClick={() => changeLocale("en")}
            >
              EN
            </button>
          </div>

          <button
            className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero">
          <div className="hero-overlay" />
          <div className="hero-content container">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-copy">{t.hero.subtitle}</p>
            <div className="button-row">
              <a className="button button-primary" href="#contact">
                {t.common.askLesson}
              </a>
              <a className="button button-ghost" href="#booking">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
          <p className="photo-label">Ann&Lonny</p>
        </section>

      <section id="about" className="section about-section">
        <div className="container split-layout">
          <div className="section-copy" data-reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
            <p className="section-lead">{t.about.intro}</p>
            <div className="about-list">
              {t.about.points.map((point) => (
                <div className="about-point" key={point.title}>
                  <span aria-hidden="true">↗</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="portrait-photo" data-reveal>
            <img
              src="/assets/images/ann-lonny-about.webp"
              alt={locale === "zh" ? "Lonny 與 Ann 在雪山上的合照" : "Lonny and Ann together on the mountain"}
              loading="lazy"
              width={1200}
              height={1500}
            />
          </div>
        </div>
      </section>

      <section id="lessons" className="section section-tinted">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">{t.lessons.eyebrow}</p>
              <h2>{t.lessons.title}</h2>
            </div>
            <p>{t.lessons.intro}</p>
          </div>
          <div className="lesson-grid">
            {lessons.map((lesson, index) => (
              <article className="lesson-card" key={lesson.id} data-reveal>
                <div className="card-image">
                  <img
                    src={lesson.image}
                    alt={lesson.alt[locale]}
                    loading="lazy"
                    width={720}
                    height={480}
                    style={{ objectPosition: lesson.objectPosition ?? "center" }}
                  />
                </div>
                <div className="card-content">
                  <p className="card-number">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{lesson.title[locale]}</h3>
                  <p>{lesson.description[locale]}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="policy-note">{t.lessons.noPrice}</p>
        </div>
      </section>

      <section id="instructors" className="section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">{t.instructors.eyebrow}</p>
              <h2>{t.instructors.title}</h2>
            </div>
            <p>{t.instructors.intro}</p>
          </div>
          <div className="instructor-grid">
            {instructors.map((instructor) => (
              <article className="instructor-card" key={instructor.id} data-reveal>
                <div className="instructor-photo">
                  <img
                    src={instructor.image}
                    alt={instructor.imageAlt[locale]}
                    loading="lazy"
                    width={960}
                    height={1200}
                    style={{ objectPosition: instructor.imagePosition ?? "center" }}
                  />
                </div>
                <div className="instructor-info">
                  <p className="eyebrow">{instructor.discipline[locale]}</p>
                  <h3>{instructor.name}</h3>
                  <dl>
                    <div>
                      <dt>{t.instructors.languages}</dt>
                      <dd>{instructor.languages[locale]}</dd>
                    </div>
                    <div>
                      <dt>{t.instructors.qualifications}</dt>
                      <dd>{instructor.qualifications[locale]}</dd>
                    </div>
                  </dl>
                  <p>{instructor.bio[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-heading compact" data-reveal>
            <div>
              <p className="eyebrow">{t.why.eyebrow}</p>
              <h2>{t.why.title}</h2>
            </div>
          </div>
          <div className="why-grid">
            {t.why.items.map((item, index) => (
              <article key={item.title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="section booking-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">{t.booking.eyebrow}</p>
              <h2>{t.booking.title}</h2>
            </div>
            <p>{t.booking.intro}</p>
          </div>
          <div
            className="booking-region-switcher"
            role="group"
            aria-label={t.booking.chooseRegion}
          >
            {(["japan", "australia"] as const).map((region) => (
              <button
                key={region}
                type="button"
                className={bookingRegion === region ? "is-active" : ""}
                aria-pressed={bookingRegion === region}
                onClick={() => setBookingRegion(region)}
              >
                {t.booking.regions[region].label}
              </button>
            ))}
          </div>
          <div
            id={`booking-${bookingRegion}`}
            className="booking-region-panel"
            aria-live="polite"
          >
            <ol className="booking-steps">
              {activeBooking.steps.map((step, index) => (
                <li key={`${bookingRegion}-${step.title}`}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <aside className="booking-alert">
              <span aria-hidden="true">!</span>
              <p>{activeBooking.alert}</p>
            </aside>
          </div>
        </div>
      </section>

      {siteConfig.features.testimonials && (
        <section className="section testimonials-section">
          <div className="container">
            <div className="section-heading compact" data-reveal>
              <div>
                <p className="eyebrow">{t.testimonials.eyebrow}</p>
                <h2>{t.testimonials.title}</h2>
              </div>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.id} data-reveal>
                  <span className="placeholder-badge">{t.common.placeholder}</span>
                  <p>“{testimonial.quote[locale]}”</p>
                  <footer>
                    <strong>{testimonial.name[locale]}</strong>
                    <span>
                      {testimonial.lesson[locale]} · {testimonial.region[locale]}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="faq" className="section faq-section">
        <div className="container faq-layout">
          <div className="faq-intro" data-reveal>
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <h2>{t.faq.title}</h2>
            <p>{t.faq.intro}</p>
          </div>
          <div className="faq-list" data-reveal>
            {t.faq.items.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-panel" data-reveal>
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.intro}</p>
          </div>
          <div className="contact-people">
            {contactPeople.map((person) => (
              <section className="contact-person" key={person} aria-labelledby={`contact-${person}`}>
                <div className="contact-person-heading">
                  <h3 id={`contact-${person}`}>{t.contact.people[person].name}</h3>
                  <p>{t.contact.people[person].note}</p>
                </div>
                <div className="contact-actions">
                  {contactPlatforms.map((platform) => {
                    const href = buildContactHref(person, platform.key, locale);
                    const label = t.contact.platforms[platform.key];
                    const detail = siteConfig.contact[person][platform.key].detail[locale];

                    return href ? (
                      <a
                        key={platform.key}
                        className="contact-button"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={detail ? `${label} — ${detail}` : label}
                      >
                        <span className="contact-button-copy">
                          <span>{label}</span>
                          {detail && <small>{detail}</small>}
                        </span>
                        <i aria-hidden="true">↗</i>
                      </a>
                    ) : (
                      <span
                        key={platform.key}
                        className="contact-button is-disabled"
                        aria-disabled="true"
                        title={t.contact.linkPlaceholder}
                      >
                        <span>{label}</span>
                        <small>{t.common.addLink}</small>
                      </span>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand footer-brand" href="#top">
                <span className="brand-mark" aria-hidden="true">◇</span>
                <span>{siteConfig.brandName}</span>
              </a>
              <p>{t.footer.tagline}</p>
            </div>
            <div className="footer-meta">
              <p>© {new Date().getFullYear()} {siteConfig.brandName}. {t.footer.rights}</p>
              {contactPeople.some((person) => buildContactHref(person, "instagram", locale)) && (
                <div className="footer-links">
                  {contactPeople.map((person) => {
                    const href = buildContactHref(person, "instagram", locale);
                    return href ? (
                      <a key={person} href={href} target="_blank" rel="noreferrer">
                        {t.contact.people[person].name} Instagram
                      </a>
                    ) : null;
                  })}
                </div>
              )}
            </div>
          </div>
          <details className="privacy-notice" id="privacy-notice">
            <summary>
              <span>{t.footer.privacy.title}</span>
              <i aria-hidden="true">+</i>
            </summary>
            <div className="privacy-content">
              <div className="privacy-intro">
                <p>{t.footer.privacy.updated}</p>
                <p>{t.footer.privacy.intro}</p>
              </div>
              <div className="privacy-sections">
                {t.footer.privacy.sections.map((section) => (
                  <section key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </details>
        </div>
      </footer>
    </>
  );
}
