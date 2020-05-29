module.exports = {
  "title": "Anles Blog",
  "description": "Please give me a dream",
  base: '/my-blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "icon": "reco-github",
        "link": "https://github.com/122177638"
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      }
    ],
    "logo": "/avatar.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Anles",
    "authorAvatar": "/avatar.jpg",
    "record": "MY · 一切为了孩子",
    "startYear": "2015",
    // vssueConfig: {
    //   platform: 'gitee',
    //   owner: 'zmy122177638',
    //   repo: 'my-blog',
    //   clientId: '60245049edd1599aa85f840bcbd4fbcf2fa2ad5c3f1c14f082bc13f852c83a56',
    //   clientSecret: '2e57af1ac98d28808cdb9dec5d19302fd56bcf1d4fc424f6099216992e98ab71',
    // },
    valineConfig: {
      appId: 'jyP6twPKeKtRcYR1kbU2APse-gzGzoHsz',
      appKey: 'HjFAggUxR3311wTKGb1G8pPp',
      placeholder: '评论来一发',
      avatar: 'map',
      requiredFields: ['nick']
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  // extraWatchFiles: [
  //   '**/*.md',
  // ],
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['z16'],
        btnStyle: {
          right: '90px',
          bottom: '40px',
        },
        modelStyle: {
          right: '90px',
          bottom: '-10px',
          opacity: '0.9'
        },
        messageStyle: {
          right: '68px',
          bottom: '190px'
        }
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        autoShrink: true,
        shrinkMode: 'mini',
        position: {
          left: '10px',
          bottom: '10px',
          'z-index': '999999'
        },
        audios: [
          {name: 'Faster Than Light',artist: 'Andreas Waldetoft',url: 'https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3',cover: 'https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg'},
          {name: 'Dawn',artist: 'DDRKirby(ISQ)',url: 'https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3',cover: 'https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg'},
          {name: 'TRON Legacy (End Titles)',artist: 'Daft Punk',url: 'https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3',cover: 'https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg'},
          {name: 'Broken Boy',artist: 'Tonspender',url: 'https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac',cover: 'https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg'},
          {name: 'Life Of Sin Pt. 4',artist: 'MitiS',url: 'https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3',cover: 'https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg'},
          {name: 'Sea Of Voices (RAC Mix)',artist: 'Porter Robinson',url: 'https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3',cover: 'https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg'},
          {name: 'New Lipstick',artist: 'The Kissaway Trail',url: 'https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac',cover: 'https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg'},
        ],
      },
    ],
  ]
}