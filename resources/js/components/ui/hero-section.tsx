import { Link } from "@inertiajs/react"

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">AI-Powered Sports Betting</h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Our AI predicts game outcomes with industry-leading accuracy. Get the edge on your bets with data-driven
                insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-started"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 text-center"
              >
                Get Started
              </Link>
              <Link
                href="/ai-accuracy"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors duration-200 text-center"
              >
                View AI Accuracy
              </Link>
            </div>
          </div>

          {/* Right Content - AI Pick Card */}
          <div className="lg:flex lg:justify-end">
            <div className="bg-blue-800/50 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6 max-w-md w-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Today's AI Top Pick</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  94% Confidence
                </span>
              </div>

              {/* Pick Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-300 text-sm font-medium">DAL</span>
                    <span className="text-white text-lg font-semibold">Dallas Cowboys</span>
                  </div>
                  <span className="text-green-400 text-xl font-bold">+3.5</span>
                </div>

                <p className="text-blue-100 text-sm leading-relaxed">
                  Our AI analyzed 150+ data points and predicts Dallas to cover the spread against Philadelphia tonight.
                </p>

                <Link
                  href="/analysis/dal-vs-phi"
                  className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  See Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
