# FomoUps Documentation

FomoUps is a modern notification system for websites that allows you to display attractive, interactive notifications to your users.

## Table of Contents

- [Static Notification Divs](#static-notification-divs)
- [Data Attributes](#data-attributes)
- [Notification Types](#notification-types)
- [Icon Options](#icon-options)
- [Timing and Duration](#timing-and-duration)
- [Examples](#examples)
- [JavaScript API](#javascript-api)

## Static Notification Divs

Static notification divs allow you to define notifications directly in your HTML, which will be automatically processed and displayed when the page loads. This approach requires no JavaScript code from your side.

### Basic Structure

A static notification div must have the class `fomoups-static` and contain two child divs: `.fomoups-title` and `.fomoups-content`:

```html
<div class="fomoups-static" data-type="blue" data-icon="fa-solid fa-bell" data-time="now">
    <div class="fomoups-title">Notification Title</div>
    <div class="fomoups-content">Notification content goes here.</div>
</div>
```

Static notification divs are hidden by default and only used to generate actual notifications. They won't be visible in your page's layout.

## Data Attributes

You can customize each notification using these data attributes:

| Attribute | Description | Default | Example |
|-----------|-------------|---------|---------|
| `data-type` | The notification style/color | `"default"` | `"blue"`, `"green"`, `"red"`, etc. |
| `data-icon` | Font Awesome icon classes | `"fa-solid fa-bell"` | `"fa-brands fa-twitter"` |
| `data-img-icon` | URL to an image icon | `null` | `"https://example.com/icon.png"` |
| `data-time` | Time text shown in the notification | `"now"` | `"5m"`, `"1h"`, `"today"` |
| `data-delay` | Milliseconds to wait before showing | `0` | `1000`, `5000` |
| `data-duration` | Milliseconds to display (0 = doesn't auto-close) | `5000` | `0`, `3000`, `10000` |

## Notification Types

FomoUps supports several pre-defined notification types that change the color scheme:

| Type | Description | Border Color | Icon Background |
|------|-------------|-------------|----------------|
| `default` | Default blue-purple style | `#5664d2` | `#5664d2` |
| `blue` | Twitter/info blue | `#1da1f2` | `#1da1f2` |
| `green` | Success green | `#4caf50` | `#4caf50` |
| `red` | Error/alert red | `#f44336` | `#f44336` |
| `yellow` | Warning yellow | `#ffd700` | `#ffd700` (with dark text) |
| `purple` | Purple for special notifications | `#9c27b0` | `#9c27b0` |

Specify the type using the `data-type` attribute:

```html
<div class="fomoups-static" data-type="green">
    <!-- notification content -->
</div>
```

## Icon Options

### Font Awesome Icons

You can use any Font Awesome icon by specifying the icon classes in the `data-icon` attribute:

```html
<div class="fomoups-static" data-icon="fa-solid fa-check">
    <!-- notification content -->
</div>
```

Common icon examples:
- `fa-solid fa-bell` - Bell icon
- `fa-solid fa-check` - Checkmark
- `fa-solid fa-triangle-exclamation` - Warning triangle
- `fa-brands fa-twitter` - Twitter logo
- `fa-solid fa-dollar-sign` - Dollar sign

**Note:** Make sure you've included Font Awesome in your project:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
```

### Image Icons

Alternatively, you can use a custom image as the notification icon by specifying the `data-img-icon` attribute with a URL:

```html
<div class="fomoups-static" data-img-icon="https://example.com/icon.png">
    <!-- notification content -->
</div>
```

When using an image icon, the `data-icon` attribute is ignored.

## Timing and Duration

### Delay

The `data-delay` attribute controls how long (in milliseconds) to wait before showing the notification after the page loads:

```html
<div class="fomoups-static" data-delay="3000">
    <!-- Shows after 3 seconds -->
</div>
```

### Display Duration

The `data-duration` attribute controls how long (in milliseconds) the notification will stay visible before automatically closing:

```html
<div class="fomoups-static" data-duration="10000">
    <!-- Stays visible for 10 seconds -->
</div>
```

Setting `data-duration="0"` will make the notification stay open until the user manually closes it.

### Time Display

The `data-time` attribute sets the text shown in the time indicator:

```html
<div class="fomoups-static" data-time="5m">
    <!-- Shows "5m" in the time indicator -->
</div>
```

This is purely presentational and doesn't affect functionality.

## Examples

### Basic Notification with Font Awesome Icon

```html
<div class="fomoups-static" data-type="blue" data-icon="fa-solid fa-bell" data-time="now" data-delay="1000" data-duration="5000">
    <div class="fomoups-title">Welcome</div>
    <div class="fomoups-content">Thanks for visiting our website!</div>
</div>
```

### Image Icon Notification

```html
<div class="fomoups-static" data-type="green" data-img-icon="https://cdn-icons-png.flaticon.com/512/9455/9455025.png" data-time="new" data-delay="3000" data-duration="0">
    <div class="fomoups-title">New Feature</div>
    <div class="fomoups-content">Check out our latest product update!</div>
</div>
```

### Warning Notification

```html
<div class="fomoups-static" data-type="yellow" data-icon="fa-solid fa-triangle-exclamation" data-time="important" data-delay="0">
    <div class="fomoups-title">Attention Required</div>
    <div class="fomoups-content">Please complete your profile information.</div>
</div>
```

### Multiple Staggered Notifications

You can create multiple notification divs with different delays to show them in sequence:

```html
<div class="fomoups-static" data-delay="1000">
    <div class="fomoups-title">First Notification</div>
    <div class="fomoups-content">This appears first.</div>
</div>

<div class="fomoups-static" data-delay="3000">
    <div class="fomoups-title">Second Notification</div>
    <div class="fomoups-content">This appears 2 seconds after the first one.</div>
</div>

<div class="fomoups-static" data-delay="6000">
    <div class="fomoups-title">Third Notification</div>
    <div class="fomoups-content">This appears 3 seconds after the second one.</div>
</div>
```

## JavaScript API

While static notification divs provide a no-code approach, FomoUps also offers a JavaScript API for more dynamic control:

```javascript
// Show a simple notification
FomoUps.show('Title', 'Content', {
    type: 'blue',
    icon: ['fa-solid', 'fa-bell'],
    time: 'now',
    duration: 5000
});

// Show a notification with an image icon
FomoUps.show('Image Notification', 'Using a custom image', {
    type: 'green',
    imgIcon: 'https://example.com/icon.png',
    time: '1h',
    duration: 0
});

// Clear all notifications
FomoUps.clear();

// Change notification position
FomoUps.setPosition('top-left'); // 'top-right', 'bottom-right', 'bottom-left'
```

Refer to the full documentation for more details on the JavaScript API. 