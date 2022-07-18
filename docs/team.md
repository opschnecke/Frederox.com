# Our Team

<VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/69014593?v=4',
    name: 'FrederoxDev',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/FrederoxDev' },
      { icon: 'twitter', link: 'https://twitter.com/FrederoxDev' }
    ]
  },
  {
    avatar: "",
    name: "Zorhu",
    title: "Russian Translations"
  }
]
</script>