class ChatApp {
    constructor() {
        this.currentRoute = '/';
        this.messages = [];
        this.sidebarCollapsed = false;
        this.mobileSidebarOpen = false;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleRoute();
        this.loadSampleMessages();
        this.createUploadModal(); // Add modal to DOM
        // Handle browser navigation
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('popstate', () => this.handleRoute());
    }

    createUploadModal() {
        // Modal HTML
        const modal = document.createElement('div');
        modal.id = 'upload-modal';
        modal.style.display = 'none';
        modal.innerHTML = `
            <div class="upload-modal-backdrop"></div>
            <div class="upload-modal-content">
                <h2>Send a file or image</h2>
                <div id="upload-preview"></div>
                <textarea id="upload-message" placeholder="Type your message..."></textarea>
                <div class="upload-modal-actions">
                    <button id="upload-cancel">Cancel</button>
                    <button id="upload-send">Send</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    bindEvents() {
        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
        sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        mobileSidebarToggle.addEventListener('click', () => this.toggleMobileSidebar());

        // Navigation
        const navLinks = document.querySelectorAll('.sidebar-menu-button');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.getAttribute('data-route');
                this.navigate(route);
            });
        });

        // Chat input
        const chatInput = document.getElementById('chat-input');
        const sendButton = document.getElementById('send-button');
        // --- Upload menu logic ---
        const imageButton = document.getElementById('image-button');
        const imageInput = document.getElementById('image-input');
        const uploadMenu = document.getElementById('upload-menu');
        const uploadDevice = document.getElementById('upload-device');
        const uploadDrive = document.getElementById('upload-drive');

        // Toggle menu on button click
        imageButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = uploadMenu.style.display === 'block';
            uploadMenu.style.display = expanded ? 'none' : 'block';
            imageButton.setAttribute('aria-expanded', !expanded);
        });
        // Upload from device
        uploadDevice.addEventListener('click', () => {
            uploadMenu.style.display = 'none';
            imageButton.setAttribute('aria-expanded', 'false');
            imageInput.click();
        });
        // Upload from Google Drive (placeholder)
        uploadDrive.addEventListener('click', () => {
            uploadMenu.style.display = 'none';
            imageButton.setAttribute('aria-expanded', 'false');
            this.handleGoogleDriveUpload();
        });
        // Hide menu when clicking outside
        document.addEventListener('click', (e) => {
            if (uploadMenu.style.display === 'block' && !uploadMenu.contains(e.target) && e.target !== imageButton) {
                uploadMenu.style.display = 'none';
                imageButton.setAttribute('aria-expanded', 'false');
            }
        });
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        sendButton.addEventListener('click', () => this.sendMessage());
        imageInput.addEventListener('change', (e) => this.handleImageUpload(e));
        // Modal events
        document.body.addEventListener('click', (e) => {
            if (e.target.id === 'upload-cancel' || e.target.classList.contains('upload-modal-backdrop')) {
                this.closeUploadModal();
            }
        });
        document.body.addEventListener('click', (e) => {
            if (e.target.id === 'upload-send') {
                this.submitUploadModal();
            }
        });
        // Close mobile sidebar when clicking outside
        document.addEventListener('click', (e) => {
            const sidebar = document.getElementById('sidebar');
            const mobileTrigger = document.getElementById('mobile-sidebar-toggle');
            if (this.mobileSidebarOpen && 
                !sidebar.contains(e.target) && 
                !mobileTrigger.contains(e.target)) {
                this.toggleMobileSidebar();
            }
        });
    }

    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        const sidebar = document.getElementById('sidebar');
        
        if (this.sidebarCollapsed) {
            sidebar.classList.add('collapsed');
        } else {
            sidebar.classList.remove('collapsed');
        }
    }

    toggleMobileSidebar() {
        this.mobileSidebarOpen = !this.mobileSidebarOpen;
        const sidebar = document.getElementById('sidebar');
        
        if (this.mobileSidebarOpen) {
            sidebar.classList.add('open');
        } else {
            sidebar.classList.remove('open');
        }
    }

    navigate(route) {
        this.currentRoute = route;
        window.location.hash = route;
        this.handleRoute();
        
        // Close mobile sidebar after navigation
        if (this.mobileSidebarOpen) {
            this.toggleMobileSidebar();
        }
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        this.currentRoute = hash;

        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        // Show current page
        const currentPage = hash === '/settings' ? 'settings-page' : 'chat-page';
        document.getElementById(currentPage).classList.add('active');

        // Update active navigation
        const navLinks = document.querySelectorAll('.sidebar-menu-button');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-route') === hash) {
                link.classList.add('active');
            }
        });
    }

    async callGeminiAPI(userMessage) {
        // IMPORTANT: Replace this URL with your deployed backend endpoint after deployment!
        // Example: const GEMINI_BACKEND_URL = 'https://your-gemini-backend.onrender.com/api/gemini';
        const GEMINI_BACKEND_URL = 'https://YOUR-BACKEND-URL/api/gemini'; // <-- CHANGE THIS after deploying your backend
        try {
            const response = await fetch(GEMINI_BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage })
            });
            const data = await response.json();
            return data.text || 'Sorry, I could not get a response from Gemini.';
        } catch (error) {
            return 'Error contacting Gemini API.';
        }
    }

    async sendMessage() {
        const input = document.getElementById('chat-input');
        const content = input.value.trim();
        if (!content) return;
        this.addMessage({
            id: Date.now().toString(),
            content: content,
            sender: 'user',
            timestamp: new Date()
        });
        input.value = '';
        // Show a temporary AI typing message
        const tempId = (Date.now() + 1).toString();
        this.addMessage({
            id: tempId,
            content: '...',
            sender: 'ai',
            timestamp: new Date()
        });
        // Call Gemini API
        const aiResponse = await this.callGeminiAPI(content);
        // Check for 'switch Ubertrix' in the response
        if (typeof aiResponse === 'string' && aiResponse.toLowerCase().includes('switch ubertrix')) {
            const headerTitle = document.querySelector('.header-title');
            if (headerTitle) headerTitle.textContent = 'Ubertrix';
        }
        // Replace the temporary message with the real response
        this.messages = this.messages.filter(m => m.id !== tempId);
        this.addMessage({
            id: (Date.now() + 2).toString(),
            content: aiResponse,
            sender: 'ai',
            timestamp: new Date()
        });
    }

    handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        const modal = document.getElementById('upload-modal');
        const preview = document.getElementById('upload-preview');
        const messageBox = document.getElementById('upload-message');
        // Reset modal
        preview.innerHTML = '';
        messageBox.value = '';
        // Show preview
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width:220px;max-height:180px;border-radius:10px;box-shadow:0 1px 4px #ffb34733;margin-bottom:10px;">`;
                modal.dataset.fileData = e.target.result;
                modal.dataset.fileType = file.type;
                modal.dataset.fileName = file.name;
            };
            reader.readAsDataURL(file);
        } else {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.innerHTML = `<div class='file-preview-icon'>📄</div><div>${file.name}</div>`;
                modal.dataset.fileData = e.target.result;
                modal.dataset.fileType = file.type;
                modal.dataset.fileName = file.name;
            };
            reader.readAsDataURL(file);
        }
        modal.style.display = 'block';
        event.target.value = '';
    }

    closeUploadModal() {
        const modal = document.getElementById('upload-modal');
        modal.style.display = 'none';
        modal.dataset.fileData = '';
        modal.dataset.fileType = '';
        modal.dataset.fileName = '';
    }

    submitUploadModal() {
        const modal = document.getElementById('upload-modal');
        const message = document.getElementById('upload-message').value.trim();
        const fileType = modal.dataset.fileType;
        const fileName = modal.dataset.fileName;
        const fileData = modal.dataset.fileData;
        if (!fileData) {
            alert('Please select a file or image.');
            return;
        }
        // Add message with file/image
        this.addMessage({
            id: Date.now().toString(),
            content: message,
            sender: 'user',
            timestamp: new Date(),
            image: fileType && fileType.startsWith('image/') ? fileData : undefined,
            file: fileType && !fileType.startsWith('image/') ? { name: fileName, data: fileData, type: fileType } : undefined
        });
        this.closeUploadModal();
        // Simulate AI response
        setTimeout(() => {
            this.addMessage({
                id: (Date.now() + 1).toString(),
                content: fileType && fileType.startsWith('image/') ?
                    `I see your image and your message: "${this.escapeHtml(message)}". How can I help you with it?` :
                    fileType ? `I received your file "${fileName}" and your message: "${this.escapeHtml(message)}".` :
                    `I received your message: "${this.escapeHtml(message)}".`,
                sender: 'ai',
                timestamp: new Date()
            });
        }, 1000);
    }

    addMessage(message) {
        this.messages.push(message);
        this.renderMessages();
    }

    renderMessages() {
        const container = document.getElementById('chat-messages');
        container.innerHTML = '';
        this.messages.forEach(message => {
            const messageEl = this.createMessageElement(message);
            container.appendChild(messageEl);
        });
        // Scroll to bottom
        container.scrollTop = container.scrollHeight;
    }

    createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${message.sender}`;

        const contentDiv = document.createElement('div');
        contentDiv.className = `message-content ${message.sender}`;

        // Avatar
        const avatarDiv = document.createElement('div');
        avatarDiv.className = `message-avatar ${message.sender}`;
        if (message.sender === 'user') {
            avatarDiv.innerHTML = `
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
            `;
        } else {
            avatarDiv.innerHTML = `
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5A2.5 2.5 0 0 1 14.5 2"/>
                </svg>
            `;
        }

        // Message bubble
        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = `message-bubble ${message.sender}`;

        let bubbleContent = '';
        // Add text content
        if (message.content) {
            bubbleContent += `<div class="message-text">${this.escapeHtml(message.content)}</div>`;
        }
        // Add image if present
        if (message.image) {
            bubbleContent += `<a href="${message.image}" download="chat-image.png" target="_blank"><img src="${message.image}" alt="Shared image" class="message-image"></a>`;
        }
        // Add file if present
        if (message.file) {
            bubbleContent += `<a href="${message.file.data}" download="${message.file.name}" class="message-file-link">📄 ${this.escapeHtml(message.file.name)}</a>`;
        }
        // Add timestamp
        const timeString = this.formatTime(message.timestamp);
        bubbleContent += `<div class="message-time">${timeString}</div>`;
        bubbleDiv.innerHTML = bubbleContent;
        contentDiv.appendChild(avatarDiv);
        contentDiv.appendChild(bubbleDiv);
        messageDiv.appendChild(contentDiv);
        return messageDiv;
    }

    formatTime(date) {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    loadSampleMessages() {
        const sampleMessages = [
            {
                id: '1',
                content: 'Hello! How can I help you today?',
                sender: 'ai',
                timestamp: new Date(Date.now() - 300000) // 5 minutes ago
            },
            {
                id: '2',
                content: 'Hi! I\'d like to know more about your capabilities.',
                sender: 'user',
                timestamp: new Date(Date.now() - 240000) // 4 minutes ago
            },
            {
                id: '3',
                content: 'I\'m an AI assistant that can help you with a wide variety of tasks including answering questions, writing, analysis, math, coding, and creative projects. What would you like to work on?',
                sender: 'ai',
                timestamp: new Date(Date.now() - 180000) // 3 minutes ago
            }
        ];

        this.messages = sampleMessages;
        this.renderMessages();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Remove any duplicate modals
    const oldModal = document.getElementById('upload-modal');
    if (oldModal) oldModal.remove();
    new ChatApp();
});
