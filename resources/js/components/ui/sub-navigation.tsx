import { Link } from "@inertiajs/react";

interface SubNavigationProps {
  currentTab?: string;
}

export default function SubNavigation({ currentTab }: SubNavigationProps) {
  const tabs = [
    { name: "Today's Games", href: "/" },
    { name: "Live Betting", href: "/live-betting" },
    { name: "AI Picks", href: "/ai-picks" },
    { name: "Results", href: "/results" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Stats", href: "/stats" },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => {
            const isTabActive = currentTab === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  isTabActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
