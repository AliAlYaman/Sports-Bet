import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Winning?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of sports bettors who are leveraging our AI to make smarter, more profitable bets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className=" text-blue-600 hover:bg-blue-600 font-semibold px-8 py-3">
            <Link href="/register">
            Sign Up Now
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3"
          >
            <Link href="">
            View Pricing Plans
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
