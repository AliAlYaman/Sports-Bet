import { Link } from "@inertiajs/react"

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="w-full space-y-8 mb-10 lg:mb-0">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
                AI-Powered Sports Betting
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed text-center lg:text-left">
                Our AI predicts game outcomes with industry-leading accuracy. Get the edge on your bets with data-driven
                insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/register"
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
          <div className="w-full flex justify-center lg:justify-end">
            <div className="bg-blue-800/50 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-4 sm:p-6 max-w-md w-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold">Today's AI Top Pick</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  94% Confidence
                </span>
              </div>

              {/* Pick Details */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">DAL</span>
                    <span className="text-white text-base sm:text-lg font-semibold">Dallas Cowboys</span>
                  </div>
                  <span className="text-green-400 text-lg sm:text-xl font-bold">+3.5</span>
                </div>

                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Our AI analyzed 150+ data points and predicts Dallas to cover the spread against Philadelphia tonight.
                </p>

                <Link
                  href="/analysis/dal-vs-phi"
                  className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200"
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
