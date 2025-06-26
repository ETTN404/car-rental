    const leftContents = [
      "<h1 class='AEtitle'>Lamborghini Urus Blue 2025</h1><div><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p><p>Experience unmatched performance with the Lamborghini Urus in Dubai.</p></div>",
      "<h1 class='AEtitle'>Ferrari Roma 2024</h1><div><p>Cruise in elegance and speed through the UAE with the Ferrari Roma.</p></div>",
      "<h1 class='AEtitle'>Rolls-Royce Cullinan Black Badge</h1><div><p>Luxury and class redefined for premium travelers.</p></div>"
    ];
    let currentContentIndex = 0;

    function loadLeftContent(index) {
      const contentBox = document.getElementById("left-content");
      contentBox.innerHTML = leftContents[index];
    }

    const recentPosts = [
      "Make Adventures Made Better with an SUV Rental in Dubai UAE",
      "Top 5 Ways Renting Supercar in Dubai for Your Business Trip",
      "Top 8 Luxury Car Models Spotted on Dubai’s Roads in 2025",
      "10 Mistakes to Avoid While Driving in United Arab Emirates",
      "Top 5 Luxury Car Brands Most Loved in United Arab Emirates"
    ];

    const recentComments = [
      "Best SUVs for Desert Exploration in Dubai | Blog on SUV Car Rental in Dubai, UAE",
      "Off-Roading Adventures...",
      "Pro Tips for Seamless Luxury Car Rental in Dubai...",
      "Tips for Booking the Best Luxury Car Rental in Dubai...",
      "Road Trips In Dubai In Premium Luxury Cars Rented..."
    ];

    const archives = [
      "June 2025", "May 2025", "April 2025", "March 2025",
      "February 2025", "January 2025", "December 2024",
      "November 2024", "October 2024", "September 2024",
      "August 2024", "July 2024", "June 2024", "May 2024",
      "March 2024", "February 2024", "January 2024",
      "December 2023", "November 2023", "October 2023"
    ];

    const categories = [
      "Uncategorized", "Sports Car Rental in Dubai", "Convertible Car Rental in Dubai",
      "Best Car Rental Company in Dubai", "SUV Car Rental Dubai",
      "Best Luxury Car Rental in Dubai", "Ferrari rental in Dubai",
      "Premium Car Rental Dubai", "Best Car Rental in Dubai",
      "Convertible Car Hire Dubai", "Best Supercar Rental Dubai",
      "Best Supercars for Rent in Dubai", "SUV Car Rentals in Dubai",
      "Sports Car Rentals in Dubai", "Zero Deposit Car Rentals In Dubai",
      "Rent a Convertible Car In Dubai", "Car Rental No Deposit",
      "Car Rental Dubai", "Car Rental Dubai No Deposit",
      "Rent a Car in Dubai Without a Deposit", "Luxury Car Rental Dubai"
    ];

    function renderList(data, containerSelector) {
      const container = document.querySelector(containerSelector);
      container.innerHTML = "";
      data.forEach(item => {
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = item;
        container.appendChild(a);
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      renderList(recentPosts, "#recent-posts");
      renderList(recentComments, "#recent-comments");
      renderList(archives, "#archives");
      renderList(categories, "#categories");
      loadLeftContent(currentContentIndex);

      document.querySelector(".prevPost").addEventListener("click", e => {
        e.preventDefault();
        currentContentIndex = (currentContentIndex - 1 + leftContents.length) % leftContents.length;
        loadLeftContent(currentContentIndex);
      });

      document.querySelector(".nextPost").addEventListener("click", e => {
        e.preventDefault();
        currentContentIndex = (currentContentIndex + 1) % leftContents.length;
        loadLeftContent(currentContentIndex);
      });
    });