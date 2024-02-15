import fs from 'fs';

const packageJsonPath = './dist/package.json';

try {
  const pack = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  pack.dependencies["@guiexpert/table"] = '*';
  fs.writeFileSync(packageJsonPath, JSON.stringify(pack, null, 2));
  console.log(`${pack.name} -> dependency @guiexpert/table fixed.`);

} catch (error) {
  console.error('Error:', error);
}
