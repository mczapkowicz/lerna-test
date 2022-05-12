/**
 *  This script should be fired before the process of publishing the packages.
 *  It changes files locations in package.json to compiled javascript files instead of typescript ones.
 *  It can be helpful in situation where someone doesn't use typescript compiler.
 */
const fs = require('fs');

const packagesLocation = __dirname + '/packages'
const packageNames = fs.readdirSync(packagesLocation).map(item => item);

packageNames.map(packageName => {
  const packageLocation = `${packagesLocation}/${packageName}/package.json`
  const packageData = require(packageLocation);
  packageData.main = packageData.main.replace('src/index.ts', 'dist/index.js');
  packageData.module = packageData.module.replace('src/index.ts', 'dist/index.js');
  packageData.types = packageData.types.replace('src/index.d.ts', 'typings/index.d.ts');
  fs.writeFile(packageLocation, JSON.stringify(packageData, null, 2), function (err) {
    if (err) throw err;
  });
})
