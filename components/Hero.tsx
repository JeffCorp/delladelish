import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-[url('/images/bg.png')] overflow-hidden top-[-80px] pt-[70px] pb-[50px] md:pb-[0px]" style={{ backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-black opacity-[85%]"></div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 z-10 relative">
            {/* Special Offer Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-food-red text-white px-6 py-3 rounded-full shadow-sm">
            <Gift className="h-5 w-5" />
            <span className="font-bold">FREE DELIVERY on your first order!</span>
          </div> */}

            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-extrabold text-gray-900 uppercase">
                <span className="text-[#FF7B00] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] block leading-tight lg:leading-[89px]">Craving</span>
                <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] block leading-tight lg:leading-[89px]">Something</span>
                <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] block leading-tight lg:leading-[89px] flex gap-[-10px]">
                  Delicious
                  <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] block leading-tight lg:leading-[89px] mt-[5px] md:mt-[5px]  ml-[-2%] md:ml-[-5%]">
                    <Image src="/images/qmark.png" alt="Arrow" width={100} height={100} className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-[100px] xl:h-[100px]" />
                  </span>
                </span>
              </h1>
              <p className="text-[10px] sm:text-[11px] text-white font-light uppercase" style={{ letterSpacing: '0.34em' }}>A culinary experience of comfort and wellness</p>
              <p className="text-white leading-relaxed font-normal w-full lg:w-[620px]">
                <span className="text-white text-[13px] sm:text-[15px] font-light">Fresh, healthy meals crafted by expert chefs and delivered to your door in 30 minutes or less.</span>
                <span className="text-white text-[13px] sm:text-[15px] font-bold"> No cooking, no cleanup, just pure deliciousness!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="ghost" className="bg-food-red text-white hover:bg-food-red/90 !rounded-none px-6 sm:px-[43px] py-4 sm:py-[25px] w-full sm:w-auto text-sm sm:text-base">
                Order Now
              </Button>
              <Button variant="outline" className="font-bold !rounded-none border-white border-[1px] text-white bg-transparent px-6 sm:px-[43px] py-4 sm:py-[25px] w-full sm:w-auto text-sm sm:text-base">Get in touch</Button>
            </div>

            {/* Location and Search */}
            {/* <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-food-red" />
                <Input
                  placeholder="Enter your delivery address"
                  className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-food-red rounded-lg"
                />
              </div>
              <Button className="w-full h-14 bg-food-red hover:bg-food-red/90 text-xl font-bold rounded-lg shadow-sm">
                <Zap className="h-6 w-6 mr-2" />
                Find Amazing Food Near Me
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-food-red" />
                <span>30 min delivery</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-food-yellow" />
                <span>100% Fresh guarantee</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-food-green" />
                <span>No minimum order</span>
              </div>
            </div>
          </div> */}

            {/* Social Proof */}
            {/* <div className="flex items-center space-x-8 pt-4">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-food-red rounded-full border-2 border-white flex items-center justify-center text-white font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-food-yellow fill-current" />
                  <span className="font-bold text-white text-lg">4.9/5</span>
                </div>
                <span className="text-sm text-gray-600">from 10,000+ reviews</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-food-red" />
              <div>
                <div className="font-bold text-white text-lg">50k+</div>
                <span className="text-sm text-gray-600">Happy customers</span>
              </div>
            </div>
          </div> */}
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="min-h-[50vh] lg:min-h-[100vh] flex items-center justify-center">
              <Image
                src="/images/hero-bg.png"
                alt="Delicious healthy meals"
                width={594}
                height={100}
                className="shadow-sm h-[300px] w-[90vw] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[594px] object-cover object-center"
              />

              {/* Floating Elements */}
              {/* <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-food-red rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Kitchen</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-food-red text-white p-4 rounded-lg shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">30min</div>
                <div className="text-sm">or FREE!</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-6 bg-food-yellow text-white p-3 rounded-full shadow-sm">
              <ChefHat className="h-8 w-8" />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Hero;