# FomoUps - Simple Website Notification System

A lightweight notification system for websites with ultra-simple single div approach.

## Features

- Modern, smooth notification design
- Appears in any corner of the screen with simple position classes
- Minimal HTML structure - just a single div with data attributes
- Includes icons, timestamps, and messages
- Auto-dismisses after specified time
- Lightweight (< 3KB minified)
- No dependencies (except Font Awesome for icons)

## Installation

```html
<!-- Include Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Include FomoUps CSS and JS -->
<link rel="stylesheet" href="fomoups.css">
<script src="fomoups.js"></script>
```

## Basic Usage

```javascript
// Show a basic notification
FomoUps.show('Notification Title', 'This is a notification message');

// Show a notification with a specific type
FomoUps.show('Gym Chad', '6 months ago you said tomorrow. Still in couch?', {
    type: 'gym',
    icon: 'fas fa-dumbbell',
    time: '30d',
    duration: 5000
});
```

## HTML Structure

FomoUps creates a minimalist single-div structure:

```html
<div id="fomoups-container" class="top right">
    <div class="fomoups-notification twitter" 
         data-icon="fab fa-twitter" 
         data-title="0 likes on your last post" 
         data-time="now" 
         data-message="Consider a career shift"></div>
</div>
```

## Options

- **type**: Notification style - 'default', 'twitter', 'gym', 'success', 'alert', 'follow'
- **icon**: Any Font Awesome icon class (default: 'fas fa-bell')
- **time**: Text to display as time (default: 'now')
- **duration**: Time in milliseconds to display the notification (default: 5000)

## API Reference

### Show a notification

```javascript
FomoUps.show(title, message, options);
```

### Change position

```javascript
// Set vertical position ('top' or 'bottom') and horizontal position ('left' or 'right')
FomoUps.setPosition('top', 'right');
```

### Clear all notifications

```javascript
FomoUps.clear();
```

## Examples

### Default notification
```javascript
FomoUps.show('Notification', 'This is a simple notification message');
```

### Twitter-style notification
```javascript
FomoUps.show('0 likes on your last post', 'Consider a career shift', {
    type: 'twitter',
    icon: 'fab fa-twitter',
    time: 'now'
});
```

### Gym reminder
```javascript
FomoUps.show('Gym Chad', '6 months ago you said tomorrow. Still in couch?', {
    type: 'gym',
    icon: 'fas fa-dumbbell',
    time: '30d'
});
```

### Success notification
```javascript
FomoUps.show('Payment received', 'You received a payment of $120.00', {
    type: 'success',
    icon: 'fas fa-dollar-sign',
    time: '1h'
});
```

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers

## License

MIT 