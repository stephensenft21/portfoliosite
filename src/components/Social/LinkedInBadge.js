import React, { useEffect } from 'react';

const LinkedInBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="stephen-senft" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/stephen-senft/">Stephen Senft</a></div>
        `,
      }}
    />
  );
};

export default LinkedInBadge;