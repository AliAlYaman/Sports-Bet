import AIPicks from "@/components/ai/ai-picks-component";
import Footer from "@/components/footer";
import Navbar from "@/components/ui/navbar";
import SubNavigation from "@/components/ui/sub-navigation";
import { Head } from "@inertiajs/react";


interface HomeProps {
    currentRoute?: string;
    currentTab?: string;
}

export default function AIPicksPage({ currentRoute, currentTab }: HomeProps){
    return(<>
    <Head title="Ai Picks & Results" />

    <Navbar currentRoute={currentRoute} />
    <SubNavigation currentTab={currentTab || '/ai-picks'} />
    <AIPicks />
    <Footer />
    </>)
}