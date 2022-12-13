import React from 'react';
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from 'react-icons/gr';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import Badge from './Badge';

const SocialMedias = () => {
  return (
    <ul className='flex space-x-6 justify-center'>
      <li>
        <Badge
          href='https://www.facebook.com/klever.io'
          title='Facebook Klever Wallet'
          icon={<GrFacebook />}
        />
      </li>

      <li>
        <Badge
          href='https://twitter.com/klever_io'
          title='Twitter Klever Wallet'
          icon={<GrTwitter />}
        />
      </li>

      <li>
        <Badge
          href='https://discord.gg/klever-io'
          title='Discord Klever'
          icon={<FaDiscord />}
        />
      </li>

      <li>
        <Badge
          href='https://www.instagram.com/klever.io/'
          title='Instagram Klever Wallet'
          icon={<GrInstagram />}
        />
      </li>

      <li>
        <Badge
          href='https://www.linkedin.com/company/klever-app/'
          title='Linkedin Klever Wallet'
          icon={<GrLinkedin />}
        />
      </li>

      <li>
        <Badge
          href='https://t.me/Klever_io'
          title='Telegram Klever Wallet'
          icon={<FaTelegramPlane />}
        />
      </li>
    </ul>
  );
};

export default SocialMedias;
