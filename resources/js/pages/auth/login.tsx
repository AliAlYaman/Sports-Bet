import { Head } from '@inertiajs/react';
import Navbar from '../../components/ui/navbar';
import RegisterComponent from '@/components/register-component';

interface LoginProps {
    currentRoute?: string;
}

export default function Login({ currentRoute}: LoginProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Login" />

            <Navbar currentRoute={currentRoute} />
            <RegisterComponent destinationTab='login'/>
        </div>
    );
}
