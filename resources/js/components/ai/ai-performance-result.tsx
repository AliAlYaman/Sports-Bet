import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Target, DollarSign, Zap, ArrowRight, ArrowUpRight } from "lucide-react"

interface PredictionResult {
  id: string
  date: string
  sport: string
  matchup: string
  prediction: string
  confidence: number
  result: "Win" | "Loss"
}

const recentPredictions: PredictionResult[] = [
  {
    id: "1",
    date: "Jun 2, 2023",
    sport: "NBA",
    matchup: "BOS vs MIA",
    prediction: "BOS -6.5",
    confidence: 76,
    result: "Win",
  },
  {
    id: "2",
    date: "Jun 2, 2023",
    sport: "MLB",
    matchup: "NYY vs LAD",
    prediction: "Over 8.5",
    confidence: 64,
    result: "Win",
  },
  {
    id: "3",
    date: "Jun 1, 2023",
    sport: "NHL",
    matchup: "FLA vs CAR",
    prediction: "FLA ML",
    confidence: 58,
    result: "Win",
  },
  {
    id: "4",
    date: "Jun 1, 2023",
    sport: "NFL",
    matchup: "KC vs CIN",
    prediction: "CIN +3.5",
    confidence: 71,
    result: "Win",
  },
  {
    id: "5",
    date: "May 31, 2023",
    sport: "NBA",
    matchup: "DEN vs LAL",
    prediction: "Under 224.5",
    confidence: 68,
    result: "Loss",
  },
]

// Last 10 predictions streak (W = Win, L = Loss)
const streak = ["W", "W", "W", "L", "W", "W", "W", "W", "L", "W"]

function MetricCard({
  title,
  value,
  subtitle,
  change,
  icon,
}: {
  title: string
  value: string
  subtitle: string
  change?: { value: string; direction: "up" | "down" | "neutral" }
  icon: React.ReactNode
}) {
  return (
    <Card className="bg-gray-100 border-0">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="text-green-500">{icon}</div>
        </div>
        <div className="mb-2">
          <div className="text-4xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600 mt-1">{subtitle}</div>
        </div>
        {change && (
          <div
            className={`flex items-center text-sm font-medium ${
              change.direction === "up"
                ? "text-green-600"
                : change.direction === "down"
                  ? "text-red-600"
                  : "text-gray-600"
            }`}
          >
            {change.direction === "up" ? (
              <ArrowUpRight className="w-4 h-4 mr-1" />
            ) : change.direction === "down" ? (
              <ArrowUpRight className="w-4 h-4 mr-1 transform rotate-180" />
            ) : null}
            {change.value} vs. previous month
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function StreakIndicator({ results }: { results: string[] }) {
  return (
    <div className="flex space-x-1 mt-3">
      {results.map((result, index) => (
        <div
          key={index}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
            result === "W" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {result}
        </div>
      ))}
    </div>
  )
}

function ResultBadge({ result }: { result: "Win" | "Loss" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        result === "Win" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {result}
    </span>
  )
}

export default function AIPerformanceResults() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">AI Performance Results</h2>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Prediction Accuracy"
          value="68.7%"
          subtitle="Last 30 days (432 predictions)"
          change={{ value: "+2.3%", direction: "up" }}
          icon={<Target className="w-5 h-5" />}
        />
        <MetricCard
          title="Return on Investment"
          value="+62.3%"
          subtitle="Last 30 days (using recommended unit sizes)"
          change={{ value: "+8.7%", direction: "up" }}
          icon={<DollarSign className="w-5 h-5" />}
        />
        <Card className="bg-gray-100 border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Current Streak</h3>
              <div className="text-green-500">
                <Zap className="w-5 h-5" />
              </div>
            </div>
            <div className="mb-2">
              <div className="text-4xl font-bold text-gray-900">7 Wins</div>
              <div className="text-sm text-gray-600 mt-1">Last 10 predictions: 8-2</div>
            </div>
            <StreakIndicator results={streak} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Predictions Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-900 text-white px-6 py-4">
          <h3 className="text-lg font-semibold">Recent Prediction Results</h3>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-700">Date</TableHead>
                <TableHead className="font-semibold text-gray-700">Sport</TableHead>
                <TableHead className="font-semibold text-gray-700">Matchup</TableHead>
                <TableHead className="font-semibold text-gray-700">Prediction</TableHead>
                <TableHead className="font-semibold text-gray-700">Confidence</TableHead>
                <TableHead className="font-semibold text-gray-700">Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentPredictions.map((prediction) => (
                <TableRow key={prediction.id} className="hover:bg-gray-50">
                  <TableCell className="text-gray-700">{prediction.date}</TableCell>
                  <TableCell className="font-medium text-gray-900">{prediction.sport}</TableCell>
                  <TableCell className="text-gray-700">{prediction.matchup}</TableCell>
                  <TableCell className="font-medium text-gray-900">{prediction.prediction}</TableCell>
                  <TableCell className="text-gray-700">{prediction.confidence}%</TableCell>
                  <TableCell>
                    <ResultBadge result={prediction.result} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 text-center">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View All Results
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
