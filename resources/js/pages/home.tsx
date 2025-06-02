import AIAccuracyDashboard from '@/components/ai-accuracy-dashboard';
import AIPredictionTable from '@/components/ai-prediction-table';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';
import TestimonialsSection from '@/components/testimonials-section';
import LiveGamesSection from '@/components/ui/live-games-section';
import UpcomingEvents from '@/components/upcoming-events';
import { Head } from '@inertiajs/react';
import HeroSection from '../components/ui/hero-section';
import Navbar from '../components/ui/navbar';
import SubNavigation from '../components/ui/sub-navigation';

interface HomeProps {
    currentRoute?: string;
    currentTab?: string;
}

export default function Home({ currentRoute, currentTab }: HomeProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Home" />

            <Navbar currentRoute={currentRoute} />
            <SubNavigation currentTab={currentTab || '/'} />
            <HeroSection />
            <LiveGamesSection />
            <AIAccuracyDashboard />
            <div className="container mx-auto px-4 py-8">
                <AIPredictionTable />
            </div>
            <UpcomingEvents />
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </div>
    );
}
