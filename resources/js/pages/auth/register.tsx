import { Head } from '@inertiajs/react';
import Navbar from '../../components/ui/navbar';
import RegisterComponent from '@/components/register-component';

interface HomeProps {
    currentRoute?: string;
}

export default function Register({ currentRoute}: HomeProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Register" />

            <Navbar currentRoute={currentRoute} />
            <RegisterComponent destinationTab='register'/>
        </div>
    );
}
