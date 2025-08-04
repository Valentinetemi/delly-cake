import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Award, Users } from "lucide-react"

export default function HomePage() {
  const featuredCakes = [
    {
      id: 1,
      name: "Strawberry Dream Cake",
      description: "Layers of vanilla sponge with fresh strawberries and cream",
      price: "$45",
      image: "/Image14.jpg?height=300&width=300",
      badge: "Popular",
    },
    {
      id: 2,
      name: "Chocolate Indulgence",
      description: "Rich chocolate cake with ganache and chocolate shavings",
      price: "$52",
      image: "/Image9.jpg?height=300&width=300",
      badge: "Premium",
    },
    {
      id: 3,
      name: "Lemon Bliss Tart",
      description: "Zesty lemon curd in a buttery pastry shell",
      price: "$38",
      image: "/Image12.jpg?height=300&width=300",
      badge: "Fresh",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The most beautiful and delicious cakes I've ever tasted! Perfect for our wedding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Delly Cakes made my daughter's birthday unforgettable. Amazing attention to detail!",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      text: "Their pastries are works of art. I order from them every week!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Image6.jpg?height=1080&width=1920"
            alt="Bakery interior"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-pink-100 text-pink-800 hover:bg-pink-200 text-lg px-4 py-2">
            Handcrafted with Love
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight">
            Delly
            <span className="text-pink-400 block">Cakes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where every cake tells a story and every bite creates a memory. Artisanal cakes and pastries made fresh
            daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/cakes">View Our Cakes</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-pink-400 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Order Custom Cake</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Featured Creations</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Signature Cakes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each cake is a masterpiece, crafted with premium ingredients and artistic flair
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCakes.map((cake) => (
              <Card
                key={cake.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-pink-400 text-white">{cake.badge}</Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{cake.name}</h3>
                  <p className="text-gray-600 mb-4">{cake.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-500">{cake.price}</span>
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-6">Order Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-pink-400 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full bg-transparent"
            >
              <Link href="/cakes">View All Cakes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-200 text-pink-800">Our Story</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Baking Dreams Since 2015</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a passion project in our home kitchen has blossomed into a beloved bakery that brings
                joy to our community. Every recipe is crafted with love, using only the finest ingredients.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Award className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">50+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Made with Love</div>
                </div>
              </div>
              <Button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/Image7.jpg?height=500&width=500"
                alt="Baker at work"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Customer Love</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Sweet Memories?</h2>
          <p className="text-xl mb-8 opacity-90">Let us craft the perfect cake for your special occasion</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
            >
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg rounded-full bg-transparent"
            >
              <Link href="/cakes">Browse Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
