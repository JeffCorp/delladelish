"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Clock, Filter, Plus, Search, Star, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"

const allDishes = [
  // Savory Delights
  {
    id: "mediterranean-chicken",
    name: "Mediterranean Chicken",
    description: "Herb-crusted chicken breast with roasted vegetables and tzatziki sauce",
    price: 16.99,
    rating: 4.9,
    reviews: 89,
    time: "20-30 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Chef's Choice", "High Protein"],
    category: "savory",
    dietary: ["gluten-free"],
    spiceLevel: "mild",
  },
  {
    id: "thai-green-curry",
    name: "Thai Green Curry",
    description: "Aromatic coconut curry with vegetables and jasmine rice",
    price: 15.99,
    rating: 4.8,
    reviews: 92,
    time: "25-35 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Spicy", "Popular"],
    category: "savory",
    dietary: ["vegetarian", "gluten-free"],
    spiceLevel: "hot",
  },
  {
    id: "beef-bulgogi-bowl",
    name: "Beef Bulgogi Bowl",
    description: "Korean-style marinated beef with steamed rice and kimchi",
    price: 19.99,
    rating: 4.7,
    reviews: 156,
    time: "30-40 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Korean", "Comfort Food"],
    category: "savory",
    dietary: [],
    spiceLevel: "medium",
  },
  {
    id: "cajun-jambalaya",
    name: "Cajun Jambalaya",
    description: "Spicy rice dish with shrimp, sausage, and chicken",
    price: 18.99,
    rating: 4.6,
    reviews: 108,
    time: "25-35 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Spicy", "Cajun"],
    category: "savory",
    dietary: [],
    spiceLevel: "hot",
  },
  // Light & Fresh
  {
    id: "quinoa-power-salad",
    name: "Quinoa Power Salad",
    description: "Nutrient-packed salad with quinoa, kale, nuts, and superfood dressing",
    price: 13.99,
    rating: 4.5,
    reviews: 67,
    time: "10-15 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Superfood", "Gluten-Free"],
    category: "light",
    dietary: ["vegetarian", "gluten-free", "vegan"],
    spiceLevel: "none",
  },
  {
    id: "greek-salad-bowl",
    name: "Greek Salad Bowl",
    description: "Fresh vegetables, olives, feta cheese with olive oil dressing",
    price: 12.99,
    rating: 4.6,
    reviews: 84,
    time: "5-10 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Mediterranean", "Fresh"],
    category: "light",
    dietary: ["vegetarian", "gluten-free"],
    spiceLevel: "none",
  },
  {
    id: "asian-cucumber-salad",
    name: "Asian Cucumber Salad",
    description: "Crisp cucumbers with sesame dressing and toasted seeds",
    price: 9.99,
    rating: 4.4,
    reviews: 45,
    time: "5-10 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Light", "Refreshing"],
    category: "light",
    dietary: ["vegan", "gluten-free"],
    spiceLevel: "mild",
  },
  // Wholesome Balanced
  {
    id: "grilled-salmon-bowl",
    name: "Grilled Salmon Bowl",
    description: "Fresh Atlantic salmon with quinoa, roasted vegetables, and lemon herb dressing",
    price: 18.99,
    rating: 4.8,
    reviews: 124,
    time: "25-35 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Popular", "Heart-Healthy"],
    category: "balanced",
    dietary: ["gluten-free"],
    spiceLevel: "none",
  },
  {
    id: "turkey-meatballs",
    name: "Turkey Meatballs",
    description: "Lean turkey meatballs with marinara sauce and zucchini noodles",
    price: 17.99,
    rating: 4.7,
    reviews: 108,
    time: "20-30 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["High Protein", "Low Carb"],
    category: "balanced",
    dietary: ["gluten-free"],
    spiceLevel: "mild",
  },
  {
    id: "chicken-quinoa-bowl",
    name: "Chicken Quinoa Bowl",
    description: "Grilled chicken with quinoa, roasted vegetables, and tahini dressing",
    price: 16.99,
    rating: 4.6,
    reviews: 95,
    time: "20-30 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Balanced", "Complete Meal"],
    category: "balanced",
    dietary: ["gluten-free"],
    spiceLevel: "mild",
  },
  // Vegetarian
  {
    id: "vegan-buddha-bowl",
    name: "Vegan Buddha Bowl",
    description: "Colorful mix of quinoa, chickpeas, avocado, and seasonal vegetables",
    price: 14.99,
    rating: 4.7,
    reviews: 156,
    time: "15-25 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Vegan", "Light"],
    category: "vegetarian",
    dietary: ["vegan", "gluten-free"],
    spiceLevel: "none",
  },
  {
    id: "sweet-potato-curry",
    name: "Sweet Potato Curry",
    description: "Creamy coconut curry with roasted sweet potatoes and spinach",
    price: 14.99,
    rating: 4.6,
    reviews: 85,
    time: "25-35 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Vegan", "Comfort Food"],
    category: "vegetarian",
    dietary: ["vegan", "gluten-free"],
    spiceLevel: "medium",
  },
  // Keto-Friendly
  {
    id: "keto-beef-stir-fry",
    name: "Keto Beef Stir-fry",
    description: "Tender beef strips with low-carb vegetables in savory sauce",
    price: 19.99,
    rating: 4.6,
    reviews: 73,
    time: "30-40 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Keto", "High Protein"],
    category: "keto",
    dietary: ["keto", "gluten-free"],
    spiceLevel: "mild",
  },
  {
    id: "keto-chicken-avocado",
    name: "Keto Chicken Avocado Bowl",
    description: "Grilled chicken with avocado, cheese, and leafy greens",
    price: 17.99,
    rating: 4.5,
    reviews: 62,
    time: "15-25 min",
    image: "/placeholder.svg?height=200&width=300",
    badges: ["Keto", "Low Carb"],
    category: "keto",
    dietary: ["keto", "gluten-free"],
    spiceLevel: "none",
  },
]

const categories = [
  { id: "all", name: "All", count: allDishes.length },
  { id: "savory", name: "Savory Delights", count: allDishes.filter((d) => d.category === "savory").length },
  { id: "light", name: "Light & Fresh", count: allDishes.filter((d) => d.category === "light").length },
  { id: "balanced", name: "Wholesome Balanced", count: allDishes.filter((d) => d.category === "balanced").length },
  { id: "vegetarian", name: "Vegetarian", count: allDishes.filter((d) => d.category === "vegetarian").length },
  { id: "keto", name: "Keto-Friendly", count: allDishes.filter((d) => d.category === "keto").length },
]

const dietaryFilters = ["vegetarian", "vegan", "gluten-free", "keto"]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(false)

  const filteredDishes = useMemo(() => {
    let filtered = allDishes

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((dish) => dish.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (dish) =>
          dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dish.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by dietary preferences
    if (selectedDietary.length > 0) {
      filtered = filtered.filter((dish) => selectedDietary.every((diet) => dish.dietary.includes(diet)))
    }

    // Sort dishes
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "time":
        filtered.sort((a, b) => Number.parseInt(a.time) - Number.parseInt(b.time))
        break
      default: // popular
        filtered.sort((a, b) => b.reviews - a.reviews)
    }

    return filtered
  }, [selectedCategory, searchQuery, selectedDietary, sortBy])

  const toggleDietaryFilter = (filter: string) => {
    setSelectedDietary((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <div className="min-h-screen bg-white font-body">

      {/* Search and Filters */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-food-red" />
                <Input
                  placeholder="Search for dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-food-red bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 border-gray-300 text-food-red hover:bg-food-red hover:text-white shadow-sm"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {selectedDietary.length > 0 && (
                    <Badge className="bg-food-red text-white ml-2">{selectedDietary.length}</Badge>
                  )}
                </Button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:border-food-red bg-white text-gray-900 shadow-sm"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="time">Fastest Delivery</option>
                </select>
              </div>
            </div>
            {/* Advanced Filters */}
            {showFilters && (
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 space-y-4">
                <div>
                  <h3 className="font-semibold text-food-red mb-3 text-lg">Dietary Preferences</h3>
                  <div className="flex flex-wrap gap-2">
                    {dietaryFilters.map((filter) => (
                      <Button
                        key={filter}
                        variant={selectedDietary.includes(filter) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleDietaryFilter(filter)}
                        className={selectedDietary.includes(filter) ? "bg-food-red text-white" : "border-gray-300 text-food-red hover:bg-food-red hover:text-white"}
                      >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        {selectedDietary.includes(filter) && <X className="h-3 w-3 ml-1" />}
                      </Button>
                    ))}
                  </div>
                </div>
                {selectedDietary.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={() => setSelectedDietary([])} className="text-gray-500 hover:text-food-red">
                    Clear all filters
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="bg-white py-6 border-b border-gray-200 sticky top-[73px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap pb-3 border-b-2 transition-colors flex items-center space-x-2 ${selectedCategory === category.id
                  ? "border-food-red text-food-red font-semibold"
                  : "border-transparent text-gray-600 hover:text-food-red"
                  }`}
              >
                <span className="text-lg">{category.name}</span>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-food-red border border-food-red">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-lg">
              Showing {filteredDishes.length} of {allDishes.length} dishes
              {selectedCategory !== "all" && (
                <span className="ml-2">
                  in <span className="font-semibold text-food-red">{categories.find((c) => c.id === selectedCategory)?.name}</span>
                </span>
              )}
            </p>
            {(searchQuery || selectedDietary.length > 0) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedDietary([])
                  setSelectedCategory("all")
                }}
                className="text-gray-500 hover:text-food-red"
              >
                Clear all
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredDishes.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🍽️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No dishes found</h3>
              <p className="text-gray-600 mb-8 text-lg">Try adjusting your filters or search terms</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedDietary([])
                  setSelectedCategory("all")
                }}
                className="bg-food-red hover:bg-food-red/90 text-white px-8 py-4 text-lg font-bold shadow-lg"
              >
                View All Dishes
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredDishes.map((dish, index) => (
                <Link key={index} href={`/dish/${dish.id}`}>
                  <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border border-gray-200 overflow-hidden group">
                    <div className="relative">
                      <Image
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.name}
                        width={300}
                        height={200}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {dish.badges.map((badge, badgeIndex) => (
                          <Badge
                            key={badgeIndex}
                            className={`text-xs rounded-full px-3 py-1 font-bold shadow-lg ${badge === "Popular" || badge === "Chef's Choice"
                              ? "bg-food-red text-white"
                              : badge === "Spicy"
                                ? "bg-red-600 text-white"
                                : badge === "Vegan"
                                  ? "bg-green-600 text-white"
                                  : "bg-white text-food-red border border-food-red"
                              }`}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        className="absolute bottom-3 right-3 bg-food-red text-white hover:bg-food-red/90 shadow-lg"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-food-red transition-colors line-clamp-1">{dish.name}</h3>
                        <span className="font-bold text-food-red text-xl">${dish.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-600 line-clamp-2">{dish.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-food-red fill-current" />
                          <span className="font-semibold text-gray-900">{dish.rating}</span>
                          <span className="text-gray-500">({dish.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Clock className="h-5 w-5" />
                          <span className="text-sm">{dish.time}</span>
                        </div>
                      </div>
                      {dish.dietary.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {dish.dietary.slice(0, 2).map((diet, dietIndex) => (
                            <Badge key={dietIndex} variant="outline" className="text-xs border-food-red text-food-red bg-white">
                              {diet}
                            </Badge>
                          ))}
                          {dish.dietary.length > 2 && (
                            <Badge variant="outline" className="text-xs border-food-red text-food-red bg-white">
                              +{dish.dietary.length - 2}
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
