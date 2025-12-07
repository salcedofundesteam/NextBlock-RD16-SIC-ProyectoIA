import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const dataTrend = [
  { name: 'Lun', value: 4000 },
  { name: 'Mar', value: 3000 },
  { name: 'Mie', value: 2000 },
  { name: 'Jue', value: 2780 },
  { name: 'Vie', value: 1890 },
  { name: 'Sab', value: 2390 },
  { name: 'Dom', value: 3490 },
];

const dataZone = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
];

const AnalyticsSection: React.FC = () => {
  return (
    <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
      {/* Chart 1: Market Trends */}
      <div className="card bg-base-100 shadow-xl border border-base-200 h-[280px]">
        <div className="card-body p-4">
          <h3 className="card-title text-sm opacity-70">
            📊 Tendencias del Mercado
          </h3>
          <div className="h-full w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataTrend}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                />
                <Area type="monotone" dataKey="value" stroke="#4F46E5" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Chart 2: Zone Behavior */}
      <div className="card bg-base-100 shadow-xl border border-base-200 h-[280px]">
        <div className="card-body p-4">
          <h3 className="card-title text-sm opacity-70">
             📈 Comportamiento por Zonas
          </h3>
          <div className="h-full w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataZone}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="value" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
