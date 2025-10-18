(function() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const message = document.getElementById('message')?.value || '';
        try {
            const res = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });
            const data = await res.json();
            if (res.ok && data?.ok) {
                alert('Message sent!');
                form.reset();
            } else {
                alert('Failed to send message.');
            }
        } catch (err) {
            alert('Network error sending message. Make sure the backend is running.');
        }
    });
})();