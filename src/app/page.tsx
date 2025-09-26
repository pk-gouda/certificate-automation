'use client';
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="border-b bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              C
            </div>
            <span className="text-sm font-semibold">Certify</span>
          </a>
          <nav className="flex items-center gap-4">
            <a href="/certificates" className="text-sm text-gray-700 hover:text-gray-900">
              Certificates
            </a>
            <a href="/login" className="text-sm text-gray-700 hover:text-gray-900">
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-extrabold">Automate Certificate Generation</h1>
        <p className="mt-3 max-w-prose text-lg text-gray-600">
          Choose a template, upload CSV/XLSX, preview, and download a ZIP of personalized PDFs.
        </p>
        <div className="mt-6">
          <a
            href="/certificates"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
