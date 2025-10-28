/**
 * Portfolio Interactivity Script
 * Handles showing and hiding detailed project sections and initializing icons.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Icon Initialization (assuming lucide is loaded in HTML)
    // Checks if lucide is available and initializes all icons on the page.
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // 2. Project Detail Functionality
    const viewProjectLinks = document.querySelectorAll('.view-project-link');
    const detailedProjectsContainer = document.getElementById('detailed-projects-container');
    const allDetailedProjects = document.querySelectorAll('.detailed-project');

    /**
     * Hides all detailed project sections and the main container.
     */
    function hideAllDetailedProjects() {
        allDetailedProjects.forEach(project => {
            project.classList.remove('active');
            // Ensure display is set to none to hide it completely from layout flow
            project.style.display = 'none'; 
        });
        // Hide the container itself to prevent layout shifts
        detailedProjectsContainer.style.display = 'none'; 
    }

    // Initially hide all detailed project sections when the page loads
    hideAllDetailedProjects();

    /**
     * Event listener for clicking "View Details" links.
     */
    viewProjectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            // Get the target ID from the href attribute (e.g., 'project-vedic')
            const targetId = link.getAttribute('href').substring(1); 
            const targetProject = document.getElementById(targetId);

            if (targetProject) {
                hideAllDetailedProjects(); // Hide any previously active project

                // 3. Show the target project and scroll to it
                detailedProjectsContainer.style.display = 'block'; 
                targetProject.classList.add('active');
                targetProject.style.display = 'block'; 
                
                // Smooth scroll to the project details
                targetProject.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
            }
        });
    });
});

// Expose hide function globally for use by the project's close buttons (X icon)
function hideAllDetailedProjects() {
    const detailedProjectsContainer = document.getElementById('detailed-projects-container');
    const allDetailedProjects = document.querySelectorAll('.detailed-project');

    allDetailedProjects.forEach(project => {
        project.classList.remove('active');
        project.style.display = 'none';
    });
    detailedProjectsContainer.style.display = 'none';
}
