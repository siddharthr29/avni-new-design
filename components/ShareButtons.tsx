'use client';

import { useState } from 'react';
import { Share2, Twitter, Linkedin, Facebook, Link2, Check, MessageCircle } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export default function ShareButtons({ title, url, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Add UTM parameters for tracking
  const getShareUrl = (platform: string) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
    return `${baseUrl}?utm_source=${platform}&utm_medium=social&utm_campaign=share`;
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(getShareUrl('twitter'))}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl('linkedin'))}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl('facebook'))}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title}\n\n${getShareUrl('whatsapp')}`)}`,
  };

  const copyToClipboard = async () => {
    try {
      const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
      const shareText = `${title}\n\n${fullUrl}?utm_source=copy&utm_medium=social&utm_campaign=share`;
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 my-8">
      <div className="flex items-center gap-3 mb-4">
        <Share2 className="h-5 w-5 text-primary-600" />
        <h3 className="text-lg font-bold text-neutral-900">Share this article</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {/* Twitter */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
          <span className="hidden sm:inline">Twitter</span>
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#094d92] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#145dbf] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
          <span className="hidden sm:inline">Facebook</span>
        </a>

        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          aria-label="Copy link"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span className="hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" />
              <span className="hidden sm:inline">Copy Link</span>
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-neutral-600 mt-4">
        💡 Share with your network and help spread the word about Avni!
      </p>
    </div>
  );
}
