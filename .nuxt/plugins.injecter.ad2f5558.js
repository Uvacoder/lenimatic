export default (context, inject) => {
  const options = JSON.parse(`["extra2-bigsweat","extra2-confetti","extra2-cry","extra2-moustache","extra2-sleep","extra2-sweat","extra-beard","extra-blush","extra-bowie","extra-doctor","extra-glasses","extra-headmic","extra-lapiz","extra-sunglasses","eye-bad","eye-broken","eye-confused","eye-happy","eye-heart","eye-laugh","eye-left","eye-open","eye-parche","eye-right","eye-roll","eye-sad","eye-sad2","eye-sick","eye-smile","eye-smile2","eye-smirk","eye-tired","eye-tired2","eye-up","head-base","hand-badge","hand-beer","hand-cake","hand-calc","hand-chef","hand-creditcard","hand-cv","hand-disk","hand-es","hand-face","hand-fernet","hand-flagar","hand-flagcl","hand-flagco","hand-flaghu","hand-flagit","hand-flagkr","hand-flagmx","hand-flagus","hand-flagve","hand-futbol","hand-keys","hand-lgbt","hand-loan","hand-lupa","hand-mate","hand-mouth","hand-patin","hand-peluche","hand-plant","hand-raise","hand-see","hand-side","hand-tea","hand-teacup","hand-tenis","hand-think","hat-auris","hat-aurisfluo","hat-birthday","hat-chef","hat-commvault","hat-cop","hat-diego","hat-doc","hat-elliemae","hat-nieve","hat-noel","hat-paypal","hat-sap","hat-sleep","hat-smoking","hat-tigre","hat-trinet","hat-united","hat-visera","mouth-barbijo","mouth-grim","mouth-happy","mouth-horror","mouth-ill","mouth-oh","mouth-panic","mouth-sad","mouth-sad2","mouth-side","mouth-smile","mouth-teeth","mouth-tongue","mouth-yum"]`)
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