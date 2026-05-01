'use client'

import { useState } from 'react'
import { Star, Tv, Users, LayoutGrid, Check } from 'lucide-react'

const partnerTypes = [
  {
    id: 'title',
    label: 'Title Sponsor',
    description: 'Primary naming rights & maximum visibility',
    Icon: Star,
  },
  {
    id: 'media',
    label: 'Media Partner',
    description: 'Coverage, press & broadcast opportunities',
    Icon: Tv,
  },
  {
    id: 'community',
    label: 'Community Partner',
    description: 'Community outreach & grassroots collaboration',
    Icon: Users,
  },
  {
    id: 'exhibitor',
    label: 'Exhibitor',
    description: 'Showcase your brand at the event venue',
    Icon: LayoutGrid,
  },
]

export default function PartnerPage() {
  const [selectedType, setSelectedType] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-[760px] mx-auto">

        {/* Hero */}
        <div className="mb-10">
          <p className="text-gold text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
            Become a Partner
          </p>
          <h1 className="text-navy font-bold text-[clamp(36px,4.5vw,52px)] leading-[1.08] mb-4">
            Partnership enquiry form
          </h1>
          <div className="w-14 h-[3px] bg-gold mb-4" />
          <p className="text-muted text-[17px] leading-[1.7]">
            For sponsors, collaborators, media partners, exhibitors, and community partners.
          </p>
        </div>

        {/* Partnership Type Selector */}
        <div className="mb-8">
          <p className="text-navy font-bold text-[13px] uppercase tracking-[0.14em] mb-4">
            Select Partnership Type
          </p>
          <div className="grid grid-cols-2 gap-3">
            {partnerTypes.map(({ id, label, description, Icon }) => {
              const isSelected = selectedType === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedType(id)}
                  className={
                    `relative text-left rounded-2xl p-5 border transition-[border-color,background-color] duration-200 ` +
                    (isSelected
                      ? 'border-saffron bg-white shadow-sm'
                      : 'border-gold/20 bg-white hover:border-saffron/40')
                  }
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-saffron flex items-center justify-center">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                  )}
                  <Icon
                    size={20}
                    className={isSelected ? 'text-saffron mb-2.5' : 'text-navy/40 mb-2.5'}
                    strokeWidth={1.8}
                  />
                  <p className="text-navy font-bold text-[13px] leading-tight mb-1">{label}</p>
                  <p className="text-muted text-[11px] leading-snug">{description}</p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-sm border-t-[3px] border-gold p-8 md:p-10"
        >
          <input type="hidden" name="partnershipType" value={selectedType} />

          <h2 className="text-navy font-bold text-[13px] uppercase tracking-[0.14em] mb-6">
            Organisation Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Company Name</label>
              <input
                type="text"
                required
                placeholder="Your company or organisation"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Website</label>
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-navy mb-1.5">Industry</label>
              <input
                type="text"
                placeholder="e.g. Media, Technology, Healthcare"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-8" />

          <h2 className="text-navy font-bold text-[13px] uppercase tracking-[0.14em] mb-6">
            Contact Person
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Full Name</label>
              <input
                type="text"
                required
                placeholder="Point of contact name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Designation</label>
              <input
                type="text"
                placeholder="e.g. Marketing Head"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Contact Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">Email Address</label>
              <input
                type="email"
                required
                placeholder="contact@company.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-white text-[16px] bg-navy hover:bg-navy/90 transition-colors duration-150"
          >
            {submitted ? 'Enquiry Submitted!' : 'Send Partnership Enquiry →'}
          </button>
        </form>
      </div>
    </main>
  )
}
