import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

interface Team {
  name: string
  abbreviation: string
  record: string
  homeAway: string
  logo: string
  color: string
}

interface AIPrediction {
  id: string
  league: string
  leagueIcon: string
  gameTime: string
  homeTeam: Team
  awayTeam: Team
  prediction: {
    homeWinPercent: number
    awayWinPercent: number
  }
  predictedScore: {
    home: number
    away: number
  }
  recommendedBet: {
    type: string
    value: string
  }
}

const todaysPredictions: AIPrediction[] = [
  {
    id: "1",
    league: "NBA",
    leagueIcon: "🏀",
    gameTime: "Today 8:00 PM EST",
    homeTeam: {
      name: "Chicago Bulls",
      abbreviation: "CHI",
      record: "32-28 (Home: 18-11)",
      homeAway: "Home",
      logo: "/placeholder.svg?height=40&width=40",
      color: "#CE1141",
    },
    awayTeam: {
      name: "Toronto Raptors",
      abbreviation: "TOR",
      record: "29-31 (Away: 12-18)",
      homeAway: "Away",
      logo: "/placeholder.svg?height=40&width=40",
      color: "#753BBD",
    },
    prediction: {
      homeWinPercent: 68,
      awayWinPercent: 32,
    },
    predictedScore: {
      home: 108,
      away: 102,
    },
    recommendedBet: {
      type: "Bulls",
      value: "-2.5",
    },
  },
  {
    id: "2",
    league: "NFL",
    leagueIcon: "🏈",
    gameTime: "Today 4:25 PM EST",
    homeTeam: {
      name: "Dallas Cowboys",
      abbreviation: "DAL",
      record: "9-3 (Home: 6-0)",
      homeAway: "Home",
      logo: "/placeholder.svg?height=40&width=40",
      color: "#003594",
    },
    awayTeam: {
      name: "Green Bay Packers",
      abbreviation: "GB",
      record: "8-4 (Away: 3-3)",
      homeAway: "Away",
      logo: "/placeholder.svg?height=40&width=40",
      color: "#203731",
    },
    prediction: {
      homeWinPercent: 58,
      awayWinPercent: 42,
    },
    predictedScore: {
      home: 28,
      away: 24,
    },
    recommendedBet: {
      type: "Over",
      value: "49.5",
    },
  },
]

function TeamLogo({ team, size = 40 }: { team: Team; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold text-sm"
      style={{
        width: size,
        height: size,
        backgroundColor: team.color,
      }}
    >
      {team.abbreviation}
    </div>
  )
}

function WinProbabilityBar({
  homePercent,
  awayPercent,
  homeTeam,
  awayTeam,
}: {
  homePercent: number
  awayPercent: number
  homeTeam: string
  awayTeam: string
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900">{homeTeam} Win</span>
        <span className="text-sm font-bold text-gray-900">{homePercent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${homePercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900">{awayTeam} Win</span>
        <span className="text-sm font-bold text-gray-900">{awayPercent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-red-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${awayPercent}%` }}
        />
      </div>
    </div>
  )
}

function PredictionCard({ prediction }: { prediction: AIPrediction }) {
  return (
    <Card className="bg-white border border-gray-200">
      <CardContent className="p-6">
        {/* Header */}
        <div className="bg-gray-800 text-white rounded-lg p-3 mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{prediction.leagueIcon}</span>
            <span className="font-semibold">{prediction.league}</span>
          </div>
          <span className="text-sm">{prediction.gameTime}</span>
        </div>

        {/* Teams */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <TeamLogo team={prediction.homeTeam} />
            <div>
              <div className="font-semibold text-gray-900">{prediction.homeTeam.name}</div>
              <div className="text-sm text-gray-500">{prediction.homeTeam.record}</div>
            </div>
          </div>

          <div className="text-xl font-bold text-gray-600">VS</div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="font-semibold text-gray-900">{prediction.awayTeam.name}</div>
              <div className="text-sm text-gray-500">{prediction.awayTeam.record}</div>
            </div>
            <TeamLogo team={prediction.awayTeam} />
          </div>
        </div>

        {/* AI Prediction */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Prediction</h4>
          <WinProbabilityBar
            homePercent={prediction.prediction.homeWinPercent}
            awayPercent={prediction.prediction.awayWinPercent}
            homeTeam={prediction.homeTeam.name.split(" ").slice(-1)[0]}
            awayTeam={prediction.awayTeam.name.split(" ").slice(-1)[0]}
          />
        </div>

        {/* Prediction Details */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800 text-white rounded-lg p-4 text-center">
            <div className="text-sm text-gray-300 mb-1">Predicted Score</div>
            <div className="font-bold text-lg">
              {prediction.homeTeam.abbreviation} {prediction.predictedScore.home} - {prediction.predictedScore.away}{" "}
              {prediction.awayTeam.abbreviation}
            </div>
          </div>

          <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
            <div className="text-sm text-blue-100 mb-1">Recommended Bet</div>
            <div className="font-bold text-lg flex items-center justify-center space-x-1">
              <span>
                {prediction.recommendedBet.type} {prediction.recommendedBet.value}
              </span>
              <Check className="w-4 h-4" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TodaysAIPredictions() {
  return (
    <div className="py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Today's AI Predictions</h2>
        <p className="text-sm text-gray-500">Last updated: June 3, 2023 - 09:15 AM</p>
      </div>

      {/* Predictions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {todaysPredictions.map((prediction) => (
          <PredictionCard key={prediction.id} prediction={prediction} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">View All Predictions</Button>
      </div>
    </div>
  )
}
