const { resolve, join } = require('path')

export default function(moduleOptions) {
  this.nuxt.hook('components:extend', dirs => {
    var componentArr = []
    for (let i = 0; i < dirs.length; i++) {
      componentArr.push(dirs[i].kebabName)
    }
    this.addPlugin({
      src: resolve(__dirname, '../plugins/injecter.client.js'),
      options: componentArr
    })    
  })


}

