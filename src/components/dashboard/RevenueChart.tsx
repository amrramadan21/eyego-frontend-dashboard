"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const revenueData = [
    { month: "Apr", revenue: 12000 },
    { month: "May", revenue: 15500 },
    { month: "Jun", revenue: 14200 },
    { month: "Jul", revenue: 18000 },
    { month: "Aug", revenue: 21500 },
    { month: "Sep", revenue: 24580 },
];

export default function RevenueChart() {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">
                    Revenue Overview
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Revenue performance over the last 6 months
                </p>
            </div>

            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis
                            tickFormatter={(value) => `$${value / 1000}K`}
                        />
                        
                        <Tooltip
                            formatter={(value) => [
                                `$${Number(value).toLocaleString()}`,
                                "Revenue",
                            ]}
                        />

                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#0f172a"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}