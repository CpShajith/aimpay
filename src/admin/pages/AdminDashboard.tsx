import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function AdminDashboard() {
    const stats = [
        {
            title: "Total Users",
            value: "14,234",
            icon: Users,
            trend: "+12.5%",
            trendUp: true,
        },
        {
            title: "Total Transactions",
            value: "$4.2M",
            icon: CreditCard,
            trend: "+8.2%",
            trendUp: true,
        },
        {
            title: "Active Sessions",
            value: "842",
            icon: Activity,
            trend: "-2.4%",
            trendUp: false,
        }
    ];

    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat, i) => (
                    <Card key={i} className="border-0 shadow-sm bg-white rounded-2xl overflow-hidden group hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gray-50/50 border-b border-gray-100">
                            <CardTitle className="text-sm font-medium text-gray-500">
                                {stat.title}
                            </CardTitle>
                            <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-100 transition-colors">
                                <stat.icon className="w-4 h-4" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className={`flex items-center text-sm ${stat.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                                {stat.trendUp ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                                <span className="font-medium">{stat.trend}</span>
                                <span className="text-gray-400 ml-2">from last month</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chart Skeleton/Placeholder space */}
            <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 shadow-sm rounded-2xl">
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="h-80 flex items-center justify-center text-gray-400 bg-gray-50/50 rounded-xl m-6 border border-dashed border-gray-200">
                        [Chart Implementation Here]
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-sm rounded-2xl">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="h-80 flex items-center justify-center text-gray-400 bg-gray-50/50 rounded-xl m-6 border border-dashed border-gray-200">
                        [Activity Feed Implementation Here]
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
