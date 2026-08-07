import { useEffect } from 'react';

export default function MetaTags({
  title = "BindaTech | Mobile App, Web & SaaS Development Company",
  description = "BindaTech builds modern mobile apps, web applications, websites and scalable SaaS products for businesses. Based in Kolkata, West Bengal, India."
}) {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
