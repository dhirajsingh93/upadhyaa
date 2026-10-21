import { useEffect } from 'react';

/**
 * Lightweight and bulletproof SEO component for managing title, meta tags, and open graph.
 */
export default function SEOHead({
  title,
  description = "Upadhyay Rubber Industry — Leading manufacturer of precision rubber bushes, extruded profiles, custom moulded parts, O-rings, and industrial gaskets in Faridabad, Haryana, India.",
  keywords = "rubber manufacturer, Faridabad rubber industry, rubber bushes, extruded rubber profiles, custom moulded components, O-rings, oil seals, rubber gaskets",
}) {
  useEffect(() => {
    // Update Document Title
    const formattedTitle = title.includes("Upadhyay Rubber")
      ? title
      : `${title} | Upadhyay Rubber Industry — Faridabad`;
    document.title = formattedTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = formattedTitle;

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;
  }, [title, description, keywords]);

  return null;
}
