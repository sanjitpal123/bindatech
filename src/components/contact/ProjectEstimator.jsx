import React, { useState } from 'react';
import { Smartphone, Globe, Layers, ShoppingBag, Check, Calculator, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const appTypes = [
  { id: 'mobile', title: 'Mobile App', desc: 'Android & iOS Cross-Platform App', icon: Smartphone, duration: '4-6 Weeks' },
  { id: 'saas', title: 'SaaS Platform', desc: 'Multi-Tenant Subscription Software', icon: Layers, duration: '6-10 Weeks' },
  { id: 'web', title: 'Web Application', desc: 'Custom Business Portal & Admin', icon: Globe, duration: '3-5 Weeks' },
  { id: 'ecommerce', title: 'E-Commerce Portal', desc: 'Scalable Online Store & Checkout', icon: ShoppingBag, duration: '4-6 Weeks' },
];

const featureList = [
  { id: 'auth', label: 'User Auth & Roles' },
  { id: 'payment', label: 'Payment Gateways (Razorpay/Stripe)' },
  { id: 'chat', label: 'Realtime Chat / Messaging' },
  { id: 'ai', label: 'AI & Smart Automation' },
  { id: 'dashboard', label: 'Analytics Dashboard' },
  { id: 'push', label: 'Push Notifications & Alerts' },
];

export default function ProjectEstimator({ onApplyEstimate }) {
  const [selectedType, setSelectedType] = useState('mobile');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'payment', 'dashboard']);
  const [speed, setSpeed] = useState('standard');

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleApply = () => {
    const typeObj = appTypes.find((t) => t.id === selectedType);
    const featureLabels = selectedFeatures
      .map((fId) => featureList.find((f) => f.id === fId)?.label)
      .filter(Boolean);

    const summary = `Project Scope Estimate:\n• App Category: ${typeObj.title} (${typeObj.desc})\n• Included Features: ${featureLabels.join(', ')}\n• Desired Timeline: ${speed === 'express' ? 'Express Delivery (Accelerated Sprint)' : 'Standard Sprint Execution'}\n\nPlease reach out to discuss roadmap and detailed specs!`;

    if (onApplyEstimate) {
      onApplyEstimate(summary, typeObj.title);
    }
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl backdrop-blur-xl mb-16 relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Builder</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Instant Project Scope & Timeline Estimator</h3>
        </div>
        <div className="text-xs text-slate-400 font-mono bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800">
          No obligation • 100% Free
        </div>
      </div>

      <div className="space-y-8">
        
        {/* Step 1: Select Application Type */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 block">
            1. Select Application Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {appTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-lg ring-1 ring-emerald-500/50'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-emerald-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{type.title}</div>
                    <div className="text-xs text-slate-400">{type.desc}</div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-800/60 text-[11px] font-mono text-emerald-300">
                    Est. Timeline: {type.duration}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Choose Essential Features */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 block">
            2. Choose Essential Features & Modules
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {featureList.map((feat) => {
              const isChecked = selectedFeatures.includes(feat.id);
              return (
                <div
                  key={feat.id}
                  onClick={() => toggleFeature(feat.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer text-xs font-semibold transition-all flex items-center justify-between ${
                    isChecked
                      ? 'bg-slate-800/90 border-emerald-500/60 text-white'
                      : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span>{feat.label}</span>
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-emerald-600 border-emerald-500 text-white' : 'border-slate-700'}`}>
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Delivery Speed & Submit Action */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-6 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Typical Delivery: <strong className="text-white font-mono">3 - 8 Weeks</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Source Code Included</span>
            </div>
          </div>

          <button
            onClick={handleApply}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2 active:scale-98"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply Scope To Inquiry Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
