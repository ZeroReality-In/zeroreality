import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      
      {/* ---- GOOGLE SCHEMA (JSON-LD) ADDED HERE ---- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What is ZeroReality? About the Tech Company",
            "description": "ZeroReality is a technology company based in India that builds Web, App, and digital solutions for businesses.",
            "image": "https://zeroreality.in/og-image.jpg",
            "author": {
              "@type": "Organization",
              "name": "ZeroReality"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ZeroReality",
              "logo": {
                "@type": "ImageObject",
                "url": "https://zeroreality.in/zero.png"
              }
            },
            "url": "https://zeroreality.in/blog/what-is-zeroreality",
            "mainEntityOfPage": "https://zeroreality.in/blog/what-is-zeroreality"
          }
        `,
        }}
      />
      {/* ---- END SCHEMA ---- */}
      <Helmet>
        <title>What is ZeroReality? — About the Tech Company</title>

        <meta
          name="description"
          content="ZeroReality is a technology company based in India, building Web, App, and digital solutions for businesses."
        />

        <meta name="author" content="ZeroReality" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://zeroreality.in/blog/what-is-zeroreality"
        />

        {/* OG */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="What is ZeroReality? — About the Tech Company"
        />
        <meta
          property="og:description"
          content="Learn what ZeroReality is, what we do, and what we are NOT."
        />
        <meta
          property="og:image"
          content="https://zeroreality.in/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://zeroreality.in/blog/what-is-zeroreality"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="What is ZeroReality? — Tech Company Overview"
        />
        <meta
          name="twitter:description"
          content="ZeroReality builds Web, App, and digital systems for businesses."
        />
        <meta
          name="twitter:image"
          content="https://zeroreality.in/og-image.jpg"
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-primary hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">What is ZeroReality?</h1>
            <p className="text-muted-foreground text-sm">
              About the Tech Company
            </p>
          </header>

          <section className="mb-8">
            <p className="lead text-xl mb-6">
              ZeroReality is a technology company based in India that specializes
              in building modern Web, App, and custom digital solutions for
              businesses.
            </p>

            <p className="mb-4">
              The company focuses on creating fast, reliable, and future-ready
              digital products that help brands operate smarter and grow in the
              digital world.
            </p>
          </section>

          <section className="mb-8">
            <p className="mb-4">
              ZeroReality works across multiple areas, including:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Website development</li>
              <li className="mb-2">Mobile app development</li>
              <li className="mb-2">Custom software systems</li>
              <li className="mb-2">Internal dashboards and tools</li>
              <li className="mb-2">Business automation & workflow solutions</li>
            </ul>

            <p className="mb-4">
              Every product we build follows three core principles:
              <span className="font-semibold">
                {" "}
                Quality. Speed. Modern design.
              </span>
            </p>

            <p>
              We work closely with each client to understand their goals and
              transform them into clean, functional digital experiences.
              ZeroReality has built a reputation for being dependable, fast, and
              straightforward — delivering high-quality solutions without
              unnecessary complexity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What ZeroReality Is NOT</h2>

            <p className="mb-4">
              Because the name “Zero Reality” appears in other industries, it's
              important to clarify:
            </p>

            <p className="mb-4">ZeroReality is NOT related to:</p>

            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Zero Latency VR or any VR entertainment center</li>
              <li className="mb-2">“Zero Reality VR” gaming centers</li>
              <li className="mb-2">Fortnite's “Reality Zero” storyline</li>
              <li className="mb-2">Event management or VR franchises</li>
              <li className="mb-2">The eBook “Zero Reality: A Journey Beyond Illusions”</li>
              <li className="mb-2">Zero Realty real estate company</li>
            </ul>

            <p>
              ZeroReality is only a technology company that builds Web, App, and
              digital systems for businesses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>

            <p className="mb-4">
              To make powerful technology simple, accessible, and useful for
              businesses of every size.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>

            <p>
              To become a trusted long-term partner for brands that need modern,
              scalable, and well-designed digital systems.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
