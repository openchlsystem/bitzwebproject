import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight, Code, Database, Globe, Headphones, Mail, MessageSquare, Server, Shield, Users, Brain, Cpu, Laptop, Smartphone, Cloud, LineChart } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Services() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white dark:bg-dark-gradient">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Our Services
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Comprehensive IT solutions tailored to your business needs
                </p>
              </div>
              <div className="flex justify-center">
                <Carousel className="w-full max-w-[500px]">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <Brain className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <Cpu className="h-24 w-24 text-white/80" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <Cloud className="h-24 w-24 text-white/80" />
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
                  {/* Placeholder for project image */}
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Project Image"
                    alt="Project Image"
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
                    Developing a robust platform for streamlined case management and improved data accessibility.
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
                   {/* Placeholder for project image */}
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Project Image"
                    alt="Project Image"
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

        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950 dark:bg-dark-gradient animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">
                  Our Services
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Comprehensive Solutions
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  End-to-end technology solutions powered by our expert teams
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <Brain className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">AI & Machine Learning</h3>
                      <p className="text-gray-500 dark:text-gray-400">Custom AI solutions and ML model development</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <Laptop className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Full-Stack Development</h3>
                      <p className="text-gray-500 dark:text-gray-400">End-to-end software development services</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-navy/10">
                      <Cloud className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Cloud & Deployment</h3>
                      <p className="text-gray-500 dark:text-gray-400">CI/CD and cloud infrastructure management</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <div className="text-white text-center space-y-4 p-8">
                          <h3 className="text-2xl font-bold">AI Solutions</h3>
                          <p className="text-lg text-gray-300">Cutting-edge artificial intelligence for your business</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <div className="text-white text-center space-y-4 p-8">
                          <h3 className="text-2xl font-bold">Development Services</h3>
                          <p className="text-lg text-gray-300">Expert software development and deployment</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                        <div className="text-white text-center space-y-4 p-8">
                          <h3 className="text-2xl font-bold">Digital Solutions</h3>
                          <p className="text-lg text-gray-300">Comprehensive digital transformation services</p>
                        </div>
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
      </main>
    </div>
  )
} 