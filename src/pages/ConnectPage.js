import React from 'react';
import SlackInviteButton from '../components/SlackInviteButton';
import DiscordJoinButton from '../components/Utils/DiscordJoinButton';

const ConnectPage = () => {
  return (
    <section id="connect" className="bg-background min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Connect with Me</h2>
        <p className="text-lg text-textSecondary mb-6">
          Join my community and stay connected. Whether you prefer Slack or Discord, I’d love to collaborate with you.
        </p>

        <div className="flex justify-center space-x-4">
          <SlackInviteButton />
          <DiscordJoinButton />
        </div>
      </div>
    </section>
  );
};

export default ConnectPage;
