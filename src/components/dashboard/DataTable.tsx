"use client";

import { useState } from "react";
import { users } from "@/data/users";
import writeXlsxFile from "write-excel-file/browser";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type SortField = "name" | "email" | "role" | "status";
type SortOrder = "asc" | "desc";

export default function DataTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState<SortField>("name");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Filter users based on search input
    const filteredUsers = users.filter((user) => {
        const search = searchTerm.toLowerCase();

        return (
            user.name.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search) ||
            user.role.toLowerCase().includes(search) ||
            user.status.toLowerCase().includes(search)
        );
    });

    // Sort the filtered users
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        const comparison = a[sortField].localeCompare(b[sortField]);

        return sortOrder === "asc" ? comparison : -comparison;
    });

    // Export filtered and sorted users to Excel
    const handleExportExcel = async () => {
        const data = [
            [
                { value: "ID" },
                { value: "Name" },
                { value: "Email" },
                { value: "Role" },
                { value: "Status" },
            ],

            ...sortedUsers.map((user) => [
                { value: user.id },
                { value: user.name },
                { value: user.email },
                { value: user.role },
                { value: user.status },
            ]),
        ];

        await writeXlsxFile(data).toFile("users.xlsx");
    };

    // Export filtered and sorted users to PDF
    const handleExportPDF = () => {
        const doc = new jsPDF();

        autoTable(doc, {
            head: [["ID", "Name", "Email", "Role", "Status"]],
            body: sortedUsers.map((user) => [
                user.id,
                user.name,
                user.email,
                user.role,
                user.status,
            ]),
        });

        doc.save("users.pdf");
    };

    // Pagination logic
    const totalPages = Math.max(
        1,
        Math.ceil(sortedUsers.length / itemsPerPage)
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentUsers = sortedUsers.slice(startIndex, endIndex);

    // Handle column sorting
    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortOrder((current) =>
                current === "asc" ? "desc" : "asc"
            );
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
    };

    return (
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            {/* Search */}
            <div className="border-b p-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none placeholder:text-gray-400 focus:border-slate-500 sm:max-w-sm"
                />

                <div className="flex gap-2 mt-2">
                    <button
                        onClick={handleExportExcel}
                        className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                    >
                        Export Excel
                    </button>

                    <button
                        onClick={handleExportPDF}
                        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                        Export PDF
                    </button>
                </div>
            </div>

            {/* Table */}
            <table className="w-full text-left">
                <thead className="border-b bg-gray-50">
                    <tr>
                        <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                            ID
                        </th>

                        <th
                            onClick={() => handleSort("name")}
                            className="cursor-pointer px-6 py-4 text-sm font-semibold text-gray-700"
                        >
                            Name{" "}
                            {sortField === "name" &&
                                (sortOrder === "asc" ? "↑" : "↓")}
                        </th>

                        <th
                            onClick={() => handleSort("email")}
                            className="cursor-pointer px-6 py-4 text-sm font-semibold text-gray-700"
                        >
                            Email{" "}
                            {sortField === "email" &&
                                (sortOrder === "asc" ? "↑" : "↓")}
                        </th>

                        <th
                            onClick={() => handleSort("role")}
                            className="cursor-pointer px-6 py-4 text-sm font-semibold text-gray-700"
                        >
                            Role{" "}
                            {sortField === "role" &&
                                (sortOrder === "asc" ? "↑" : "↓")}
                        </th>

                        <th
                            onClick={() => handleSort("status")}
                            className="cursor-pointer px-6 py-4 text-sm font-semibold text-gray-700"
                        >
                            Status{" "}
                            {sortField === "status" &&
                                (sortOrder === "asc" ? "↑" : "↓")}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {currentUsers.map((user) => (
                        <tr
                            key={user.id}
                            className="border-b last:border-b-0"
                        >
                            <td className="px-6 py-4 text-sm text-gray-600">
                                {user.id}
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                {user.name}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                                {user.email}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                                {user.role}
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                                {user.status}
                            </td>
                        </tr>
                    ))}

                    {sortedUsers.length === 0 && (
                        <tr>
                            <td
                                colSpan={5}
                                className="px-6 py-8 text-center text-sm text-gray-500"
                            >
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="flex items-center justify-between border-t p-4">
                <button
                    onClick={() => setCurrentPage((page) => page - 1)}
                    disabled={currentPage === 1}
                    className="rounded-lg border px-4 py-2 text-sm text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={() => setCurrentPage((page) => page + 1)}
                    disabled={currentPage === totalPages}
                    className="rounded-lg border px-4 py-2 text-sm text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}