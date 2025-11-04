'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppChat() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const message = encodeURIComponent("Hi! I'm interested in learning more about Avni for my organization. Can you help?");
  
  useEffect(() => {
    // Show popup after 4 seconds
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowPopup(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = () => {
    setShowPopup(false);
    setDismissed(true);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/919876543210?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowPopup(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Auto Popup */}
      {showPopup && !dismissed && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-slide-up">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
              <MessageCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 mb-1">💬 Interested? Let's chat!</p>
              <p className="text-sm text-neutral-600 mb-3">
                Have questions about Avni? We're here to help!
              </p>
              <a
                href={`https://wa.me/919876543210?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                onClick={() => setDismissed(true)}
              >
                Start Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
