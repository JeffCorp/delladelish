import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Heart, Users, Award, Leaf, Shield, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-2xl font-food font-bold text-primary">Dela Delish</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/menu" className="text-gray-700 hover:text-primary transition-colors">
                Menu
              </Link>
              <Link href="/meal-plans" className="text-gray-700 hover:text-primary transition-colors">
                Meal Plans
              </Link>
              <Link href="/about" className="text-primary font-medium">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700">
                <Link href="/login">Sign in</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Order Now</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-lettuce/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary text-white px-4 py-2">Our Story</Badge>
                <h1 className="text-5xl font-food font-bold text-gray-900 leading-tight">
                  Crafted with Love, <span className="text-primary">Served with Excellence</span>
                </h1>
                <p className="text-xl text-secondary font-medium italic">
                  A culinary experience of comfort and wellness
                </p>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50k+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-avocado">5</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our kitchen"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Best Healthy Food 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-food font-bold text-gray-900">Our Brand Story</h2>
              <p className="text-xl text-gray-600">The journey that started with a simple belief</p>
            </div>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                At Dela Delish, we believe great food should be both exquisite and nourishing. Inspired by the warmth of
                home-cooked meals and the sophistication of restaurant-quality flavors, we craft dishes that cater to
                diverse dietary needs without compromising on taste.
              </p>
              <p className="text-lg">
                Whether you're indulging in a rich, savory delight, enjoying a light dish or savoring a wholesome,
                balanced meal; every bite is made with love, fresh ingredients, and a touch of culinary excellence.
              </p>
              <p className="text-lg font-medium text-primary">
                With Dela Delish, you don't just eat—you experience food at its finest, thoughtfully tailored to your
                well-being, right from the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-food font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every dish is crafted with passion, care, and attention to detail",
                color: "text-primary",
              },
              {
                icon: Leaf,
                title: "Fresh & Natural",
                description: "We source the finest, freshest ingredients from trusted local suppliers",
                color: "text-avocado",
              },
              {
                icon: Shield,
                title: "Quality Promise",
                description: "100% satisfaction guarantee with every meal we deliver",
                color: "text-secondary",
              },
              {
                icon: Users,
                title: "Community First",
                description: "Building a healthier community, one meal at a time",
                color: "text-tomato",
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-full bg-gray-50 ${value.color}`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-food font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Kitchen */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-avocado text-white px-4 py-2">Our Kitchen</Badge>
                <h2 className="text-4xl font-food font-bold text-gray-900">Where Magic Happens</h2>
                <p className="text-xl text-gray-600">
                  Step inside our state-of-the-art kitchen where culinary artistry meets nutritional science.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fresh Daily Preparation</h3>
                    <p className="text-gray-600">All meals are prepared fresh daily using the finest ingredients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Food Safety Standards</h3>
                    <p className="text-gray-600">HACCP certified kitchen with the highest food safety protocols</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-avocado/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="h-4 w-4 text-avocado" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sustainable Practices</h3>
                    <p className="text-gray-600">Eco-friendly packaging and zero-waste cooking methods</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our professional kitchen"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-food font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your meals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Chef Maria Rodriguez",
                role: "Executive Chef",
                image: "/placeholder.svg?height=300&width=300",
                bio: "15+ years of culinary excellence with expertise in healthy cuisine",
              },
              {
                name: "Dr. James Wilson",
                role: "Head Nutritionist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "PhD in Nutrition Science, specializing in therapeutic meal planning",
              },
              {
                name: "Sarah Chen",
                role: "Quality Manager",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Ensures every meal meets our highest standards of quality and safety",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-food font-bold">Our Quality Promise</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're committed to delivering exceptional quality in every aspect of your dining experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">100% Satisfaction</h3>
              <p className="opacity-90">Not happy? We'll make it right or refund your money</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">30-Minute Guarantee</h3>
              <p className="opacity-90">Fresh meals delivered in 30 minutes or your next meal is free</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Food Safety First</h3>
              <p className="opacity-90">HACCP certified kitchen with rigorous safety protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-food font-bold text-gray-900">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Dela Delish their trusted choice for healthy,
              delicious meals
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
              Order Your First Meal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              View Our Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ChefHat className="h-8 w-8 text-primary" />
                <span className="text-2xl font-food font-bold">Dela Delish</span>
              </div>
              <p className="text-gray-400">A culinary experience of comfort and wellness</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-primary">
                  About Us
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Press
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <div className="space-y-2">
                <Link href="/menu" className="block text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
                <Link href="/meal-plans" className="block text-gray-400 hover:text-white transition-colors">
                  Meal Plans
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Catering
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Corporate Plans
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Track Order
                </Link>
                <div className="text-primary font-bold">📞 1-800-DELISH</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dela Delish. All rights reserved. Made with ❤️ for food lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
