# 📦 Installed NPM Packages

## Core Dependencies

### React & React DOM
```json
"react": "^18.3.1",
"react-dom": "^18.3.1"
```
- **Purpose**: Core React library for building UI components
- **Usage**: Foundation of the entire application

### React Icons
```json
"react-icons": "^5.4.0"
```
- **Purpose**: Icon library with Font Awesome, Material Design, and more
- **Usage**: Used throughout the portfolio for icons
- **Import Example**:
```javascript
import { FaRobot, FaBrain, FaLinkedin } from 'react-icons/fa';
import { FaWandMagicSparkles } from 'react-icons/fa6';
```

### React Scroll
```json
"react-scroll": "^1.9.0"
```
- **Purpose**: Smooth scrolling navigation between sections
- **Usage**: Navigation menu smooth scroll
- **Import Example**:
```javascript
import { Link } from 'react-scroll';

<Link to="about" smooth={true} offset={-80} duration={500}>
  About
</Link>
```

### Framer Motion
```json
"framer-motion": "^11.15.0"
```
- **Purpose**: Advanced animation library (optional, ready to use)
- **Usage**: Can be added for advanced animations
- **Import Example**:
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Dev Dependencies

### Vite
```json
"vite": "^5.4.21"
```
- **Purpose**: Lightning-fast build tool and dev server
- **Features**: Hot Module Replacement (HMR), optimized builds

### @vitejs/plugin-react
```json
"@vitejs/plugin-react": "^4.3.4"
```
- **Purpose**: Official Vite plugin for React
- **Features**: Fast Refresh, JSX support

### ESLint
```json
"eslint": "^9.17.0"
```
- **Purpose**: Code linting and quality checks
- **Usage**: Automatically checks code quality

## Package Scripts

```json
{
  "dev": "vite",              // Start development server
  "build": "vite build",      // Build for production
  "preview": "vite preview",  // Preview production build
  "lint": "eslint ."          // Run linter
}
```

## Usage Examples

### 1. Using React Icons

```javascript
// Import icons
import { FaRobot, FaEnvelope, FaGithub } from 'react-icons/fa';

// Use in JSX
<div>
  <FaRobot size={32} color="#6366f1" />
  <FaEnvelope className="icon" />
</div>
```

### 2. Using React Scroll

```javascript
import { Link } from 'react-scroll';

// Smooth scroll link
<Link
  to="contact"           // Target section ID
  spy={true}             // Update active state
  smooth={true}          // Smooth scrolling
  offset={-80}           // Offset for fixed navbar
  duration={500}         // Animation duration
  className="nav-link"
>
  Contact
</Link>
```

### 3. Using Framer Motion (Optional)

```javascript
import { motion } from 'framer-motion';

// Animated component
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <h1>Animated Content</h1>
</motion.div>

// With variants
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Adding More Packages

### Install Additional Packages

```bash
# Animation library
npm install aos

# Form handling
npm install react-hook-form

# HTTP requests
npm install axios

# State management
npm install zustand

# Routing (if needed)
npm install react-router-dom
```

## Package Versions

All packages are installed with the latest stable versions as of October 2025:

- React: 18.3.1
- Vite: 5.4.21
- React Icons: 5.4.0
- React Scroll: 1.9.0
- Framer Motion: 11.15.0

## Troubleshooting

### If packages are missing:
```bash
npm install
```

### If you get dependency errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Update all packages:
```bash
npm update
```

### Check for outdated packages:
```bash
npm outdated
```

## Performance Tips

1. **Tree Shaking**: Vite automatically removes unused code
2. **Code Splitting**: Import components dynamically when needed
3. **Icon Optimization**: Only import icons you use
4. **Production Build**: Always use `npm run build` for deployment

## Security

Keep packages updated for security patches:
```bash
npm audit
npm audit fix
```

---

**Last Updated**: October 2025
