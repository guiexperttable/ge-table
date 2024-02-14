import fs from 'fs';

const packageJsonPath = 'package.json';

try {
  const pack = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const currentVersion = pack.version;
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  const newPatchVersion = `${major}.${minor}.${patch + 1}`;
  pack.version = newPatchVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(pack, null, 2));
  console.log(`${pack.name} -> version patched to ${newPatchVersion}.`);

} catch (error) {
  console.error('Error:', error);
}
