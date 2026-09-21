type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 p-6 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="mb-8 text-2xl font-bold">Dashboard</h2>

        <nav>
          <ul className="space-y-4">
            <li>Overview</li>
            <li>Users</li>
            <li>Analytics</li>
            <li>Reports</li>
          </ul>
        </nav>
      </aside>
    </>
  );
}