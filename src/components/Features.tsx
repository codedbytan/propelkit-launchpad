import { useState } from "react";

const tabs = [
  {
    id: "emails",
    label: "Emails",
    title: "Send transactional emails",
    bullets: [
      "DNS setup to avoid spam folder (DKIM, DMARC, SPF)",
      "Webhook to receive & forward emails",
      "Beautiful React Email templates",
    ],
    timeSaved: "3 hours",
    headaches: "0",
    provider: "Resend",
  },
  {
    id: "payments",
    label: "Payments",
    title: "Collect payments seamlessly",
    bullets: [
      "Razorpay Orders API pre-configured",
      "Webhook verification & signature handling",
      "Automatic retry logic for failed payments",
    ],
    timeSaved: "6 hours",
    headaches: "0",
    provider: "Razorpay",
  },
  {
    id: "login",
    label: "Login",
    title: "Authenticate users securely",
    bullets: [
      "Google OAuth ready to go",
      "Magic link authentication",
      "Protected routes & middleware",
    ],
    timeSaved: "4 hours",
    headaches: "0",
    provider: "Supabase",
  },
  {
    id: "database",
    label: "Database",
    title: "Store & query data efficiently",
    bullets: [
      "PostgreSQL with row-level security",
      "Real-time subscriptions",
      "Type-safe queries with TypeScript",
    ],
    timeSaved: "5 hours",
    headaches: "0",
    provider: "Supabase",
  },
  {
    id: "gst",
    label: "GST",
    title: "Handle Indian tax compliance",
    bullets: [
      "Auto IGST vs CGST/SGST calculation",
      "PDF invoice generation",
      "B2B GSTIN validation",
    ],
    timeSaved: "8 hours",
    headaches: "0",
    provider: "PropelKit",
  },
  {
    id: "style",
    label: "Style",
    title: "Beautiful UI out of the box",
    bullets: [
      "50+ Tailwind components",
      "Dark mode support",
      "Fully responsive design",
    ],
    timeSaved: "10 hours",
    headaches: "0",
    provider: "Tailwind",
  },
];

export function Features() {
  const [activeTab, setActiveTab] = useState("emails");
  const activeFeature = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="features" className="py-24 bg-neutral-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <p className="font-mono text-sm text-primary text-center mb-4">
          const launch_time = "07:51 PM";
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center mb-4">
          Supercharge your app instantly,
          <br />
          launch faster, make ₹
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
          Login users, process payments and send emails at lightspeed. Spend
          your time building your startup, not integrating APIs. PropelKit
          provides you with the boilerplate code you need to launch, FAST.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-neutral-700 text-white/70 hover:bg-neutral-600 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-900 border border-white/10 p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              {activeFeature.title}
            </h3>
            <ul className="space-y-3 mb-6">
              {activeFeature.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="text-primary mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-white/50">Time saved:</span>{" "}
                <span className="text-primary font-semibold">
                  {activeFeature.timeSaved}
                </span>
              </div>
              <div>
                <span className="text-white/50">Headaches:</span>{" "}
                <span className="text-success font-semibold">
                  {activeFeature.headaches}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center text-xs font-semibold text-white">
                {activeFeature.provider[0]}
              </div>
              <span className="text-sm text-white/70">
                with{" "}
                <span className="text-white font-medium">
                  {activeFeature.provider}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
