import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Zap, TrendingUp, DollarSign } from "lucide-react"

interface HighlightGame {
  id: string
  league: string
  leagueIcon: string
  teams: string
  time: string
  score: string
  spread: string
  total: string
  moneyLine: string
}

const highlightGames: HighlightGame[] = [
  {
    id: "1",
    league: "NBA",
    leagueIcon: "🏀",
    teams: "Lakers vs Warriors",
    time: "Q2 5:42",
    score: "58-52",
    spread: "LAL -3.5 (-110)",
    total: "O/U 224.5",
    moneyLine: "LAL -180 | GSW +150",
  },
  {
    id: "2",
    league: "NHL",
    leagueIcon: "🏒",
    teams: "Bruins vs Maple Leafs",
    time: "P3 15:27",
    score: "2-3",
    spread: "BOS +1.5 (-130)",
    total: "O/U 5.5",
    moneyLine: "BOS +140 | TOR -160",
  },
  {
    id: "3",
    league: "Premier League",
    leagueIcon: "⚽",
    teams: "Man City vs Liverpool",
    time: "75'",
    score: "2-2",
    spread: "MCI -0.5 (+120)",
    total: "O/U 4.5",
    moneyLine: "MCI +120 | DRAW +220 | LIV +250",
  },
]

const features = [
  {
    id: "1",
    icon: Zap,
    title: "Instant Betting",
    description:
      "Place bets in real-time with no delay. Our platform ensures immediate confirmation of your wagers during live games.",
    borderColor: "border-blue-500",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "2",
    icon: TrendingUp,
    title: "Live Statistics",
    description:
      "Access comprehensive real-time statistics and analytics to make informed betting decisions during the game.",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: "3",
    icon: DollarSign,
    title: "Cash Out Option",
    description:
      "Secure your profits or minimize losses with our flexible cash out feature available on most live bets.",
    borderColor: "border-yellow-500",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
]

function getLeagueColor(league: string): string {
  const colors: Record<string, string> = {
    NBA: "#F97316",
    NHL: "#3B82F6",
    "Premier League": "#10B981",
  }
  return colors[league] || "#6B7280"
}

export default function LiveBettingHighlights() {
  return (
    <div className="space-y-8 container mx-auto px-4 pb-12">
      {/* Live Betting Highlights Table */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Live Betting Highlights</h2>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-left font-medium text-gray-600">Game</TableHead>
                  <TableHead className="text-left font-medium text-gray-600">Time</TableHead>
                  <TableHead className="text-left font-medium text-gray-600">Score</TableHead>
                  <TableHead className="text-left font-medium text-gray-600">Spread</TableHead>
                  <TableHead className="text-left font-medium text-gray-600">Total</TableHead>
                  <TableHead className="text-left font-medium text-gray-600">Money Line</TableHead>
                  <TableHead className="text-left font-medium text-gray-600"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {highlightGames.map((game) => (
                  <TableRow key={game.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-5 h-5 rounded flex items-center justify-center text-white text-xs"
                          style={{ backgroundColor: getLeagueColor(game.league) }}
                        >
                          {game.leagueIcon}
                        </div>
                        <span className="font-medium text-gray-900">{game.teams}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 text-gray-700">{game.time}</TableCell>
                    <TableCell className="py-4 font-medium text-gray-900">{game.score}</TableCell>
                    <TableCell className="py-4 text-gray-700">{game.spread}</TableCell>
                    <TableCell className="py-4 text-gray-700">{game.total}</TableCell>
                    <TableCell className="py-4 text-gray-700">{game.moneyLine}</TableCell>
                    <TableCell className="py-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Bet
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.id} className={`border-l-4 ${feature.borderColor} bg-white`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* AI-Powered Predictions */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 mb-6 lg:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">AI-Powered Predictions</h2>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                Get real-time betting recommendations powered by our advanced AI algorithm with 68% accuracy rate.
              </p>
              <Button className="border border-white hover:bg-gray-100 hover:text-blue-600 bg-blue-300 font-semibold px-6 py-3">
                View AI Picks
              </Button>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="text-4xl">🤖</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
