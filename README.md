# 3D Interactive Website

A responsive, interactive website featuring 3D elements created using vanilla HTML, CSS, and JavaScript - no external libraries or frameworks.

## Features

- **3D Cube**: Interactive cube that can be rotated via buttons or by dragging with the mouse
- **3D Flip Cards**: Cards that flip on hover with 3D animations
- **3D Carousel**: A circular carousel with 3D perspective
- **3D Form**: Contact form with depth and perspective effects
- **Parallax Effects**: Subtle mouse-based parallax effects
- **Responsive Design**: Adapts to different screen sizes
- **Live Background**: Animated gradient with floating particles
- **Mobile-Friendly Navigation**: Hamburger menu with smooth animations

## Technical Details

### 3D Techniques Used

- CSS 3D Transforms (`rotateX`, `rotateY`, `translateZ`)
- CSS Perspective and transform-style: preserve-3d
- JavaScript for interactive manipulations of 3D elements
- CSS Transitions and animations for smooth effects
- CSS Custom Properties for parallax effects
- Responsive breakpoints for mobile compatibility

### File Structure

- `index.html` - Main HTML document
- `styles.css` - All CSS styling and 3D transforms
- `script.js` - JavaScript for 3D interactions

## How to Use

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Interact with the various 3D elements:
   - Rotate the cube with the buttons or by dragging
   - Hover over the cards to see them flip
   - Use the carousel navigation to rotate the 3D carousel
   - Observe the parallax effects when moving your mouse
   - Fill out the 3D contact form
   - Navigate using the interactive menu

## Browser Compatibility

This website works best in modern browsers that support CSS 3D transforms:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development and Customization

### Modifying Colors

The main color scheme can be modified by changing the gradient colors in the CSS:
```css
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
```

### Adding New Elements

The modular structure makes it easy to add new 3D elements by following the existing patterns for perspective, transforms, and interactions.

### Responsive Breakpoints

The site includes responsive breakpoints at:
- 768px (tablets)
- 480px (mobile phones)

## Performance Considerations

- The parallax effects and 3D transforms are optimized for performance
- For older devices, consider reducing the number of floating particles
- The site uses hardware acceleration where possible via CSS transforms

## Future Enhancements

- Add more complex 3D models using CSS
- Implement WebGL for more advanced 3D rendering
- Add physics-based interactions
- Optimize performance for mobile devices
- Add accessibility features for screen readers

## Copyright Notice

© 2024 Amit Kadam. All rights reserved.

This project and its contents are protected under copyright law. While the code is provided for educational and demonstration purposes, unauthorized reproduction, distribution, or use for commercial purposes without explicit permission is prohibited.

For inquiries regarding licensing or commercial use, please contact: kadamamit462@gmail.com

## License

MIT License - The code in this project is licensed under the MIT License for personal and educational use.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 