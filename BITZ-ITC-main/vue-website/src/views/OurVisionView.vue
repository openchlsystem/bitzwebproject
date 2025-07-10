<template>
  <div class="flex flex-col min-h-[100dvh]">
    <main class="flex-1">
      <!-- Hero Vision Section -->
      <section class="w-full py-12 md:py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-[#000435] to-[#000a6b] opacity-95"></div>
        
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
          <div class="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float-delayed"></div>
          <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
        </div>
        
        <div class="container px-4 md:px-6 relative z-10">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="space-y-6">
              <span class="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm inline-block animate-fade-in">
                Our Vision & Mission
              </span>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-slide-up">
                Our Vision
              </h1>
              <p class="text-xl md:text-2xl text-gray-300 animate-slide-up-delayed">
                Empowering businesses through innovative technology solutions and digital transformation.
              </p>
              
              <!-- Vision Stats -->
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div class="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div class="text-2xl font-bold text-white">{{ animatedStats.projects }}+</div>
                  <div class="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div class="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div class="text-2xl font-bold text-white">{{ animatedStats.clients }}+</div>
                  <div class="text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-center">
              <div class="w-full max-w-[500px] relative">
                <!-- Enhanced Carousel -->
                <div class="overflow-hidden rounded-3xl">
                  <div 
                    class="flex transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                  >
                    <div class="w-full flex-shrink-0">
                      <div class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center group">
                        <Lightbulb class="h-24 w-24 text-white/80 transition-transform group-hover:scale-110" />
                        <div class="absolute bottom-4 left-4 right-4 text-center">
                          <h3 class="text-white font-semibold">Innovation</h3>
                          <p class="text-white/70 text-sm">Cutting-edge solutions</p>
                        </div>
                      </div>
                    </div>
                    <div class="w-full flex-shrink-0">
                      <div class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center group">
                        <Target class="h-24 w-24 text-white/80 transition-transform group-hover:scale-110" />
                        <div class="absolute bottom-4 left-4 right-4 text-center">
                          <h3 class="text-white font-semibold">Precision</h3>
                          <p class="text-white/70 text-sm">Targeted results</p>
                        </div>
                      </div>
                    </div>
                    <div class="w-full flex-shrink-0">
                      <div class="relative w-full aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center group">
                        <Users class="h-24 w-24 text-white/80 transition-transform group-hover:scale-110" />
                        <div class="absolute bottom-4 left-4 right-4 text-center">
                          <h3 class="text-white font-semibold">Collaboration</h3>
                          <p class="text-white/70 text-sm">Team excellence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Carousel Controls -->
                <button 
                  @click="prevSlide"
                  class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none rounded-full p-3 transition-all hover:scale-110"
                >
                  <ChevronLeft class="h-4 w-4" />
                </button>
                <button 
                  @click="nextSlide"
                  class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none rounded-full p-3 transition-all hover:scale-110"
                >
                  <ChevronRight class="h-4 w-4" />
                </button>
                
                <!-- Carousel Indicators -->
                <div class="flex justify-center mt-6 space-x-2">
                  <button
                    v-for="(_, index) in 3"
                    :key="index"
                    @click="currentSlide = index"
                    :class="[
                      'w-3 h-3 rounded-full transition-all duration-300',
                      currentSlide === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="w-full py-12 md:py-24 bg-white dark:bg-navy-900">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <span class="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white inline-block">
              Our Mission
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Transforming Businesses Through Technology
            </h2>
            <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px]">
              We are committed to delivering innovative solutions that drive growth and efficiency
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              v-for="(item, index) in missionItems"
              :key="index"
              class="group border-0 shadow-ios rounded-3xl hover:shadow-ios-lg transition-all duration-300 bg-white transform hover:-translate-y-2"
              :style="{ animationDelay: `${index * 200}ms` }"
            >
              <div class="p-8 flex flex-col items-center text-center space-y-4">
                <div class="p-4 rounded-full bg-gray-100 dark:bg-navy/20 group-hover:bg-navy/10 transition-colors">
                  <component :is="item.icon" class="h-10 w-10 text-navy dark:text-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 class="text-2xl font-bold group-hover:text-navy transition-colors">{{ item.title }}</h3>
                <p class="text-lg text-gray-500 dark:text-gray-400">{{ item.description }}</p>
                
                <!-- Progress indicator -->
                <div class="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div 
                    class="bg-navy h-2 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: `${item.progress}%` }"
                  ></div>
                </div>
                <span class="text-sm text-gray-500">{{ item.progress }}% Achievement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Values Section -->
      <section class="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950">
        <div class="container px-4 md:px-6">
          <div class="text-center mb-12">
            <span class="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white inline-block mb-4">
              Core Values
            </span>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              What Drives Us Forward
            </h2>
            <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Our fundamental principles that guide every decision and action we take
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="(value, index) in coreValues"
              :key="index"
              class="group p-6 bg-white dark:bg-navy-900 rounded-2xl shadow-ios hover:shadow-ios-lg transition-all duration-300 text-center transform hover:-translate-y-1"
            >
              <div class="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy group-hover:scale-110 transition-all">
                <component :is="value.icon" class="h-8 w-8 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-navy transition-colors">{{ value.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Approach Section -->
      <section class="w-full py-12 md:py-24 bg-white dark:bg-navy-900">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="space-y-6">
              <span class="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white inline-block">
                Our Approach
              </span>
              <h2 class="text-3xl md:text-4xl font-bold tracking-tighter">
                How We Work
              </h2>
              <p class="text-lg text-gray-500 dark:text-gray-400">
                Our methodology combines technical expertise with a deep understanding of business needs
              </p>
              
              <div class="space-y-6">
                <div 
                  v-for="(step, index) in approachSteps"
                  :key="index"
                  class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-navy-800 transition-all duration-300"
                  :class="{ 'bg-navy/5': activeStep === index }"
                  @mouseenter="activeStep = index"
                  @mouseleave="activeStep = -1"
                >
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy group-hover:scale-110 transition-all">
                    <span class="text-navy font-bold group-hover:text-white transition-colors">{{ index + 1 }}</span>
                  </div>
                  <div class="flex-grow">
                    <h3 class="font-bold text-lg mb-2 group-hover:text-navy transition-colors">{{ step.title }}</h3>
                    <p class="text-gray-500 dark:text-gray-400">{{ step.description }}</p>
                    
                    <!-- Progress bar for active step -->
                    <div v-if="activeStep === index" class="mt-3 w-full bg-gray-200 rounded-full h-1">
                      <div class="bg-navy h-1 rounded-full animate-progress"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative">
              <div class="aspect-square bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center space-y-6 p-8">
                    <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket class="h-10 w-10 text-white" />
                    </div>
                    <h3 class="text-2xl font-bold">Ready to Transform Your Business?</h3>
                    <p class="text-lg text-gray-300">Let's discuss how we can help you achieve your goals</p>
                    <button 
                      class="bg-white text-navy hover:bg-gray-100 rounded-full text-base py-4 px-8 font-semibold transition-all hover:scale-105 flex items-center justify-center mx-auto"
                      @click="scrollToContact"
                    >
                      Get Started
                      <ArrowRight class="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <!-- Floating elements -->
                <div class="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                <div class="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Future Goals Section -->
      <section class="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950">
        <div class="container px-4 md:px-6">
          <div class="text-center mb-12">
            <span class="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white inline-block mb-4">
              Future Goals
            </span>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Roadmap to Excellence
            </h2>
            <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Strategic objectives that will shape our future and drive continued innovation
            </p>
          </div>
          
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy/20 hidden md:block"></div>
            
            <div class="space-y-12">
              <div 
                v-for="(goal, index) in futureGoals"
                :key="index"
                class="relative flex items-center"
                :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
              >
                <!-- Timeline dot -->
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-navy rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
                
                <div class="w-full md:w-5/12 p-6 bg-white dark:bg-navy-900 rounded-2xl shadow-ios hover:shadow-ios-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                      <component :is="goal.icon" class="h-6 w-6 text-navy" />
                    </div>
                    <span class="text-sm text-navy font-semibold">{{ goal.timeline }}</span>
                  </div>
                  <h3 class="text-xl font-bold mb-2">{{ goal.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-300">{{ goal.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Lightbulb, 
  Target, 
  Users, 
  Globe, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  Shield,
  Zap,
  Award,
  Rocket,
  TrendingUp,
  Brain,
  Sparkles
} from 'lucide-vue-next'

// Reactive state
const currentSlide = ref(0)
const activeStep = ref(-1)
const animatedStats = ref({ projects: 0, clients: 0 })

// Data
const missionItems = ref([
  {
    icon: Target,
    title: 'Our Goals',
    description: 'To be the leading technology partner for businesses seeking digital transformation',
    progress: 85
  },
  {
    icon: Users,
    title: 'Our Values',
    description: 'Innovation, integrity, and excellence in everything we do',
    progress: 92
  },
  {
    icon: Globe,
    title: 'Our Impact',
    description: 'Creating lasting positive change in the businesses we serve',
    progress: 78
  }
])

const coreValues = ref([
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and it shows in our work'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honest and transparent in all our dealings'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Always pushing boundaries and exploring new possibilities'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality solutions'
  }
])

const approachSteps = ref([
  {
    title: 'Understanding',
    description: 'Deep dive into your business needs and challenges'
  },
  {
    title: 'Strategy',
    description: 'Develop tailored solutions to address your specific needs'
  },
  {
    title: 'Implementation',
    description: 'Execute solutions with precision and attention to detail'
  },
  {
    title: 'Support',
    description: 'Provide ongoing support and optimization'
  }
])

const futureGoals = ref([
  {
    icon: TrendingUp,
    title: 'Market Expansion',
    description: 'Expand our services to new markets and industries',
    timeline: '2024-2025'
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Integrate advanced AI capabilities into all our solutions',
    timeline: '2025-2026'
  },
  {
    icon: Sparkles,
    title: 'Innovation Hub',
    description: 'Establish a dedicated innovation center for R&D',
    timeline: '2026-2027'
  }
])

// Methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}

const scrollToContact = () => {
  // Implement scroll to contact section
  console.log('Scroll to contact')
}

const animateStats = () => {
  const duration = 2000
  const steps = 60
  const projectsTarget = 50
  const clientsTarget = 100
  
  let currentStep = 0
  const interval = setInterval(() => {
    currentStep++
    const progress = currentStep / steps
    
    animatedStats.value.projects = Math.floor(projectsTarget * progress)
    animatedStats.value.clients = Math.floor(clientsTarget * progress)
    
    if (currentStep >= steps) {
      clearInterval(interval)
    }
  }, duration / steps)
}

// Auto-advance carousel
let carouselInterval
onMounted(() => {
  carouselInterval = setInterval(() => {
    nextSlide()
  }, 4000)
  
  // Animate stats on mount
  setTimeout(animateStats, 500)
})

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
})
</script>

<style scoped>
.bg-navy {
  background-color: #1e3a8a;
}

.text-navy {
  color: #1e3a8a;
}

.shadow-ios {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-ios-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes progress {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-progress {
  animation: progress 2s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

.animate-slide-up-delayed {
  animation: slide-up 0.8s ease-out 0.2s both;
}
</style>