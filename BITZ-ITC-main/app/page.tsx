import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, CheckCircle, ChevronRight, Code, Database, Globe, Headphones, LayoutGrid, Mail, MapPin, MessageSquare, Phone, Server, Shield, Users } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { DirectionButtons } from "@/components/direction-buttons"
import { ContactButtons } from "@/components/contact-buttons"

export default function Home() {
  const address = 'Prime Cartons, Mombasa Road, Kenya, next to Nice and Lovely (Dongpeng Building)'
  const phoneNumber = '0110952788'
  const emailAddress = 'newtonbryan12428@gmail.com'

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white dark:bg-dark-gradient">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  About Us
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Founded in 2007 in Nairobi, BITZ IT Consulting has grown into a leading technology partner across East Africa, with a strong presence in Kenya, Uganda, Tanzania, Lesotho, and Rwanda. Our expertise spans custom software development, IT infrastructure, and digital transformation solutions, delivering impactful results for government agencies and international organizations, including UNICEF and the World Bank.
                </p>
              </div>
              <div className="flex justify-center">
                <Carousel className="w-full max-w-[500px]">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <Code className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                     <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <Database className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                     <CarouselItem>
                      <div className="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <Server className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                   <CarouselPrevious className="bg-white/20 hover:bg-white/30 text-white border-none" />
                  <CarouselNext className="bg-white/20 hover:bg-white/30 text-white border-none" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 bg-white dark:bg-navy-900 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Our Services</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Comprehensive Technology Solutions
                </h2>
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px]">
                  From AI development to full-stack solutions, we deliver cutting-edge technology services
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-ios rounded-3xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                    <Code className="h-10 w-10 text-navy dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">AI & Machine Learning</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Advanced AI solutions and machine learning models for business automation and intelligence.
                  </p>
                  <Link
                    href="/services/ai"
                    className="text-navy dark:text-white flex items-center font-semibold text-lg"
                  >
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-ios rounded-3xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                    <Database className="h-10 w-10 text-navy dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Full-Stack Development</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Expert frontend and backend development services for scalable applications.
                  </p>
                  <Link
                    href="/services/development"
                    className="text-navy dark:text-white flex items-center font-semibold text-lg"
                  >
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-ios rounded-3xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                    <Globe className="h-10 w-10 text-navy dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Digital Solutions</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Comprehensive digital services including social media and online presence management.
                  </p>
                  <Link
                    href="/services/digital"
                    className="text-navy dark:text-white flex items-center font-semibold text-lg"
                  >
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="solutions" className="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">
                  Innovative Tech Solutions
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Transformational Support to Technology Solutions
                </h2>
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px]">
                  Explore our cutting-edge solutions designed to transform your business operations
                </p>
              </div>
            </div>

            <Tabs defaultValue="cloud" className="mt-12">
              <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex rounded-full p-1 bg-gray-100 dark:bg-navy/20">
                <TabsTrigger
                  value="cloud"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-ios text-base"
                >
                  Cloud Solutions
                </TabsTrigger>
                <TabsTrigger
                  value="data"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-ios text-base"
                >
                  Data Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="ai"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-ios text-base"
                >
                  AI & Automation
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cloud" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">Cloud Infrastructure Solutions</h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Our cloud infrastructure solutions provide scalable, secure, and reliable environments for your
                      applications and data.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Scalable cloud architecture design</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Migration services to cloud platforms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Managed cloud services and support</span>
                      </li>
                    </ul>
                    <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 mt-4">
                      Learn More
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Database className="h-24 w-24 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="data" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">Data Analytics & Business Intelligence</h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Transform your data into actionable insights with our comprehensive analytics solutions.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Advanced data visualization</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Predictive analytics implementation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Custom reporting solutions</span>
                      </li>
                    </ul>
                    <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 mt-4">
                      Learn More
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BarChart3 className="h-24 w-24 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ai" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">AI & Automation Solutions</h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Leverage the power of artificial intelligence and automation to streamline operations and drive
                      innovation.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Process automation implementation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">AI-powered decision support systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-lg">Machine learning model development</span>
                      </li>
                    </ul>
                    <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 mt-4">
                      Learn More
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Shield className="h-24 w-24 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 bg-white dark:bg-navy-900 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Our Products</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Explore Our Software Products
                </h2>
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px]">
                  Discover our off-the-shelf and customizable software solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-ios rounded-3xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                    <LayoutGrid className="h-10 w-10 text-navy dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Product Name 1</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Brief description of the product and its benefits.
                  </p>
                  <Link href="#" className="text-navy dark:text-white flex items-center font-semibold text-lg">
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-3xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                    <LayoutGrid className="h-10 w-10 text-navy dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Product Name 2</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Brief description of the product and its benefits.
                  </p>
                  <Link href="#" className="text-navy dark:text-white flex items-center font-semibold text-lg">
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-3xl hover:shadow-ios-lg transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-navy/20">
                    <LayoutGrid className="h-10 w-10 text-navy dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Product Name 3</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    Brief description of the product and its benefits.
                  </p>
                  <Link href="#" className="text-navy dark:text-white flex items-center font-semibold text-lg">
                    Learn more <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-navy-900 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Our Projects</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Explore Our Projects
                </h2>
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px]">
                  Discover how we've helped businesses across various industries achieve their technology goals
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border-0 shadow-ios rounded-3xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <img
                    src="/placeholder.svg?height=300&width=600&text=OpenCHS Project"
                    alt="OpenCHS Project"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-3">
                    <Badge className="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">
                      Child Protection
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Transforming Child Protection with OpenCHS</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                    Seamless transition to cloud infrastructure resulting in 30% cost reduction and improved security.
                  </p>
                  <Link
                    href="/projects/openchs"
                    className="text-navy dark:text-white flex items-center font-semibold text-lg"
                  >
                    Read more <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-ios rounded-3xl overflow-hidden hover:shadow-ios-lg transition-all duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Manufacturing Project"
                    alt="Manufacturing Project"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-3">
                    <Badge className="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">
                      Manufacturing
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Digital Transformation for Manufacturing Company</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                    How we helped a leading manufacturer streamline operations and increase efficiency by 40%.
                  </p>
                  <Link
                    href="/projects/manufacturing-digital-transformation"
                    className="text-navy dark:text-white flex items-center font-semibold text-lg"
                  >
                    Read more <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-10">
              <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-navy text-white animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm">
                  Client Success
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Discover the impact of our services on client businesses
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 p-6 rounded-3xl">
                    <div className="text-3xl md:text-4xl font-bold text-white">75%</div>
                    <p className="text-base md:text-lg text-gray-300">Increase in operational efficiency</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-3xl">
                    <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
                    <p className="text-base md:text-lg text-gray-300">Client satisfaction rate</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 p-6 rounded-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Client Testimonial</h3>
                      <p className="text-base text-gray-300">Financial Services Company</p>
                    </div>
                  </div>
                  <p className="italic text-lg text-gray-300">
                    "BITZ-itc transformed our IT infrastructure, resulting in a 40% reduction in downtime and
                    significant cost savings. Their team's expertise and dedication exceeded our expectations."
                  </p>
                  <div className="mt-4 text-base text-gray-400">- John Smith, CTO</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-900 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Get In Touch</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Contact Us</h2>
                <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
                  Have questions or ready to start your next project? Reach out to our team.
                </p>
                <div className="grid gap-6 mt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-navy/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-navy dark:text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        {address}
                      </p>
                      <DirectionButtons address={address} />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-navy/20 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-navy dark:text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-base text-gray-500 dark:text-gray-400">{emailAddress}</p>
                      <ContactButtons email={emailAddress} phone={phoneNumber} />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-navy/20 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-navy dark:text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-base text-gray-500 dark:text-gray-400">{phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-ios rounded-3xl">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Send us a message</h3>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-base font-medium">
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="w-full p-3 text-base border rounded-full"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-base font-medium">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="w-full p-3 text-base border rounded-full"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-base font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-3 text-base border rounded-full"
                        placeholder="john.smith@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-base font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-4 text-base border rounded-3xl min-h-[150px]"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <Button className="w-full bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}