
import Footer from '@/components/footer';
import { Head } from '@inertiajs/react';
import HeroSection from '../components/ui/hero-section';
import Navbar from '../components/ui/navbar';
import SubNavigation from '../components/ui/sub-navigation';
import LiveBettingPage from '@/components/live-betting/live-betting-sub-navigation';
import LiveBettingHighlights from '@/components/live-betting/live-betting-highlight';

interface HomeProps {
    currentRoute?: string;
    currentTab?: string;
}

export default function Home({ currentRoute, currentTab }: HomeProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Home" />

            <Navbar currentRoute={currentRoute} />
            <SubNavigation currentTab={currentTab || '/live-betting'} />
            <LiveBettingPage />
            <LiveBettingHighlights />
            <Footer />
        </div>
    );
}
