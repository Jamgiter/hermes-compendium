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
    ],

    sidebar: {
      '/einfuehrung': [
        {
          text: 'Erste Schritte',
          items: [
            { text: 'Was ist Hermes Agent?', link: '/einfuehrung' },
          ],
        },
      ],
      '/skills': [
        {
          text: 'Skill-Kategorien',
          items: [
            { text: 'Übersicht', link: '/skills' },
          ],
        },
      ],
      '/konfiguration': [
        {
          text: 'Konfiguration',
          items: [
            { text: 'Übersicht', link: '/konfiguration' },
          ],
        },
      ],
      '/tipps': [
        {
          text: 'Tipps & Tricks',
          items: [
            { text: 'Übersicht', link: '/tipps' },
          ],
        },
      ],
    },

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
