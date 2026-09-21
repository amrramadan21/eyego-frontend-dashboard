"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import DataTable from "@/components/dashboard/DataTable";
import RevenueChart from "@/components/dashboard/RevenueChart";
import { useRouter } from "next/navigation";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import type { AppDispatch, RootState } from "@/store/store";


export default function Home() {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { isAuthenticated, isInitialized } = useSelector(
        (state: RootState) => state.auth
    );
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (isInitialized && !isAuthenticated) {
            router.replace("/login");
        }
    }, [isInitialized, isAuthenticated, router]);

    if (!isInitialized) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-gray-600">Loading...</p>
            </main>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("user");
        router.replace("/login");
    };

    return (
        <main className="flex min-h-screen bg-gray-100">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <section className="flex-1">
                <Header
                    title="Dashboard Overview"
                    userName="Amr"
                    onMenuClick={() => setIsSidebarOpen(true)}
                    onLogout={handleLogout}
                />

                <div className="p-8">
                    <h2 className="mb-6 text-xl font-semibold text-gray-800">
                        Overview
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            title="Total Users"
                            value="1,248"
                            change="+12.5%"
                        />

                        <StatCard
                            title="Revenue"
                            value="$24,580"
                            change="+8.2%"
                        />

                        <StatCard
                            title="Orders"
                            value="356"
                            change="+5.7%"
                        />

                        <StatCard
                            title="Conversion Rate"
                            value="3.24%"
                            change="+2.1%"
                        />
                    </div>
                       <section className="mt-8">
                        <RevenueChart />
                       </section>
                       <section className="mt-8">
                            <h2 className="mb-4 text-xl font-semibold text-gray-800">
                                Users
                            </h2>

                            <DataTable /> 
                        </section>
                </div>
            </section>
        </main>
    );
}