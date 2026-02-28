import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import {
    LayoutDashboard,
    Users,
    CreditCard,
    Settings,
    LogOut,
    Menu,
} from 'lucide-react';
import { motion } from 'motion/react';

const sidebarLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: CreditCard, label: 'Transactions', path: '/admin/transactions' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export function AdminLayout() {
    const { profile, isLoading, signOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && profile?.role !== 'admin') {
            navigate('/signin');
        }
    }, [profile, isLoading, navigate]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (profile?.role !== 'admin') return null;

    const handleSignOut = async () => {
        await signOut();
        navigate('/signin');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            Admin
                        </span>
                    </div>
                </div>

                <nav className="flex-1 py-6 px-4 space-y-2">
                    {sidebarLinks.map((link) => {
                        const isActive = window.location.pathname === link.path;
                        const Icon = link.icon;
                        return (
                            <button
                                key={link.label}
                                onClick={() => navigate(link.path)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                        ? 'bg-orange-50 text-orange-600 font-medium'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-orange-500' : ''}`} />
                                {link.label}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4 justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-bold">Admin</span>
                    </div>
                    <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg">
                        <Menu className="w-6 h-6" />
                    </button>
                </header>

                {/* Top bar desktop */}
                <header className="hidden md:flex h-16 bg-white border-b border-gray-200 items-center px-8 justify-between sticky top-0 z-10">
                    <h1 className="text-xl font-semibold text-gray-800">
                        {sidebarLinks.find((l) => l.path === window.location.pathname)?.label || 'Dashboard'}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold shrink-0">
                                {profile?.full_name?.[0]?.toUpperCase() || 'U'}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900 leading-tight">
                                    {profile?.full_name || 'Admin User'}
                                </span>
                                <span className="text-xs text-gray-500 leading-tight">Administrator</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Main Area */}
                <main className="flex-1 overflow-y-auto bg-gray-50/50 p-4 md:p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-6xl mx-auto"
                    >
                        <Outlet />
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
