"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  FileText,
  Shield,
  Zap,
  BookOpen,
  Users,
  ArrowRight,
  Scale,
  Clock,
  AlertTriangle,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge: string | null;
}

const features: Feature[] = [
  {
    icon: <Shield className="h-6 w-6 text-amber-600" />,
    title: "Zero Hallucinated Citations",
    description:
      "Every case citation is verified against our curated Indian case law database. No fake judgments, no professional misconduct risk.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-amber-600" />,
    title: "Indian Legal Corpus",
    description:
      "Trained on IPC, CrPC, Indian Contract Act, and verified High Court and Supreme Court judgments — not generic Western legal datasets.",
  },
  {
    icon: <Zap className="h-6 w-6 text-amber-600" />,
    title: "Draft in 20 Minutes",
    description:
      "Reduce petition drafting from 3-5 hours to under 20 minutes. Describe case facts in plain English or Hinglish and get a ready-to-edit document.",
  },
  {
    icon: <FileText className="h-6 w-6 text-amber-600" />,
    title: "Multiple Document Types",
    description:
      "Petitions, legal notices, contracts, bail applications, and more — all formatted to Indian court standards.",
  },
  {
    icon: <Users className="h-6 w-6 text-amber-600" />,
    title: "Built for Solo Advocates",
    description:
      "Affordable pricing designed for India's 1.7 million solo advocates and small firms, not BigLaw corporations.",
  },
  {
    icon: <Scale className="h-6 w-6 text-amber-600" />,
    title: "RAG-Powered Accuracy",
    description:
      "Our Retrieval-Augmented Generation pipeline grounds every draft in real precedents, citing actual court rulings with page references.",
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Describe Your Case",
    description:
      "Enter your case facts in plain English or Hinglish. No legal jargon required — just describe what happened.",
  },
  {
    number: "02",
    title: "AI Retrieves Precedents",
    description:
      "VakeeL.ai searches our verified Indian case law database to find relevant High Court and Supreme Court judgments.",
  },
  {
    number: "03",
    title: "Draft is Generated",
    description:
      "A complete, citation-verified legal document is generated in minutes, formatted to Indian court standards.",
  },
  {
    number: "04",
    title: "Review and File",
    description:
      "Edit the draft with your professional judgment, then download and file. Every citation is verifiable and real.",
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "For solo advocates just getting started",
    features: [
      "10 document drafts/month",
      "Petitions and legal notices",
      "Citation verification",
      "Email support",
      "PDF export",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Professional",
    price: "₹2,499",
    period: "/month",
    description: "For active solo advocates and small firms",
    features: [
      "Unlimited document drafts",
      "All document types",
      "Citation verification + references",
      "Priority support",
      "PDF and DOCX export",
      "Case history & templates",
      "Hinglish input support",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Firm",
    price: "₹5,999",
    period: "/month",
    description: "For small law firms (2-5 lawyers)",
    features: [
      "Everything in Professional",
      "Up to 5 user accounts",
      "Shared case library",
      "Team collaboration",
      "Dedicated support",
      "Custom templates",
    ],
    highlighted: false,
    badge: null,
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleWaitlistSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-7 w-7 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">VakeeL.ai</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Sign In
              </Button>
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white pt-16 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(217,119,6,0.08),_transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 inline-flex bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
              <AlertTriangle className="mr-1.5 h-3.5 w-3.5" />
              Hallucinated citations flagged in 2024 Bengaluru ITAT ruling
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              AI Legal Drafting for{" "}
              <span className="text-amber-600">Indian Advocates</span>
            </h1>
            <p className="mb-4 text-xl text-gray-600 leading-relaxed">
              Draft petitions, legal notices, and contracts grounded in real Indian case law.
            </p>
            <p className="mb-10 text-lg text-gray-500">
              Zero hallucinated citations. Built for India{"'"}s 1.7 million solo advocates.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 sm:w-auto"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-gray-300 px-8 sm:w-auto"
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>5 free drafts on signup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/60 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3 bg-gray-50">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400 font-mono">VakeeL.ai — New Draft</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Case Facts
                    </label>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 leading-relaxed min-h-[120px]">
                      {`My client was wrongfully terminated from employment without notice period. Company is refusing to pay dues including gratuity of 8 years service. We want to file a complaint in Labour Court Delhi...`}
                    </div>
                    <div className="mt-3 flex gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">Labour Law</Badge>
                      <Badge variant="secondary" className="text-xs">Delhi HC</Badge>
                      <Badge variant="secondary" className="text-xs">Gratuity Act</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Generated Draft Preview
                    </label>
                    <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-sm text-gray-700 leading-relaxed min-h-[120px]">
                      <p className="font-semibold text-gray-900 mb-2">IN THE COURT OF LABOUR COMMISSIONER</p>
                      <p className="text-xs text-gray-600 mb-3">New Delhi — Complaint under Section 33C(2), Industrial Disputes Act, 1947</p>
                      <p className="text-xs text-gray-500 italic">Citations verified: M/s Bharat Fritz Werner Ltd. v. KGCCI [2019 SC], Central Bank of India v. P.S. Bharati [2020 Del HC]...</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-green-600 font-medium">
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>2 citations verified against database</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Draft generated in 18 seconds</span>
                  </div>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white text-xs">
                    Download DOCX
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              The Hidden Risk of Generic AI Tools in Indian Courts
            </h2>
            <p className="text-gray-400 leading-relaxed">
              In 2024, the Bengaluru Income Tax Appellate Tribunal flagged a case where an advocate submitted a brief containing hallucinated AI-generated case citations — judgments that never existed. This is not just embarrassing; it is a professional misconduct risk.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {[
              {
                stat: "1.7M+",
                label: "Solo advocates in India with no affordable AI drafting tool",
                color: "text-amber-400",
              },
              {
                stat: "3–5 hrs",
                label: "Average time to manually draft a petition from templates",
                color: "text-amber-400",
              },
              {
                stat: "20 min",
                label: "Average time with VakeeL.ai — verified and court-ready",
                color: "text-green-400",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-xl border border-gray-700 bg-gray-800 p-6 text-center"
              >
                <div className={`mb-2 text-4xl font-bold ${item.color}`}>{item.stat}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
              Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything an Indian advocate needs
            </h2>
            <p className="text-gray-600">
              Built specifically for Indian law, Indian courts, and the daily reality of solo practice.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-gray-200 hover:border-amber-200 hover:shadow-md transition-all duration-200"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
              How It Works
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              From case facts to court-ready draft
            </h2>
            <p className="text-gray-600">Four simple steps. No legal tech expertise required.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-amber-200 lg:block" />
                )}
                <div className="relative z-10 rounded-2xl border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Tabs */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
              Document Types
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Every document type you need
            </h2>
          </div>
          <Tabs defaultValue="petitions" className="mx-auto max-w-3xl">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="petitions">Petitions</TabsTrigger>
              <TabsTrigger value="notices">Legal Notices</TabsTrigger>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
            </TabsList>
            <TabsContent value="petitions">
              <Card className="border-amber-200">
                <CardContent className="pt-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Writ Petitions (HC/SC)",
                      "Bail Applications",
                      "Criminal Complaints",
                      "Civil Suits",
                      "Consumer Forum Complaints",
                      "Labour Court Petitions",
                      "Family Court Petitions",
                      "Revision Petitions",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notices">
              <Card className="border-amber-200">
                <CardContent className="pt-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Section 138 NI Act Notices",
                      "Recovery Notices",
                      "Eviction Notices",
                      "Defamation Notices",
                      "Employment Termination Notices",
                      "Property Dispute Notices",
                      "Consumer Complaint Notices",
                      "IP Infringement Notices",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="contracts">
              <Card className="border-amber-200">
                <CardContent className="pt-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Service Agreements",
                      "Employment Contracts",
                      "Rent Agreements",
                      "Partnership Deeds",
                      "Sale Deeds",
                      "MOUs",
                      "NDA Agreements",
                      "Loan Agreements",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
              Pricing
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Affordable for solo advocates
            </h2>
            <p className="text-gray-600">
              Priced for Indian solo practice, not BigLaw. Cancel anytime.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 mx-auto max-w-5xl">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.highlighted
                    ? "border-amber-400 shadow-xl shadow-amber-100 scale-105"
                    : "border-gray-200"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-600 text-white hover:bg-amber-600 px-3 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 mb-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-amber-600 hover:bg-amber-700 text-white"
                        : "border-gray-300"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <blockquote className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
              <Scale className="mx-auto mb-4 h-10 w-10 text-amber-600" />
              <p className="mb-4 text-lg text-gray-700 leading-relaxed italic">
                {`"As a solo advocate in Pune, I used to spend entire evenings drafting petitions. VakeeL.ai gives me a solid first draft in minutes — and I never have to worry about fake citations embarrassing me in court."`}
              </p>
              <div className="text-sm font-semibold text-gray-900">Advocate R. Sharma</div>
              <div className="text-sm text-gray-500">Solo Practitioner, Pune District Court</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Join the waitlist for early access
            </h2>
            <p className="mb-8 text-amber-100">
              Be among the first Indian advocates to draft with verified AI. Early access members get 3 months free.
            </p>
            {submitted ? (
              <div className="rounded-xl bg-white/10 border border-white/20 p-6 text-white">
                <CheckCircle className="mx-auto mb-3 h-10 w-10 text-green-300" />
                <p className="text-lg font-semibold">You{"'"}re on the list!</p>
                <p className="mt-1 text-amber-100 text-sm">
                  We{"'"}ll reach out as soon as early access opens.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-3 sm:flex-row sm:max-w-md sm:mx-auto">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white border-white text-gray-900 placeholder:text-gray-400 flex-1"
                />
                <Button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 whitespace-nowrap"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-amber-600" />
              <span className="font-bold text-gray-900">VakeeL.ai</span>
            </div>
            <p className="text-sm text-gray-500 text-center">
              AI legal drafting grounded in real Indian case law. Not a substitute for professional legal advice.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-400">
            {`© ${new Date().getFullYear()} VakeeL.ai. Made in India for Indian advocates.`}
          </div>
        </div>
      </footer>
    </div>
  );
}