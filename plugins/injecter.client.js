export default (context, inject) => {
  const options = JSON.parse(`<%= JSON.stringify(options) %>`)
  var subDirs = []
  var injectObj = {}
  for (let i = 0; i < options.length; i++) {
    const subdir = options[i].split("-")[0]
    subDirs.push(subdir)
  } 
  subDirs = [...new Set(subDirs)]
  for (let e = 0; e < subDirs.length; e++) {
    injectObj[subDirs[e]] = []
    for (let f = 0; f < options.length; f++) {
      const icon = options[f].split("-")[1]
      if(options[f].split("-")[0] === subDirs[e]) {
        injectObj[subDirs[e]].push(icon)
      }
    }   
  }
  var finalObj = {
    eye: injectObj.eye,
    mouth: injectObj.mouth,
    hat: injectObj.hat,
    hand: injectObj.hand,
    extra: injectObj.extra,
    extra2: injectObj.extra2,
  }
  inject('parts', finalObj)
}