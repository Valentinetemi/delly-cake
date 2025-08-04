import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"

export default function CakesPage() {
  const cakeCategories = [
    { name: "All", active: true },
    { name: "Wedding", active: false },
    { name: "Birthday", active: false },
    { name: "Seasonal", active: false },
    { name: "Cupcakes", active: false },
  ]

  const cakes = [
    {
      id: 1,
      name: "Wedding Dream Cake",
      description: "Layers of flowers with fresh strawberries and cream",
      price: "$45",
      originalPrice: "$55",
      image: "Image1.jpg?height=400&width=400",
      badge: "Popular",
      rating: 4.9,
      category: "Wedding",
    },
    {
      id: 2,
      name: "Elegant Wedding Cake",
      description: "Gold and blue colored cake, with flowers",
      price: "$52",
      image: "/Image2.jpg?height=400&width=400",
      badge: "Premium",
      rating: 5.0,
      category: "Wedding",
    },
    {
      id: 3,
      name: "Child Birthday Cake",
      description: "Pink colored cake with lots of flowers and cartoon ",
      price: "$38",
      image: "/Image3.jpg?height=400&width=400",
      badge: "Fresh",
      rating: 4.8,
      category: "Birthday",
    },
    {
      id: 4,
      name: "Colorful Rainbow Cake",
      description: "Classic rainbow cake with cream cheese frosting",
      price: "$48",
      image: "/Image10.jpg?height=400&width=400",
      badge: "Classic",
      rating: 4.9,
      category: "Wedding",
    },
    {
      id: 5,
      name: "Vanilla Bean Elegance",
      description: "Pure vanilla bean cake with strawberry and roses",
      price: "$42",
      image: "/Image5.jpg?height=400&width=400",
      badge: "Elegant",
      rating: 4.7,
      category: "Wedding",
    },
    {
      id: 6,
      name: "Caramel Apple Delight",
      description: "Spiced apple cake with salted caramel drizzle",
      price: "$46",
      image: "/Image13.jpg?height=400&width=400",
      badge: "Seasonal",
      rating: 4.8,
      category: "Seasonal",
    },
    {
      id: 7,
      name: "Vanilla and Strawberry Cake",
      description: "Colorful layers with vanilla and strawberry",
      price: "$50",
      image: "/Image15.jpg?height=400&width=400",
      badge: "Fun",
      rating: 4.9,
      category: "Birthday",
    },
    {
      id: 8,
      name: "Tiramisu Tower",
      description: "Coffee-soaked layers with mascarpone cream",
      price: "$54",
      image: "/Image8.jpg?height=400&width=400",
      badge: "Gourmet",
      rating: 5.0,
      category: "Premium",
    },
    {
      id: 9,
      name: "Funfetti Cupcakes",
      description: "Dozen vanilla cupcakes with colorful sprinkles",
      price: "$36",
      image: "/Image11.jpg?height=400&width=400",
      badge: "Dozen",
      rating: 4.6,
      category: "Cupcakes",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-pink-100 text-pink-800 text-lg px-4 py-2">Our Cake Collection</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Artisanal <span className="text-pink-400">Cakes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Each cake is a masterpiece, handcrafted with premium ingredients and decorated with artistic flair. Perfect
            for any celebration or just because you deserve something sweet.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {cakeCategories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  category.active
                    ? "bg-pink-400 hover:bg-pink-500 text-white"
                    : "border-pink-400 text-pink-600 hover:bg-pink-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cakes Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake) => (
              <Card
                key={cake.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-pink-400 text-white">{cake.badge}</Badge>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-4 right-4 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{cake.rating}</span>
                    </div>
                    <Badge variant="outline" className="ml-auto text-xs">
                      {cake.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{cake.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{cake.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-pink-500">{cake.price}</span>
                      {cake.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{cake.originalPrice}</span>
                      )}
                    </div>
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-6">Order Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-400 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-lg mb-8 opacity-90">
            We create custom cakes for any occasion. Let's bring your vision to life!
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
          >
            Request Custom Cake
          </Button>
        </div>
      </section>
    </div>
  )
}
