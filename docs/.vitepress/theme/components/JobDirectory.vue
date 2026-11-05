<script setup>
import { computed, ref } from 'vue'
import jobs from '../../../public/jobs.json'
const query = ref('')
const level = ref('All levels')
const state = ref('NY + NJ')
const category = ref('All specialties')
const primaryOnly = ref(false)
const levels = ['All levels', 'Internship', 'Entry-level', 'Mid-level', 'Experienced', 'Senior / leadership', 'Unspecified']
const categories = ['All specialties', ...new Set(jobs.map(job => job.category))].sort()
const filtered = computed(() => jobs.filter(job => {
  const text = [job.title, job.employer, job.location, job.category, job.requirements, job.description].join(' ').toLowerCase()
  return (!query.value.trim() || text.includes(query.value.trim().toLowerCase())) &&
    (level.value === 'All levels' || job.level === level.value) &&
    (state.value === 'NY + NJ' || job.states.includes(state.value)) &&
    (category.value === 'All specialties' || job.category === category.value) &&
    (!primaryOnly.value || job.verification === 'Employer detail verified')
}))
function reset() { query.value = ''; level.value = 'All levels'; state.value = 'NY + NJ'; category.value = 'All specialties'; primaryOnly.value = false }
</script>

<template>
  <section aria-label="Search local AI job postings" class="job-directory">
    <div class="job-filters">
      <label class="job-search">Search titles, companies, skills, or cities
        <input v-model="query" type="search" placeholder="Try FDE, security, Python, or Piscataway" />
      </label>
      <label>Research experience group<select v-model="level"><option v-for="item in levels" :key="item">{{ item }}</option></select></label>
      <label>Location<select v-model="state"><option>NY + NJ</option><option value="NY">New York</option><option value="NJ">New Jersey</option></select></label>
      <label>Specialty<select v-model="category"><option v-for="item in categories" :key="item">{{ item }}</option></select></label>
      <label class="job-checkbox"><input v-model="primaryOnly" type="checkbox" /> Employer detail verified only</label>
      <button class="job-reset" type="button" @click="reset">Reset filters</button>
    </div>
    <p role="status" aria-live="polite"><strong>{{ filtered.length }}</strong> of {{ jobs.length }} researched postings · checked November 5, 2026</p>
    <p v-if="!filtered.length" class="job-empty">No postings match these filters. Try another specialty or reset the filters.</p>
    <article v-for="job in filtered" :id="job.id" :key="job.id" class="job-card">
      <div class="job-meta"><span>{{ job.employer }}</span><span>{{ job.level }}</span><span>{{ job.category }}</span></div>
      <h2>{{ job.title }}</h2>
      <p class="job-location">{{ job.location }}</p>
      <p>{{ job.description }}</p>
      <p class="job-proof" :class="{ partial: job.verification !== 'Employer detail verified' }">{{ job.verification }} · {{ job.kind }}</p>
      <details>
        <summary>Requirements, pay, timing & verification</summary>
        <dl>
          <dt>Required background</dt><dd>{{ job.requirements }}</dd>
          <dt>Employer title seniority</dt><dd>{{ job.titleSeniority }}</dd>
          <dt>Why this research group?</dt><dd>{{ job.levelBasis }}</dd>
          <dt>Posted compensation</dt><dd>{{ job.pay }}</dd>
          <dt>Dates & deadlines</dt><dd>{{ job.timing }}</dd>
          <dt>Notes</dt><dd>{{ job.notes }}</dd>
          <dt>Verification</dt><dd>{{ job.status }} on {{ job.checked }}. {{ job.sourceType }}. This is a dated research snapshot.</dd>
        </dl>
      </details>
      <div class="job-links"><a :href="job.employerUrl || job.url" target="_blank" rel="noopener noreferrer">View employer posting ↗</a><a v-if="job.employerUrl" :href="job.url" target="_blank" rel="noopener noreferrer">Read secondary description ↗</a></div>
    </article>
  </section>
</template>

<style scoped>
.job-filters { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 16px; padding: 24px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 16px; margin: 24px 0; }
.job-filters label { font-size: 13px; font-weight: 600; display: flex; flex-direction: column; gap: 6px; }
.job-search { grid-column: 1 / -1; }
.job-filters input[type=search], .job-filters select { font: inherit; width: 100%; min-height: 42px; background: var(--vp-c-bg); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); border-radius: 6px; padding: 8px 12px; }
.job-filters select { appearance: auto; }
.job-filters .job-checkbox { flex-direction: row; align-items: center; grid-column: span 2; }
.job-checkbox input { appearance: auto; width: 18px; height: 18px; }
.job-reset { text-decoration: underline; justify-self: end; font-size: 13px; padding: 8px; }
.job-card { padding: 24px; border: 1px solid var(--vp-c-divider); border-radius: 16px; margin: 20px 0; scroll-margin-top: 90px; }
.job-card h2 { margin: 12px 0 6px; padding: 0; border: 0; font-size: 22px; line-height: 1.4; }
.job-meta { display: flex; gap: 8px; flex-wrap: wrap; font-size: 12px; color: var(--vp-c-text-2); }
.job-meta span { background: var(--vp-c-bg-soft); border-radius: 4px; padding: 3px 8px; }
.job-meta span:first-child { color: var(--vp-c-brand-1); font-weight: 700; }
.job-location { color: var(--vp-c-text-2); font-size: 14px; }
.job-proof { color: var(--vp-c-brand-1); font-size: 12px; }
.job-proof.partial { color: var(--vp-c-warning-1); }
summary { cursor: pointer; font-size: 14px; font-weight: 600; padding: 10px 0; }
dt { font-size: 13px; font-weight: 700; margin-top: 12px; }
dd { margin: 4px 0 10px; font-size: 14px; color: var(--vp-c-text-2); }
.job-links { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 14px; font-size: 14px; }
.job-empty { padding: 32px; text-align: center; background: var(--vp-c-bg-soft); border-radius: 12px; }
:focus-visible { outline: 3px solid var(--vp-c-brand-1); outline-offset: 3px; }
@media(max-width: 640px) { .job-filters { grid-template-columns: 1fr; padding: 16px; } .job-filters .job-checkbox { grid-column: auto; } .job-card { padding: 18px; } }
</style>
