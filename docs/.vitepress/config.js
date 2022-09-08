export default {
  title: "Cosmos Genesis",
  themeConfig: {
    head: [
      [
        "link",
        { rel: "icon", type: "image/x-icon", href: "/public/favicon.ico" },
      ],
    ],
    sidebar: {
      "/main/": [
        {
          text: "Introduction",
          items: [{ text: "Our Team", link: "/main/team" }],
        },
      ],
      "/mods/": [
        {
          text: "Mods",
          items: [
            { text: "Generator", link: "/mods/generator" },
            { text: "Biome", link: "/mods/biome" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the GNU General Public License v3.0.",
      copyright: "Copyright © 2022-present FrederoxDev",
    },
    nav: [
      {
        text: "Cosmos",
        activeMatch: "/main/",
        link: "/main/team",
      },
      {
        text: "Mods",
        activeMatch: "/mods/",
        link: "/mods/generator",
      },
    ],
    editLink: {
      pattern:
        "https://github.com/FrederoxDev/Frederox.com/edit/master/docs/:path",
    },
  },
};
