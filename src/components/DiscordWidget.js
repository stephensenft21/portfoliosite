import React, { useEffect } from 'react';

const DiscordWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://discord.com/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <iframe
        src="https://discord.com/widget?id=your-server-id&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default DiscordWidget;
