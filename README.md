# 🌒 Moon Phase Visualizer

An interactive **Moon phase simulator** built with **JavaScript** and the **HTML Canvas API**.  
Adjust the Moon’s phase, rotation, distance, and altitude using intuitive sliders.  
The Moon dims automatically when placed below the horizon (altitude < 0°), mimicking its natural appearance.

## Features

- **Complete Lunar Phase Simulation** – Visualizes the Moon across its entire cycle, from New Moon to Full Moon, including waxing and waning phases.

- **Interactive Controls** – Interactive sliders allow users to adjust the Moon’s phase, rotation, distance, and altitude with immediate visual updates.

- **Illumination Indicator** – Displays the calculated percentage of the Moon’s illuminated surface.

- **Horizon Behavior Simulation** – The Moon gradually dims when its altitude falls below the horizon (altitude < 0°), simulating real observational conditions.

- **Responsive Interface** – Optimized to work smoothly on both desktop and mobile devices.

- **Lightweight JavaScript Engine** – Built entirely using vanilla JavaScript and the HTML Canvas API with no external libraries required.
  
## How It Works

- The Moon is drawn on an **HTML Canvas** using geometric shapes and shading techniques to simulate its appearance.
- The **Phase slider** adjusts the illuminated portion of the lunar disk to represent different Moon phases.
- The **Distance slider** changes the apparent size of the Moon, simulating how it may appear closer or farther away.
- The **Rotation slider** rotates the Moon’s orientation, allowing you to view the phase from different angles.
- The **Altitude slider** affects brightness — when the Moon goes below the horizon (altitude < 0°), its brightness decreases to imitate real viewing conditions.
  
## Getting Started

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Use the sliders in the **control panel** to adjust the Moon’s appearance:
   - **Phase** – Changes the illuminated portion of the Moon.
   - **Rotation** – Rotates the Moon’s orientation.
   - **Distance** – Adjusts the Moon’s apparent size.
   - **Altitude** – Controls brightness; the Moon dims when placed below the horizon.
4. The Moon visualization updates instantly based on the selected slider values.

## Kickstarter

Want to use this Moon phase visualizer in your own project?

You can easily integrate the simulation into your application or website. Simply include the script and canvas element, then control the Moon’s appearance programmatically or through your own UI controls.

This project is lightweight, dependency-free, and designed to be easy to modify or embed in astronomy tools, educational apps, dashboards, or space-related visualizations.

## For Developers

If you're building an astronomy tool, educational project, or space-themed interface, you can integrate this Moon phase visualizer directly into your project.

The simulator is written in pure JavaScript and uses the HTML Canvas API, making it easy to customize, extend, or embed into existing web applications without external dependencies.

## Customization

The `drawMoon()` function acts as the core renderer of the Moon visualization and is intentionally kept simple so it can be easily modified.

Developers are encouraged to customize or extend the function to suit their own projects — whether by changing the rendering style, adding astronomical calculations, or integrating it into other visualization tools and applications.

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Canvas API)

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the **Moon Phase Visualizer**, add features, fix bugs, or enhance the documentation, feel free to contribute.

### How to Contribute

1. **Fork the repository** to your own GitHub account.

2. **Clone your fork locally**

```bash
git clone https://github.com/your-username/moon-phase-visualizer.git
cd moon-phase-visualizer
```

3. **Create a new branch for your changes**

```bash
git checkout -b moon-visual
```

Example:

```bash
git checkout -b moon-visual
```

4. **Make your changes**

Possible areas for contribution:
- Improve Moon rendering accuracy
- UI/UX improvements
- Performance optimizations
- Astronomical calculations
- Documentation updates

5. **Commit your changes**


```bash
git add .
git commit -m "Updated 0110 Improve moon shading algorithm"
```
Example "Updated HHMM Changes you made

6. **Push your branch**

```bash
git push origin moon-visual
```

7. **Open a Pull Request**

Go to the original repository on GitHub and create a **Pull Request** describing the changes you made.

---

### 💡 Contribution Ideas

If you're looking for ways to contribute, here are some ideas:

- Add **real lunar cycle calculations**
- Improve **lighting and shading realism**
- Add **Moon surface textures**
- Implement **time-based Moon movement**
- Improve **mobile UI controls**
- Add **dark mode or themes**
- Add **educational labels for Moon phases**

---

### 📜 Code Guidelines

- Keep the project **lightweight and dependency-free**
- Write **clean and readable JavaScript**
- Document significant changes
- Ensure compatibility on **desktop and mobile**

---

### 🐞 Reporting Issues

If you find a bug or want to suggest a feature:

1. Open an **Issue** on GitHub
2. Clearly describe the problem or suggestion
3. Include screenshots if possible

---

### 👥 Contributors

Thanks to everyone who contributes to improving this project!

You can view the list of contributors on the repository’s **Contributors** page.

---

⭐ If you find this project useful, consider giving it a star on GitHub!


## Author

**Cedie Camomot** – Original implementation.  

## License

**BSD 2-Clause License** – See LICENSE file for full details.  
