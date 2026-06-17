import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  keywords?: string;
  type?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  image = 'https://shreeevents.com/og-image.jpg',
  keywords = 'events, weddings, corporate events, exhibitions, event management',
  type = 'website',
  author = 'Shree Events',
  publishedDate,
  modifiedDate
}) => {
  const siteUrl = 'https://shreeevents.com';
  const fullUrl = canonicalUrl || siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Shree Events" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@shreeevents" />

      {/* LinkedIn Meta Tags */}
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />

      {/* Google Meta Tags */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      
      {/* Robots Meta Tag */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Shree Events',
          url: 'https://shreeevents.com',
          logo: 'https://shreeevents.com/logo.png',
          description: 'Premium event management, weddings, corporate events, and exhibitions',
          sameAs: [
            'https://www.facebook.com/shreeevents',
            'https://www.instagram.com/shreeevents',
            'https://www.linkedin.com/company/shreeevents',
            'https://www.youtube.com/c/shreeevents'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+91-9000-00000',
            email: 'info@shreeevents.com'
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
            addressRegion: 'Pan-India'
          }
        })}
      </script>

      {/* Article Meta Tags (if applicable) */}
      {publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {author && (
        <meta property="article:author" content={author} />
      )}

      {/* Additional Optimization */}
      <meta name="application-name" content="Shree Events" />
      <meta name="theme-color" content="#940242" />
      <meta name="msapplication-TileColor" content="#940242" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEO;
