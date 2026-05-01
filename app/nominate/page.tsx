'use client'

import { useState } from 'react'

const categories = [
  'Business & Entrepreneurship',
  'Education & Academia',
  'Healthcare & Wellness',
  'Social Service & NGO',
  'Innovation & Technology',
  'Arts, Culture & Entertainment',
  'Women Achievers',
  'Youth Icons',
  'Leadership Excellence',
]

export default function NominatePage() {
  const [selfOrOthers, setSelfOrOthers] = useState<'Self' | 'Others'>('Self')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Form submission handler — extend with API call as needed
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-[760px] mx-auto">

        {/* Hero */}
        <div className="mb-10">
          <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
            Nominate Now
          </p>
          <h1 className="text-navy font-bold text-[clamp(36px,4.5vw,52px)] leading-[1.08] mb-4">
            Award nomination form
          </h1>
          <div className="w-14 h-[3px] bg-saffron mb-4" />
          <p className="text-muted text-[17px] leading-[1.7]">
            Use this page for self-nominations or to nominate someone whose work deserves national recognition.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-sm border-t-[3px] border-saffron p-8 md:p-10"
        >

          {/* Personal Info Group */}
          <h2 className="text-navy font-bold text-[13px] uppercase tracking-[0.14em] mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Gender</label>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150 bg-white appearance-none"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Date of Birth</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Contact Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">City / State / Country</label>
              <input
                type="text"
                placeholder="Mumbai, Maharashtra, India"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-8" />

          {/* Professional Info Group */}
          <h2 className="text-navy font-bold text-[13px] uppercase tracking-[0.14em] mb-6">
            Professional Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Profession / Industry</label>
              <input
                type="text"
                placeholder="e.g. Healthcare"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Organization Name</label>
              <input
                type="text"
                placeholder="Your organization"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Designation</label>
              <input
                type="text"
                placeholder="Your role / title"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Category Applying For</label>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150 bg-white appearance-none"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Self or Others */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-navy mb-3">Nominating Self or Others?</label>
            <div className="flex items-center gap-4">
              {(['Self', 'Others'] as const).map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setSelfOrOthers(val)}
                  className={
                    `px-6 py-2.5 rounded-full text-[13px] font-semibold border transition-colors duration-150 ` +
                    (selfOrOthers === val
                      ? 'bg-saffron border-saffron text-white'
                      : 'bg-white border-gray-200 text-navy hover:border-saffron/50')
                  }
                >
                  {val}
                </button>
              ))}
            </div>
            <input type="hidden" name="selfOrOthers" value={selfOrOthers} />
          </div>

          {/* Achievement textarea */}
          <div className="mb-8 md:col-span-2">
            <label className="block text-sm font-semibold text-navy mb-1.5">
              Describe achievements / reason for nomination
            </label>
            <textarea
              rows={5}
              placeholder="Share the story, impact, and achievements that make this nomination deserving of recognition..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors duration-150 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-white text-[16px] transition-opacity duration-150 hover:opacity-90"
            style={{ background: 'linear-gradient(90deg, #d97706, #f59e0b)' }}
          >
            {submitted ? 'Nomination Submitted!' : 'Submit Nomination →'}
          </button>
        </form>
      </div>
    </main>
  )
}
