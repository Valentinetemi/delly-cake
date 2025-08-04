import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Bakery",
      details: ["123 Baker Street", "Sweet City, SC 12345"],
      color: "text-pink-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-CAKE", "(555) 123-2253"],
      color: "text-orange-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@dellycakes.com", "orders@dellycakes.com"],
      color: "text-pink-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 7:00 AM - 8:00 PM", "Sunday: 8:00 AM - 6:00 PM"],
      color: "text-orange-500",
    },
  ]

  const services = [
    "Custom Birthday Cakes",
    "Wedding Cakes",
    "Corporate Events",
    "Cupcake Towers",
    "Cake Decorating Classes",
    "Seasonal Specialties",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-pink-100 text-pink-800 text-lg px-4 py-2">Get In Touch</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Let's Create Something <span className="text-pink-400">Sweet</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to make your celebration extra special? We'd love to hear about your vision and help bring it to life
            with our custom cakes and pastries.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <info.icon className={`w-12 h-12 ${info.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-pink-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        placeholder="Your first name"
                        className="border-gray-300 focus:border-pink-400 focus:ring-pink-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        placeholder="Your last name"
                        className="border-gray-300 focus:border-pink-400 focus:ring-pink-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-pink-400 focus:ring-pink-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="border-gray-300 focus:border-pink-400 focus:ring-pink-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                    <Input type="date" className="border-gray-300 focus:border-pink-400 focus:ring-pink-400" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:border-pink-400 focus:ring-pink-400">
                      <option>Select a service</option>
                      {services.map((service, index) => (
                        <option key={index}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Vision *</label>
                    <Textarea
                      placeholder="Describe your dream cake, event details, dietary restrictions, design preferences, or any special requests..."
                      rows={5}
                      className="border-gray-300 focus:border-pink-400 focus:ring-pink-400"
                    />
                  </div>

                  <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3 text-lg rounded-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Order */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-400 to-orange-400 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 mr-3" />
                    <h3 className="text-xl font-bold">Need Something Quickly?</h3>
                  </div>
                  <p className="mb-6 opacity-90">
                    For same-day orders or urgent requests, give us a call directly. We'll do our best to accommodate
                    your needs!
                  </p>
                  <Button variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100 rounded-full">
                    Call (555) 123-CAKE
                  </Button>
                </CardContent>
              </Card>

              {/* Consultation */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-pink-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Free Consultation</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Planning a wedding or large event? Schedule a free consultation to discuss your vision, taste our
                    samples, and get a detailed quote.
                  </p>
                  <Button
                    variant="outline"
                    className="border-pink-400 text-pink-600 hover:bg-pink-50 rounded-full bg-transparent"
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Services List */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Our Services</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                        <span className="text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location Map Placeholder */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Find Us Here</h4>
                      <p className="text-gray-600">123 Baker Street, Sweet City, SC 12345</p>
                      <Button
                        variant="outline"
                        className="mt-4 border-pink-400 text-pink-600 hover:bg-pink-50 bg-transparent"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">How far in advance should I place my order?</h4>
                <p className="text-gray-600">
                  For custom cakes, we recommend 1-2 weeks notice. Wedding cakes require 4-6 weeks. However, we can
                  often accommodate shorter timelines - just give us a call!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">Do you offer delivery?</h4>
                <p className="text-gray-600">
                  Yes! We offer delivery within a 25-mile radius. Delivery fees vary based on distance and cake
                  complexity. We also offer setup services for wedding and event cakes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-2">Can you accommodate dietary restrictions?</h4>
                <p className="text-gray-600">
                  We offer gluten-free, vegan, sugar-free, and other specialty options. Please mention any dietary needs
                  when placing your order.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
