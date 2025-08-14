import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Calendar, Check, ChefHat, Dumbbell, Heart, Shield, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MealPlansPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-body">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-primary text-white px-4 py-2 text-lg">Personalized Nutrition</Badge>
            <h1 className="text-5xl font-food font-bold text-gray-900">
              Meal Plans Tailored to Your <span className="text-primary">Health Goals</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're managing a health condition, pursuing fitness goals, or simply want to eat better, our
              expert nutritionists have crafted meal plans specifically for your needs.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium">4.9/5 Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-avocado" />
                <span className="font-medium">25k+ Lives Changed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <span className="font-medium">Flexible Duration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Management Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-food font-bold text-gray-900 mb-4">Weight Management</h2>
            <p className="text-xl text-gray-600">Achieve your ideal weight with scientifically-backed meal plans</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Weight Loss Plan</h3>
                      <p className="text-gray-600">Sustainable weight loss through balanced nutrition</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>1,200-1,500 calories per day</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>High protein, low carb focus</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>3 meals + 2 healthy snacks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Weekly nutritionist consultation</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-3xl font-bold text-primary">$89</span>
                      <span className="text-gray-600">/week</span>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">Start Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Dumbbell className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Weight Gain Plan</h3>
                      <p className="text-gray-600">Healthy weight gain with muscle building focus</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>2,500-3,000 calories per day</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>High protein, complex carbs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>4 meals + 3 protein-rich snacks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Workout nutrition guidance</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-3xl font-bold text-secondary">$99</span>
                      <span className="text-gray-600">/week</span>
                    </div>
                    <Button className="bg-secondary hover:bg-secondary/90">Start Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Medical Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-food font-bold text-gray-900 mb-4">Medical Condition Support</h2>
            <p className="text-xl text-gray-600">Specialized nutrition for health management</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Diabetes Management",
                description: "Blood sugar friendly meals with controlled carbohydrates",
                icon: "🩺",
                price: "$95",
                features: ["Low glycemic index", "Portion controlled", "Fiber-rich meals"],
              },
              {
                title: "Heart Health",
                description: "Low sodium, heart-healthy meals for cardiovascular wellness",
                icon: "❤️",
                price: "$92",
                features: ["Low sodium", "Omega-3 rich", "DASH diet principles"],
              },
              {
                title: "Stroke Recovery",
                description: "Nutrient-dense meals to support recovery and brain health",
                icon: "🧠",
                price: "$98",
                features: ["Brain-boosting nutrients", "Easy to swallow", "Anti-inflammatory"],
              },
              {
                title: "Hypertension",
                description: "Blood pressure friendly meals with natural ingredients",
                icon: "🫀",
                price: "$90",
                features: ["Low sodium", "Potassium rich", "Natural herbs"],
              },
            ].map((plan, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{plan.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900">{plan.title}</h3>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-2xl font-bold text-primary">{plan.price}</div>
                    <div className="text-sm text-gray-600 mb-3">/week</div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life Stages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-food font-bold text-gray-900 mb-4">Life Stage Nutrition</h2>
            <p className="text-xl text-gray-600">Tailored nutrition for every stage of life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Kids nutrition"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-corn text-white">Ages 5-17</Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-corn" />
                  <h3 className="text-xl font-bold text-gray-900">Kids Brain Food</h3>
                </div>
                <p className="text-gray-600">Nutrition that supports growing minds and bodies</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Brain-boosting nutrients</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Kid-friendly flavors</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Balanced macronutrients</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-2xl font-bold text-corn">$75</span>
                    <span className="text-gray-600">/week</span>
                  </div>
                  <Button className="bg-corn hover:bg-corn/90 text-white">Start Plan</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Elderly nutrition"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-avocado text-white">65+ Years</Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-avocado" />
                  <h3 className="text-xl font-bold text-gray-900">Elderly Nutrition</h3>
                </div>
                <p className="text-gray-600">Gentle, nutritious meals for golden years wellness</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Easy to digest</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Bone health support</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Heart-healthy options</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-2xl font-bold text-avocado">$85</span>
                    <span className="text-gray-600">/week</span>
                  </div>
                  <Button className="bg-avocado hover:bg-avocado/90 text-white">Start Plan</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Hormonal health"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">All Ages</Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900">Hormonal Health</h3>
                </div>
                <p className="text-gray-600">Balance hormones naturally through nutrition</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Hormone-balancing foods</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Anti-inflammatory</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Stress-reducing nutrients</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">$88</span>
                    <span className="text-gray-600">/week</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">Start Plan</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-food font-bold">Ready to Transform Your Health?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get a personalized meal plan consultation with our certified nutritionists
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              View All Plans
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
              <h3 className="text-lg font-semibold">Meal Plans</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Weight Management
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Medical Conditions
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Life Stages
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Nutritionist Chat
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Plan Customization
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Progress Tracking
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
                  Our Nutritionists
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Success Stories
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
