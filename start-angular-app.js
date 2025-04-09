import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the Angular app
const angularPath = path.join(__dirname, 'angular-standalone');

// Check if the Angular app exists
if (!fs.existsSync(angularPath)) {
  console.error('Angular app not found at path:', angularPath);
  process.exit(1);
}

console.log('Installing Angular dependencies...');
exec('cd angular-standalone && npm install', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error installing dependencies: ${error}`);
    return;
  }
  
  console.log(stdout);
  
  console.log('Building Angular application...');
  exec('cd angular-standalone && npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error building Angular app: ${error}`);
      return;
    }
    
    console.log(stdout);
    console.log('Angular application built successfully!');
    console.log('The built app is available at the /angular route');
  });
});