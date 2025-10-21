# 🎨 Component Customization Guide

## Quick Reference for Modifying Components

---

## 1. Comparison Section

### Change Pricing
```jsx
// File: src/components/Comparison.jsx
// Line: ~21-22
const models = [
    {
        price: 'From $1,999', // Change this
        // ...
    },
]
```

### Add More Specifications
```jsx
// Add a new category to specifications array
{
    category: 'Your Category',
    specs: [
        { label: 'Feature', model14: 'Value', model16: 'Value' },
    ],
}
```

---

## 2. Product Configurator

### Modify Base Prices
```jsx
// File: src/components/Configurator.jsx
// Line: ~15-20
const prices = {
    model: { '14': 1999, '16': 2499 }, // Base prices
    chip: { 'm4-pro': 0, 'm4-max': 500 }, // Upgrade costs
    memory: { '18': 0, '36': 400 /* ... */ },
    // ...
}
```

### Add New Configuration Options
```jsx
// Add to config state
const [config, setConfig] = useState({
    model: '14',
    chip: 'm4-pro',
    yourNewOption: 'default', // Add here
});

// Add to prices object
const prices = {
    // ...
    yourNewOption: { 'option1': 0, 'option2': 200 },
};

// Update calculateTotal() to include new option
```

---

## 3. Accessories Section

### Change Accessories
```jsx
// File: src/components/Accessories.jsx
// Line: ~24-70
const accessories = [
    {
        name: 'Your Product',
        description: 'Product description',
        price: '$XX',
        image: '🎨', // Emoji or URL
        color: 'from-purple-900 to-purple-700', // Tailwind gradient
    },
    // Add more...
]
```

### Change Grid Layout
```jsx
// Line: ~88
// Change from 4 columns to 3:
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
```

---

## 4. Customer Reviews

### Add/Edit Reviews
```jsx
// File: src/components/Reviews.jsx
// Line: ~11-57
const reviews = [
    {
        name: 'Customer Name',
        role: 'Their Job Title',
        company: 'Company Name',
        review: 'Their testimonial text...',
        rating: 5, // 1-5 stars
        avatar: '👤', // Emoji
    },
    // Add more...
]
```

### Change Auto-Play Speed
```jsx
// Add auto-play functionality:
useEffect(() => {
    const interval = setInterval(() => {
        setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change time (milliseconds)
    
    return () => clearInterval(interval);
}, [reviews.length]);
```

---

## 5. FAQ Section

### Add/Edit Questions
```jsx
// File: src/components/FAQ.jsx
// Line: ~29-70
const faqs = [
    {
        question: 'Your question?',
        answer: 'Your detailed answer...',
    },
    // Add more...
]
```

---

## 6. Newsletter

### Change Gradient Colors
```jsx
// File: src/components/Newsletter.jsx
// Line: ~39
className="bg-gradient-to-br from-blue-900 to-purple-900"
// Change to any Tailwind colors
```

### Connect to Email Service
```jsx
// Replace handleSubmit function:
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Call your API
        await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });
        setSubscribed(true);
    } catch (error) {
        console.error('Subscription failed:', error);
    }
};
```

---

## 7. Loading Screen

### Change Loading Duration
```jsx
// File: src/components/LoadingScreen.jsx
// Line: ~15
// Faster loading:
return prev + Math.random() * 30; // Increase number

// Slower loading:
return prev + Math.random() * 5; // Decrease number
```

### Disable Loading Screen
```jsx
// File: src/App.jsx
// Change initial state:
const [isLoading, setIsLoading] = useState(false); // Set to false
```

---

## 8. Scroll Progress Bar

### Change Colors
```jsx
// File: src/components/ScrollProgress.jsx
// Line: ~16-18
className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
// Change gradient colors
```

### Change Height
```jsx
// Line: ~14
className="fixed top-0 left-0 w-full h-1" // Change h-1 to h-2, h-3, etc.
```

---

## 9. Smooth Scroll Navigation

### Change Sections
```jsx
// File: src/components/SmoothScrollNav.jsx
// Line: ~6-18
const sections = useMemo(() => [
    { id: 'section-id', label: 'Display Name' },
    // Add/remove sections here
], []);
```

### Change Position
```jsx
// Line: ~59
// Move to left side:
className="fixed left-8 top-1/2"

// Move to bottom:
className="fixed bottom-8 left-1/2"
```

---

## 🎨 Global Styling Changes

### Change Color Scheme

All components use consistent Tailwind colors. To change globally:

```jsx
// Primary Blue → Purple
// Find and replace in all files:
bg-blue-600 → bg-purple-600
bg-blue-700 → bg-purple-700
text-blue-500 → text-purple-500

// Background Colors
bg-black → bg-slate-900
bg-zinc-900 → bg-gray-900
```

### Change Fonts

```css
/* File: src/index.css */
body {
    font-family: 'Inter', system-ui, sans-serif; /* Change font */
}
```

---

## 🔧 Animation Adjustments

### GSAP Animation Speed

```jsx
// In any component with GSAP:
duration: 1, // Seconds (decrease = faster)
ease: 'power3.out', // Easing function
stagger: 0.1, // Delay between items
```

### Common Easing Functions
- `power1.out` - Gentle ease
- `power2.out` - Medium ease  
- `power3.out` - Strong ease
- `elastic.out` - Bouncy effect
- `back.out` - Slight overshoot

---

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px and up (tablets)
- `md:` - 768px and up (tablets landscape)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large screens)

Example:
```jsx
className="text-4xl md:text-5xl lg:text-6xl"
// 4xl on mobile, 5xl on tablets, 6xl on desktop
```

---

## 🚀 Performance Tips

### 1. Lazy Load Images
```jsx
<img loading="lazy" src="..." alt="..." />
```

### 2. Memoize Expensive Calculations
```jsx
const expensiveValue = useMemo(() => {
    return complexCalculation(data);
}, [data]);
```

### 3. Debounce Scroll Events
```jsx
import { debounce } from 'lodash';

useEffect(() => {
    const handleScroll = debounce(() => {
        // Your scroll logic
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## ✅ Testing Checklist

When modifying components:

- [ ] Component renders without errors
- [ ] Animations work smoothly
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors/warnings
- [ ] Interactive elements work (buttons, forms)
- [ ] Text is readable (contrast)
- [ ] Links go to correct destinations

---

## 🆘 Common Issues & Fixes

### Issue: Component Not Showing
```jsx
// Make sure it's imported and rendered in App.jsx
import YourComponent from './components/YourComponent.jsx';

// In return:
<YourComponent />
```

### Issue: GSAP Animations Not Working
```jsx
// Ensure ScrollTrigger is registered
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Issue: Tailwind Classes Not Applying
```bash
# Restart dev server
npm run dev
```

---

## 📚 Additional Resources

- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

Happy customizing! 🎉
