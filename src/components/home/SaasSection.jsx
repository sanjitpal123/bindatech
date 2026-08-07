import React, { useState } from 'react';
import { 
  Server, Shield, CreditCard, LayoutDashboard, Users, Activity, Check, ArrowRight, Zap 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';

export default function SaasSection() {
  const [activeTab, setActiveTab] = useState('metrics');

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>SaaS Product Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              From Software Ideas to{' '}
              <span className="text-gradient-brand bg-clip-text text-transparent">
                Scalable SaaS Products
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              BindaTech helps businesses transform software ideas into subscription-based digital products with modern multi-tenant architecture, secure authentication, Stripe/Razorpay billing, interactive dashboards, and scalable cloud infrastructure.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Multi-Tenant Database Isolation",
                "Stripe & Razorpay Subscription Flow",
                "Role-Based Access & OAuth 2.0",
                "Automated Cloud Infrastructure & CI/CD"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button to="/contact" variant="glow" size="lg">
                Build Your SaaS Product
              </Button>
            </div>

          </motion.div>

          {/* Right Column: Interactive SaaS Mockup Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-slate-900/90 border border-white/15 p-6 shadow-2xl backdrop-blur-xl relative shimmer-effect">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-emerald-500/30">
                    S
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">MetricsHub SaaS Admin</div>
                    <div className="text-[10px] text-slate-400">Production • AWS us-east-1</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-400 font-medium">99.99% Operational</span>
                </div>
              </div>

              {/* Sub-Tabs */}
              <div className="flex space-x-2 my-4 p-1 rounded-xl bg-slate-950/80 border border-slate-800">
                {[
                  { id: 'metrics', label: 'Metrics', icon: Activity },
                  { id: 'users', label: 'Tenants', icon: Users },
                  { id: 'billing', label: 'Subscriptions', icon: CreditCard }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all relative flex items-center justify-center space-x-2 ${
                        activeTab === tab.id
                          ? 'text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="saasTabPill"
                          className="absolute inset-0 bg-emerald-600 rounded-lg shadow-md"
                          transition={{ type: 'spring', duration: 0.4 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center space-x-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Animated Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Tab 1: Metrics */}
                  {activeTab === 'metrics' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                          <div className="text-[11px] text-slate-400">Monthly Recurring (MRR)</div>
                          <div className="text-lg font-bold text-white mt-1">$48,250</div>
                          <div className="text-[10px] text-emerald-400 mt-0.5">+14.2% this month</div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                          <div className="text-[11px] text-slate-400">Active Tenants</div>
                          <div className="text-lg font-bold text-white mt-1">1,240</div>
                          <div className="text-[10px] text-cyan-400 mt-0.5">Multi-tenant isolation</div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                          <div className="text-[11px] text-slate-400">API Latency</div>
                          <div className="text-lg font-bold text-white mt-1">42ms</div>
                          <div className="text-[10px] text-purple-400 mt-0.5">Edge cached</div>
                        </div>
                      </div>

                      {/* Mock Chart Area */}
                      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span>Live Traffic & Throughput</span>
                          <span className="text-emerald-400 font-mono">12k req/min</span>
                        </div>
                        <div className="h-24 flex items-end justify-between space-x-1 pt-4">
                          {[40, 65, 45, 80, 55, 90, 75, 85, 95, 88, 92, 100].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 0.5, delay: i * 0.03 }}
                              className="flex-1 bg-emerald-500/25 hover:bg-emerald-500/50 rounded-t transition-all group relative"
                            >
                              <div className="w-full h-1 bg-emerald-400 rounded-t"></div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Users */}
                  {activeTab === 'users' && (
                    <div className="space-y-3">
                      {[
                        { company: "Acme Enterprise", plan: "Enterprise Tier", status: "Active", users: "142 Seats" },
                        { company: "Apex Digital Studio", plan: "Pro Business", status: "Active", users: "48 Seats" },
                        { company: "CloudSphere Systems", plan: "Pro Business", status: "Active", users: "24 Seats" }
                      ].map((tenant, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-white">{tenant.company}</div>
                            <div className="text-slate-400 text-[11px]">{tenant.plan}</div>
                          </div>
                          <div className="text-right">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                              {tenant.status}
                            </span>
                            <div className="text-slate-400 text-[10px] mt-1">{tenant.users}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tab 3: Billing */}
                  {activeTab === 'billing' && (
                    <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                        <span className="text-slate-400">Payment Gateway</span>
                        <span className="text-emerald-400 font-bold">Stripe Connect Active</span>
                      </div>
                      <div className="text-xs text-slate-300 space-y-2">
                        <div className="flex justify-between">
                          <span>Automated Invoicing</span>
                          <span className="text-emerald-400">Enabled</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Webhook Retry Logic</span>
                          <span className="text-emerald-400">Exponential Backoff</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax & GST Calculator</span>
                          <span className="text-emerald-400">Automated</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
