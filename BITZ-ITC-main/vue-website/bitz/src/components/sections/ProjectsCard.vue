<template>
  <div class="project-card">
    <div class="project-image" :class="project.imageClass || 'bg-gray-200'">
      <div v-if="project.imageClass === 'bg-gray-900'" class="project-image-inner">
        <span class="project-image-text">{{ project.imageText || 'Project Image' }}</span>
      </div>
      <span v-else class="project-image-text">{{ project.imageText || 'Project Image' }}</span>
    </div>
    <div class="project-content">
      <div class="project-category" :class="getCategoryClass(project.category)">
        {{ project.category }}
      </div>
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <button class="read-more-btn" @click="$emit('read-more', project)">
        Read more →
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ['read-more'],
  methods: {
    getCategoryClass(category) {
      const categoryClasses = {
        'Child Protection': 'bg-blue-100 text-blue-700',
        'Legal': 'bg-green-100 text-green-700',
        'Manufacturing': 'bg-purple-100 text-purple-700',
        'CRM, Finance': 'bg-orange-100 text-orange-700',
        'Document Management': 'bg-red-100 text-red-700',
        'Contract Management': 'bg-indigo-100 text-indigo-700'
      }
      return categoryClasses[category] || 'bg-gray-100 text-gray-700'
    }
  }
}
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
}

.bg-gray-900 {
  background-color: #111827;
  padding: 1rem;
}

.bg-gray-200 {
  background-color: #e5e7eb;
}

.project-image-inner {
  color: #9ca3af;
  background-color: #1f2937;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image-text {
  color: #6b7280;
  font-size: 0.875rem;
}

.bg-gray-900 .project-image-text {
  color: #9ca3af;
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.bg-blue-100 {
  background-color: #1F1E5C;
}

.text-blue-700 {
  color: #1F1E5C;
}

.bg-green-100 {
  background-color: #dcfce7;
}

.text-green-700 {
  color: #15803d;
}

.bg-purple-100 {
  background-color: #f3e8ff;
}

.text-purple-700 {
  color: #7c3aed;
}

.bg-orange-100 {
  background-color: #fed7aa;
}

.text-orange-700 {
  color: #c2410c;
}

.bg-red-100 {
  background-color: #fee2e2;
}

.text-red-700 {
  color: #dc2626;
}

.bg-indigo-100 {
  background-color: #e0e7ff;
}

.text-indigo-700 {
  color: #4338ca;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.text-gray-700 {
  color: #374151;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.project-description {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.read-more-btn {
  background: none;
  border: none;
  color: #1F1E5C;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 0.875rem;
}

.read-more-btn:hover {
  color: #1F1E5C;
  opacity: 0.8;
}
</style>