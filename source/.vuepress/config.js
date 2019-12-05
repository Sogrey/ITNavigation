module.exports = {
  port: "3002",
  dest: "docs",
  ga: "UA-85414008-1",
  base: "/ITNavigation/",
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "猿导航",
      description: "程序猿的网址导航",
    },
  },
  head: [
    ["link", {
      rel: "icon",
      href: `/favicon.ico`
    }]
  ],
  themeConfig: {
    repo: "Sogrey/ITNavigation",
    docsRepo: "Sogrey/ITNavigation",
    editLinks: true,
    docsDir: 'source',
    locales: {
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [{
            text: "导航",
            link: "/zh/guide/"
          },
        ],
        sidebar: {
          "/zh/guide/": genGuideSidebar(true)
        }
      },
    }
  }
};

function genGuideSidebar(isZh) {
  return [{
      title: isZh ? "导航分类" : "Navigation classification",
      collapsable: false,
      children: [
        "" /*留空的指向README.md*/ ,
      ]
    }
  ]
}