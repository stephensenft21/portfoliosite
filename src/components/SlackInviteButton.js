import React from 'react';

const SlackInviteButton = () => {
  return (
    <a
      href="https://join.slack.com/t/your-slack-invite-url"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
    >
      Join My Slack Channel
    </a>
  );
};

export default SlackInviteButton;
