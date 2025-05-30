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
            <SubNavigation currentTab={currentTab || '/todays-games'} />
            <HeroSection />
        </div>
    );
}
