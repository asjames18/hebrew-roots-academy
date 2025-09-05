// Hebrew Roots Academy - Interactive JavaScript

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Hebrew Alphabet Data
const hebrewAlphabet = [
    { letter: 'א', name: 'Aleph', sound: 'silent' },
    { letter: 'ב', name: 'Bet', sound: 'b/v' },
    { letter: 'ג', name: 'Gimel', sound: 'g' },
    { letter: 'ד', name: 'Dalet', sound: 'd' },
    { letter: 'ה', name: 'He', sound: 'h' },
    { letter: 'ו', name: 'Vav', sound: 'v/o/u' },
    { letter: 'ז', name: 'Zayin', sound: 'z' },
    { letter: 'ח', name: 'Chet', sound: 'ch' },
    { letter: 'ט', name: 'Tet', sound: 't' },
    { letter: 'י', name: 'Yod', sound: 'y/i' },
    { letter: 'כ', name: 'Kaf', sound: 'k/kh' },
    { letter: 'ל', name: 'Lamed', sound: 'l' },
    { letter: 'מ', name: 'Mem', sound: 'm' },
    { letter: 'נ', name: 'Nun', sound: 'n' },
    { letter: 'ס', name: 'Samekh', sound: 's' },
    { letter: 'ע', name: 'Ayin', sound: 'silent' },
    { letter: 'פ', name: 'Pe', sound: 'p/f' },
    { letter: 'צ', name: 'Tsade', sound: 'ts' },
    { letter: 'ק', name: 'Qof', sound: 'q' },
    { letter: 'ר', name: 'Resh', sound: 'r' },
    { letter: 'ש', name: 'Shin', sound: 'sh/s' },
    { letter: 'ת', name: 'Tav', sound: 't' }
];

// Sacred Names Data
const sacredNames = [
    {
        hebrew: 'יהוה',
        transliteration: 'YAHUAH',
        meaning: 'The Most High',
        description: 'The sacred name of the Creator, used throughout Scripture',
        category: 'namesOfYah'
    },
    {
        hebrew: 'רוח הקודש',
        transliteration: 'RUACH HAQODESH',
        meaning: 'Holy Spirit',
        description: 'The set-apart spirit of YAHUAH',
        category: 'namesOfYah'
    },
    {
        hebrew: 'יהושע המשיח',
        transliteration: 'YAHUSHA HA\'MASHIACH',
        meaning: 'YAHUSHA the Messiah',
        description: 'The anointed one, our savior',
        category: 'namesOfYah'
    },
    {
        hebrew: 'אל עליון',
        transliteration: 'EL ELYON',
        meaning: 'God Most High',
        description: 'Used in warfare prayers and spiritual authority',
        category: 'namesOfYah'
    },
    {
        hebrew: 'אל שדי',
        transliteration: 'EL SHADDAI',
        meaning: 'All-Sufficient One',
        description: 'Power name—used in covenant with Abraham',
        category: 'namesOfYah'
    },
    {
        hebrew: 'אדוני',
        transliteration: 'ADONAI',
        meaning: 'My Master',
        description: 'Reverent title for YAHUAH',
        category: 'namesOfYah'
    },
    {
        hebrew: 'בורא',
        transliteration: 'Borei',
        meaning: 'Creator',
        description: 'Seen in Genesis creation account',
        category: 'namesOfYah'
    },
    {
        hebrew: 'יָשַׁע',
        transliteration: 'YASHA',
        meaning: 'To save/deliver',
        description: 'Root word in Yahusha\'s name',
        category: 'namesOfYah'
    }
];

// Prophets Data
const prophets = [
    { hebrew: 'משה', transliteration: 'Moshe', meaning: 'Moses', scripture: 'Exodus 3:1' },
    { hebrew: 'אליהו', transliteration: 'Eliyahu', meaning: 'Elijah', scripture: '1 Kings 17:1' },
    { hebrew: 'ישעיהו', transliteration: 'Yeshayahu', meaning: 'Isaiah', scripture: 'Isaiah 1:1' },
    { hebrew: 'ירמיהו', transliteration: 'Yirmeyahu', meaning: 'Jeremiah', scripture: 'Jeremiah 1:1' },
    { hebrew: 'יחזקאל', transliteration: 'Yechezkel', meaning: 'Ezekiel', scripture: 'Ezekiel 1:1' },
    { hebrew: 'דניאל', transliteration: 'Daniel', meaning: 'Daniel', scripture: 'Daniel 1:1' }
];

// Patriarchs Data
const patriarchs = [
    { hebrew: 'אברהם', transliteration: 'Avraham', meaning: 'Abraham', scripture: 'Genesis 17:5' },
    { hebrew: 'יצחק', transliteration: 'Yitzchak', meaning: 'Isaac', scripture: 'Genesis 21:3' },
    { hebrew: 'יעקב', transliteration: 'Ya\'akov', meaning: 'Jacob', scripture: 'Genesis 25:26' },
    { hebrew: 'יוסף', transliteration: 'Yosef', meaning: 'Joseph', scripture: 'Genesis 30:24' },
    { hebrew: 'דוד', transliteration: 'David', meaning: 'David', scripture: '1 Samuel 16:13' },
    { hebrew: 'שלמה', transliteration: 'Shlomo', meaning: 'Solomon', scripture: '1 Kings 1:39' }
];

// Tribes Data
const tribes = [
    { hebrew: 'יהודה', transliteration: 'Yehudah', meaning: 'Judah', scripture: 'Genesis 29:35' },
    { hebrew: 'ראובן', transliteration: 'Re\'uven', meaning: 'Reuben', scripture: 'Genesis 29:32' },
    { hebrew: 'שמעון', transliteration: 'Shimon', meaning: 'Simeon', scripture: 'Genesis 29:33' },
    { hebrew: 'לוי', transliteration: 'Levi', meaning: 'Levi', scripture: 'Genesis 29:34' },
    { hebrew: 'זבולון', transliteration: 'Zevulun', meaning: 'Zebulun', scripture: 'Genesis 30:20' },
    { hebrew: 'יששכר', transliteration: 'Yissachar', meaning: 'Issachar', scripture: 'Genesis 30:18' },
    { hebrew: 'דן', transliteration: 'Dan', meaning: 'Dan', scripture: 'Genesis 30:6' },
    { hebrew: 'נפתלי', transliteration: 'Naftali', meaning: 'Naphtali', scripture: 'Genesis 30:8' },
    { hebrew: 'גד', transliteration: 'Gad', meaning: 'Gad', scripture: 'Genesis 30:11' },
    { hebrew: 'אשר', transliteration: 'Asher', meaning: 'Asher', scripture: 'Genesis 30:13' },
    { hebrew: 'בנימין', transliteration: 'Binyamin', meaning: 'Benjamin', scripture: 'Genesis 35:18' },
    { hebrew: 'אפרים', transliteration: 'Efrayim', meaning: 'Ephraim', scripture: 'Genesis 41:52' }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeAlphabet();
    initializeFlashcards();
    initializeNames();
    initializeProgress();
    initializeJournal();
});

// Initialize Hebrew Alphabet
function initializeAlphabet() {
    const alphabetGrid = document.getElementById('alphabetGrid');
    alphabetGrid.innerHTML = '';
    
    hebrewAlphabet.forEach(letter => {
        const card = document.createElement('div');
        card.className = 'alphabet-card';
        card.innerHTML = `
            <div class="hebrew">${letter.letter}</div>
            <div class="transliteration">${letter.name}</div>
        `;
        
        card.addEventListener('click', () => {
            // Add click animation
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
            
            // Show pronunciation info
            showPronunciation(letter);
        });
        
        alphabetGrid.appendChild(card);
    });
}

// Show pronunciation information
function showPronunciation(letter) {
    const message = `Letter: ${letter.letter}\nName: ${letter.name}\nSound: ${letter.sound}`;
    alert(message);
}

// Initialize Flashcards
function initializeFlashcards() {
    let currentCardIndex = 0;
    const card = document.getElementById('currentCard');
    const cardTitle = document.getElementById('cardTitle');
    const cardHebrew = document.getElementById('cardHebrew');
    const cardMeaning = document.getElementById('cardMeaning');
    const cardDescription = document.getElementById('cardDescription');
    
    const prevBtn = document.getElementById('prevCard');
    const nextBtn = document.getElementById('nextCard');
    const flipBtn = document.getElementById('flipCard');
    
    function updateCard() {
        const currentName = sacredNames[currentCardIndex];
        cardTitle.textContent = currentName.transliteration;
        cardHebrew.textContent = currentName.hebrew;
        cardMeaning.textContent = currentName.meaning;
        cardDescription.textContent = currentName.description;
        card.classList.remove('flipped');
    }
    
    prevBtn.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + sacredNames.length) % sacredNames.length;
        updateCard();
    });
    
    nextBtn.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % sacredNames.length;
        updateCard();
    });
    
    flipBtn.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    
    // Initialize with first card
    updateCard();
}

// Initialize Names Sections
function initializeNames() {
    initializeNamesCategory('namesOfYah', sacredNames);
    initializeNamesCategory('prophets', prophets);
    initializeNamesCategory('patriarchs', patriarchs);
    initializeNamesCategory('tribes', tribes);
}

function initializeNamesCategory(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'name-card';
        card.innerHTML = `
            <div class="hebrew">${item.hebrew}</div>
            <div class="transliteration">${item.transliteration}</div>
            <div class="meaning">${item.meaning}</div>
            <div class="scripture">${item.scripture}</div>
        `;
        
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        });
        
        container.appendChild(card);
    });
}

// Initialize Progress Tracking
function initializeProgress() {
    // Simulate progress data (in a real app, this would come from a database)
    const progressData = {
        vocabulary: 35,
        streak: 7,
        xp: 1250
    };
    
    // Update progress bar
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = `${progressData.vocabulary}%`;
    
    // Update streak and XP displays
    document.querySelector('.streak-number').textContent = progressData.streak;
    document.querySelector('.xp-number').textContent = progressData.xp.toLocaleString();
}

// Initialize Journal
function initializeJournal() {
    const journalText = document.getElementById('journalText');
    const saveBtn = document.querySelector('.save-journal');
    
    // Load saved journal entry
    const savedEntry = localStorage.getItem('hebrewJournal');
    if (savedEntry) {
        journalText.value = savedEntry;
    }
    
    saveBtn.addEventListener('click', () => {
        const entry = journalText.value.trim();
        if (entry) {
            localStorage.setItem('hebrewJournal', entry);
            showNotification('Journal entry saved!');
        }
    });
}

// Audio functionality (placeholder - would need actual audio files)
document.querySelectorAll('.play-audio').forEach(button => {
    button.addEventListener('click', function() {
        const word = this.getAttribute('data-word');
        showNotification(`Playing pronunciation for: ${word}`);
        // In a real implementation, this would play actual audio
    });
});

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #d4af37;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.lesson-module, .name-card, .resource-card, .progress-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Space bar to flip flashcard
    if (e.code === 'Space' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const flipBtn = document.getElementById('flipCard');
        if (flipBtn) flipBtn.click();
    }
    
    // Arrow keys for navigation
    if (e.code === 'ArrowLeft') {
        const prevBtn = document.getElementById('prevCard');
        if (prevBtn) prevBtn.click();
    }
    
    if (e.code === 'ArrowRight') {
        const nextBtn = document.getElementById('nextCard');
        if (nextBtn) nextBtn.click();
    }
});

// Hebrew keyboard functionality (placeholder)
function showHebrewKeyboard() {
    showNotification('Hebrew keyboard would open here for typing practice');
}

// Name restoration tool (placeholder)
function restoreName() {
    const name = prompt('Enter your name to see its Hebrew equivalent:');
    if (name) {
        showNotification(`Hebrew equivalent for "${name}" would be displayed here`);
    }
}

// Add Hebrew keyboard and name restoration buttons to the dashboard
document.addEventListener('DOMContentLoaded', function() {
    const dashboard = document.querySelector('.dashboard-section .container');
    
    const additionalTools = document.createElement('div');
    additionalTools.className = 'additional-tools';
    additionalTools.innerHTML = `
        <div class="tool-buttons">
            <button onclick="showHebrewKeyboard()" class="tool-btn">Hebrew Keyboard</button>
            <button onclick="restoreName()" class="tool-btn">Name Restoration</button>
        </div>
    `;
    
    // Add styles for tool buttons
    const toolStyles = document.createElement('style');
    toolStyles.textContent = `
        .additional-tools {
            margin-top: 2rem;
            text-align: center;
        }
        .tool-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        .tool-btn {
            background: linear-gradient(135deg, #1a365d, #2c5aa0);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        .tool-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(26, 54, 93, 0.3);
        }
    `;
    document.head.appendChild(toolStyles);
    
    dashboard.appendChild(additionalTools);
});

// Weekly word rotation (placeholder for dynamic content)
function updateWeeklyWord() {
    const weeklyWords = [
        {
            hebrew: 'שָׁלוֹם',
            transliteration: 'Shalom',
            meaning: 'Peace, completeness, wholeness',
            scripture: 'Numbers 6:22-26'
        },
        {
            hebrew: 'אֱמוּנָה',
            transliteration: 'Emunah',
            meaning: 'Faith, faithfulness, trust',
            scripture: 'Habakkuk 2:4'
        },
        {
            hebrew: 'חֶסֶד',
            transliteration: 'Chesed',
            meaning: 'Loving-kindness, mercy',
            scripture: 'Psalm 136:1'
        }
    ];
    
    // In a real app, this would rotate weekly
    const randomWord = weeklyWords[Math.floor(Math.random() * weeklyWords.length)];
    
    document.querySelector('.word-hebrew').textContent = randomWord.hebrew;
    document.querySelector('.word-transliteration').textContent = randomWord.transliteration;
    document.querySelector('.word-meaning').textContent = randomWord.meaning;
}

// Initialize weekly word
document.addEventListener('DOMContentLoaded', updateWeeklyWord);