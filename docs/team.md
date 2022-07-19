# Our Team

<VPTeamMembers size="small" :members="members" />
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  // https://github.com/vuejs/vitepress/issues/738
  // When finished, change opschneckles "twitter" to a web icon

  {
    avatar: 'https://avatars.githubusercontent.com/u/69014593',
    name: 'FrederoxDev',
    title: 'Project Lead',
    links: [
      { icon: 'github', link: 'https://github.com/FrederoxDev' },
      { icon: 'twitter', link: 'https://twitter.com/FrederoxDev' }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80198925",
    name: "opschnecke",
    title: "German Translations",
    links: [
      { icon: "github", link: "https://github.com/opschnecke" }
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/109596011",
    name: "Fawn24",
    title: "French Translations",
    links: [
      { icon: "github", link: "https://github.com/Fawn24" },
    ]
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/109593841",
    name: "Sonichec0",
    title: "Russian Translations",
    links: [
      { icon: "github", link: "https://github.com/Sonichec0" },
    ]
  }
]
</script>
