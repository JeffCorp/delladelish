import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Heart, Leaf, Star, Shield, Truck, Users, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DeladelishLanding() {
  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-2xl font-food font-bold text-primary">Dela Delish</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#menu" className="text-gray-700 hover:text-primary transition-colors">
                Menu
              </Link>
              <Link href="#meal-plans" className="text-gray-700 hover:text-primary transition-colors">
                Meal Plans
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Login
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Order Now</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-white to-lettuce/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-secondary text-white px-4 py-2 text-sm font-medium">Premium Quality Food</Badge>
                <h1 className="text-5xl lg:text-6xl font-food font-bold text-gray-900 leading-tight">
                  Dela <span className="text-primary">Delish</span>
                </h1>
                <p className="text-xl text-secondary font-medium italic">
                  A culinary experience of comfort and wellness
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Great food should be both exquisite and nourishing. We craft dishes that cater to diverse dietary
                  needs without compromising on taste.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  Explore Menu
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg"
                >
                  View Meal Plans
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-corn fill-current" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-avocado" />
                  <span className="text-sm font-medium">10k+ Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-tomato/10 to-avocado/10 rounded-3xl p-8">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Delicious healthy meal"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-full shadow-lg">
                  <ChefHat className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-avocado text-white px-4 py-2">Our Story</Badge>
              <h2 className="text-4xl font-food font-bold text-gray-900">Crafted with Love, Served with Excellence</h2>
            </div>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                At Dela Delish, we believe great food should be both exquisite and nourishing. Inspired by the warmth of
                home-cooked meals and the sophistication of restaurant-quality flavors, we craft dishes that cater to
                diverse dietary needs without compromising on taste.
              </p>
              <p>
                Whether you're indulging in a rich, savory delight, enjoying a light dish or savoring a wholesome,
                balanced meal; every bite is made with love, fresh ingredients, and a touch of culinary excellence.
              </p>
              <p className="text-primary font-medium">
                With Dela Delish, you don't just eat—you experience food at its finest, thoughtfully tailored to your
                well-being, right from the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-lettuce/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-tomato text-white px-4 py-2">Why Choose Us</Badge>
            <h2 className="text-4xl font-food font-bold text-gray-900">Excellence in Every Bite</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every dish crafted with passion and care",
                color: "text-primary",
              },
              {
                icon: Leaf,
                title: "Fresh Ingredients",
                description: "Premium quality, locally sourced ingredients",
                color: "text-avocado",
              },
              {
                icon: Shield,
                title: "Dietary Friendly",
                description: "Catering to all dietary needs and preferences",
                color: "text-secondary",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Fresh meals delivered right to your door",
                color: "text-tomato",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-full bg-gray-50 ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-food font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-carrot text-white px-4 py-2">Our Menu</Badge>
            <h2 className="text-4xl font-food font-bold text-gray-900">Delicious Categories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Savory Delights",
                description: "Rich, flavorful dishes that satisfy your cravings",
                image: "/placeholder.svg?height=300&width=400",
                color: "from-primary/10 to-tomato/10",
              },
              {
                title: "Light & Fresh",
                description: "Refreshing meals perfect for any time of day",
                image: "/placeholder.svg?height=300&width=400",
                color: "from-lettuce/10 to-avocado/10",
              },
              {
                title: "Wholesome Balanced",
                description: "Nutritionally complete meals for optimal wellness",
                image: "/placeholder.svg?height=300&width=400",
                color: "from-secondary/10 to-corn/10",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${category.color} relative`}>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-food font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Explore Menu
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-tomato text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-food font-bold">Ready to Experience Culinary Excellence?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Dela Delish their go-to choice for premium, healthy
              meals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
              Order Your First Meal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              View Meal Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ChefHat className="h-8 w-8 text-primary" />
                <span className="text-2xl font-food font-bold">Dela Delish</span>
              </div>
              <p className="text-gray-400">
                A culinary experience of comfort and wellness, delivered to your doorstep.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Meal Plans
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Delivery
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Catering
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Nutrition Advice
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Bulk Orders
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>hello@deladelish.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>123 Culinary Street</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dela Delish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
