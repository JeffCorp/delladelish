import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Star, Clock, Minus, Plus, Heart, Share2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DishPage({ params }: { params: { slug: string } }) {
  // Mock data - in real app, fetch based on params.slug
  const dish = {
    id: "grilled-salmon-bowl",
    name: "Grilled Salmon Bowl",
    description:
      "Fresh Atlantic salmon grilled to perfection, served over a bed of fluffy quinoa with roasted seasonal vegetables, avocado slices, and our signature lemon herb dressing. This nutrient-dense meal is packed with omega-3 fatty acids, complete proteins, and essential vitamins.",
    price: 18.99,
    rating: 4.8,
    reviews: 124,
    time: "25-35 min",
    calories: 520,
    protein: "35g",
    carbs: "42g",
    fat: "22g",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    badges: ["Popular", "Heart-Healthy", "High Protein"],
    ingredients: [
      "Fresh Atlantic Salmon (6oz)",
      "Organic Quinoa",
      "Roasted Broccoli",
      "Cherry Tomatoes",
      "Avocado",
      "Mixed Greens",
      "Lemon Herb Dressing",
      "Olive Oil",
      "Sea Salt",
      "Black Pepper",
    ],
    allergens: ["Fish"],
    dietary: ["Gluten-Free", "Dairy-Free"],
  }

  return (
    <div className="min-h-screen bg-gray-50 font-body">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/menu" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Menu</span>
              </Link>
            </div>
            <Link href="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-2xl font-food font-bold text-primary">Dela Delish</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700">
                Sign in
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Cart (0)</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src={dish.images[0] || "/placeholder.svg"}
                alt={dish.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {dish.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className={`${
                      badge === "Popular"
                        ? "bg-primary text-white"
                        : badge === "Heart-Healthy"
                          ? "bg-avocado text-white"
                          : "bg-secondary text-white"
                    }`}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary" className="bg-white/90 text-gray-700 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/90 text-gray-700 hover:bg-white">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {dish.images.slice(1).map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${dish.name} ${index + 2}`}
                  width={200}
                  height={150}
                  className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-food font-bold text-gray-900">{dish.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{dish.rating}</span>
                  <span className="text-gray-500">({dish.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="h-5 w-5" />
                  <span>{dish.time}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{dish.description}</p>
            </div>

            {/* Nutrition Info */}
            <Card className="bg-cream/50">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Nutrition Facts</h3>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{dish.calories}</div>
                    <div className="text-sm text-gray-600">Calories</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-secondary">{dish.protein}</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-avocado">{dish.carbs}</div>
                    <div className="text-sm text-gray-600">Carbs</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-tomato">{dish.fat}</div>
                    <div className="text-sm text-gray-600">Fat</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dietary Info */}
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dietary Information</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.dietary.map((diet, index) => (
                    <Badge key={index} variant="outline" className="border-avocado text-avocado">
                      {diet}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contains Allergens</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.allergens.map((allergen, index) => (
                    <Badge key={index} variant="outline" className="border-tomato text-tomato">
                      {allergen}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Section */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${dish.price.toFixed(2)}</span>
                  <div className="flex items-center space-x-3">
                    <Button size="sm" variant="outline" className="h-10 w-10 p-0">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-medium w-8 text-center">1</span>
                    <Button size="sm" variant="outline" className="h-10 w-10 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                  Add to Cart - ${dish.price.toFixed(2)}
                </Button>
                <p className="text-sm text-gray-500 text-center">Free delivery on orders over $25</p>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Ingredients</h3>
              <div className="grid grid-cols-2 gap-2">
                {dish.ingredients.map((ingredient, index) => (
                  <div key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Mediterranean Chicken",
                price: "$16.99",
                rating: "4.9",
                time: "20-30 min",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Quinoa Power Salad",
                price: "$13.99",
                rating: "4.5",
                time: "10-15 min",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Turkey Meatballs",
                price: "$17.99",
                rating: "4.7",
                time: "20-30 min",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Thai Green Curry",
                price: "$15.99",
                rating: "4.8",
                time: "25-35 min",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer bg-white">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <h3 className="text-lg font-semibold">Menu</h3>
              <div className="space-y-2">
                <Link href="/menu/savory" className="block text-gray-400 hover:text-white transition-colors">
                  Savory Delights
                </Link>
                <Link href="/menu/light" className="block text-gray-400 hover:text-white transition-colors">
                  Light & Fresh
                </Link>
                <Link href="/menu/balanced" className="block text-gray-400 hover:text-white transition-colors">
                  Wholesome Balanced
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
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Press
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dela Delish. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
