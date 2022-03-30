module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"lessBabel":true,"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"C:/Users/richard/gatsby-demo-projects/packet-deli-v1/node_modules/gatsby-remark-images","id":"4e9ee617-0e6c-5281-a705-2e6844a4e207","name":"gatsby-remark-images","version":"6.10.2","modulePath":"C:\\Users\\richard\\gatsby-demo-projects\\packet-deli-v1\\node_modules\\gatsby-remark-images\\index.js","pluginOptions":{"plugins":[],"maxWidth":960,"quality":90,"linkImagesToOriginal":false,"backgroundColor":"transparent"},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"defaultLayouts":{},"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"C:\\Users\\richard\\gatsby-demo-projects\\packet-deli-v1","commonmark":false},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":960,"quality":90,"linkImagesToOriginal":false,"backgroundColor":"transparent"},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-omni-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"enableListener":true,"preconnect":["https://fonts.gstatic.com"],"interval":300,"timeout":30000,"web":[{"name":"IBM Plex Sans","file":"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Packet Deli Blog v1","short_name":"packetdeli-blog","description":"First version of the blog to track my retooling and other technical pursuits.","start_url":"/","background_color":"#fff","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
