type HeaderProps = {
    title: string;
    userName: string;
    onMenuClick: () => void;
};

export default function Header({ title, userName, onMenuClick }: HeaderProps) {
    return (
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
            <button
                onClick={onMenuClick}
                className="mr-4 text-2xl text-gray-700 lg:hidden"
                aria-label="Open menu"
            >
                ☰
            </button>
            
            <div>
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <p className="text-sm text-gray-500">
                    Welcome back, {userName}
                </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
                {userName.charAt(0)}
            </div>
        </header>
    );
}