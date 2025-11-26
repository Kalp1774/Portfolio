document.addEventListener('DOMContentLoaded', () => {
    // Hacker Boot Sequence
    const bootScreen = document.getElementById('boot-screen');
    const bootTerminal = document.getElementById('boot-terminal');

    const bootMessages = [
        "INITIALIZING KERNEL...",
        "LOADING BOOTSTRAP LOADER...",
        "[ OK ] CPU 0 INITIALIZED",
        "[ OK ] CPU 1 INITIALIZED",
        "[ OK ] CPU 2 INITIALIZED",
        "[ OK ] CPU 3 INITIALIZED",
        "CHECKING MEMORY INTEGRITY... [PASS]",
        "LOADING SYSTEM DRIVERS...",
        "[ OK ] /dev/sda1 MOUNTED",
        "[ OK ] /dev/sda2 MOUNTED",
        "ESTABLISHING SECURE CONNECTION...",
        "ENCRYPTING TRAFFIC... [DONE]",
        "BYPASSING FIREWALL...",
        "INJECTING PAYLOAD...",
        "ACCESSING MAINFRAME...",
        "DECRYPTING USER DATA...",
        "----------------------------------------",
        "WARNING: UNAUTHORIZED ACCESS DETECTED",
        "----------------------------------------",
        "ATTEMPTING TO OVERRIDE SECURITY...",
        "[SUCCESS] SECURITY OVERRIDDEN",
        "LOADING USER PROFILE: KALP",
        "LOADING ASSETS...",
        "LOADING INTERFACE...",
        "EXECUTING STARTUP SCRIPTS...",
        "SYSTEM COMPROMISED.",
        "ACCESS GRANTED.",
        "WELCOME TO THE SYSTEM."
    ];

    // Generate random hex dumps for effect
    for (let i = 0; i < 30; i++) {
        let hex = "0x";
        for (let j = 0; j < 8; j++) hex += Math.floor(Math.random() * 16).toString(16).toUpperCase();
        bootMessages.splice(10 + Math.floor(Math.random() * 10), 0, `[MEM] ${hex} SEGMENT LOADED`);
    }

    let msgIndex = 0;
    const typeSpeed = 10; // Faster speed

    function typeBootLog() {
        if (msgIndex < bootMessages.length) {
            const p = document.createElement('div');
            p.className = 'boot-line';
            p.textContent = bootMessages[msgIndex];

            // Add some color variation
            if (bootMessages[msgIndex].includes("WARNING")) p.style.color = "#ff0000";
            if (bootMessages[msgIndex].includes("SUCCESS") || bootMessages[msgIndex].includes("GRANTED")) p.style.color = "#00ff00";
            if (bootMessages[msgIndex].includes("SYSTEM COMPROMISED")) {
                p.style.color = "#ff0000";
                p.style.fontSize = "24px";
                p.style.fontWeight = "bold";
            }

            bootTerminal.appendChild(p);
            bootTerminal.scrollTop = bootTerminal.scrollHeight;
            msgIndex++;
            setTimeout(typeBootLog, Math.random() * 20 + 5);
        } else {
            // Boot sequence finished, show popup
            setTimeout(() => {
                const popup = document.getElementById('hacker-popup');
                popup.style.display = 'block';

                // Play a sound effect if possible (optional, but let's stick to visual for now)

                setTimeout(() => {
                    bootScreen.style.opacity = '0';
                    setTimeout(() => {
                        bootScreen.remove();
                    }, 500);
                }, 3000); // Show popup for 3 seconds
            }, 500);
        }
    }

    typeBootLog();

    // Clock
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        document.getElementById('clock').textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Virtual File System
    const fileSystem = {
        '~': {
            type: 'dir',
            children: {
                'about.txt': {
                    type: 'file',
                    content: 'Kalp Modi\nBachelor of Technology, CSE spec. in IoT\nG H Patel College of Engg. and Tech.\n\nEDUCATION\nB.Tech., CSE - G H Patel College of Engg. and Tech. (2026) - CGPA: 8.68\nMinor, Robotics - G H Patel College of Engg. and Tech. (2025) - CGPA: 8.00'
                },
                'experience.txt': {
                    type: 'file',
                    content: 'JD Infotech (Feb 2025 - Apr 2025)\nCyber Security Content Creator (Remote)\n- Created technical content on cybersecurity topics including ethical hacking.\n- Designed educational material aligned with OWASP Top 10, API security, and real-world penetration testing methodologies.\n\nHacktify (Feb 2025 - March 2025)\nCybersecurity Intern (Remote)\n- Worked on penetration testing, authentication bypass, injection attacks, and session flaws.\n- Explored subdomain takeovers and bug bounty platforms like HackerOne and Bugcrowd.\n- Gained practical knowledge of real-world web vulnerabilities and secure application testing.\n\nShadowFox (Aug 2024 - Sep 2024)\nCyber Security Analyst (Remote)\n- Performed port scanning, directory brute-forcing, and network traffic interception.\n- Created payloads and executed reverse shell attacks via Metasploit to simulate real-world exploitation.\n- Gained hands-on experience in red teaming, post-exploitation, and system compromise techniques.'
                },
                'skills.txt': {
                    type: 'file',
                    content: 'Languages & Scripting: Python, Bash, SQL, C/C++\nTechnologies: Burp Suite, Nmap, Wireshark, Metasploit, Kali Linux, John the Ripper, Hydra, VeraCrypt\nDomains: Penetration Testing, OSINT, SQL Injection, Password Cracking, Vulnerability Assessment'
                },
                'achievements.txt': {
                    type: 'file',
                    content: '- Won 1st Prize in Hack The Mountains 5.0\n- Panelist at the 2nd Edition of IDE Bootcamp (Phase I), IDE Bootcamp\n- Volunteered for IoT 360 Project Demonstration, IoT 360\n- Top 25 Nationwide - BEST Bootcamp on Embedded Security & Trust (IIT Kharagpur), IITKGP\n- Cleared Advanced web security by IIT Kanpur, IITK'
                },
                'positions.txt': {
                    type: 'file',
                    content: 'Graphic Designer, The Hackers Meetup (THM), Surat Community (Nov 2024 - Mar 2025)\nCorporal, National Cadet Corps (NCC), 2CTC (Apr 2024 - Mar 2025)'
                },
                'projects': {
                    type: 'dir',
                    children: {
                        'ZeroTwin.txt': {
                            type: 'file',
                            content: 'ZeroTwin – Wi-Fi Hacking & Evil Twin Attack Tool\nDec 2024 - Jan 2025\nStack: Python | ESP32 | Wireshark | MITM\n\n- Developed a custom Evil Twin attack tool using an ESP32 board to clone legitimate Wi-Fi networks and perform credential harvesting.\n- Enabled real-time packet sniffing, captive portal injection, and session hijacking in a controlled lab setup.'
                        },
                        'KOI.txt': {
                            type: 'file',
                            content: 'KOI: Advanced Phone Number OSINT Reconnaissance Tool\nJul 2025 - Oct 2025\nStack: Bash | Python | API Integration | Recon-ng\n\n- Created a CLI tool for phone number-based OSINT using public APIs.\n- Enabled real-time data enrichment with geolocation and CNAM lookup.'
                        }
                    }
                },
                'contact.info': {
                    type: 'file',
                    content: 'Phone: +91-9408122290\nEmail: kalpmodi177@gmail.com\nLinkedIn: linkedin.com/in/kalpmodi17704'
                }
            }
        }
    };

    let currentPath = ['~'];

    // Terminal Logic
    class Terminal {
        constructor(container) {
            this.container = container;
            this.output = container.querySelector('.terminal-output');
            this.inputLine = container.querySelector('.input-line');
            this.inputContainer = container.querySelector('.command-line');

            this.setupEvents();
        }

        setupEvents() {
            this.inputLine.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const command = this.inputLine.value.trim();
                    this.executeCommand(command);
                    this.inputLine.value = '';
                }
            });

            this.container.addEventListener('click', () => {
                this.inputLine.focus();
            });
        }

        executeCommand(cmdStr) {
            // Add command to output
            this.print(`kalp@portfolio:${this.getPathString()}$ ${cmdStr}`);

            if (!cmdStr) return;

            const args = cmdStr.split(' ');
            const cmd = args[0].toLowerCase();

            switch (cmd) {
                case 'help':
                    this.print('Available commands: help, clear, ls, cd, cat, whoami, date, matrix, hack');
                    break;
                case 'clear':
                    this.output.innerHTML = '';
                    break;
                case 'whoami':
                    this.print('kalp');
                    break;
                case 'date':
                    this.print(new Date().toString());
                    break;
                case 'ls':
                    this.listDir(args[1]);
                    break;
                case 'cd':
                    this.changeDir(args[1]);
                    break;
                case 'cat':
                    this.readFile(args[1]);
                    break;
                case 'matrix':
                    startMatrix();
                    break;
                case 'hack':
                    this.runHack();
                    break;
                default:
                    this.print(`Command not found: ${cmd}`);
            }

            // Scroll to bottom
            this.inputContainer.scrollIntoView();
        }

        print(text) {
            const div = document.createElement('div');
            div.textContent = text;
            div.style.whiteSpace = 'pre-wrap';
            this.output.appendChild(div);
        }

        getPathString() {
            return currentPath.join('/');
        }

        getDir(pathArray) {
            let current = fileSystem['~'];
            for (let i = 1; i < pathArray.length; i++) {
                if (current.children && current.children[pathArray[i]]) {
                    current = current.children[pathArray[i]];
                } else {
                    return null;
                }
            }
            return current;
        }

        listDir(path) {
            const dir = this.getDir(currentPath);
            if (dir && dir.type === 'dir') {
                const items = Object.keys(dir.children).map(key => {
                    const isDir = dir.children[key].type === 'dir';
                    return isDir ? `<span style="color: #3465a4">${key}/</span>` : key;
                }).join('  ');

                const div = document.createElement('div');
                div.innerHTML = items;
                this.output.appendChild(div);
            } else {
                this.print('Error: Cannot list directory.');
            }
        }

        changeDir(path) {
            if (!path || path === '~') {
                currentPath = ['~'];
                return;
            }
            if (path === '..') {
                if (currentPath.length > 1) currentPath.pop();
                return;
            }

            const dir = this.getDir([...currentPath, path]);
            if (dir && dir.type === 'dir') {
                currentPath.push(path);
            } else {
                this.print(`cd: ${path}: No such directory`);
            }
        }

        runHack() {
            const steps = [
                'Initializing brute force attack...',
                'Target: Mainframe...',
                'Bypassing firewall...',
                'Accessing secure nodes...',
                'Decrypting passwords...',
                'Downloading confidential data...',
                'Cleaning up traces...',
                'ACCESS GRANTED'
            ];

            let i = 0;
            const interval = setInterval(() => {
                if (i >= steps.length) {
                    clearInterval(interval);
                    return;
                }

                const div = document.createElement('div');
                div.className = 'hack-output';
                div.textContent = `[${new Date().toLocaleTimeString()}] ${steps[i]}`;
                this.output.appendChild(div);

                // Scroll to bottom
                this.inputContainer.scrollIntoView();

                i++;
            }, 800);
        }

        readFile(filename) {
            if (!filename) {
                this.print('usage: cat [filename]');
                return;
            }

            const dir = this.getDir(currentPath);
            if (dir && dir.children[filename]) {
                const file = dir.children[filename];
                if (file.type === 'file') {
                    this.print(file.content);
                } else {
                    this.print(`cat: ${filename}: Is a directory`);
                }
            } else {
                this.print(`cat: ${filename}: No such file`);
            }
        }
    }

    // File Explorer Logic
    class FileExplorer {
        constructor(container, path = ['~']) {
            this.container = container;
            this.path = path;
            this.render();
        }

        render() {
            const dir = this.getDir(this.path);
            if (!dir || dir.type !== 'dir') {
                this.container.innerHTML = '<div style="padding: 20px;">Error: Invalid Directory</div>';
                return;
            }

            let html = `
                <div class="file-explorer-toolbar">
                    <button class="nav-btn" id="up-btn"><i class="fa-solid fa-arrow-up"></i></button>
                    <div class="path-bar">${this.path.join('/')}</div>
                </div>
                <div class="file-list">
            `;

            Object.keys(dir.children).forEach(key => {
                const item = dir.children[key];
                const icon = item.type === 'dir' ? 'fa-folder' : 'fa-file-lines';
                const color = item.type === 'dir' ? '#e95420' : '#fff';

                html += `
                    <div class="file-item" data-name="${key}" data-type="${item.type}">
                        <i class="fa-regular ${icon}" style="color: ${color}; font-size: 32px; margin-bottom: 5px;"></i>
                        <span>${key}</span>
                    </div>
                `;
            });

            html += '</div>';
            this.container.innerHTML = html;

            this.setupEvents();
        }

        getDir(pathArray) {
            let current = fileSystem['~'];
            for (let i = 1; i < pathArray.length; i++) {
                if (current.children && current.children[pathArray[i]]) {
                    current = current.children[pathArray[i]];
                } else {
                    return null;
                }
            }
            return current;
        }

        setupEvents() {
            this.container.querySelectorAll('.file-item').forEach(item => {
                item.addEventListener('dblclick', () => {
                    const name = item.dataset.name;
                    const type = item.dataset.type;

                    if (type === 'dir') {
                        this.path.push(name);
                        this.render();
                    } else {
                        // Open file in Text Viewer
                        const content = this.getDir(this.path).children[name].content;
                        // In a real app we would open a new window, but here we just alert for simplicity or we could try to open a new window via WindowManager if we had access to the instance.
                        // Since we don't have global access to 'wm' easily inside here without passing it, let's just alert.
                        alert(`File Content:\n\n${content}`);
                    }
                });
            });

            const upBtn = this.container.querySelector('#up-btn');
            if (upBtn) {
                upBtn.addEventListener('click', () => {
                    if (this.path.length > 1) {
                        this.path.pop();
                        this.render();
                    }
                });
            }
        }
    }

    // Window Management System
    class WindowManager {
        constructor() {
            this.windowsContainer = document.getElementById('windows-container');
            this.taskbarApps = document.getElementById('taskbar-apps');
            this.template = document.getElementById('window-template');
            this.zIndex = 100;
            this.windows = [];

            this.setupDesktopIcons();
        }

        setupDesktopIcons() {
            document.querySelectorAll('.icon').forEach(icon => {
                icon.addEventListener('dblclick', () => {
                    const appName = icon.dataset.app;
                    this.openWindow(appName);
                });
            });
        }

        openWindow(appName) {
            const clone = this.template.content.cloneNode(true);
            const windowEl = clone.querySelector('.window');
            const titleEl = clone.querySelector('.window-title');
            const contentEl = clone.querySelector('.window-content');

            // Set App Details
            const title = appName.charAt(0).toUpperCase() + appName.slice(1);
            titleEl.textContent = title;
            windowEl.dataset.id = Date.now();
            windowEl.dataset.app = appName;

            // Random Position
            const offset = this.windows.length * 20;
            windowEl.style.top = `${50 + offset}px`;
            windowEl.style.left = `${100 + offset}px`;

            // Content Loading
            this.loadAppContent(appName, contentEl);

            // Event Listeners
            this.setupWindowEvents(windowEl);

            this.windowsContainer.appendChild(windowEl);
            this.windows.push(windowEl);

            // Taskbar Item
            const taskbarItem = this.addTaskbarItem(windowEl, title, appName);
            windowEl.taskbarItem = taskbarItem;

            this.focusWindow(windowEl);
        }

        loadAppContent(appName, contentEl) {
            if (appName === 'terminal') {
                contentEl.innerHTML = `
                    <div class="terminal-content">
                        <div class="terminal-output">
                            <div>Welcome to Portfolio Terminal</div>
                            <div>Type "help" for commands.</div>
                            <br>
                        </div>
                        <div class="command-line">
                            <span class="prompt">kalp@portfolio:~$</span>
                            <input type="text" class="input-line" autofocus spellcheck="false">
                        </div>
                    </div>`;
                new Terminal(contentEl);
            } else if (appName === 'projects') {
                new FileExplorer(contentEl, ['~', 'projects']);
            } else if (appName === 'about') {
                const content = fileSystem['~'].children['about.txt'].content;
                contentEl.innerHTML = `
                    <div style="padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 20px; height: 100%;">
                        <div style="position: relative;">
                            <img src="assets/profile.jpg" style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid #0f0; object-fit: cover; box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);">
                            <div style="position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); background: #000; color: #0f0; padding: 2px 8px; font-size: 12px; border: 1px solid #0f0; white-space: nowrap;">AGENT IDENTIFIED</div>
                        </div>
                        <div style="white-space: pre-wrap; font-family: 'Fira Code', monospace; color: #fff; width: 100%; line-height: 1.5; text-align: left; overflow-y: auto;">${content}</div>
                    </div>`;
            } else if (appName === 'contact') {
                const content = fileSystem['~'].children['contact.info'].content;
                contentEl.innerHTML = `<div style="padding: 20px; white-space: pre-wrap; font-family: monospace;">${content}</div>`;
            } else if (appName === 'snake') {
                new SnakeGame(contentEl);
            } else if (appName === 'paint') {
                new PaintApp(contentEl);
            } else if (appName === 'calculator') {
                new CalculatorApp(contentEl);
            } else if (appName === 'tictactoe') {
                new TicTacToeApp(contentEl);
            } else {
                contentEl.innerHTML = `<div style="padding: 20px;"><h1>${appName}</h1><p>Content for ${appName} goes here.</p></div>`;
            }
        }

        setupWindowEvents(windowEl) {
            const closeBtn = windowEl.querySelector('.close-btn');
            const minBtn = windowEl.querySelector('.minimize-btn');
            const maxBtn = windowEl.querySelector('.maximize-btn');
            const header = windowEl.querySelector('.window-header');

            // Close
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.closeWindow(windowEl);
            });

            // Minimize
            minBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.minimizeWindow(windowEl);
            });

            // Maximize
            maxBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMaximize(windowEl);
            });

            // Focus
            windowEl.addEventListener('mousedown', () => {
                this.focusWindow(windowEl);
            });

            // Dragging
            let isDragging = false;
            let startX, startY, initialLeft, initialTop;

            header.addEventListener('mousedown', (e) => {
                if (windowEl.classList.contains('maximized')) return; // Don't drag if maximized
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialLeft = windowEl.offsetLeft;
                initialTop = windowEl.offsetTop;
                this.focusWindow(windowEl);
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                windowEl.style.left = `${initialLeft + dx}px`;
                windowEl.style.top = `${initialTop + dy}px`;
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });
        }

        focusWindow(windowEl) {
            if (windowEl.classList.contains('minimized')) {
                windowEl.classList.remove('minimized');
            }

            this.zIndex++;
            windowEl.style.zIndex = this.zIndex;
            windowEl.classList.add('active');
            windowEl.style.display = 'flex';

            if (windowEl.taskbarItem) {
                windowEl.taskbarItem.classList.add('active');
            }

            this.windows.forEach(w => {
                if (w !== windowEl) {
                    w.classList.remove('active');
                    if (w.taskbarItem) w.taskbarItem.classList.remove('active');
                }
            });
        }

        minimizeWindow(windowEl) {
            windowEl.classList.add('minimized');
            windowEl.classList.remove('active');
            windowEl.style.display = 'none';
            if (windowEl.taskbarItem) {
                windowEl.taskbarItem.classList.remove('active');
            }
        }

        toggleMaximize(windowEl) {
            windowEl.classList.toggle('maximized');
        }

        closeWindow(windowEl) {
            windowEl.remove();
            this.windows = this.windows.filter(w => w !== windowEl);
            if (windowEl.taskbarItem) {
                windowEl.taskbarItem.remove();
            }
        }

        addTaskbarItem(windowEl, title, appName) {
            const item = document.createElement('div');
            item.className = 'taskbar-item';

            // Icon mapping
            let iconClass = 'fa-regular fa-window-maximize';
            if (appName === 'terminal') iconClass = 'fa-solid fa-terminal';
            if (appName === 'about') iconClass = 'fa-regular fa-user';
            if (appName === 'projects') iconClass = 'fa-regular fa-folder-open';
            if (appName === 'contact') iconClass = 'fa-regular fa-envelope';
            if (appName === 'snake') iconClass = 'fa-solid fa-gamepad';

            item.innerHTML = `<i class="${iconClass}"></i> <span>${title}</span>`;

            item.addEventListener('click', () => {
                if (windowEl.classList.contains('active') && !windowEl.classList.contains('minimized')) {
                    this.minimizeWindow(windowEl);
                } else {
                    this.focusWindow(windowEl);
                }
            });

            this.taskbarApps.appendChild(item);
            return item;
        }
    }

    // Matrix Rain Logic
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    let matrixInterval;
    let isMatrixRunning = false;

    function startMatrix() {
        if (isMatrixRunning) return;
        isMatrixRunning = true;
        canvas.style.display = 'block';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const rainDrops = [];
        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        matrixInterval = setInterval(draw, 30);

        const stopMatrix = (e) => {
            clearInterval(matrixInterval);
            isMatrixRunning = false;
            canvas.style.display = 'none';
            document.removeEventListener('keydown', stopMatrix);
            document.removeEventListener('click', stopMatrix);
        };

        // Small delay to prevent immediate closing if triggered by key press
        setTimeout(() => {
            document.addEventListener('keydown', stopMatrix);
            document.addEventListener('click', stopMatrix);
        }, 500);
    }

    // Snake Game Logic
    class SnakeGame {
        constructor(container) {
            this.container = container;
            this.boardSize = 20;
            this.snake = [{ x: 10, y: 10 }];
            this.food = this.generateFood();
            this.direction = 'right';
            this.nextDirection = 'right';
            this.score = 0;
            this.gameInterval = null;
            this.isGameOver = false;

            this.renderGame();
            this.startGame();
        }

        renderGame() {
            this.container.innerHTML = `
                    <div class="snake-game-container">
                    <div id="snake-board"></div>
                    <div class="snake-score">Score: <span id="score-val">0</span></div>
                    <div class="snake-controls-hint">Use Arrow Keys to Move</div>
                </div>
                    `;
            this.boardEl = this.container.querySelector('#snake-board');
            this.scoreEl = this.container.querySelector('#score-val');
            this.draw();

            // Global key listener with cleanup
            this.handleInputBound = this.handleInput.bind(this);
            document.addEventListener('keydown', this.handleInputBound);
        }

        startGame() {
            if (this.gameInterval) clearInterval(this.gameInterval);
            this.gameInterval = setInterval(() => this.update(), 150);
        }

        handleInput(e) {
            // Only handle input if the game container is visible and active
            if (!this.container.isConnected || this.container.closest('.window').style.display === 'none') {
                return;
            }

            // Prevent default scrolling for arrow keys
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }

            switch (e.key) {
                case 'ArrowUp': if (this.direction !== 'down') this.nextDirection = 'up'; break;
                case 'ArrowDown': if (this.direction !== 'up') this.nextDirection = 'down'; break;
                case 'ArrowLeft': if (this.direction !== 'right') this.nextDirection = 'left'; break;
                case 'ArrowRight': if (this.direction !== 'left') this.nextDirection = 'right'; break;
            }
        }

        update() {
            if (!this.container.isConnected) {
                clearInterval(this.gameInterval);
                document.removeEventListener('keydown', this.handleInputBound);
                return;
            }

            if (this.isGameOver) return;

            this.direction = this.nextDirection;
            const head = { ...this.snake[0] };

            switch (this.direction) {
                case 'up': head.y--; break;
                case 'down': head.y++; break;
                case 'left': head.x--; break;
                case 'right': head.x++; break;
            }

            if (this.checkCollision(head)) {
                this.gameOver();
                return;
            }

            this.snake.unshift(head);

            if (head.x === this.food.x && head.y === this.food.y) {
                this.score += 10;
                this.scoreEl.textContent = this.score;
                this.food = this.generateFood();
            } else {
                this.snake.pop();
            }

            this.draw();
        }

        checkCollision(head) {
            if (head.x < 0 || head.x >= this.boardSize || head.y < 0 || head.y >= this.boardSize) return true;
            for (let i = 1; i < this.snake.length; i++) {
                if (head.x === this.snake[i].x && head.y === this.snake[i].y) return true;
            }
            return false;
        }

        generateFood() {
            let food;
            while (true) {
                food = {
                    x: Math.floor(Math.random() * this.boardSize),
                    y: Math.floor(Math.random() * this.boardSize)
                };
                let onSnake = false;
                for (let segment of this.snake) {
                    if (segment.x === food.x && segment.y === food.y) {
                        onSnake = true;
                        break;
                    }
                }
                if (!onSnake) break;
            }
            return food;
        }

        draw() {
            this.boardEl.innerHTML = '';

            // Draw Snake
            this.snake.forEach(segment => {
                const div = document.createElement('div');
                div.style.gridColumnStart = segment.x + 1;
                div.style.gridRowStart = segment.y + 1;
                div.classList.add('snake-cell', 'snake-body');
                this.boardEl.appendChild(div);
            });

            // Draw Food
            const foodDiv = document.createElement('div');
            foodDiv.style.gridColumnStart = this.food.x + 1;
            foodDiv.style.gridRowStart = this.food.y + 1;
            foodDiv.classList.add('snake-cell', 'snake-food');
            this.boardEl.appendChild(foodDiv);
        }

        gameOver() {
            this.isGameOver = true;
            clearInterval(this.gameInterval);
            alert(`Game Over! Score: ${this.score} `);
        }
    }

    // Paint App
    class PaintApp {
        constructor(container) {
            this.container = container;
            this.color = '#000000';
            this.size = 5;
            this.isDrawing = false;
            this.render();
        }

        render() {
            this.container.innerHTML = `
                    <div class="paint-container">
                        <div class="paint-toolbar">
                            <input type="color" class="color-picker" value="${this.color}">
                                <input type="range" class="brush-size" min="1" max="50" value="${this.size}">
                                    <button class="clear-btn">Clear</button>
                                </div>
                                <canvas id="paint-canvas"></canvas>
                        </div>
                `;

            this.canvas = this.container.querySelector('#paint-canvas');
            this.ctx = this.canvas.getContext('2d');
            this.colorPicker = this.container.querySelector('.color-picker');
            this.sizeSlider = this.container.querySelector('.brush-size');
            this.clearBtn = this.container.querySelector('.clear-btn');

            // Resize canvas
            setTimeout(() => {
                this.canvas.width = this.canvas.offsetWidth;
                this.canvas.height = this.canvas.offsetHeight;
            }, 0);

            this.setupEvents();
        }

        setupEvents() {
            this.colorPicker.addEventListener('change', (e) => this.color = e.target.value);
            this.sizeSlider.addEventListener('input', (e) => this.size = e.target.value);
            this.clearBtn.addEventListener('click', () => this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height));

            this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
            this.canvas.addEventListener('mousemove', (e) => this.draw(e));
            this.canvas.addEventListener('mouseup', () => this.stopDrawing());
            this.canvas.addEventListener('mouseout', () => this.stopDrawing());
        }

        startDrawing(e) {
            this.isDrawing = true;
            this.ctx.beginPath();
            this.ctx.moveTo(e.offsetX, e.offsetY);
        }

        draw(e) {
            if (!this.isDrawing) return;
            this.ctx.lineWidth = this.size;
            this.ctx.lineCap = 'round';
            this.ctx.strokeStyle = this.color;
            this.ctx.lineTo(e.offsetX, e.offsetY);
            this.ctx.stroke();
        }

        stopDrawing() {
            this.isDrawing = false;
        }
    }

    // Calculator App
    class CalculatorApp {
        constructor(container) {
            this.container = container;
            this.displayValue = '0';
            this.firstOperand = null;
            this.waitingForSecondOperand = false;
            this.operator = null;
            this.render();
        }

        render() {
            this.container.innerHTML = `
                    <div class="calc-container">
                    <div class="calc-display">0</div>
                    <div class="calc-buttons">
                        <button class="calc-btn clear" style="grid-column: span 2">AC</button>
                        <button class="calc-btn operator" value="/">/</button>
                        <button class="calc-btn operator" value="*">*</button>
                        
                        <button class="calc-btn" value="7">7</button>
                        <button class="calc-btn" value="8">8</button>
                        <button class="calc-btn" value="9">9</button>
                        <button class="calc-btn operator" value="-">-</button>
                        
                        <button class="calc-btn" value="4">4</button>
                        <button class="calc-btn" value="5">5</button>
                        <button class="calc-btn" value="6">6</button>
                        <button class="calc-btn operator" value="+">+</button>
                        
                        <button class="calc-btn" value="1">1</button>
                        <button class="calc-btn" value="2">2</button>
                        <button class="calc-btn" value="3">3</button>
                        <button class="calc-btn equals" value="=" style="grid-row: span 2">=</button>
                        
                        <button class="calc-btn" value="0" style="grid-column: span 2">0</button>
                        <button class="calc-btn" value=".">.</button>
                    </div>
                </div>
                    `;
            this.display = this.container.querySelector('.calc-display');
            this.setupEvents();
        }

        setupEvents() {
            this.container.querySelectorAll('.calc-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const value = btn.value;
                    if (btn.classList.contains('operator')) {
                        this.handleOperator(value);
                    } else if (btn.classList.contains('equals')) {
                        this.handleEquals();
                    } else if (btn.classList.contains('clear')) {
                        this.resetCalculator();
                    } else {
                        this.inputDigit(value);
                    }
                    this.updateDisplay();
                });
            });
        }

        inputDigit(digit) {
            if (this.waitingForSecondOperand) {
                this.displayValue = digit;
                this.waitingForSecondOperand = false;
            } else {
                this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
            }
        }

        handleOperator(nextOperator) {
            const inputValue = parseFloat(this.displayValue);

            if (this.operator && this.waitingForSecondOperand) {
                this.operator = nextOperator;
                return;
            }

            if (this.firstOperand == null) {
                this.firstOperand = inputValue;
            } else if (this.operator) {
                const result = this.performCalculation(this.operator, this.firstOperand, inputValue);
                this.displayValue = String(result);
                this.firstOperand = result;
            }

            this.waitingForSecondOperand = true;
            this.operator = nextOperator;
        }

        performCalculation(operator, firstOperand, secondOperand) {
            switch (operator) {
                case '+': return firstOperand + secondOperand;
                case '-': return firstOperand - secondOperand;
                case '*': return firstOperand * secondOperand;
                case '/': return firstOperand / secondOperand;
                default: return secondOperand;
            }
        }

        handleEquals() {
            if (!this.operator) return;
            const inputValue = parseFloat(this.displayValue);
            const result = this.performCalculation(this.operator, this.firstOperand, inputValue);
            this.displayValue = String(result);
            this.firstOperand = null;
            this.operator = null;
            this.waitingForSecondOperand = false;
        }

        resetCalculator() {
            this.displayValue = '0';
            this.firstOperand = null;
            this.waitingForSecondOperand = false;
            this.operator = null;
        }

        updateDisplay() {
            this.display.textContent = this.displayValue;
        }
    }

    // Tic-Tac-Toe App
    class TicTacToeApp {
        constructor(container) {
            this.container = container;
            this.board = Array(9).fill(null);
            this.currentPlayer = 'X';
            this.isGameActive = true;
            this.render();
        }

        render() {
            this.container.innerHTML = `
                    <div class="ttt-container">
                    <div class="ttt-board">
                        ${this.board.map((_, i) => `<div class="ttt-cell" data-index="${i}"></div>`).join('')}
                    </div>
                    <div class="ttt-status">Player X's Turn</div>
                    <button class="ttt-reset">Reset Game</button>
                </div>
                    `;
            this.statusEl = this.container.querySelector('.ttt-status');
            this.setupEvents();
        }

        setupEvents() {
            this.container.querySelectorAll('.ttt-cell').forEach(cell => {
                cell.addEventListener('click', () => this.handleCellClick(cell));
            });
            this.container.querySelector('.ttt-reset').addEventListener('click', () => this.resetGame());
        }

        handleCellClick(cell) {
            const index = cell.dataset.index;
            if (this.board[index] || !this.isGameActive) return;

            this.board[index] = this.currentPlayer;
            cell.textContent = this.currentPlayer;
            cell.classList.add(this.currentPlayer.toLowerCase());

            if (this.checkWin()) {
                this.statusEl.textContent = `Player ${this.currentPlayer} Wins!`;
                this.isGameActive = false;
                return;
            }

            if (this.board.every(cell => cell)) {
                this.statusEl.textContent = "It's a Draw!";
                this.isGameActive = false;
                return;
            }

            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.statusEl.textContent = `Player ${this.currentPlayer} 's Turn`;
        }

        checkWin() {
            const winConditions = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            return winConditions.some(condition => {
                return condition.every(index => this.board[index] === this.currentPlayer);
            });
        }

        resetGame() {
            this.board = Array(9).fill(null);
            this.currentPlayer = 'X';
            this.isGameActive = true;
            this.render();
        }
    }

    const wm = new WindowManager();
});
