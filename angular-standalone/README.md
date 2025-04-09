# Balance Ayurveda - Angular Landing Page

A landing page website with a waitlist feature for a new product from Balance Ayurveda. Built using Angular.

## Features

- Modern responsive design
- Smooth animations and transitions
- Waitlist signup form
- Testimonials display
- Product showcase
- Mobile-friendly navigation

## Components

- Header with responsive navigation
- Hero slider with automatic cycling
- About section with features
- Product section displaying upcoming products
- Testimonial section with customer reviews
- Waitlist form with form validation
- Footer with contact information

## Technical Details

- Built with Angular 16
- Uses reactive forms for form handling and validation
- Implements component-based architecture
- Data stored in constants files (no backend required)
- Styling with SCSS
- Responsive design using media queries
- Integrated with Font Awesome for icons
- Uses Bootstrap 5 grid system

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   ng serve
   ```

3. Navigate to `http://localhost:4200/` to see the app running.

## Project Structure

- `/src/app/components` - All UI components
- `/src/app/data` - Constant data files
- `/src/assets` - Static assets like images
- `/src/styles.scss` - Global styles

## Build for Production

To build the app for production:

```
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.