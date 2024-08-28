import React from 'react';

const DiscordJoinButton = () => {
  return (
    <a
      href="https://discord.gg/your-invite-link"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
    >
      Join My Discord Server
    </a>
  );
};

export default DiscordJoinButton;
