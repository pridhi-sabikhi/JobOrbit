document.addEventListener("DOMContentLoaded", function () {
  // Apply button functionality
  const applyButtons = document.querySelectorAll(".apply-btn");
  applyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const jobTitle = this.closest(".job-card").querySelector(".job-title")
        .textContent;
      alert(`Applying for: ${jobTitle}`);
    });
  });

  // Save button functionality
  const saveButtons = document.querySelectorAll(".save-btn");
  saveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const jobId = this.getAttribute("data-job-id");
      const jobTitle = this.closest(".job-card").querySelector(".job-title")
        .textContent;
      const icon = this.querySelector("i");

      let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

      if (savedJobs.includes(jobId)) {
        // Remove from saved
        savedJobs = savedJobs.filter((id) => id !== jobId);
        icon.classList.remove("fas");
        icon.classList.add("far");
        this.classList.remove("saved");
        this.innerHTML = <i class="far fa-bookmark"></i> ;
      } else {
        // Add to saved
        savedJobs.push(jobId);
        icon.classList.remove("far");
        icon.classList.add("fas");
        this.classList.add("saved");
        this.innerHTML = <i class="fas fa-bookmark"></i> ;
      }

      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      updateSavedCount();
      upadatejobs();
    });
  });

  // Initialize saved jobs
  function initializeSavedJobs() {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    saveButtons.forEach((button) => {
      const jobId = button.getAttribute("data-job-id");
      const icon = button.querySelector("i");
      if (savedJobs.includes(jobId)) {
        icon.classList.remove("far");
        icon.classList.add("fas");
        button.classList.add("saved");
      }
    });
    updateSavedCount();
  }

  // Update saved jobs counter
  function updateSavedCount() {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const savedCount = document.getElementById("savedCount");
    if (savedCount) {
      savedCount.textContent = savedJobs.length;
    }
  }

  // Search functionality
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const jobCards = document.querySelectorAll(".job-card");
  const noJobsMessage = document.getElementById("no-jobs-message");

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let foundJobs = false;

    jobCards.forEach((card) => {
      const jobTitle = card.getAttribute("data-job-title").toLowerCase();
      const company = card.getAttribute("data-company").toLowerCase();

      if (jobTitle.includes(searchTerm) || company.includes(searchTerm)) {
        card.style.display = "flex";
        foundJobs = true;
        if (searchTerm) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("highlight");
          setTimeout(() => card.classList.remove("highlight"), 2000);
        }
      } else {
        card.style.display = "none";
      }
    });

    noJobsMessage.style.display = foundJobs ? "none" : "block";
  }

  // Continuous scroll
  const scrollTrack = document.querySelector(".scroll-track");
  const companyItems = document.querySelectorAll(".company-item");

  companyItems.forEach((item) => {
    const clone = item.cloneNode(true);
    scrollTrack.appendChild(clone);
  });

  const totalItems = companyItems.length * 3;
  const animationDuration = totalItems * 3.5;
  scrollTrack.style.animationDuration = `${animationDuration}s`;

  // Init
  initializeSavedJobs();
});