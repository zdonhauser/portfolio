# Screenshots Directory

Place your project screenshots in this folder. They will be accessible at `/screenshots/filename.jpg` in your portfolio.

## Recommended formats:
- **File formats**: JPG, PNG, WebP
- **Dimensions**: 1200x800 or similar aspect ratio for cards
- **File naming**: Use descriptive names like:
  - `pos-system-main.jpg`
  - `kitchen-display-orders.png`
  - `time-tracking-dashboard.jpg`
  - `membership-billing.png`
  - `party-booking-mobile.jpg`

## Usage in ProjectCard:
Replace the `preview` prop with:
```jsx
preview={
  <img 
    src="/screenshots/your-image.jpg" 
    alt="Screenshot description"
    className="w-full h-full object-cover rounded"
  />
}
```