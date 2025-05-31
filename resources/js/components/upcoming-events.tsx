"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bot } from "lucide-react"
import { useState } from "react"

interface Team {
  id: string
  name: string
  abbreviation: string
  spread: string
  logo: string
}

interface Event {
  id: string
  league: string
  leagueIcon: string
  time: string
  date: string
  homeTeam: Team
  awayTeam: Team
  overUnder: string
  moneyline: {
    home: string
    away: string
  }
  aiPrediction: {
    type: string
    value: string
    confidence: number
  }
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    league: "NBA",
    leagueIcon: "🏀",
    time: "7:30 PM ET",
    date: "Today",
    homeTeam: {
      id: "bos",
      name: "Boston Celtics",
      abbreviation: "BOS",
      spread: "-6.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    awayTeam: {
      id: "nyk",
      name: "New York Knicks",
      abbreviation: "NYK",
      spread: "+6.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    overUnder: "218.5",
    moneyline: {
      home: "-260",
      away: "+210",
    },
    aiPrediction: {
      type: "Celtics",
      value: "-6.5",
      confidence: 82,
    },
  },
  {
    id: "2",
    league: "NFL",
    leagueIcon: "🏈",
    time: "8:20 PM ET",
    date: "Today",
    homeTeam: {
      id: "kc",
      name: "Kansas City Chiefs",
      abbreviation: "KC",
      spread: "-3.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    awayTeam: {
      id: "lv",
      name: "Las Vegas Raiders",
      abbreviation: "LV",
      spread: "+3.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    overUnder: "49.5",
    moneyline: {
      home: "-180",
      away: "+160",
    },
    aiPrediction: {
      type: "Over",
      value: "49.5",
      confidence: 76,
    },
  },
  {
    id: "3",
    league: "NHL",
    leagueIcon: "🏒",
    time: "9:00 PM ET",
    date: "Today",
    homeTeam: {
      id: "col",
      name: "Colorado Avalanche",
      abbreviation: "COL",
      spread: "-1.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    awayTeam: {
      id: "ana",
      name: "Anaheim Ducks",
      abbreviation: "ANA",
      spread: "+1.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    overUnder: "6.5",
    moneyline: {
      home: "-220",
      away: "+180",
    },
    aiPrediction: {
      type: "Ducks",
      value: "+1.5",
      confidence: 68,
    },
  },
  {
    id: "4",
    league: "NHL",
    leagueIcon: "🏒",
    time: "9:00 PM ET",
    date: "Today",
    homeTeam: {
      id: "col",
      name: "Colorado Avalanche",
      abbreviation: "COL",
      spread: "-1.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    awayTeam: {
      id: "ana",
      name: "Anaheim Ducks",
      abbreviation: "ANA",
      spread: "+1.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    overUnder: "6.5",
    moneyline: {
      home: "-220",
      away: "+180",
    },
    aiPrediction: {
      type: "Ducks",
      value: "+1.5",
      confidence: 68,
    },
  },
]

type FilterType = "Today" | "Tomorrow" | "This Week"

// Add more events for different days
const allEvents: Event[] = [
  ...upcomingEvents, // Today's events
  // Tomorrow's events
  {
    id: "4",
    league: "NBA",
    leagueIcon: "🏀",
    time: "7:00 PM ET",
    date: "Tomorrow",
    homeTeam: {
      id: "lal",
      name: "Los Angeles Lakers",
      abbreviation: "LAL",
      spread: "-4.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    awayTeam: {
      id: "gsw",
      name: "Golden State Warriors",
      abbreviation: "GSW",
      spread: "+4.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    overUnder: "225.5",
    moneyline: {
      home: "-190",
      away: "+170",
    },
    aiPrediction: {
      type: "Lakers",
      value: "-4.5",
      confidence: 74,
    },
  },
  {
    id: "5",
    league: "NFL",
    leagueIcon: "🏈",
    time: "1:00 PM ET",
    date: "Tomorrow",
    homeTeam: {
      id: "dal",
      name: "Dallas Cowboys",
      abbreviation: "DAL",
      spread: "-7.0",
      logo: "/placeholder.svg?height=32&width=32",
    },
    awayTeam: {
      id: "was",
      name: "Washington Commanders",
      abbreviation: "WAS",
      spread: "+7.0",
      logo: "/placeholder.svg?height=32&width=32",
    },
    overUnder: "47.5",
    moneyline: {
      home: "-320",
      away: "+260",
    },
    aiPrediction: {
      type: "Under",
      value: "47.5",
      confidence: 71,
    },
  },
  // This Week events
  {
    id: "6",
    league: "NHL",
    leagueIcon: "🏒",
    time: "8:00 PM ET",
    date: "This Week",
    homeTeam: {
      id: "tor",
      name: "Toronto Maple Leafs",
      abbreviation: "TOR",
      spread: "-1.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    awayTeam: {
      id: "mtl",
      name: "Montreal Canadiens",
      abbreviation: "MTL",
      spread: "+1.5",
      logo: "/placeholder.svg?height=32&width=32",
    },
    overUnder: "6.0",
    moneyline: {
      home: "-200",
      away: "+175",
    },
    aiPrediction: {
      type: "Maple Leafs",
      value: "-1.5",
      confidence: 79,
    },
  },
  
]

function TeamLogo({ team, size = 28 }: { team: Team; size?: number }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-bold text-xs flex-shrink-0`}
      style={{
        width: size,
        height: size,
        backgroundColor: getTeamColor(team.abbreviation),
      }}
    >
      {team.abbreviation}
    </div>
  )
}

function getTeamColor(abbreviation: string): string {
  const colors: Record<string, string> = {
    BOS: "#007A33",
    NYK: "#006BB6",
    KC: "#E31837",
    LV: "#000000",
    COL: "#6F263D",
    ANA: "#F47A38",
    LAL: "#552583",
    GSW: "#1D428A",
    DAL: "#003594",
    WAS: "#5A1414",
    TOR: "#003E7E",
    MTL: "#AF1E2D",
    DEN: "#0E2240",
    PHX: "#1D1160",
  }
  return colors[abbreviation] || "#6B7280"
}

function getLeagueColor(league: string): string {
  const colors: Record<string, string> = {
    NBA: "#1D4ED8",
    NFL: "#2563EB",
    NHL: "#3B82F6",
  }
  return colors[league] || "#6B7280"
}

function ConfidenceBar({ confidence }: { confidence: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{ width: `${confidence}%` }} />
    </div>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="bg-white border border-gray-200 w-[280px] sm:w-[320px] flex-shrink-0">
      <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: getLeagueColor(event.league) }}
            >
              {event.leagueIcon}
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">{event.league}</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-500">
            {event.date}, {event.time}
          </span>
        </div>

        {/* Teams */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <TeamLogo team={event.homeTeam} size={24} />
              <span className="font-medium text-gray-900 text-sm sm:text-base truncate">{event.homeTeam.name}</span>
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base ml-2">{event.homeTeam.spread}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <TeamLogo team={event.awayTeam} size={24} />
              <span className="font-medium text-gray-900 text-sm sm:text-base truncate">{event.awayTeam.name}</span>
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base ml-2">{event.awayTeam.spread}</span>
          </div>
        </div>

        {/* Betting Info */}
        <div className="text-xs sm:text-sm text-gray-600 space-y-1">
          <div>O/U: {event.overUnder}</div>
          <div className="truncate">
            ML: {event.homeTeam.abbreviation} {event.moneyline.home}, {event.awayTeam.abbreviation}{" "}
            {event.moneyline.away}
          </div>
        </div>

        {/* AI Prediction */}
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="font-medium text-gray-900 text-xs sm:text-sm truncate">
              AI Prediction: {event.aiPrediction.type} {event.aiPrediction.value}
            </span>
          </div>
          <div className="space-y-2">
            <ConfidenceBar confidence={event.aiPrediction.confidence} />
            <span className="text-xs sm:text-sm text-green-600 font-medium">
              {event.aiPrediction.confidence}% confidence
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function UpcomingEvents() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Today")

  const filteredEvents = allEvents.filter((event) => event.date === activeFilter)

  return (
    <section className="py-6 sm:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Upcoming Events</h2>
          <div className="flex space-x-1 bg-white rounded-lg p-2 border border-gray-200 self-start">
            {(["Today", "Tomorrow", "This Week"] as FilterType[]).map((filter) => (
              <Button
                key={filter}
                variant="ghost"
                className={`text-xs sm:text-sm px-3 py-1 rounded-full transition-colors duration-200 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-blue-700 shadow font-semibold"
                    : "bg-transparent text-gray-600 hover:bg-blue-100 hover:text-blue-700"
                }`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="flex justify-between space-x-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <div className="w-full text-center py-8">
              <p className="text-gray-500">No events scheduled for {activeFilter.toLowerCase()}</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
            View All Events
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
