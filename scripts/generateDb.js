const glob = require('glob');
const fs = require('fs');


async function createDb(src) {
  //Get post names
  var folders = glob.sync('*', { cwd: `components/` })
  var posts = [];
  var singleObj = {}

  //Main post loop
  folders.forEach(singleFolder => {
    const documentes = glob.sync('*.vue', {cwd: `components/${singleFolder}`})
    let post = documentes.map(function(d) {
      return d.replace('.vue', '');
    });
/* 
    //Parse Markdown
    var contents = matter(fs.readFileSync(`static/${src}/${singleFolder}/${documentes}`, 'utf8').toString());
    post = contents.data */
    singleObj[singleFolder] = post
  });
  delete singleObj['global']; 
  delete singleObj['head']; 
  var finalObj = {
    eye: singleObj.eye,
    mouth: singleObj.mouth,
    hat: singleObj.hat,
    hand: singleObj.hand,
    extra: singleObj.extra,
    extra2: singleObj.extra2,
  }
  console.log(finalObj)

  fs.writeFileSync(`./json/icons.json`, JSON.stringify(finalObj));
  console.log(`♥ icons.json generated`)
}



createDb();

