import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Heart, Clock, Star, ChefHat } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Users, number: "10K+", label: "Happy Customers" },
    { icon: Heart, number: "100%", label: "Made with Love" },
    { icon: Clock, number: "9", label: "Years of Excellence" },
  ]

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Head Baker & Founder",
      image: "/Image22.jpg?height=300&width=300",
      description: "With 15 years of experience, Sarah brings artistry and passion to every creation.",
    },
    {
      name: "Marcus Gate",
      role: "Pastry Chef",
      image: "/Image23.jpg?height=300&width=300",
      description: "Marcus specializes in delicate pastries and innovative flavor combinations.",
    },
    {
      name: "Emma Rodriguez",
      role: "Cake Decorator",
      image: "Image20.jpg?height=300&width=300",
      description: "Emma's artistic touch transforms every cake into a work of edible art.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every recipe is crafted with passion and care, using traditional techniques passed down through generations.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "We source only the finest ingredients - organic flour, farm-fresh eggs, and real vanilla beans.",
    },
    {
      icon: ChefHat,
      title: "Artisan Craftsmanship",
      description:
        "Our skilled bakers combine time-honored methods with innovative techniques to create unique masterpieces.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-pink-100 text-pink-800 text-lg px-4 py-2">Our Story</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Baking Dreams Since <span className="text-pink-400">2015</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                What started as a passion project in our home kitchen has blossomed into a beloved bakery that brings
                joy to our community. Every cake tells a story, and we're honored to be part of your most precious
                moments.
              </p>
              <Button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 text-lg rounded-full">
                Visit Our Bakery
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/Image18.jpg?height=600&width=600"
                alt="Our bakery interior"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Makes Us Special</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence goes beyond just baking. It's about creating experiences and memories that
              last a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <value.icon className="w-16 h-16 text-pink-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-200 text-pink-800">Meet Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">The Artists Behind the Magic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of bakers and decorators bring years of experience and endless creativity to every
              creation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={member.image || "/Image22.jpg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-pink-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Journey</h2>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Beginning (2015)</h3>
                <p className="text-gray-600 leading-relaxed">
                  It all started in Sarah's home kitchen, where she would bake cakes for friends and family. Word spread
                  quickly about her incredible creations, and soon she was taking orders from neighbors and local
                  events.
                </p>
              </div>
              <Image
                src="/Image24.jpg?height=300&width=400"
                alt="Home kitchen beginnings"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="/Image26.jpg?height=300&width=400"
                alt="First bakery location"
                width={400}
                height={300}
                className="rounded-lg shadow-lg md:order-first"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Opening Our Doors (2017)</h3>
                <p className="text-gray-600 leading-relaxed">
                  With growing demand and a dream to share our passion with more people, we opened our first bakery
                  location. The cozy space became a gathering place for cake lovers and celebration planners.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Growing Our Family (2020-Present)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, Sweet Delights has grown into a team of passionate bakers and decorators. We've expanded our
                  offerings while maintaining the same commitment to quality and personal touch that started it all.
                </p>
              </div>
              <Image
                src="/Image18.jpg?height=300&width=400"
                alt="Current bakery team"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-xl mb-8 opacity-90">Let us create something special for your next celebration</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
            >
              Visit Our Bakery
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg rounded-full bg-transparent"
            >
              Order Custom Cake
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
