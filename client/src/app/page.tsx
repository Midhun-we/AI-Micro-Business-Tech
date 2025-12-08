import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="w-full bg-surface border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Independently researched & tested</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-secondary leading-tight">
                            The best tech stacks for <span className="text-primary">micro-businesses</span>.
                        </h1>
                        <p className="text-xl text-text leading-relaxed max-w-lg">
                            We spend hundreds of hours testing CRM, email marketing, and website tools so you don't have to. Find the right software to grow your business.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/category/crm"
                                className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                Compare CRMs <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/category/email-marketing"
                                className="px-8 py-4 bg-white border border-gray-200 text-secondary font-bold rounded-lg hover:bg-gray-50 transition shadow-sm hover:shadow-md"
                            >
                                Email Marketing
                            </Link>
                            <Link
                                href="/category/website-builders"
                                className="px-8 py-4 bg-white border border-gray-200 text-secondary font-bold rounded-lg hover:bg-gray-50 transition shadow-sm hover:shadow-md"
                            >
                                Website Builders
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block relative">
                        {/* Abstract clean visual representation */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 grid gap-6">
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-secondary">Expert Analysis</h4>
                                    <p className="text-sm text-text">Real hands-on testing</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-secondary">Data-Driven</h4>
                                    <p className="text-sm text-text">Unbiased scoring system</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-secondary">Recommendations</h4>
                                    <p className="text-sm text-text">Clear "Best for X" picks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="w-full max-w-6xl px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Why trust our reviews?</h2>
                    <p className="text-text max-w-2xl mx-auto">We focus exclusively on the needs of freelancers and solopreneurs, cutting through the enterprise-level noise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Rigorous Testing"
                        description="We actually use the software we review, setting up real campaigns and workflows."
                    />
                    <FeatureCard
                        title="No Sponsored Rankings"
                        description="Our rankings are based on performance and value, not who pays us the most."
                    />
                    <FeatureCard
                        title="Micro-Business Focus"
                        description="Feature weighting is adjusted for small teams and limited budgets."
                    />
                </div>
            </section>
        </div>
    )
}

function FeatureCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
            <p className="text-text leading-relaxed">{description}</p>
        </div>
    )
}
