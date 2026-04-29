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
      { text: 'Skills schreiben', link: '/eigene-skills' },
      { text: 'Konfiguration', link: '/konfiguration' },
      { text: 'Tipps', link: '/tipps' },
      { text: 'Multi-Plattform', link: '/multiplattform' },
      { text: 'Glossar', link: '/glossar' },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: {
      '/': [
        { text: 'Start', link: '/' },
        { text: 'Einführung', link: '/einfuehrung' },
        {
          text: 'Skills',
          collapsed: false,
          items: [
            { text: 'Übersicht', link: '/skills' },
            { text: 'Eigene Skills schreiben', link: '/eigene-skills' },
          ],
        },
        { text: 'Konfiguration', link: '/konfiguration' },
        { text: 'Tipps & Tricks', link: '/tipps' },
        { text: 'Multi-Plattform', link: '/multiplattform' },
        { text: 'Glossar', link: '/glossar' },
        { text: 'FAQ', link: '/faq' },
        { text: 'Impressum', link: '/impressum' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NousResearch/hermes-agent' },
    ],

    footer: {
      message: 'Fan-Projekt · <a href="/hermes-compendium/impressum">Impressum</a> · <a href="https://jamgrid.de">jamgrid.de</a>',
      copyright: 'J.Muck — Hermes Agent<br><img src="/hermes-compendium/jmlogo.jpg" alt="Logo" class="footer-logo" style="height:32px;margin-top:8px;opacity:0.6;border-radius:4px">',
    },

    search: {
      provider: 'local',
    },
  },
})
