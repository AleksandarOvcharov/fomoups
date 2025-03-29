/* FomoUps v1.1.0 | Modern Website Notification System */

// Проверява дали контейнерът за известия вече съществува
var fomoupsContainer = document.getElementById("fomoups-container");
if (!fomoupsContainer) {
    // Създава нов контейнер за известията
    fomoupsContainer = document.createElement("div");
    fomoupsContainer.id = "fomoups-container";
    fomoupsContainer.className = "fomoups-top-right";
    document.body.appendChild(fomoupsContainer);
}

// Добавя събития за ховър (за управление на скролиране)
fomoupsContainer.addEventListener('mouseenter', function () {
    this.style.pointerEvents = 'auto';
});

fomoupsContainer.addEventListener('mouseleave', function () {
    setTimeout(() => {
        if (!document.querySelector('.fomoups-dragging')) {
            this.style.pointerEvents = 'none';
        }
    }, 300);
});

// Създава стилове за известията
var fomoupsStyles = document.createElement("style");
fomoupsStyles.textContent = `
    #fomoups-container {
        --fomoups-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --fomoups-text-color: #333;
        --fomoups-secondary-text-color: #555;
        --fomoups-border-radius: 10px;
        position: fixed;
        width: 320px;
        max-height: 100vh;
        z-index: 9999;
        overflow-y: visible;
        overflow-x: hidden;
        pointer-events: none;
        padding: 0 5px 0 10px;
        margin: 0;
        font-family: var(--fomoups-font-family);
        transition: all 0.2s ease;
        box-sizing: border-box;
    }
    #fomoups-container:hover {
        pointer-events: auto;
    }
    #fomoups-container::-webkit-scrollbar {
        display: none;
    }
    #fomoups-container::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.2);
        border-radius: 10px;
        transition: background 0.2s ease;
    }
    #fomoups-container::-webkit-scrollbar-thumb:hover {
        background: rgba(0,0,0,0.3);
    }
    #fomoups-scroll-indicator, #fomoups-scroll-top {
        display: none;
    }
    .fomoups-top-right {
        top: 20px;
        right: 20px !important;
        left: auto !important;
    }
    .fomoups-top-left {
        top: 20px;
        left: 20px !important;
        right: auto !important;
    }
    .fomoups-bottom-right {
        bottom: 20px;
        right: 20px !important;
        left: auto !important;
    }
    .fomoups-bottom-left {
        bottom: 20px;
        left: 20px !important;
        right: auto !important;
    }
    .fomoups-notification {
        display: flex;
        align-items: center;
        padding: 16px;
        background-color: #fff;
        border-radius: var(--fomoups-border-radius);
        box-shadow: 0 2px 12px rgba(0,0,0,0.15);
        margin-bottom: 12px;
    }
`;

// Добавя стиловете в документа
document.head.appendChild(fomoupsStyles);
