import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'AI Career Atlas',
  description: 'IS117005 research into emerging AI job titles, responsibilities, and career pathways.',
  base: '/is117005-research/',
  lang: 'en-US',
  cleanUrls: false,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'AI Career Atlas',
    socialLinks: [{ icon: 'github', link: 'https://github.com/pranjalptll1210-alt/is117005-research' }],
    nav: [{ text: 'Research', link: '/research' }, { text: 'Career profiles', link: '/careers' }, { text: 'Your pathway', link: '/pathways' }, { text: 'Sources', link: '/sources' }],
    sidebar: [{ text: 'IS117005 · Research notebook', items: [
      { text: 'Overview & findings', link: '/research' },
      { text: 'Career profiles', link: '/careers' },
      { text: 'Compare career options', link: '/compare' },
      { text: 'Learning pathways', link: '/pathways' },
      { text: 'Sources & methodology', link: '/sources' }
    ] }],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    footer: { message: 'IS117005 · An evidence-led guide to careers in artificial intelligence', copyright: 'Research reviewed November 5, 2026' }
  }
})
