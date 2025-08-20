import Head from 'next/head'

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url: string;
}

export default function SEO({ title, description, image, url }: SEOProps) {
  const siteTitle = "CoPharma.ai - صيدليتك الذكية"
  const fullTitle = `${title} | ${siteTitle}`
  const defaultImage = "https://copharma.ai/og-image.jpg"

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            image: image || defaultImage,
            url: url
          })
        }}
      />
    </Head>
  )
}