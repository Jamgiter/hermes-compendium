import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hermes Compendium',
  description: 'Hermes Agent – Skills, Konfiguration & Erfahrungen',
  lang: 'de-DE',
  base: '/hermes-compendium/',

  themeConfig: {
    logo: '/hermes-compendium/logo.svg',

    nav: [
      { text: 'Start', link: '/' },
      { text: 'Einführung', link: '/einfuehrung' },
      { text: 'Skills', link: '/skills' },
      { text: 'Konfiguration', link: '/konfiguration' },
      { text: 'Tipps', link: '/tipps' },
      { text: 'Multi-Plattform', link: '/multiplattform' },
    ],

    sidebar: {},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NousResearch/hermes-agent' },
    ],

    footer: {
      message: 'Fan-Projekt · <a href="/hermes-compendium/impressum">Impressum</a> · <a href="https://jamgrid.de">jamgrid.de</a>',
      copyright: 'J.Muck — Hermes Agent<br><img src="/hermes-compendium/logo.svg" alt="Logo" class="footer-logo" style="height:24px;margin-top:8px;opacity:0.6">',
    },

    search: {
      provider: 'local',
    },
  },
})
