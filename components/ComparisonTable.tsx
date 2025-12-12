import React from 'react';
import { Check, X } from 'lucide-react';
import { Logo } from './Logo';

interface Competitor {
  name: string;
  color: string;
  initial: string;
  textColor?: string;
}

const COMPETITORS: Competitor[] = [
  { name: 'Convene', color: 'bg-brand-600', initial: '', textColor: 'text-white' },
  { name: 'WeChat', color: 'bg-[#07C160]', initial: 'W', textColor: 'text-white' },
  { name: 'Signal', color: 'bg-[#3A76F0]', initial: 'S', textColor: 'text-white' },
  { name: 'WhatsApp', color: 'bg-[#25D366]', initial: 'Wa', textColor: 'text-white' },
  { name: 'Telegram', color: 'bg-[#229ED9]', initial: 'T', textColor: 'text-white' },
  { name: 'Line', color: 'bg-[#00C300]', initial: 'L', textColor: 'text-white' },
  { name: 'KakaoTalk', color: 'bg-[#FEE500]', initial: 'K', textColor: 'text-slate-900' },
  { name: 'Messenger', color: 'bg-[#006AFF]', initial: 'M', textColor: 'text-white' },
];

const FEATURE_ROWS = [
  {
    label: "No phone number or email required",
    values: [true, false, false, false, false, false, false, false]
  },
  {
    label: "E2E encryption by default",
    values: [true, false, true, true, false, true, false, false]
  },
  {
    label: "Open source",
    values: [true, false, true, false, false, false, false, false]
  },
  {
    label: "No app required",
    values: [true, false, false, false, false, false, false, false]
  },
  {
    label: "No account required",
    values: [true, false, false, false, false, false, false, false]
  },
  {
    label: "Can be used on any browser",
    values: [true, false, false, false, false, false, false, false]
  }
];

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-bold tracking-wide uppercase mb-2">Comparison</h2>
          <p className="text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl">
            See how we stack up.
          </p>
        </div>

        {/* Table Container */}
        <div className="relative overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[800px] lg:w-full">
            {/* Header Row */}
            <div className="grid grid-cols-9 gap-4 mb-8 items-end text-center">
              <div className="col-span-1"></div> {/* Spacer for row labels */}
              {COMPETITORS.map((app) => (
                <div key={app.name} className="flex flex-col items-center gap-3">
                  {app.name === 'Convene' ? (
                    <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center shadow-sm border border-brand-100 mb-1">
                      <Logo className="w-8 h-8 text-brand-600" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-full ${app.color} ${app.textColor || 'text-white'} flex items-center justify-center font-bold text-lg shadow-sm`}>
                      {app.initial}
                    </div>
                  )}
                  <span className={`text-sm font-bold ${app.name === 'Convene' ? 'text-brand-600' : 'text-slate-600'}`}>
                    {app.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Data Rows */}
            <div className="space-y-2">
              {FEATURE_ROWS.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className={`grid grid-cols-9 gap-4 items-center py-4 px-2 rounded-xl transition-colors hover:bg-slate-50 ${rowIndex % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}
                >
                  <div className="col-span-1 font-semibold text-slate-900 text-sm pr-4">
                    {row.label}
                  </div>
                  {row.values.map((isTrue, colIndex) => (
                    <div key={colIndex} className="flex justify-center">
                      {isTrue ? (
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                          <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;