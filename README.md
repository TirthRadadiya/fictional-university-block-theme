
# Fictional University Block Theme

Welcome to the **Fictional University Block Theme** repository! This project is a custom WordPress block theme designed to serve as the foundation for a university or educational website. The theme leverages WordPress's full-site editing (FSE) capabilities to provide a modern and flexible development experience.

## Features

- **Full-Site Editing (FSE):** Utilize WordPress block editor to create and customize every aspect of your site.
- **Responsive Design:** Ensures the website looks great on all devices.
- **Reusable Blocks:** Easily build pages using predefined blocks for events, faculty, courses, and more.
- **Custom Templates:** Includes templates tailored for university needs, such as a course archive, faculty profiles, and event pages.

## Requirements

- **WordPress Version:** 6.0 or higher
- **PHP Version:** 7.4 or higher
- **Node.js:** 14.0 or higher (for development)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TirthRadadiya/fictional-university-block-theme.git
   ```
2. Navigate to the theme folder:
   ```bash
   cd fictional-university-block-theme
   ```
3. Install dependencies (if applicable):
   ```bash
   npm install
   ```
4. Activate the theme in the WordPress admin panel:
   - Upload the theme folder to `wp-content/themes`.
   - Go to **Appearance > Themes** and activate "Fictional University Block Theme."

## Development

### Folder Structure

- `assets/`: Contains CSS, JS, and image assets.
- `block-templates/`: Full-site editing templates for various parts of the site.
- `inc/`: PHP functions and custom features.
- `style.css`: Main stylesheet.

### Commands

- **Build Assets:**
  ```bash
  npm run build
  ```
- **Watch for Changes:**
  ```bash
  npm run watch
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

### Guidelines

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by modern web design principles and WordPress's block editor features.

---

Happy coding! 🎓
