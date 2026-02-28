import { useEffect, useState } from "react";
import { supabase, Transaction } from "../../lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

export function AdminTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        const { data, error } = await supabase.from('transactions').select('*').order('created_at', { ascending: false });
        if (!error && data) {
            setTransactions(data as Transaction[]);
        }
        setLoading(false);
    };

    const updateStatus = async (txId: string, newStatus: string) => {
        const { error } = await supabase.from('transactions').update({ status: newStatus }).eq('id', txId);
        if (!error) {
            setTransactions(transactions.map(t => t.id === txId ? { ...t, status: newStatus as any } : t));
        }
    };

    const StatusIcon = ({ status }: { status: string }) => {
        switch (status) {
            case 'completed': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
            case 'failed': return <XCircle className="w-4 h-4 text-red-500" />;
            default: return <Clock className="w-4 h-4 text-amber-500" />;
        }
    };

    return (
        <Card className="border-0 shadow-sm rounded-2xl">
            <CardHeader className="border-b border-gray-100 bg-white rounded-t-2xl flex flex-row items-center justify-between">
                <CardTitle>Transactions Log</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <Table>
                    <TableHeader className="bg-gray-50/50">
                        <TableRow className="hover:bg-transparent">
                            <TableHead>Ref ID</TableHead>
                            <TableHead>User ID</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-8 text-gray-500">Loading transactions...</TableCell>
                            </TableRow>
                        ) : transactions.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-8 text-gray-500">No transactions recorded yet.</TableCell>
                            </TableRow>
                        ) : (
                            transactions.map((tx) => (
                                <TableRow key={tx.id}>
                                    <TableCell className="font-mono text-xs text-gray-500">{tx.id.slice(0, 8)}</TableCell>
                                    <TableCell className="font-mono text-xs text-gray-500">{tx.user_id.slice(0, 8)}</TableCell>
                                    <TableCell className="capitalize">{tx.type}</TableCell>
                                    <TableCell className="font-semibold text-gray-900">
                                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: tx.currency }).format(tx.amount)}
                                    </TableCell>
                                    <TableCell className="text-gray-500 text-sm">{new Date(tx.created_at).toLocaleString()}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <StatusIcon status={tx.status} />
                                            <span className="capitalize text-sm font-medium text-gray-700">{tx.status}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {tx.status === 'pending' && (
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => updateStatus(tx.id, 'completed')} className="text-xs font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors">Approve</button>
                                                <button onClick={() => updateStatus(tx.id, 'failed')} className="text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors">Reject</button>
                                            </div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
