document.addEventListener('DOMContentLoaded', () => {
    const paperCard = document.getElementById('paper-versions-card');
    const modal = document.getElementById('version-modal');
    const closeBtn = document.getElementById('close-modal');

    // Open Modal
    paperCard.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior if it were an anchor
        modal.classList.add('active');
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close on Click Outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});
