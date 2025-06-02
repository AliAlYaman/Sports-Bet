import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Filter, Plus, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface Team {
    name: string;
    record: string;
    score: number;
    isHome: boolean;
}

interface BettingOption {
    label: string;
    value: string;
    odds: string;
}

interface LiveGame {
    id: string;
    gameId: string;
    league: string;
    leagueIcon: string;
    status: string;
    time: string;
    homeTeam: Team;
    awayTeam: Team;
    bettingOptions: BettingOption[];
    moreBetsCount: number;
}

const liveGames: LiveGame[] = [
    {
        id: '1',
        gameId: '83921',
        league: 'NBA',
        leagueIcon: '🏀',
        status: '2nd Quarter',
        time: '5:42',
        homeTeam: {
            name: 'LA Lakers',
            record: '21-10',
            score: 58,
            isHome: true,
        },
        awayTeam: {
            name: 'GS Warriors',
            record: '18-13',
            score: 52,
            isHome: false,
        },
        bettingOptions: [
            { label: 'Lakers', value: '-3.5', odds: '-110' },
            { label: 'Warriors', value: '+3.5', odds: '-110' },
            { label: 'Total', value: 'O/U', odds: '224.5' },
        ],
        moreBetsCount: 48,
    },
    {
        id: '2',
        gameId: '83922',
        league: 'NHL',
        leagueIcon: '🏒',
        status: '3rd Period',
        time: '15:27',
        homeTeam: {
            name: 'Boston Bruins',
            record: '25-8-3',
            score: 2,
            isHome: true,
        },
        awayTeam: {
            name: 'Toronto Maple Leafs',
            record: '22-10-4',
            score: 3,
            isHome: false,
        },
        bettingOptions: [
            { label: 'Bruins', value: '+1.5', odds: '-130' },
            { label: 'Maple Leafs', value: '-1.5', odds: '+110' },
            { label: 'Total', value: 'O/U', odds: '5.5' },
        ],
        moreBetsCount: 32,
    },
    {
        id: '3',
        gameId: '83923',
        league: 'Premier League',
        leagueIcon: '⚽',
        status: "75' Minute",
        time: '',
        homeTeam: {
            name: 'Manchester City',
            record: '1st',
            score: 2,
            isHome: true,
        },
        awayTeam: {
            name: 'Liverpool',
            record: '2nd',
            score: 2,
            isHome: false,
        },
        bettingOptions: [
            { label: 'Man City', value: 'Win', odds: '+120' },
            { label: 'Draw', value: 'X', odds: '+220' },
            { label: 'Liverpool', value: 'Win', odds: '+250' },
        ],
        moreBetsCount: 45,
    },
    {
        id: '4',
        gameId: '83924',
        league: 'MLB',
        leagueIcon: '⚾',
        status: 'Bottom 6th',
        time: '',
        homeTeam: {
            name: 'NY Yankees',
            record: '45-33',
            score: 3,
            isHome: true,
        },
        awayTeam: {
            name: 'Boston Red Sox',
            record: '42-36',
            score: 2,
            isHome: false,
        },
        bettingOptions: [
            { label: 'Yankees', value: '-1.5', odds: '+140' },
            { label: 'Red Sox', value: '+1.5', odds: '-160' },
            { label: 'Total', value: 'O/U', odds: '8.5' },
        ],
        moreBetsCount: 28,
    },
];

function getLeagueColor(league: string): string {
    const colors: Record<string, string> = {
        NBA: '#1D4ED8',
        NHL: '#3B82F6',
        'Premier League': '#10B981',
        MLB: '#EF4444',
    };
    return colors[league] || '#6B7280';
}

function TeamLogo({ team }: { team: string }) {
    return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white shadow">
            {team
                .split(' ')
                .map((word) => word[0])
                .join('')
                .slice(0, 2)}
        </div>
    );
}

function LiveGameCard({ game }: { game: LiveGame }) {
    return (
        <Card className="transform rounded-xl border border-gray-200 bg-white transition-transform hover:scale-[1.01] hover:shadow-lg">
            <CardContent className="p-5">
                {/* Header */}
                <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-green-700">LIVE</span>
                        <span className="text-gray-500">{game.status}</span>
                        {game.time && <span className="text-gray-400">• {game.time}</span>}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <TrendingUp className="h-4 w-4" />
                        <Star className="h-4 w-4" />
                    </div>
                </div>

                {/* League Info */}
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div
                            className="flex h-6 w-6 items-center justify-center rounded-full text-sm text-white"
                            style={{ backgroundColor: getLeagueColor(game.league) }}
                        >
                            {game.leagueIcon}
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{game.league}</span>
                    </div>
                    <span className="text-xs text-gray-400">Game ID: {game.gameId}</span>
                </div>

                {/* Teams and Scores */}
                <div className="mb-4 space-y-3">
                    {[game.homeTeam, game.awayTeam].map((team) => (
                        <div key={team.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <TeamLogo team={team.name} />
                                <div>
                                    <div className="font-semibold text-gray-900">{team.name}</div>
                                    <div className="text-xs text-gray-500">
                                        {team.isHome ? 'Home' : 'Away'} • {team.record}
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl font-bold text-gray-900">{team.score}</div>
                        </div>
                    ))}
                </div>

                {/* Betting Options */}
                <div className="mb-5 grid grid-cols-3 gap-3">
                    {game.bettingOptions.map((option, index) => (
                        <div
                            key={index}
                            className="cursor-pointer rounded-md border border-gray-200 bg-gray-50 p-3 text-center transition hover:bg-white"
                        >
                            <div className="text-xs font-medium text-gray-500">{option.label}</div>
                            <div className="text-sm font-semibold text-gray-800">{option.value}</div>
                            <div className="text-xs text-gray-400">{option.odds}</div>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                    <button className="flex items-center text-sm font-medium text-blue-600 hover:underline">
                        <Plus className="mr-1 h-4 w-4" />
                        More Bets ({game.moreBetsCount})
                    </button>
                    <Button className="h-auto rounded-md bg-blue-600 px-5 py-2 text-sm text-white hover:bg-blue-700">Bet Now</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default function LiveBettingPage() {
    const [sportsFilter, setSportsFilter] = useState('All Sports');
    const [leaguesFilter, setLeaguesFilter] = useState('All Leagues');

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                    <h1 className="text-3xl font-bold text-gray-900">Live Betting</h1>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3">
                        <div className="relative">
                            <select
                                value={sportsFilter}
                                onChange={(e) => setSportsFilter(e.target.value)}
                                className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option>All Sports</option>
                                <option>NBA</option>
                                <option>NHL</option>
                                <option>Premier League</option>
                                <option>MLB</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                        </div>

                        <div className="relative">
                            <select
                                value={leaguesFilter}
                                onChange={(e) => setLeaguesFilter(e.target.value)}
                                className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option>All Leagues</option>
                                <option>NBA</option>
                                <option>NHL</option>
                                <option>Premier League</option>
                                <option>MLB</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                        </div>

                        <Button variant="outline" className="flex items-center space-x-2">
                            <Filter className="h-4 w-4" />
                            <span>More Filters</span>
                        </Button>
                    </div>
                </div>

                {/* Live Games Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {liveGames.map((game) => (
                        <LiveGameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </div>
    );
}
