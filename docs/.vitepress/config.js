export default {
    title: "Cosmos Genesis",
    themeConfig: {
        sidebar: [
            {
                text: "Introduction",
                items: [
                    { text: "Home Page", link: "/" },
                    { text: "Our Team", link: "/team" }
                ]
            },
            {
                "text": "Modding",
                "items": [
                    { text: "Custom Biomes", link: "/mods/biome" }
                ]
            }
        ],
        footer: {
            message: 'Released under the GNU General Public License v3.0.',
            copyright: 'Copyright © 2022-present FrederoxDev'
        },
        nav: [
            { text: "Team", link: "/team" },
        ],
        editLink: {
          pattern: "https://github.com/FrederoxDev/Frederox.com/edit/master/docs/:path"
        }
    }
}
