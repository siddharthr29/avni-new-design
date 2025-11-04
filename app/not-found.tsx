import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
            <div className="text-6xl mb-4">🔍</div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Search className="h-5 w-5" />
              Browse Blog
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-neutral-900 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link href="/features" className="text-primary-600 hover:text-primary-700 font-semibold">
                Features
              </Link>
              <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold">
                Pricing
              </Link>
              <Link href="/case-studies" className="text-primary-600 hover:text-primary-700 font-semibold">
                Case Studies
              </Link>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
