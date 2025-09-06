  function openMenu() {
        document.getElementById("overlayMenu").style.display = "flex";
      }
      function closeMenu() {
        document.getElementById("overlayMenu").style.display = "none";
      }

      // JavaScript for the scrolling company logos
        document.addEventListener('DOMContentLoaded', function() {

    // All the rest of your code should be inside this event listener
    // Add click functionality to Apply buttons
    const applyButtons = document.querySelectorAll('.apply-btn');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.closest('.job-card').querySelector('.job-title').textContent;
            alert(`Applying for: ${jobTitle}`);
        });
    });
    
 // Add functionality to Save buttons
const saveButtons = document.querySelectorAll('.save-btn');
saveButtons.forEach(button => {
    button.addEventListener('click', function() {
        const jobId = this.getAttribute('data-job-id');
        const jobTitle = this.closest('.job-card').querySelector('.job-title').textContent;
        const icon = this.querySelector('i');
        
        // Get saved jobs from localStorage
        let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
        
        if (savedJobs.includes(jobId)) {
            // Remove from saved jobs
            savedJobs = savedJobs.filter(id => id !== jobId);
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.classList.remove('saved');
            alert(`Removed "${jobTitle}" from your saved jobs`);
        } else {
            // Add to saved jobs
            savedJobs.push(jobId);
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.classList.add('saved');
            alert(`Saved "${jobTitle}" to your saved jobs! View them later in your profile.`);
        }
        
        // Save back to localStorage
        localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    });
});

// 1. Save functionality
function initializeSavedJobs() {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    
    saveButtons.forEach(button => {
        const jobId = button.getAttribute('data-job-id');
        const icon = button.querySelector('i');
        
        if (savedJobs.includes(jobId)) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            button.classList.add('saved');
        }
    });
}

// 2. Search functionality
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const jobCards = document.querySelectorAll('.job-card');
const noJobsMessage = document.getElementById('no-jobs-message');

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let foundJobs = false;
    
    jobCards.forEach(card => {
        const jobTitle = card.getAttribute('data-job-title').toLowerCase();
        const company = card.getAttribute('data-company').toLowerCase();
        
        if (jobTitle.includes(searchTerm) || company.includes(searchTerm)) {
            card.style.display = 'flex';
            foundJobs = true;
            
            // Highlight the matching text and scroll to it
            if (searchTerm) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('highlight');
                
                // Remove highlight after 2 seconds
                setTimeout(() => {
                    card.classList.remove('highlight');
                }, 2000);
            }
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show message if no jobs found
    if (!foundJobs && searchTerm) {
        noJobsMessage.style.display = 'block';
    } else {
        noJobsMessage.style.display = 'none';
    }
}

// 3. Continuous company scroll
// 3. Continuous company scroll
const scrollTrack = document.querySelector('.scroll-track');
const companyItems = document.querySelectorAll('.company-item');

// Remove any existing duplicates first (in case page is reloaded)
const existingItems = scrollTrack.querySelectorAll('.company-item');
if (existingItems.length > companyItems.length) {
    for (let i = companyItems.length; i < existingItems.length; i++) {
        existingItems[i].remove();
    }
}

// Duplicate all company items for seamless scrolling
companyItems.forEach(item => {
    const clone = item.cloneNode(true);
    scrollTrack.appendChild(clone);
});

// Calculate proper animation duration based on number of items
const totalItems = companyItems.length * 2;
const animationDuration = totalItems * 2.5; // 1.5 seconds per item

// Apply the animation duration
scrollTrack.style.animationDuration = `${animationDuration}s`;

// Initialize the saved jobs when page loads
initializeSavedJobs();
});