// Yandex.Metrica Configuration for AI Automation Russia
// Replace 'XXXXXXXX' with your actual Yandex.Metrica counter ID

(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],
    k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

// Initialize Yandex.Metrica with your counter ID
ym('XXXXXXXX', 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    ecommerce: "dataLayer",
    trackHash: true
});

// Custom event tracking functions for AI Automation
window.trackYandexEvent = function(eventName, params = {}) {
    if (typeof ym !== 'undefined') {
        ym('XXXXXXXX', 'reachGoal', eventName, params);
    }
};

// Track specific AI automation events
window.trackPDFDownload = function(pdfType = 'ai_guide') {
    window.trackYandexEvent('PDF_DOWNLOAD', {
        pdf_type: pdfType,
        timestamp: new Date().toISOString()
    });
};

window.trackConsultationRequest = function(consultationType = 'ai_strategy') {
    window.trackYandexEvent('CONSULTATION_REQUEST', {
        consultation_type: consultationType,
        timestamp: new Date().toISOString()
    });
};

window.trackFormSubmission = function(formType = 'contact') {
    window.trackYandexEvent('FORM_SUBMISSION', {
        form_type: formType,
        timestamp: new Date().toISOString()
    });
};

// Setup instructions
console.log('🔧 Yandex.Metrica Setup Required:');
console.log('1. Create counter at https://metrica.yandex.ru/');
console.log('2. Replace XXXXXXXX with your counter ID in this file');
console.log('3. Add this script to your index.html head section');
console.log('4. Add noscript tag for users with JS disabled');