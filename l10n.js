const translations = {
    "en-US": {
        "greeting": "I'm writing in English",
        "farewell": "This is more English"
    },
    "zh-TW": {
        "greeting": "我正在用中文寫作",
        "farewell": "這是更多中文文本"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById('language-toggle');
    const languageText = document.getElementById('language-text');

    languageToggle.addEventListener('change', () => {
        const language = languageToggle.checked ? 'en-US' : 'zh-TW';
        localStorage.setItem('preferredLanguage', language);
        languageText.textContent = language === 'en-US' ? 'English' : '中文';
        loadLanguage(language);
    });

    function loadLanguage(language) {
        const translation = translations[language];
        if (translation) {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translation[key]) {
                    element.textContent = translation[key];
                }
            });
        }
    }

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'zh-TW';
    languageToggle.checked = (preferredLanguage === 'en-US');
    languageText.textContent = preferredLanguage === 'en-US' ? 'English' : '中文';
    loadLanguage(preferredLanguage);
});

