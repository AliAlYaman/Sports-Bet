import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for the charts
const overallAccuracy = {
  percentage: 76,
  totalPredictions: 1248,
  correctPredictions: 948,
  period: "Last 30 days",
}

const sportAccuracy = [
  { sport: "NFL", accuracy: 80 },
  { sport: "NBA", accuracy: 75 },
  { sport: "MLB", accuracy: 70 },
  { sport: "NHL", accuracy: 68 },
  { sport: "Soccer", accuracy: 65 },
]

const recentPerformance = [
  { day: "Day 1", accuracy: 72 },
  { day: "Day 2", accuracy: 69 },
  { day: "Day 3", accuracy: 75 },
  { day: "Day 4", accuracy: 82 },
  { day: "Day 5", accuracy: 79 },
  { day: "Day 6", accuracy: 80 },
  { day: "Day 7", accuracy: 74 },
  { day: "Day 8", accuracy: 78 },
  { day: "Day 9", accuracy: 83 },
  { day: "Day 10", accuracy: 77 },
]

function CircularProgress({ percentage }: { percentage: number }) {
  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="8" fill="none" />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#2563eb"
          strokeWidth="8"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-blue-600">{percentage}%</span>
      </div>
    </div>
  )
}

function BarChart({ data }: { data: typeof sportAccuracy }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>

      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.sport} className="flex items-center space-x-3">
            <div className="w-12 text-sm font-medium text-gray-700">{item.sport}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
              <div
                className="bg-blue-500 h-8 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                style={{ width: `${(item.accuracy / 100) * 100}%` }}
              >
                <span className="text-white text-sm font-medium">{item.accuracy}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LineChart({ data }: { data: typeof recentPerformance }) {
  const maxAccuracy = Math.max(...data.map((item) => item.accuracy))
  const minAccuracy = Math.min(...data.map((item) => item.accuracy))
  const range = maxAccuracy - minAccuracy
  const padding = range * 0.1

  const viewBoxHeight = 200
  const viewBoxWidth = 400

  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * (viewBoxWidth - 40) + 20
    const normalizedY = (item.accuracy - minAccuracy + padding) / (range + 2 * padding)
    const y = viewBoxHeight - normalizedY * (viewBoxHeight - 40) - 20
    return { x, y, accuracy: item.accuracy }
  })

  const pathData = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ")

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="w-full h-48">
        {/* Grid lines */}
        {[60, 65, 70, 75, 80, 85, 90].map((value) => {
          const normalizedY = (value - minAccuracy + padding) / (range + 2 * padding)
          const y = viewBoxHeight - normalizedY * (viewBoxHeight - 40) - 20
          return (
            <g key={value}>
              <line x1="20" y1={y} x2={viewBoxWidth - 20} y2={y} stroke="#f3f4f6" strokeWidth="1" />
              <text x="10" y={y + 4} fontSize="10" fill="#9ca3af" textAnchor="end">
                {value}%
              </text>
            </g>
          )
        })}

        {/* Line path */}
        <path d={pathData} stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Data points */}
        {points.map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r="4" fill="#2563eb" stroke="white" strokeWidth="2" />
        ))}
      </svg>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 px-5">
        {data.map((item, index) => (
          <span key={index} className="text-xs text-gray-500">
            {item.day}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function AIAccuracyDashboard() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Prediction Accuracy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powered by machine learning algorithms that analyze thousands of data points to provide you with the most
            accurate predictions in the industry.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overall Accuracy */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Overall Accuracy</CardTitle>
              <p className="text-sm text-gray-500">{overallAccuracy.period}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <CircularProgress percentage={overallAccuracy.percentage} />

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {overallAccuracy.totalPredictions.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Predictions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {overallAccuracy.correctPredictions.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Correct</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accuracy by Sport */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Accuracy by Sport</CardTitle>
              <p className="text-sm text-gray-500">Last 30 days</p>
            </CardHeader>
            <CardContent>
              <BarChart data={sportAccuracy} />
            </CardContent>
          </Card>

          {/* Recent Performance */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Recent Performance</CardTitle>
              <p className="text-sm text-gray-500">Last 10 days</p>
            </CardHeader>
            <CardContent>
              <LineChart data={recentPerformance} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
