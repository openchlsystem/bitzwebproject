<template>
  <div class="our-team">
    <!-- Hero Section with Interactive Background -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container hero-content">
        <div class="hero-text">
          <div class="badge badge-primary">Meet Our Team</div>
          <h1 class="hero-title">The Minds Behind Innovation</h1>
          <p class="hero-description">
            Our diverse team of experts combines technical excellence with creative vision to deliver 
            transformative technology solutions that drive your business forward.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">{{ totalTeamMembers }}+</div>
              <div class="stat-label">Team Members</div>
            </div>
            <div class="stat">
              <div class="stat-number">15+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat">
              <div class="stat-number">100+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="team-showcase">
            <div class="showcase-grid">
              <div v-for="(member, index) in featuredMembers" :key="member.id"
                   class="showcase-item"
                   :style="{ animationDelay: `${index * 0.2}s` }">
                <img :src="member.image" :alt="member.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="section leadership-section">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-primary">Leadership</div>
          <h2 class="section-title">Executive Leadership</h2>
          <p class="section-description">
            Visionary leaders steering our company towards technological excellence and sustainable growth
          </p>
        </div>
        <div class="leadership-grid">
          <div v-for="member in leadership" :key="member.id" class="leadership-card">
            <div class="card-inner">
              <div class="card-front">
                <div class="member-image">
                  <img :src="member.image" :alt="member.name" />
                  <div class="image-overlay">
                    <div class="social-links">
                      <button class="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                      <button class="social-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="member-info">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-position">{{ member.position }}</p>
                </div>
              </div>
              <div class="card-back">
                <div class="member-details">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-bio">{{ member.description }}</p>
                  <div class="member-expertise">
                    <h4>Expertise</h4>
                    <div class="expertise-tags">
                      <span v-for="skill in member.skills" :key="skill" class="expertise-tag">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Categories -->
    <section class="section team-categories-section">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-primary">Our Teams</div>
          <h2 class="section-title">Specialized Excellence</h2>
          <p class="section-description">
            Explore our specialized teams driving innovation across different domains
          </p>
        </div>
        <div class="category-tabs">
          <button 
            v-for="category in teamCategories"
            :key="category"
            class="category-tab"
            :class="{ active: activeCategory === category }"
            @click="setActiveCategory(category)"
          >
            {{ category }}
          </button>
        </div>
        <transition name="fade" mode="out-in">
          <div :key="activeCategory" class="team-grid">
            <div v-for="member in filteredTeamMembers" :key="member.id" class="team-card">
              <div class="team-card-content">
                <div class="member-avatar">
                  <img :src="member.image" :alt="member.name" />
                  <div class="status-indicator"></div>
                </div>
                <div class="member-content">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-role">{{ member.position }}</p>
                  <p class="member-description">{{ member.description }}</p>
                  <div class="member-skills">
                    <span v-for="skill in member.skills?.slice(0, 3)" :key="skill" class="skill-tag">
                      {{ skill }}
                    </span>
                  </div>
                </div>
                <div class="member-actions">
                  <button class="action-btn" @click="showMemberDetails(member)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                  <button class="action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- Team Culture Section -->
    <section class="section culture-section">
      <div class="container">
        <div class="culture-content">
          <div class="culture-text">
            <div class="badge badge-primary">Our Culture</div>
            <h2 class="culture-title">Where Innovation Meets Collaboration</h2>
            <p class="culture-description">
              We foster an environment where creativity thrives, ideas are valued, and every team member 
              contributes to our collective success. Our culture is built on trust, innovation, and continuous learning.
            </p>
            <div class="culture-values">
              <div v-for="value in cultureValues" :key="value.title" class="value-item">
                <div class="value-icon">{{ value.icon }}</div>
                <div class="value-content">
                  <h4>{{ value.title }}</h4>
                  <p>{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="culture-visual">
            <div class="culture-image">
              <div class="image-placeholder">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Member Details Modal -->
    <div v-if="selectedMember" class="modal-overlay" @click="closeMemberDetails">
      <div class="member-modal" @click.stop>
        <button class="modal-close" @click="closeMemberDetails">×</button>
        <div class="modal-content">
          <div class="modal-header">
            <img :src="selectedMember.image" :alt="selectedMember.name" />
            <div class="modal-member-info">
              <h3>{{ selectedMember.name }}</h3>
              <p>{{ selectedMember.position }}</p>
            </div>
          </div>
          <div class="modal-body">
            <p>{{ selectedMember.description }}</p>
            <div v-if="selectedMember.skills" class="modal-skills">
              <h4>Skills & Expertise</h4>
              <div class="skills-grid">
                <span v-for="skill in selectedMember.skills" :key="skill" class="skill-badge">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurTeam',
  data() {
    return {
      activeCategory: 'All Teams',
      selectedMember: null,
      teamCategories: ['All Teams', 'Development', 'AI & Data', 'Finance', 'Management'],
      cultureValues: [
        {
          icon: '🚀',
          title: 'Innovation First',
          description: 'We embrace new technologies and creative solutions to solve complex challenges.'
        },
        {
          icon: '🤝',
          title: 'Collaborative Spirit',
          description: 'We believe in the power of teamwork and collective intelligence.'
        },
        {
          icon: '📈',
          title: 'Continuous Growth',
          description: 'We invest in our people and encourage lifelong learning and development.'
        },
        {
          icon: '🎯',
          title: 'Excellence Driven',
          description: 'We strive for excellence in everything we do, from code to client relationships.'
        }
      ],
      leadership: [
        {
          id: 1,
          name: 'James Kaminju',
          position: 'Chief Executive Officer',
          description: 'Leading BITZ Inc with vision and expertise, driving our company\'s growth and innovation in technology solutions.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          skills: ['Strategic Leadership', 'Business Development', 'Technology Vision', 'Team Building']
        },
        {
          id: 2,
          name: 'Mercy Kamau',
          position: 'Director of Finance',
          description: 'Developing and implementing strategic initiatives to drive business growth and market leadership.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          skills: ['Financial Strategy', 'Risk Management', 'Investment Planning', 'Business Analysis']
        },
        {
          id: 3,
          name: 'Nelson Adagi',
          position: 'Systems Manager',
          description: 'Ensuring successful delivery of projects through effective planning, execution, and team leadership.',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          skills: ['Project Management', 'System Architecture', 'Team Leadership', 'Process Optimization']
        },
        {
          id: 4,
          name: 'Joseph Kimani',
          position: 'Technical Lead',
          description: 'Leading technical innovation and ensuring the highest standards in our technology solutions.',
          image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
          skills: ['Technical Architecture', 'Code Review', 'Mentoring', 'Innovation Strategy']
        }
      ],
      specializedTeam: [
        {
          id: 5,
          name: 'Joan Njoki',
          position: 'Head of Finance',
          description: 'Managing financial operations and strategic financial planning for sustainable growth.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
          category: 'Finance',
          skills: ['Financial Planning', 'Budget Management', 'Financial Analysis', 'Compliance']
        },
        {
          id: 6,
          name: 'Franklin Karanja',
          position: 'Lead AI Developer',
          description: 'Spearheading AI initiatives and machine learning solutions for innovative applications.',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
          category: 'AI & Data',
          skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Data Science']
        },
        {
          id: 7,
          name: 'Miriam Shem',
          position: 'Head of Social Media and AI Developer',
          description: 'Combining social media expertise with AI development for enhanced digital experiences.',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
          category: 'AI & Data',
          skills: ['Social Media Strategy', 'AI Development', 'Content Strategy', 'Digital Marketing']
        },
        {
          id: 8,
          name: 'Phyllis Kamau',
          position: 'CI/CD and Deployment',
          description: 'Ensuring smooth and efficient deployment processes through robust CI/CD pipelines.',
          image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
          category: 'Development',
          skills: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Cloud Deployment']
        },
        {
          id: 9,
          name: 'Jude Angedu',
          position: 'Backend Development',
          description: 'Building robust and scalable backend systems for our applications.',
          image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
          category: 'Development',
          skills: ['Node.js', 'Python', 'Database Design', 'API Development', 'System Architecture']
        },
        {
          id: 10,
          name: 'Peter Rogendo',
          position: 'Backend Development',
          description: 'Contributing to the development of efficient and reliable backend services.',
          image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
          category: 'Development',
          skills: ['Java', 'Spring Boot', 'Microservices', 'Database Optimization', 'Security']
        },
        {
          id: 11,
          name: 'Newton Brian',
          position: 'UI/UX and Frontend Development',
          description: 'Designing and implementing user-friendly interfaces and engaging frontend experiences.',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face',
          category: 'Development',
          skills: ['React', 'Vue.js', 'UI/UX Design', 'Responsive Design', 'User Experience']
        },
        {
          id: 12,
          name: 'Marion',
          position: 'Software Intern',
          description: 'Backend and mobile CRMs, contributing to the development of our applications.',
          image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
          category: 'Development',
          skills: ['Mobile Development', 'CRM Systems', 'Backend Development', 'Learning & Growth']
        }
      ]
    }
  },
  computed: {
    totalTeamMembers() {
      return this.leadership.length + this.specializedTeam.length
    },
    featuredMembers() {
      return [...this.leadership.slice(0, 2), ...this.specializedTeam.slice(0, 4)]
    },
    filteredTeamMembers() {
      if (this.activeCategory === 'All Teams') {
        return this.specializedTeam
      }
      return this.specializedTeam.filter(member => member.category === this.activeCategory)
    }
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category
    },
    showMemberDetails(member) {
      this.selectedMember = member
    },
    closeMemberDetails() {
      this.selectedMember = null
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 8rem 0 4rem;
  margin-top: 4rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 30px;
  background: rgba(59, 130, 246, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  padding: 4rem 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 1rem 0 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #94a3b8;
}

.team-showcase {
  display: flex;
  justify-content: center;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 300px;
}

.showcase-item {
  width: 80px;
  height: 80px;
  border-radius: 30px;
  overflow: hidden;
  animation: slideInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.showcase-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.leadership-section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #1e293b;
}

.section-description {
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-primary {
  background: #dbeafe;
  color: #1d4ed8;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.leadership-card {
  perspective: 1000px;
  height: 400px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.leadership-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 30px;
  padding: 2rem;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-back {
  transform: rotateY(180deg);
  background: #1e293b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.member-image {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 30px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.member-image:hover .image-overlay {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-link {
  width: 2rem;
  height: 2rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #3b82f6;
  transform: scale(1.1);
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.card-back .member-name {
  color: white;
}

.member-position {
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-bio {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-expertise h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.expertise-tag {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

.team-categories-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-tab {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-tab:hover,
.category-tab.active {
  background: #1e293b;
  color: white;
  border-color: #1e293b;
  transform: translateY(-2px);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: white;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.team-card-content {
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
}

.member-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
  flex-shrink: 0;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #10b981;
  border: 2px solid white;
  border-radius: 50%;
}

.member-content {
  flex: 1;
}

.member-role {
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.member-description {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.member-skills {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.skill-tag {
  background: #f1f5f9;
  color: #475569;
  padding: 0.125rem 0.5rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

.member-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.action-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  background: #f8fafc;
  border-radius: 30px;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: #3b82f6;
  color: white;
  transform: scale(1.1);
}

.culture-section {
  padding: 5rem 0;
  background: #1e293b;
  color: white;
}

.culture-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.culture-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0 1.5rem;
  line-height: 1.2;
}

.culture-description {
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.culture-values {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.value-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.value-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.value-content h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.value-content p {
  color: #cbd5e1;
  line-height: 1.5;
}

.culture-visual {
  display: flex;
  justify-content: center;
}

.culture-image {
  width: 300px;
  height: 300px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  color: #3b82f6;
  opacity: 0.7;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.member-modal {
  background: white;
  border-radius: 30px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  border: none;
  background: #f1f5f9;
  border-radius: 30px;
  font-size: 1.25rem;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: #e2e8f0;
  transform: scale(1.1);
}

.modal-header {
  display: flex;
  gap: 1rem;
  padding: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header img {
  width: 80px;
  height: 80px;
  border-radius: 30px;
  object-fit: cover;
}

.modal-member-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.modal-member-info p {
  color: #3b82f6;
  font-weight: 500;
}

.modal-body {
  padding: 2rem;
}

.modal-skills {
  margin-top: 1.5rem;
}

.modal-skills h4 {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-badge {
  background: #dbeafe;
  color: #1d4ed8;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .hero-content,
  .culture-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .leadership-grid {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .team-card-content {
    flex-direction: column;
    text-align: center;
  }
  
  .member-actions {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
