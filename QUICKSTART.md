# FomoUps Quick Start Guide

## Adding FomoUps to Your Page

1. Include the FomoUps script in your HTML:
```html
<script src="fomoups.min.js"></script>
```

2. Include Font Awesome for the icons:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
```

## Creating Static Notifications

Add notification divs to your HTML with the `fomoups-static` class. These will automatically appear when the page loads:

```html
<div class="fomoups-static" data-type="blue" data-icon="fa-solid fa-bell" data-time="now" data-delay="1000">
    <div class="fomoups-title">Welcome</div>
    <div class="fomoups-content">Thanks for visiting our website!</div>
</div>
```

## Essential Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-type` | Notification color | `"blue"`, `"green"`, `"red"`, `"yellow"`, `"purple"` |
| `data-icon` | Font Awesome icon | `"fa-solid fa-bell"`, `"fa-brands fa-twitter"` |
| `data-img-icon` | Image URL (alternative to icon) | `"https://example.com/icon.png"` |
| `data-time` | Time display text | `"now"`, `"5m"`, `"1h"`, `"today"` |
| `data-delay` | When to show (milliseconds) | `1000` (1 second) |
| `data-duration` | How long to show (0=forever) | `5000` (5 seconds) |

## Quick Examples

### Success Notification
```html
<div class="fomoups-static" data-type="green" data-icon="fa-solid fa-check" data-time="now">
    <div class="fomoups-title">Success</div>
    <div class="fomoups-content">Your changes have been saved!</div>
</div>
```

### Warning Notification
```html
<div class="fomoups-static" data-type="yellow" data-icon="fa-solid fa-triangle-exclamation" data-time="important">
    <div class="fomoups-title">Warning</div>
    <div class="fomoups-content">Your session will expire in 5 minutes.</div>
</div>
```

### Notification with Image Icon
```html
<div class="fomoups-static" data-type="blue" data-img-icon="https://example.com/icon.png" data-time="new">
    <div class="fomoups-title">New Feature</div>
    <div class="fomoups-content">Check out our latest update!</div>
</div>
```

## JavaScript Alternative

You can also create notifications using JavaScript:

```javascript
// Show a simple notification
FomoUps.show('Title', 'Content', {
    type: 'blue',
    icon: ['fa-solid', 'fa-bell'],
    time: 'now'
});

// Clear all notifications
FomoUps.clear();
```

For full documentation, see [DOCS.md](DOCS.md) 