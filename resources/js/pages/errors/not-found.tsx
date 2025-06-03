import Navbar from "@/components/ui/navbar";

export default function NotFound() {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center h-screen bg-white text-gray-600">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="mt-2">The page you are looking for doesn’t exist.</p>
      </div>
    </div>
    </>
  )
}
