import AIPerformanceResults from '@/components/ai/ai-performance-result';
import TodaysAIPredictions from '@/components/ai/todays-ai-prediction';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

interface AIPick {
    id: string;
    sport: string;
    game: string;
    prediction: string;
    confidence: number;
    odds: string;
    potentialReturn: string;
    gameTime: string;
    status: 'pending' | 'won' | 'lost';
}

const todaysPicks: AIPick[] = [
    {
        id: '1',
        sport: 'NBA',
        game: 'Lakers vs Warriors',
        prediction: 'Lakers -3.5',
        confidence: 87,
        odds: '-110',
        potentialReturn: '+91%',
        gameTime: '7:30 PM ET',
        status: 'pending',
    },
    {
        id: '2',
        sport: 'NHL',
        game: 'Bruins vs Maple Leafs',
        prediction: 'Over 5.5',
        confidence: 82,
        odds: '+105',
        potentialReturn: '+105%',
        gameTime: '8:00 PM ET',
        status: 'pending',
    },
    {
        id: '3',
        sport: 'NFL',
        game: 'Chiefs vs Raiders',
        prediction: 'Chiefs -7.0',
        confidence: 79,
        odds: '-115',
        potentialReturn: '+87%',
        gameTime: '8:20 PM ET',
        status: 'pending',
    },
    {
        id: '4',
        sport: 'MLB',
        game: 'Yankees vs Red Sox',
        prediction: 'Under 8.5',
        confidence: 75,
        odds: '-105',
        potentialReturn: '+95%',
        gameTime: '7:05 PM ET',
        status: 'pending',
    },
];

const recentResults: AIPick[] = [
    {
        id: '5',
        sport: 'NBA',
        game: 'Celtics vs Heat',
        prediction: 'Celtics -4.5',
        confidence: 84,
        odds: '-110',
        potentialReturn: '+91%',
        gameTime: 'Yesterday',
        status: 'won',
    },
    {
        id: '6',
        sport: 'NHL',
        game: 'Rangers vs Devils',
        prediction: 'Over 6.0',
        confidence: 78,
        odds: '+110',
        potentialReturn: '+110%',
        gameTime: 'Yesterday',
        status: 'won',
    },
    {
        id: '7',
        sport: 'MLB',
        game: 'Dodgers vs Padres',
        prediction: 'Dodgers ML',
        confidence: 72,
        odds: '-140',
        potentialReturn: '+71%',
        gameTime: 'Yesterday',
        status: 'lost',
    },
];

function AIPerformanceChart() {
    return (
        <Card className="border-0 bg-gray-900 text-white">
            <CardContent className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">AI Performance</h3>
                    <Badge className="bg-green-500 font-bold text-white">+62.3% ROI</Badge>
                </div>

                {/* Chart Area */}
                <div className="relative mb-4 h-64">
                    <svg viewBox="0 0 400 200" className="h-full w-full">
                        {/* Grid lines */}
                        {[50, 55, 60, 65, 70, 75].map((value) => {
                            const y = 200 - ((value - 50) / 25) * 200;
                            return (
                                <g key={value}>
                                    <line x1="40" y1={y} x2="380" y2={y} stroke="#374151" strokeWidth="1" />
                                    <text x="30" y={y + 4} fontSize="10" fill="#9CA3AF" textAnchor="end">
                                        {value}
                                    </text>
                                </g>
                            );
                        })}

                        {/* AI Prediction Accuracy Line (Green) */}
                        <path
                            d="M 60 160 L 120 170 L 180 150 L 240 130 L 300 110 L 360 90"
                            stroke="#10B981"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Industry Average Line (Red, Dotted) */}
                        <path
                            d="M 60 180 L 120 175 L 180 185 L 240 180 L 300 175 L 360 170"
                            stroke="#EF4444"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                        />

                        {/* Data points for AI line */}
                        {[
                            { x: 60, y: 160 },
                            { x: 120, y: 170 },
                            { x: 180, y: 150 },
                            { x: 240, y: 130 },
                            { x: 300, y: 110 },
                            { x: 360, y: 90 },
                        ].map((point, index) => (
                            <circle key={index} cx={point.x} cy={point.y} r="4" fill="#10B981" stroke="white" strokeWidth="2" />
                        ))}
                    </svg>

                    {/* X-axis labels */}
                    <div className="mt-2 flex justify-between px-12">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                            <span key={month} className="text-xs text-gray-400">
                                {month}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center space-x-6 text-sm pt-5">
                    <div className="flex items-center space-x-2">
                        <div className="h-0.5 w-4 bg-green-500"></div>
                        <span className="text-gray-300">AI Prediction Accuracy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div
                            className="h-0.5 w-4 bg-red-500"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(to right, #EF4444 0, #EF4444 3px, transparent 3px, transparent 6px)',
                            }}
                        ></div>
                        <span className="text-gray-300">Industry Average</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function getConfidenceColor(confidence: number): string {
    if (confidence >= 80) return 'text-green-600 bg-green-50';
    if (confidence >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
}


function getSportColor(sport: string): string {
    const colors: Record<string, string> = {
        NBA: '#F97316',
        NHL: '#3B82F6',
        NFL: '#10B981',
        MLB: '#EF4444',
    };
    return colors[sport] || '#6B7280';
}

export default function AIPicksPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">AI-Powered Sports Betting Intelligence</h1>
                        <p className="mb-8 text-xl leading-relaxed text-gray-600">
                            Our advanced AI analyzes thousands of data points to predict game outcomes with industry-leading accuracy.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button className="bg-blue-600 px-8 py-3 text-lg text-white hover:bg-blue-700">View Today's Picks</Button>
                            <Button variant="outline" className="border-blue-600 px-8 py-3 text-lg text-blue-600 hover:bg-blue-50">
                                Performance Stats
                            </Button>
                        </div>
                    </div>
                    <div>
                        <AIPerformanceChart />
                    </div>
                </div>

                {/* AI Performance Results Section */}
                <div className="mb-12">
                    <AIPerformanceResults />
                </div>

                {/* Today's AI Predictions Section */}
                <TodaysAIPredictions />

                {/* Today's AI Picks */}
                <Card className="mb-8 overflow-hidden rounded-lg border border-gray-200 bg-white text-black">
                    <CardContent className="p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">Recent Prediction Results</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Sport</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Game</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Prediction</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Confidence</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Odds</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Return</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {todaysPicks.map((pick) => (
                                        <tr key={pick.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-2 text-sm font-medium text-blue-600">{pick.sport}</td>
                                            <td className="px-4 py-2 text-sm text-gray-800">{pick.game}</td>
                                            <td className="px-4 py-2 text-sm text-gray-800">{pick.prediction}</td>
                                            <td className="px-4 py-2 text-sm text-gray-800">{pick.confidence}%</td>
                                            <td className="px-4 py-2 text-sm text-gray-800">{pick.odds}</td>
                                            <td className="px-4 py-2 text-sm font-medium text-green-600">{pick.potentialReturn}</td>
                                            <td className="px-4 py-2">
                                                <span
                                                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                                                        pick.status === 'won'
                                                            ? 'bg-green-100 text-green-700'
                                                            : pick.status === 'lost'
                                                              ? 'bg-red-100 text-red-700'
                                                              : 'bg-gray-100 text-gray-700'
                                                    }`}
                                                >
                                                    {pick.status.charAt(0).toUpperCase() + pick.status.slice(1)}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Results */}
                <Card className="mb-8 overflow-hidden rounded-lg border border-gray-200 bg-white text-black">
                    <CardContent className="p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">Recent Results</h2>
                            <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center space-x-1 text-green-600">
                                    <TrendingUp className="h-4 w-4" />
                                    <span>68% Win Rate (Last 30 days)</span>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Game</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Prediction</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Confidence</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Result</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Return</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {recentResults.map((pick) => (
                                        <tr key={pick.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-2">
                                                <div className="flex items-center space-x-2">
                                                    <div className="h-4 w-4 rounded" style={{ backgroundColor: getSportColor(pick.sport) }} />
                                                    <div>
                                                        <div className="font-medium text-gray-800">{pick.game}</div>
                                                        <div className="text-sm text-gray-500">{pick.sport}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-2 text-sm font-medium text-gray-800">{pick.prediction}</td>
                                            <td className="px-4 py-2">
                                                <div
                                                    className={`inline-flex items-center rounded-full px-2 py-1 text-sm font-medium ${getConfidenceColor(
                                                        pick.confidence,
                                                    )}`}
                                                >
                                                    {pick.confidence}%
                                                </div>
                                            </td>
                                            <td className="px-4 py-2">
                                                <span
                                                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                                                        pick.status === 'won'
                                                            ? 'bg-green-100 text-green-700'
                                                            : pick.status === 'lost'
                                                              ? 'bg-red-100 text-red-700'
                                                              : 'bg-gray-100 text-gray-600'
                                                    }`}
                                                >
                                                    {pick.status === 'won' ? 'Win' : pick.status === 'lost' ? 'Loss' : 'Pending'}
                                                </span>
                                            </td>
                                            <td
                                                className={`px-4 py-2 text-sm font-medium ${
                                                    pick.status === 'won'
                                                        ? 'text-green-600'
                                                        : pick.status === 'lost'
                                                          ? 'text-red-600'
                                                          : 'text-gray-500'
                                                }`}
                                            >
                                                {pick.status === 'won' ? pick.potentialReturn : pick.status === 'lost' ? '-100%' : 'Pending'}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-800">{pick.gameTime}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
