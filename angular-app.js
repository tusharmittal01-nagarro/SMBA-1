import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the Angular app's src directory
const angularSrcPath = path.join(__dirname, 'angular-standalone/src');

// Check if the Angular app exists
if (!fs.existsSync(angularSrcPath)) {
  console.error('Angular app not found at path:', angularSrcPath);
  process.exit(1);
}

// Log success message
console.log('Angular application source files found!');
console.log('The application is available at the /angular route in your browser');
console.log('Navigate to: http://localhost:5000/angular to view the Angular app');