import { Head } from '@inertiajs/react';
import HeroSection from '../components/ui/hero-section';
import Navbar from '../components/ui/navbar';
import SubNavigation from '../components/ui/sub-navigation';
import LiveGamesSection from '@/components/ui/live-games-section';
import AIAccuracyDashboard from '@/components/ai-accuracy-dashboard';
import AIPredictionTable from '@/components/ai-prediction-table';
import UpcomingEvents from '@/components/upcoming-events';

interface HomeProps {
    currentRoute?: string;
    currentTab?: string;
}

export default function Home({ currentRoute, currentTab }: HomeProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Home" />

            <Navbar currentRoute={currentRoute} />
            <SubNavigation currentTab={currentTab || '/todays-games'} />
            <HeroSection />
            <LiveGamesSection />
            <AIAccuracyDashboard />
            <div className="container mx-auto px-4 py-8">
                <AIPredictionTable />
            </div>
            <UpcomingEvents />
        </div>
    );
}
