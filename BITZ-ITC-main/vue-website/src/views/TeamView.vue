<template>
    <div class="flex flex-col min-h-[100dvh]">
      <main class="flex-1">
        <!-- Hero Section -->
        <section class="w-full py-12 md:py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-[#000435] to-[#000a6b] opacity-90"></div>
          <div class="container px-4 md:px-6 relative z-10">
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div class="space-y-6">
                <span class="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm inline-block">
                  Meet Our Team
                </span>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Our Team
                </h1>
                <p class="text-xl md:text-2xl text-gray-300">
                  Meet the experts behind our innovative technology solutions
                </p>
                
                <!-- Team Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white">{{ teamMembers.length }}+</div>
                    <div class="text-sm text-gray-300">Team Members</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white">{{ leadershipTeam.length }}</div>
                    <div class="text-sm text-gray-300">Leadership</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white">{{ extendedTeam.length }}</div>
                    <div class="text-sm text-gray-300">Specialists</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white">5+</div>
                    <div class="text-sm text-gray-300">Years Experience</div>
                  </div>
                </div>
              </div>
              
              <div class="flex justify-center">
                <div class="relative w-full max-w-[500px] aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg overflow-hidden">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <Users class="h-24 w-24 text-white/80" />
                  </div>
                  <!-- Floating elements for visual interest -->
                  <div class="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
                  <div class="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse delay-1000"></div>
                  <div class="absolute top-1/2 right-8 w-6 h-6 bg-white/15 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Search and Filter Section -->
        <section class="w-full py-8 bg-gray-50 dark:bg-navy-950 border-b">
          <div class="container px-4 md:px-6">
            <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div class="flex flex-wrap gap-2">
                <button
                  @click="selectedFilter = 'all'"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    selectedFilter === 'all' 
                      ? 'bg-navy text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  ]"
                >
                  All Team ({{ teamMembers.length }})
                </button>
                <button
                  @click="selectedFilter = 'leadership'"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    selectedFilter === 'leadership' 
                      ? 'bg-navy text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  ]"
                >
                  Leadership ({{ leadershipTeam.length }})
                </button>
                <button
                  @click="selectedFilter = 'extended'"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    selectedFilter === 'extended' 
                      ? 'bg-navy text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  ]"
                >
                  Specialists ({{ extendedTeam.length }})
                </button>
              </div>
              
              <div class="relative w-full md:w-80">
                <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search team members..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>
  
        <!-- Leadership Team Section -->
        <section v-if="selectedFilter === 'all' || selectedFilter === 'leadership'" class="w-full py-12 md:py-24 bg-white dark:bg-navy-900">
          <div class="container px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <span class="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white inline-block">
                Leadership
              </span>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Meet Our Leadership Team
              </h2>
              <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px]">
                Experienced professionals guiding our company's vision and growth
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                v-for="(member, index) in filteredLeadershipTeam"
                :key="member.id"
                class="group border-0 shadow-ios rounded-3xl overflow-hidden hover:shadow-ios-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-white"
                :style="{ animationDelay: `${index * 100}ms` }"
                @click="handleCardClick(member)"
              >
                <div class="aspect-square relative bg-gray-100 overflow-hidden">
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <!-- Social Media Icons on Hover -->
                  <div v-if="member.linkedin || member.instagram || member.github" 
                       class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer" 
                       class="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" @click.stop>
                      <Linkedin class="h-5 w-5 text-white" />
                    </a>
                    <a v-if="member.instagram" :href="member.instagram" target="_blank" rel="noopener noreferrer" 
                       class="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" @click.stop>
                      <Instagram class="h-5 w-5 text-white" />
                    </a>
                    <a v-if="member.github" :href="member.github" target="_blank" rel="noopener noreferrer" 
                       class="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" @click.stop>
                      <Github class="h-5 w-5 text-white" />
                    </a>
                  </div>
  
                  <!-- Role Badge -->
                  <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 bg-navy/90 text-white rounded-full text-xs font-medium">
                      Leadership
                    </span>
                  </div>
                </div>
                
                <div class="p-6 text-center">
                  <h3 class="text-xl font-bold mb-2 group-hover:text-navy transition-colors">{{ member.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ member.role }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{{ member.description }}</p>
                  
                  <!-- Expertise Tags -->
                  <div v-if="member.expertise && member.expertise.length > 0" class="flex flex-wrap gap-1 mt-3 justify-center">
                    <span
                      v-for="skill in member.expertise.slice(0, 2)"
                      :key="skill"
                      class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {{ skill }}
                    </span>
                    <span v-if="member.expertise.length > 2" class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{{ member.expertise.length - 2 }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Extended Team Section -->
        <section v-if="selectedFilter === 'all' || selectedFilter === 'extended'" class="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950">
          <div class="container px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <span class="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white inline-block">
                Extended Team
              </span>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Our Specialized Teams
              </h2>
              <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px]">
                Dedicated professionals driving innovation across all aspects of our business
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="(member, index) in filteredExtendedTeam"
                :key="member.id"
                class="group border-0 shadow-ios rounded-3xl overflow-hidden hover:shadow-ios-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-white"
                :style="{ animationDelay: `${index * 100}ms` }"
                @click="handleCardClick(member)"
              >
                <div class="aspect-video relative bg-gray-100 overflow-hidden">
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <!-- Social Media Icons on Hover -->
                  <div v-if="member.linkedin || member.instagram || member.github" 
                       class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer" 
                       class="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" @click.stop>
                      <Linkedin class="h-5 w-5 text-white" />
                    </a>
                    <a v-if="member.instagram" :href="member.instagram" target="_blank" rel="noopener noreferrer" 
                       class="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" @click.stop>
                      <Instagram class="h-5 w-5 text-white" />
                    </a>
                    <a v-if="member.github" :href="member.github" target="_blank" rel="noopener noreferrer" 
                       class="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" @click.stop>
                      <Github class="h-5 w-5 text-white" />
                    </a>
                  </div>
  
                  <!-- Department Badge -->
                  <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 bg-emerald-500/90 text-white rounded-full text-xs font-medium">
                      {{ getDepartment(member.role) }}
                    </span>
                  </div>
                </div>
                
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2 group-hover:text-navy transition-colors">{{ member.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ member.role }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{{ member.description }}</p>
                  
                  <!-- Expertise Tags -->
                  <div v-if="member.expertise && member.expertise.length > 0" class="flex flex-wrap gap-1 mb-3">
                    <span
                      v-for="skill in member.expertise.slice(0, 3)"
                      :key="skill"
                      class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {{ skill }}
                    </span>
                    <span v-if="member.expertise.length > 3" class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{{ member.expertise.length - 3 }}
                    </span>
                  </div>
  
                  <!-- Accolades Count -->
                  <div v-if="member.accolades && member.accolades.length > 0" class="flex items-center text-xs text-gray-500">
                    <Award class="h-3 w-3 mr-1" />
                    <span>{{ member.accolades.length }} achievement{{ member.accolades.length > 1 ? 's' : '' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Team Achievements Section -->
        <section class="w-full py-12 md:py-24 bg-white dark:bg-navy-900">
          <div class="container px-4 md:px-6">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Team Achievements
              </h2>
              <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Our collective accomplishments and recognitions in the industry
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center p-6 bg-gray-50 dark:bg-navy-800 rounded-2xl">
                <div class="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-xl font-bold mb-2">Industry Awards</h3>
                <p class="text-gray-600 dark:text-gray-300">Recognition for excellence in technology solutions</p>
              </div>
              <div class="text-center p-6 bg-gray-50 dark:bg-navy-800 rounded-2xl">
                <div class="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-xl font-bold mb-2">Project Success</h3>
                <p class="text-gray-600 dark:text-gray-300">100% project delivery rate with client satisfaction</p>
              </div>
              <div class="text-center p-6 bg-gray-50 dark:bg-navy-800 rounded-2xl">
                <div class="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-xl font-bold mb-2">Innovation</h3>
                <p class="text-gray-600 dark:text-gray-300">Cutting-edge solutions and technological advancement</p>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <!-- Team Member Detail Modal -->
      <Transition name="modal">
        <div v-if="selectedMember" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" @click="handleClosePanel">
          <div class="relative w-full max-w-4xl bg-white dark:bg-navy-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]" @click.stop>
            <button
              @click="handleClosePanel"
              class="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X class="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            
            <div class="md:w-2/5 aspect-square md:aspect-auto relative bg-gray-100">
              <img
                :src="selectedMember.image"
                :alt="selectedMember.name"
                class="object-cover w-full h-full"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div class="md:w-3/5 p-8 overflow-y-auto">
              <div class="space-y-6">
                <div>
                  <h3 class="text-3xl font-bold mb-2">{{ selectedMember.name }}</h3>
                  <p class="text-xl text-navy dark:text-blue-400 mb-4">{{ selectedMember.role }}</p>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ selectedMember.description }}</p>
                </div>
  
                <!-- Social Media Links -->
                <div v-if="selectedMember.linkedin || selectedMember.instagram || selectedMember.github" class="flex gap-4">
                  <a v-if="selectedMember.linkedin" :href="selectedMember.linkedin" target="_blank" rel="noopener noreferrer" 
                     class="p-3 bg-gray-100 dark:bg-navy-800 rounded-full hover:bg-navy hover:text-white transition-colors">
                    <Linkedin class="h-5 w-5" />
                  </a>
                  <a v-if="selectedMember.instagram" :href="selectedMember.instagram" target="_blank" rel="noopener noreferrer" 
                     class="p-3 bg-gray-100 dark:bg-navy-800 rounded-full hover:bg-navy hover:text-white transition-colors">
                    <Instagram class="h-5 w-5" />
                  </a>
                  <a v-if="selectedMember.github" :href="selectedMember.github" target="_blank" rel="noopener noreferrer" 
                     class="p-3 bg-gray-100 dark:bg-navy-800 rounded-full hover:bg-navy hover:text-white transition-colors">
                    <Github class="h-5 w-5" />
                  </a>
                </div>
  
                <!-- Expertise -->
                <div v-if="selectedMember.expertise && selectedMember.expertise.length > 0">
                  <h4 class="text-lg font-semibold mb-3 flex items-center">
                    <Brain class="h-5 w-5 mr-2 text-navy" />
                    Expertise
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="skill in selectedMember.expertise"
                      :key="skill"
                      class="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>
  
                <!-- Accolades -->
                <div v-if="selectedMember.accolades && selectedMember.accolades.length > 0">
                  <h4 class="text-lg font-semibold mb-3 flex items-center">
                    <Award class="h-5 w-5 mr-2 text-navy" />
                    Achievements & Accolades
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="accolade in selectedMember.accolades"
                      :key="accolade"
                      class="flex items-start"
                    >
                      <CheckCircle class="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span class="text-gray-600 dark:text-gray-300">{{ accolade }}</span>
                    </li>
                  </ul>
                </div>
  
                <!-- Contact Button -->
                <div class="pt-4">
                  <button class="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center">
                    <Mail class="h-4 w-4 mr-2" />
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { 
    Users, 
    Search, 
    Linkedin, 
    Instagram, 
    Github, 
    X, 
    Award, 
    Brain, 
    CheckCircle, 
    Mail,
    Trophy,
    Target,
    Zap
  } from 'lucide-vue-next'
  
  // Reactive state
  const selectedMember = ref(null)
  const selectedFilter = ref('all')
  const searchQuery = ref('')
  
  // Team members data
  const teamMembers = ref([
    // Leadership team
    {
      id: 'james-kaminju',
      name: 'James Kaminju',
      role: 'Chief Executive Officer',
      description: 'Leading BITZ-itc with vision and expertise, driving our company\'s growth and innovation in technology solutions.',
      image: '/team-profiles/James-profile.jpg',
      expertise: ['Business Strategy', 'Leadership', 'Innovation'],
      accolades: ['Award 1', 'Recognition 2'],
      type: 'leadership'
    },
    {
      id: 'mercy-kamau',
      name: 'Mercy Kamau',
      role: 'Head of Strategy',
      description: 'Developing and implementing strategic initiatives to drive business growth and market leadership.',
      image: '/team-profiles/Mercy-profile.jpg',
      expertise: ['Strategic Planning', 'Market Analysis', 'Growth Initiatives'],
      accolades: ['Award A', 'Recognition B'],
      type: 'leadership'
    },
    {
      id: 'nelson-adagi',
      name: 'Nelson Adagi',
      role: 'Project Manager',
      description: 'Ensuring successful delivery of projects through effective planning, execution, and team leadership.',
      image: '/team-profiles/Nelson-profile.jpg',
      expertise: ['Project Management', 'Team Leadership', 'Execution'],
      accolades: ['Certification X'],
      type: 'leadership'
    },
    {
      id: 'joseph-kimani',
      name: 'Joseph Kimani',
      role: 'Technical Lead',
      description: 'Leading technical innovation and ensuring the highest standards in our technology solutions.',
      image: '/team-profiles/Kimani-profile.jpg',
      expertise: ['Technical Leadership', 'Innovation', 'Software Architecture'],
      accolades: ['Patent Y', 'Publication Z'],
      type: 'leadership'
    },
    // Extended team
    {
      id: 'joan-njoki',
      name: 'Joan Njoki',
      role: 'Head of Finance',
      description: 'Managing financial operations and strategic financial planning for sustainable growth.',
      image: '/team-profiles/Joan-profile.jpg',
      expertise: ['Financial Management', 'Strategic Planning', 'Budgeting'],
      accolades: [],
      type: 'extended'
    },
    {
      id: 'jimmy-wanyama',
      name: 'Jimmy Wanyama',
      role: 'Lead AI Developer',
      description: 'Spearheading AI initiatives and machine learning solutions for innovative applications.',
      image: '/team-profiles/Jimmy-profile.jpg',
      expertise: ['AI Development', 'Machine Learning', 'Data Science'],
      accolades: ['Project Contribution A'],
      type: 'extended'
    },
    {
      id: 'miriam-shem',
      name: 'Miriam Shem',
      role: 'Head of Social Media and AI Developer',
      description: 'Combining social media expertise with AI development for enhanced digital presence.',
      image: '/team-profiles/Miriam-profile.jpg',
      expertise: ['Social Media Strategy', 'AI for Marketing', 'Content Creation'],
      accolades: [],
      type: 'extended'
    },
    {
      id: 'franklin-karanja',
      name: 'Franklin Karanja',
      role: 'Model and Training',
      description: 'Specializing in AI model development and training for optimal performance.',
      image: '/team-profiles/Franklin-profile.jpg',
      expertise: ['AI Model Development', 'Model Training', 'Performance Optimization'],
      accolades: ['Finalist in A2SV'],
      type: 'extended'
    },
    {
      id: 'phylis-kamau',
      name: 'Phylis Kamau',
      role: 'CI/CD and Deployment',
      description: 'Ensuring smooth and efficient deployment processes through robust CI/CD pipelines.',
      image: '/team-profiles/phylis-profile.jpg',
      expertise: ['CI/CD', 'DevOps', 'Cloud Deployment'],
      accolades: ['Certification Z'],
      type: 'extended'
    },
    {
      id: 'jude-angedu',
      name: 'Jude Angedu',
      role: 'Backend Development',
      description: 'Building robust and scalable backend systems for our applications.',
      image: '/team-profiles/Jude-profile.jpg',
      expertise: ['Backend Development', 'APIs', 'Database Management'],
      accolades: [],
      type: 'extended'
    },
    {
      id: 'peter-rogendo',
      name: 'Peter Rogendo',
      role: 'Backend Development',
      description: 'Contributing to the development of efficient and reliable backend services.',
      image: '/team-profiles/Rogendo-profile.jpg',
      expertise: ['Backend Development', 'Model training', 'Optimization'],
      accolades: [],
      type: 'extended'
    },
    {
      id: 'newton-brian',
      name: 'Newton Brian',
      role: 'UI/UX and Frontend Development',
      description: 'Designing and implementing user-friendly interfaces and engaging frontend experiences.',
      image: '/team-profiles/Newton-profile.png',
      expertise: ['UI/UX Design', 'Frontend Development', 'Responsive Design'],
      accolades: ['Oracle Primavera P6 certification','Cisco Certified DevNet Associate','AWS Certified Cloud Practitioner','First-Aid and CPR Certified','Design lead-IndabaX'],
      type: 'extended'
    },
    {
      id: 'marlon',
      name: 'Marlon',
      role: 'Software-intern',
      description: 'Backend and design intern, contributing to the development of our applications.',
      image: '/team-profiles/Marlon-profile.jpg',
      expertise: ['Frontend development- React Native', 'Bootstrap(learning)', 'Django'],
      accolades: [],
      type: 'extended'
    }
  ])
  
  // Computed properties
  const leadershipTeam = computed(() => teamMembers.value.filter(member => member.type === 'leadership'))
  const extendedTeam = computed(() => teamMembers.value.filter(member => member.type === 'extended'))
  
  const filteredLeadershipTeam = computed(() => {
    if (!searchQuery.value) return leadershipTeam.value
    const query = searchQuery.value.toLowerCase()
    return leadershipTeam.value.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.expertise?.some(skill => skill.toLowerCase().includes(query))
    )
  })
  
  const filteredExtendedTeam = computed(() => {
    if (!searchQuery.value) return extendedTeam.value
    const query = searchQuery.value.toLowerCase()
    return extendedTeam.value.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.expertise?.some(skill => skill.toLowerCase().includes(query))
    )
  })
  
  // Methods
  const handleCardClick = (member) => {
    selectedMember.value = member
  }
  
  const handleClosePanel = () => {
    selectedMember.value = null
  }
  
  const getDepartment = (role) => {
    if (role.toLowerCase().includes('ai') || role.toLowerCase().includes('model')) return 'AI/ML'
    if (role.toLowerCase().includes('backend') || role.toLowerCase().includes('development')) return 'Development'
    if (role.toLowerCase().includes('ui') || role.toLowerCase().includes('frontend')) return 'Design'
    if (role.toLowerCase().includes('finance')) return 'Finance'
    if (role.toLowerCase().includes('social')) return 'Marketing'
    if (role.toLowerCase().includes('ci/cd') || role.toLowerCase().includes('deployment')) return 'DevOps'
    return 'Specialist'
  }
  </script>
  
  <style scoped>
  .bg-navy {
    background-color: #1e3a8a;
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
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Modal transitions */
  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from, .modal-leave-to {
    opacity: 0;
  }
  
  .modal-enter-active .modal-content,
  .modal-leave-active .modal-content {
    transition: transform 0.3s ease;
  }
  
  .modal-enter-from .modal-content,
  .modal-leave-to .modal-content {
    transform: scale(0.9);
  }
  
  /* Animations */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  .delay-1000 {
    animation-delay: 1s;
  }
  </style>