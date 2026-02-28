import { useState, useEffect } from 'react';
import { supabase, ContactMessage } from '../../lib/supabase';
import { Mail, Phone, Calendar, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function AdminMessages() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const { data, error } = await supabase
                .from('contact_messages')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setMessages(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleStatus = async (id: string, currentStatus: string) => {
        const newStatus = currentStatus === 'unread' ? 'read' : 'unread';

        try {
            const { error } = await supabase
                .from('contact_messages')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            setMessages(messages.map(m =>
                m.id === id ? { ...m, status: newStatus } : m
            ));
        } catch (err: any) {
            console.error('Failed to update status', err);
            alert('Failed to update status: ' + err.message);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 text-red-600 p-4 border border-red-200 rounded-xl">
                {error}
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
                <div className="flex gap-4">
                    <div className="bg-white px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600">
                        Total: {messages.length}
                    </div>
                    <div className="bg-orange-50 px-4 py-2 border border-orange-200 rounded-lg text-sm font-medium text-orange-600">
                        Unread: {messages.filter(m => m.status === 'unread').length}
                    </div>
                </div>
            </div>

            {messages.length === 0 ? (
                <div className="bg-white p-12 border border-gray-200 rounded-2xl text-center">
                    <Mail className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-gray-900">No Messages</h3>
                    <p className="text-gray-500">You haven't received any contact form submissions yet.</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {messages.map((msg, idx) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`bg-white border ${msg.status === 'unread' ? 'border-orange-200' : 'border-gray-200'} rounded-2xl overflow-hidden shadow-sm`}
                        >
                            <div className={`px-6 py-4 flex justify-between items-center border-b ${msg.status === 'unread' ? 'bg-orange-50/50 border-orange-100' : 'bg-gray-50 border-gray-100'}`}>
                                <div className="flex items-center gap-3">
                                    <div className="font-semibold text-gray-900">{msg.name}</div>
                                    <span className="text-gray-300">•</span>
                                    <div className="text-sm font-medium text-gray-600">{msg.subject}</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(msg.created_at).toLocaleDateString()}
                                    </div>
                                    <button
                                        onClick={() => toggleStatus(msg.id, msg.status)}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors ${msg.status === 'unread'
                                                ? 'bg-white border-orange-200 text-orange-600 hover:bg-orange-100 hover:border-orange-300'
                                                : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-100'
                                            }`}
                                    >
                                        {msg.status === 'unread' ? (
                                            <><Clock className="w-3.5 h-3.5" /> Mark as Read</>
                                        ) : (
                                            <><CheckCircle className="w-3.5 h-3.5" /> Read</>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="px-6 py-5">
                                <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <a href={`mailto:${msg.email}`} className="hover:text-orange-500 transition-colors">{msg.email}</a>
                                    </div>
                                    {msg.phone && (
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-gray-400" />
                                            <a href={`tel:${msg.phone}`} className="hover:text-orange-500 transition-colors">{msg.phone}</a>
                                        </div>
                                    )}
                                </div>
                                <div className="text-gray-800 whitespace-pre-wrap leading-relaxed text-sm bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                                    {msg.message}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdminMessages;
