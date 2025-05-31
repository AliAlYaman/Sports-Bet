import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface PredictionData {
  sport: string
  betType: string
  predictions: number
  accuracy: number
  roi: number
  avgOdds: string
}

const predictionData: PredictionData[] = [
  {
    sport: "NFL",
    betType: "Spread",
    predictions: 312,
    accuracy: 79.2,
    roi: 12.6,
    avgOdds: "-110",
  },
  {
    sport: "NBA",
    betType: "Moneyline",
    predictions: 428,
    accuracy: 74.3,
    roi: 9.8,
    avgOdds: "-115",
  },
  {
    sport: "MLB",
    betType: "Total",
    predictions: 276,
    accuracy: 71.5,
    roi: 8.2,
    avgOdds: "-108",
  },
  {
    sport: "NHL",
    betType: "Puck Line",
    predictions: 232,
    accuracy: 68.9,
    roi: 7.4,
    avgOdds: "+105",
  },
  {
    sport: "Soccer",
    betType: "Match Result",
    predictions: 342,
    accuracy: 65.2,
    roi: 5.9,
    avgOdds: "+120",
  },
]

function getAccuracyColor(accuracy: number): string {
  if (accuracy >= 75) return "text-green-600"
  if (accuracy >= 70) return "text-green-500"
  if (accuracy >= 65) return "text-amber-500"
  return "text-red-500"
}

export default function AIPredictionTable() {
  return (
    <div className="bg-white rounded-lg  shadow-lg overflow-hidden text-gray-900 font-semibold">
      <div className="p-6 border-b border-gray-300">
        <h2 className="text-xl font-bold text-gray-900">AI Prediction Performance Details</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-white border-gray-300">
              <TableHead className="font-semibold text-gray-600">Sport</TableHead>
              <TableHead className="font-semibold text-gray-600">Bet Type</TableHead>
              <TableHead className="font-semibold text-gray-600">Predictions</TableHead>
              <TableHead className="font-semibold text-gray-600">Accuracy</TableHead>
              <TableHead className="font-semibold text-gray-600">ROI</TableHead>
              <TableHead className="font-semibold text-gray-600">Avg. Odds</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {predictionData.map((row, index) => (
              <TableRow key={index} className="bg-white border-gray-300">
                <TableCell className="font-medium">{row.sport}</TableCell>
                <TableCell>{row.betType}</TableCell>
                <TableCell>{row.predictions}</TableCell>
                <TableCell className={getAccuracyColor(row.accuracy)}>{row.accuracy}%</TableCell>
                <TableCell className="text-green-600">+{row.roi}%</TableCell>
                <TableCell>{row.avgOdds}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
