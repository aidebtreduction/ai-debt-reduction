import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Image from "next/image";

const chartData = [
  { year: "2025", debt: 34, adjusted: 34 },
  { year: "2026", debt: 32.3, adjusted: 33.27 },
  { year: "2027", debt: 30.5, adjusted: 31.57 },
  { year: "2028", debt: 28.8, adjusted: 29.99 },
  { year: "2029", debt: 26.9, adjusted: 28.49 },
  { year: "2030", debt: 25.1, adjusted: 27.06 },
  { year: "2031", debt: 23.2, adjusted: 25.70 },
  { year: "2032", debt: 21.3, adjusted: 24.41 },
  { year: "2033", debt: 19.5, adjusted: 23.19 },
  { year: "2034", debt: 17.7, adjusted: 22.04 },
];

export default function Home() {
  const [showAdjusted, setShowAdjusted] = useState(true);

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Fixing the National Debt with AI</h1>
        <p className="text-lg text-gray-600 mt-2">
          A clear, fair, and practical plan to lower U.S. debt without sacrificing the economy.
        </p>
        <div className="flex justify-center mt-6">
          <Image
            src="/debt-graphic.jpg"
            alt="AI balancing economy and debt"
            width={600}
            height={300}
          />
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-2">Why This Matters</h2>
        <p>
          The U.S. owes over $34 trillion. Without smart action, we face rising interest rates, tax hikes,
          and cuts to public services. But there’s a better way.
        </p>
        <Image
          src="/why-it-matters.jpg"
          alt="Chart showing national debt over time"
          width={700}
          height={350}
        />
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-2">How AI Helps</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>No politics:</strong> AI focuses on facts, not ideology.</li>
          <li><strong>Smart cuts:</strong> Identifies wasteful spending, preserves what matters.</li>
          <li><strong>Fair taxes:</strong> Ensures everyone contributes appropriately.</li>
          <li><strong>Predictive planning:</strong> Runs simulations before implementation.</li>
        </ul>
        <div className="flex justify-center mt-4">
          <Image
            src="/ai-decision.jpg"
            alt="AI data processing visualization"
            width={600}
            height={300}
          />
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">10-Year Debt Forecast</h2>
        <p className="mb-2">
          With the AI-driven strategy, U.S. national debt could shrink by nearly half in a decade.
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Toggle between actual and inflation-adjusted (2%) forecast.
        </p>
        <div className="mb-4">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={showAdjusted} onChange={() => setShowAdjusted(!showAdjusted)} />
            Show Inflation-Adjusted Forecast
          </label>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="year" />
            <YAxis domain={[15, 40]} unit="T" />
            <Tooltip formatter={(value) => `$${value}T`} />
            <Line type="monotone" dataKey="debt" stroke="#2563eb" strokeWidth={3} name="Nominal Debt" />
            {showAdjusted && (
              <Line type="monotone" dataKey="adjusted" stroke="#10b981" strokeWidth={3} strokeDasharray="5 5" name="Inflation-Adjusted" />
            )}
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-2">Your Role</h2>
        <p>
          This solution needs your support:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Vote for leaders who prioritize long-term solutions</li>
          <li>Stay informed and help share this message</li>
          <li>Push for transparency and AI-enhanced governance</li>
        </ul>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          I Support the Plan
        </button>
      </section>
    </main>
  );
}
