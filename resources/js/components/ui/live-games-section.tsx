import { ChevronLeft, ChevronRight } from "lucide-react"
import  { Button }  from "./button"

interface Team {
  id: string
  name: string
  abbreviation: string
  logo: string
  score: number
}

interface Game {
  id: string
  status: "LIVE" | "FINAL" | "FINAL/OT" | "UPCOMING"
  time?: string
  homeTeam: Team
  awayTeam: Team
  spread: {
    team: string
    value: string
  }
  overUnder: string
}

const mockGames: Game[] = [
  {
    id: "1",
    status: "LIVE",
    time: "Q4 2:34",
    homeTeam: {
      id: "dal",
      name: "Cowboys",
      abbreviation: "DAL",
      logo: "/placeholder.svg?height=32&width=32",
      score: 24,
    },
    awayTeam: {
      id: "phi",
      name: "Eagles",
      abbreviation: "PHI",
      logo: "/placeholder.svg?height=32&width=32",
      score: 21,
    },
    spread: {
      team: "DAL",
      value: "+3.5",
    },
    overUnder: "45.5",
  },
  {
    id: "2",
    status: "FINAL",
    homeTeam: {
      id: "lal",
      name: "Lakers",
      abbreviation: "LAL",
      logo: "/placeholder.svg?height=32&width=32",
      score: 114,
    },
    awayTeam: {
      id: "mia",
      name: "Heat",
      abbreviation: "MIA",
      logo: "/placeholder.svg?height=32&width=32",
      score: 103,
    },
    spread: {
      team: "LAL",
      value: "-5.5",
    },
    overUnder: "220.5",
  },
  {
    id: "3",
    status: "FINAL/OT",
    homeTeam: {
      id: "bos",
      name: "Bruins",
      abbreviation: "BOS",
      logo: "/placeholder.svg?height=32&width=32",
      score: 3,
    },
    awayTeam: {
      id: "tor",
      name: "Maple Leafs",
      abbreviation: "TOR",
      logo: "/placeholder.svg?height=32&width=32",
      score: 2,
    },
    spread: {
      team: "BOS",
      value: "-1.5",
    },
    overUnder: "5.5",
  },
  {
    id: "4",
    status: "LIVE",
    time: "3rd 12:45",
    homeTeam: {
      id: "det",
      name: "Red Wings",
      abbreviation: "DET",
      logo: "/placeholder.svg?height=32&width=32",
      score: 2,
    },
    awayTeam: {
      id: "vgk",
      name: "Golden Knights",
      abbreviation: "VGK",
      logo: "/placeholder.svg?height=32&width=32",
      score: 3,
    },
    spread: {
      team: "VGK",
      value: "-1.5",
    },
    overUnder: "6.5",
  },
  {
    id: "5",
    status: "UPCOMING",
    time: "7:30",
    homeTeam: {
      id: "bos",
      name: "Celtics",
      abbreviation: "BOS",
      logo: "/placeholder.svg?height=32&width=32",
      score: 0,
    },
    awayTeam: {
      id: "nyk",
      name: "Knicks",
      abbreviation: "NYK",
      logo: "/placeholder.svg?height=32&width=32",
      score: 0,
    },
    spread: {
      team: "BOS",
      value: "-6.5",
    },
    overUnder: "",
  },
]

function getStatusColor(status: string): string {
  switch (status) {
    case "LIVE":
      return "bg-red-500"
    case "FINAL":
    case "FINAL/OT":
      return "bg-gray-400"
    case "UPCOMING":
      return "bg-blue-500"
    default:
      return "bg-gray-400"
  }
}

function getStatusText(game: Game): string {
  if (game.status === "LIVE" && game.time) {
    return `LIVE - ${game.time}`
  }
  if (game.status === "UPCOMING" && game.time) {
    return `UPCOMING - ${game.time}`
  }
  return game.status
}

function TeamLogo({ team, size = 32 }: { team: Team; size?: number }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-bold text-sm`}
      style={{
        width: size,
        height: size,
        backgroundColor: getTeamColor(team.abbreviation),
      }}
    >
      {team.abbreviation.slice(0, 3)}
    </div>
  )
}

function getTeamColor(abbreviation: string): string {
  const colors: Record<string, string> = {
    DAL: "#003594",
    PHI: "#004C54",
    LAL: "#552583",
    MIA: "#98002E",
    BOS: "#007A33",
    TOR: "#003E7E",
    DET: "#CE1126",
    VGK: "#B4975A",
    NYK: "#006BB6",
  }
  return colors[abbreviation] || "#6B7280"
}

function GameCard({ game }: { game: Game }) {
  const isUpcoming = game.status === "UPCOMING"

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden min-w-[280px] flex-shrink-0">
      {/* Status Bar */}
      <div className={`${getStatusColor(game.status)} text-white text-center py-2 px-4`}>
        <span className="text-sm font-medium">{getStatusText(game)}</span>
      </div>

      {/* Game Content */}
      <div className="p-4 space-y-3">
        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TeamLogo team={game.awayTeam} />
            <span className="font-medium text-gray-900">{game.awayTeam.name}</span>
          </div>
          <span className="text-xl font-bold text-gray-900">{isUpcoming ? "" : game.awayTeam.score}</span>
        </div>

        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TeamLogo team={game.homeTeam} />
            <span className="font-medium text-gray-900">{game.homeTeam.name}</span>
          </div>
          <span className="text-xl font-bold text-gray-900">{isUpcoming ? "" : game.homeTeam.score}</span>
        </div>

        {/* Betting Info */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              Spread: {game.spread.team} {game.spread.value}
            </span>
            {game.overUnder && <span>O/U: {game.overUnder}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LiveGamesSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Live & Recent Games</h2>
          <div className="flex space-x-2">
            <Button variant="outline" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Games Grid */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {mockGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}
