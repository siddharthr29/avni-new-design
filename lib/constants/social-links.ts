export const SOCIAL_LINKS = {
  website: 'https://avniproject.org',
  linkedin: 'https://linkedin.com/showcase/avniproject',
  facebook: 'https://facebook.com/avniproject',
  twitter: 'https://twitter.com/avniproject',
  youtube: 'https://www.youtube.com/@avniproject',
  github: 'https://github.com/avniproject',
  discord: 'https://discord.gg/4pcgcQW8pk',
  email: 'avnipartnerships@samanvayfoundation.org',
} as const;

export const SOCIAL_LINKS_WITH_EMOJI = {
  website: { url: SOCIAL_LINKS.website, emoji: '🌐', label: 'Website' },
  linkedin: { url: SOCIAL_LINKS.linkedin, emoji: '💼', label: 'LinkedIn' },
  facebook: { url: SOCIAL_LINKS.facebook, emoji: '👥', label: 'Facebook' },
  twitter: { url: SOCIAL_LINKS.twitter, emoji: '🐦', label: 'Twitter/X' },
  youtube: { url: SOCIAL_LINKS.youtube, emoji: '📺', label: 'YouTube' },
  github: { url: SOCIAL_LINKS.github, emoji: '💻', label: 'GitHub' },
  discord: { url: SOCIAL_LINKS.discord, emoji: '💬', label: 'Discord' },
  email: { url: `mailto:${SOCIAL_LINKS.email}`, emoji: '📧', label: 'Email' },
} as const;
