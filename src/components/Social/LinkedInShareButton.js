import React, { useEffect } from 'react';

const LinkedInShareButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/in.js';
    script.type = 'text/javascript';
    script.innerHTML = 'lang: en_US';
    document.body.appendChild(script);
  }, []);

  return <script type="IN/Share" data-url="https://stephensenft21.github.io/portfoliosite#portfolio"></script>;
};

export default LinkedInShareButton;
