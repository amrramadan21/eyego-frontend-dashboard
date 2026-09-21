"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { initializeAuth , login } from "@/features/auth/authSlice";

type StoreProviderProps = {
    children: React.ReactNode;
};

export default function StoreProvider({
    children,
}: StoreProviderProps) {
    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            store.dispatch(login(storedUser));
        }

        store.dispatch(initializeAuth());
    }, []);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}