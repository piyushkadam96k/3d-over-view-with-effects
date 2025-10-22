# 🌐 3D Interactive Website — Enhanced

An immersive, responsive website featuring CSS/JS-based 3D effects, micro-interactions, and performant visuals — no external 3D libraries required. Ideal for portfolios, demos, and creative experiments.


## ✨ Highlights & Experience

- 🧊 3D Cube — Drag or use controls to rotate with inertia and easing  
- 🔁 3D Carousel — Circular layout with depth and smooth navigation  
- 🃏 3D Flip Cards — Info cards that flip on hover/tap with perspective  
- 📝 3D Contact Form — Depth-styled form with focus transitions  
- 🌌 Live Background — Animated gradient + floating particles for atmosphere  
- 🪄 Parallax Effects — Pointer-driven subtle parallax for layers  
- 📱 Fully Responsive — Mobile-first design with adaptive transforms  
- ♿ Accessibility-minded — Keyboard controls, ARIA hints, focus states

## 🚀 Quick Start

1. Clone the repo
   git clone <repo-url>
2. Open quickly (static):
   - Open `index.html` in your browser
3. Dev server (optional):
   npm install
   npm run start
4. Preview:
   http://localhost:3000

## 🧩 Features (Detailed)

- Interaction
  - 🖱️ Mouse drag + touch gestures for 3D elements  
  - ⌨️ Keyboard support (arrow keys / WASD for cube/carousel)  
  - 🔘 UI controls for precise rotation & reset

- Visuals & Effects
  - 🎨 Configurable CSS variables for colors & depth values  
  - ⚡ GPU-accelerated transforms (translateZ, rotateX/Y)  
  - 🌫️ Subtle shadows & bloom-like glows for depth perception

- Performance
  - 📉 Adaptive particle count for low-end devices  
  - 🧠 requestAnimationFrame driven animations with throttling  
  - 🗂️ Lazy init for heavy elements when in viewport

## 🎛️ Customization Tips

- Colors: edit CSS variables in `styles.css` (:root)  
- Particle density: change variable in `script.js` for performance vs. fidelity  
- Add cards/items: copy card markup and update dataset attributes for carousel placement  
- Animation timing: change CSS transition / JS easing constants to tune feel

## 🛠️ Controls & Shortcuts

- Rotate cube: drag or use left/right / A/D keys  
- Toggle auto-rotate: Space  
- Carousel nav: ← → or swipe left/right  
- Reset view: R

## ✅ Accessibility & Best Practices

- Focus outlines preserved for keyboard users  
- ARIA labels for interactive controls (ensure present in markup)  
- Reduced motion preference respected: add CSS[@media (prefers-reduced-motion)] fallbacks  
- Semantic HTML for screen reader friendliness

## 🐞 Troubleshooting

- Black canvas / no 3D: enable hardware acceleration & use a modern browser  
- Janky animation: reduce particle count or disable heavy effects for mobile  
- Models/elements not visible: check z-index / transform-origin and perspective settings

## 📈 Performance Checklist

- Limit simultaneous CSS animations  
- Use transform + opacity only for smooth GPU-accelerated animations  
- Debounce resize & pointermove handlers  
- Serve compressed assets (gzip / brotli) in production

## 💡 Roadmap & Ideas

- Add procedural CSS-only model shapes ✨  
- Optional WebGL/WebGPU fallback for complex scenes 🔬  
- Export scene snapshot / animated GIF capture 📸  
- Add scene presets & themes for quick portfolio personalization 🎨

## 🧾 Project Structure

```
project-root/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── images/
    └── icons/
```

## 📬 Contact & Credits

- Author: Amit Kadam — kadamamit462@gmail.com ✉️  
- Inspired by modern UI motion design and CSS 3D techniques 🌠

## 🤝 Contributing

PRs welcome for bug fixes, accessibility improvements, and new 3D components. Please open issues for feature requests.

## 🔒 License

MIT License — see LICENSE file. © 2024 Amit Kadam

---

Made with ❤️, CSS transforms, and a little imagination. Enjoy exploring the depth! ✨
