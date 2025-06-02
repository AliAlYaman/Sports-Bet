import { Star } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mike Johnson",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The AI predictions have completely transformed my betting strategy. I've seen a 35% increase in my win rate since I started using this platform. The analytics are top-notch!",
  },
  {
    id: "2",
    name: "Sarah Miller",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "I was skeptical at first, but the accuracy of the predictions is impressive. The interface is clean and easy to use. It's become my go-to resource before placing any bet.",
  },
  {
    id: "3",
    name: "David Chen",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "What sets this platform apart is the detailed analysis behind each prediction. It's not just telling you what to bet on, but why. I've learned so much about sports analytics through this service.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">"{testimonial.text}"</p>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of sports bettors who are making smarter decisions with our AI predictions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
