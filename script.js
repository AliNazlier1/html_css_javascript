document.addEventListener('DOMContentLoaded', () => {
    // Video yükleme durumunu kontrol et
    const iframe = document.querySelector('iframe');
    const fallbackMessage = document.querySelector('.fallback-message');

    function checkVideoLoading() {
        try {
            if (iframe.contentWindow) {
                console.log('Video yüklendi');
                fallbackMessage.style.display = 'none';
            }
        } catch (error) {
            console.error('Video yüklenemedi:', error);
            fallbackMessage.style.display = 'block';
        }
    }

    // Video yükleme durumunu kontrol et
    iframe.addEventListener('load', checkVideoLoading);
    setTimeout(checkVideoLoading, 3000); // 3 saniye sonra tekrar kontrol et

    // Add hover effect to the video container
    const videoContainer = document.querySelector('.video-container');
    videoContainer.addEventListener('mouseover', () => {
        videoContainer.style.transform = 'scale(1.02)';
        videoContainer.style.transition = 'transform 0.3s ease';
    });
    
    videoContainer.addEventListener('mouseout', () => {
        videoContainer.style.transform = 'scale(1)';
    });

    // Add hover effect to the content section
    const content = document.querySelector('.content');
    content.addEventListener('mouseover', () => {
        content.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        content.style.transition = 'background-color 0.3s ease';
    });

    content.addEventListener('mouseout', () => {
        content.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    });

    // Animate title with a typing effect
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';
    let index = 0;

    function typeText() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    setTimeout(typeText, 1000);
});