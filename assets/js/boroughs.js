const boroughData = {
  manhattan: {
    name: "Manhattan",
    tagline: "Fine dining & iconic tasting menus",
    reviewTitle: "Critic voices in Manhattan",
    reviewTagline: "Fresh dispatches from Midtown to the Village",
    restaurants: [
      {
        name: "Celestia",
        neighborhood: "Flatiron",
        cuisine: "Modern American",
        highlight: "Seasonal tasting menu with Hudson Valley produce",
        review:
          "“The chef's table experience at Celestia captures the energy of Manhattan dining with precision and warmth.”",
        rating: "4.9 / 5",
        link: "https://example.com/celestia"
      },
      {
        name: "Marina Verde",
        neighborhood: "SoHo",
        cuisine: "Coastal Italian",
        highlight: "House-made pasta, seafood crudo bar, and rooftop aperitivo hour",
        review:
          "“From the first bite of lemon-ricotta agnolotti to the panoramic skyline views, every detail feels curated.”",
        rating: "4.8 / 5",
        link: "https://example.com/marina-verde"
      },
      {
        name: "Midnight Market",
        neighborhood: "Lower East Side",
        cuisine: "Global Small Plates",
        highlight: "Chef-driven night market favorites and vinyl DJ sets",
        review:
          "“A riot of flavors that nod to New York's immigrant communities—perfect for adventurous late-night dining.”",
        rating: "4.7 / 5",
        link: "https://example.com/midnight-market"
      }
    ],
    reviews: [
      {
        critic: "Janelle Kim",
        outlet: "City Feast Magazine",
        excerpt:
          "Celestia layers exacting technique with cheeky nods to Manhattan's skyline—every course is a postcard from downtown.",
        tip: "Reserve the chef's counter for the caviar croissant amuse.",
        link: "https://example.com/reviews/celestia"
      },
      {
        critic: "Marcus Doyle",
        outlet: "Midnight Bite",
        excerpt:
          "Marina Verde's rooftop aperitivo keeps SoHo glowing after sunset with ethereal crudo and spritzes.",
        tip: "Ask for the off-menu basil limoncello spritz.",
        link: "https://example.com/reviews/marina-verde"
      },
      {
        critic: "Priya Desai",
        outlet: "Dining Line",
        excerpt:
          "Midnight Market proves the late-night scene still surprises—global snacks, neon lights, and vinyl bliss.",
        tip: "Drop by after 11pm for the DJ-led dessert hour.",
        link: "https://example.com/reviews/midnight-market"
      }
    ]
  },
  brooklyn: {
    name: "Brooklyn",
    tagline: "Neighborhood gems & inventive comfort food",
    reviewTitle: "Brooklyn critic highlights",
    reviewTagline: "Neighborhood voices from Williamsburg to Bay Ridge",
    restaurants: [
      {
        name: "Stone & Sprout",
        neighborhood: "Fort Greene",
        cuisine: "Plant-forward",
        highlight: "Wood-fired vegetables and Brooklyn-roasted coffee program",
        review:
          "“A cozy room where smoky carrots and ember-roasted cabbage redefine vegetable-forward cooking.”",
        rating: "4.8 / 5",
        link: "https://example.com/stone-sprout"
      },
      {
        name: "Kings County Smokehouse",
        neighborhood: "Gowanus",
        cuisine: "BBQ & Smokehouse",
        highlight: "Brisket sandwiches, pit beans, and whiskey pairings",
        review:
          "“Brooklyn's new temple of smoke—we loved the peppery bark and house-fermented hot sauce.”",
        rating: "4.7 / 5",
        link: "https://example.com/kings-county"
      },
      {
        name: "Pier 14 Oyster Club",
        neighborhood: "Greenpoint",
        cuisine: "Seafood",
        highlight: "Daily raw bar selection and Champagne pairings",
        review:
          "“A breezy waterfront escape with pristine oysters and a lively neighborhood crowd.”",
        rating: "4.6 / 5",
        link: "https://example.com/pier-14"
      }
    ],
    reviews: [
      {
        critic: "Eloise Carter",
        outlet: "Kings County Palate",
        excerpt:
          "Stone & Sprout wood-roasts vegetables until they sing—Brooklyn's veg-forward scene has a new hero.",
        tip: "Start with the embered carrot tartare on rye.",
        link: "https://example.com/reviews/stone-sprout"
      },
      {
        critic: "Luis Herrera",
        outlet: "Smoke Signals",
        excerpt:
          "Kings County Smokehouse nails Central Texas technique with borough swagger and a whiskey list to match.",
        tip: "Split the brisket board and the fermented habanero sauce.",
        link: "https://example.com/reviews/kings-county"
      },
      {
        critic: "Nora Pierce",
        outlet: "Harbor Eats",
        excerpt:
          "Pier 14 Oyster Club channels a seaside holiday—sparkling wine, briny bivalves, and skyline views.",
        tip: "Order the tide-to-table oyster flight.",
        link: "https://example.com/reviews/pier-14"
      }
    ]
  },
  queens: {
    name: "Queens",
    tagline: "Global flavors & family-run favorites",
    reviewTitle: "Queens dining dispatch",
    reviewTagline: "Critics celebrating the borough's global table",
    restaurants: [
      {
        name: "Tiffin Trail",
        neighborhood: "Jackson Heights",
        cuisine: "Indian Regional",
        highlight: "Thali flights spanning Gujarat to Kerala",
        review:
          "“This family-run canteen layers spice and storytelling across every course.”",
        rating: "4.9 / 5",
        link: "https://example.com/tiffin-trail"
      },
      {
        name: "Arepa Atlas",
        neighborhood: "Astoria",
        cuisine: "Venezuelan",
        highlight: "Stuffed arepas, papelón cocktails, and weekend vinyl brunch",
        review:
          "“Queens at its best: bold, generous plates and a soundtrack that keeps you lingering.”",
        rating: "4.8 / 5",
        link: "https://example.com/arepa-atlas"
      },
      {
        name: "Han River House",
        neighborhood: "Flushing",
        cuisine: "Korean",
        highlight: "Table-top barbecue with dry-aged bulgogi and kimchi flights",
        review:
          "“Elevates Korean barbecue with attentive service and immaculate side dishes.”",
        rating: "4.7 / 5",
        link: "https://example.com/han-river"
      }
    ],
    reviews: [
      {
        critic: "Sonia Patel",
        outlet: "Spice Route Journal",
        excerpt:
          "Tiffin Trail's thali voyage is a geography lesson in spice, each course plated with familial pride.",
        tip: "Upgrade to the chef's rotating regional dessert.",
        link: "https://example.com/reviews/tiffin-trail"
      },
      {
        critic: "Diego Marrero",
        outlet: "Pan-Latin Plates",
        excerpt:
          "Arepa Atlas fills Astoria with steamy corn pockets and DJ sets that stretch brunch into sunset.",
        tip: "Pair the pabellón arepa with the papelón spritz.",
        link: "https://example.com/reviews/arepa-atlas"
      },
      {
        critic: "Grace Hwang",
        outlet: "K-Seoul Weekly",
        excerpt:
          "Han River House dry-ages bulgogi for remarkable depth; the banchan are meal-worthy on their own.",
        tip: "Request the seasonal kimchi flight for the full experience.",
        link: "https://example.com/reviews/han-river"
      }
    ]
  },
  bronx: {
    name: "The Bronx",
    tagline: "Classic institutions & bold newcomers",
    reviewTitle: "Bronx bites to book",
    reviewTagline: "Editors tracking the borough's rising stars",
    restaurants: [
      {
        name: "Arthur Avenue Pasta Lab",
        neighborhood: "Belmont",
        cuisine: "Italian",
        highlight: "Hand-rolled garganelli, ricotta crostini, and cannoli flights",
        review:
          "“A modern ode to Little Italy traditions—each pasta shape tells a story.”",
        rating: "4.7 / 5",
        link: "https://example.com/arthur-ave"
      },
      {
        name: "Uptown Catch",
        neighborhood: "Mott Haven",
        cuisine: "Seafood",
        highlight: "Citrus-cured ceviche, charred octopus, and rooftop raw bar",
        review:
          "“The Bronx waterfront finally has its culinary beacon with vibrant coastal cooking.”",
        rating: "4.6 / 5",
        link: "https://example.com/uptown-catch"
      },
      {
        name: "Sugar Hill Smoke & Sweets",
        neighborhood: "Highbridge",
        cuisine: "Southern",
        highlight: "Sweet tea glazed ribs, bourbon pecan pie, and live jazz",
        review:
          "“Comfort classics elevated with soulful flourishes—we're still dreaming about the cornbread.”",
        rating: "4.5 / 5",
        link: "https://example.com/sugar-hill"
      }
    ],
    reviews: [
      {
        critic: "Anthony Bell",
        outlet: "Uptown Eats",
        excerpt:
          "Arthur Avenue Pasta Lab respects tradition while riffing with modern sauces and hand-cut shapes.",
        tip: "Book a workshop seat to learn garganelli from the pros.",
        link: "https://example.com/reviews/arthur-ave"
      },
      {
        critic: "Lena Ortiz",
        outlet: "Harbor North",
        excerpt:
          "Uptown Catch turns the South Bronx waterfront into a ceviche destination with rooftop vibes.",
        tip: "Don't skip the charred octopus over yucca mash.",
        link: "https://example.com/reviews/uptown-catch"
      },
      {
        critic: "Gerald Greene",
        outlet: "Smoke & Soul",
        excerpt:
          "Sugar Hill Smoke & Sweets plates smoke-ring ribs beside bourbon pie and live jazz for full-on comfort.",
        tip: "Arrive early for the honey butter cornbread.",
        link: "https://example.com/reviews/sugar-hill"
      }
    ]
  },
  statenIsland: {
    name: "Staten Island",
    tagline: "Waterfront views & neighborhood favorites",
    reviewTitle: "Staten Island spotlights",
    reviewTagline: "Ferry-worthy dining intel from local critics",
    restaurants: [
      {
        name: "Harbor Lights",
        neighborhood: "St. George",
        cuisine: "Sea-to-table",
        highlight: "Crisp-skinned black bass, charred lemon butter, and ferry views",
        review:
          "“A serene dining room with impeccable seafood and front-row harbor sunsets.”",
        rating: "4.6 / 5",
        link: "https://example.com/harbor-lights"
      },
      {
        name: "Olde Borough Bake",
        neighborhood: "Tottenville",
        cuisine: "Bakery & Café",
        highlight: "Laminate pastries, sourdough program, and espresso tonic bar",
        review:
          "“Morning pastries worth the ferry ride—flaky, buttery, and impossibly light.”",
        rating: "4.7 / 5",
        link: "https://example.com/olde-borough"
      },
      {
        name: "Casa Borinquen",
        neighborhood: "Stapleton",
        cuisine: "Puerto Rican",
        highlight: "Lechón asado, mofongo flights, and coconut tres leches",
        review:
          "“Island flavors meet Staten Island hospitality in this vibrant dining room.”",
        rating: "4.5 / 5",
        link: "https://example.com/casa-borinquen"
      }
    ],
    reviews: [
      {
        critic: "Maya Russo",
        outlet: "Harbor Daily",
        excerpt:
          "Harbor Lights feels like a mini vacation—black bass with harbor breezes and postcard sunsets.",
        tip: "Time your reservation with the golden-hour ferry.",
        link: "https://example.com/reviews/harbor-lights"
      },
      {
        critic: "Elena Carver",
        outlet: "Dough & Co.",
        excerpt:
          "Olde Borough Bake laminates pastries so flaky they almost float; coffee service is equally thoughtful.",
        tip: "Grab the seasonal kouign-amann before it's gone.",
        link: "https://example.com/reviews/olde-borough"
      },
      {
        critic: "Rafael Colón",
        outlet: "Isla Eats",
        excerpt:
          "Casa Borinquen brings the party with mofongo flights, live plena, and a warm neighborhood crowd.",
        tip: "Order the coconut tres leches for the table.",
        link: "https://example.com/reviews/casa-borinquen"
      }
    ]
  }
};

const boroughButtons = document.querySelectorAll(".filter-button");
const recommendationsContainer = document.querySelector(".recommendations");
const locationTitle = document.querySelector("[data-location-title]");
const locationTagline = document.querySelector("[data-location-tagline]");
const reviewTitle = document.querySelector("[data-review-title]");
const reviewTagline = document.querySelector("[data-review-tagline]");
const reviewFeed = document.querySelector("[data-review-feed]");

function renderBorough(boroughKey) {
  const borough = boroughData[boroughKey];
  if (!borough) {
    return;
  }

  if (locationTitle) {
    locationTitle.textContent = borough.name;
  }

  if (locationTagline) {
    locationTagline.textContent = borough.tagline;
  }

  const cards = borough.restaurants
    .map((restaurant) => {
      return `
        <article class="card" aria-live="polite">
          <div class="card-header">
            <h3>${restaurant.name}</h3>
            <span class="badge">${restaurant.neighborhood}</span>
          </div>
          <div class="restaurant-meta">
            <span><strong>Cuisine:</strong> ${restaurant.cuisine}</span>
            <span><strong>Signature:</strong> ${restaurant.highlight}</span>
          </div>
          <p class="review">${restaurant.review}</p>
          <div class="rating">${restaurant.rating}</div>
          <footer>
            <a href="${restaurant.link}" target="_blank" rel="noopener">Read full review →</a>
          </footer>
        </article>
      `;
    })
    .join("");

  if (recommendationsContainer) {
    recommendationsContainer.innerHTML = cards;
  }

  if (reviewTitle) {
    reviewTitle.textContent = borough.reviewTitle;
  }

  if (reviewTagline) {
    reviewTagline.textContent = borough.reviewTagline;
  }

  if (reviewFeed) {
    if (borough.reviews && borough.reviews.length > 0) {
      reviewFeed.innerHTML = borough.reviews
        .map((review) => {
          return `
            <article class="review-card">
              <header>
                <h3>${review.critic}</h3>
                <span class="outlet">${review.outlet}</span>
              </header>
              <blockquote>“${review.excerpt}”</blockquote>
              <footer>
                <span>${review.tip}</span>
                <a href="${review.link}" target="_blank" rel="noopener">Full review →</a>
              </footer>
            </article>
          `;
        })
        .join("");
    } else {
      reviewFeed.innerHTML = `<p>No critic notes available yet—check back soon.</p>`;
    }
  }
}

function setActiveButton(activeButton) {
  boroughButtons.forEach((button) => {
    const isActive = button === activeButton;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

boroughButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const boroughKey = button.dataset.borough;
    setActiveButton(button);
    renderBorough(boroughKey);
    if (recommendationsContainer) {
      recommendationsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Initialize the page with Manhattan recommendations
const defaultButton = document.querySelector(".filter-button[data-borough='manhattan']");
if (defaultButton) {
  setActiveButton(defaultButton);
  renderBorough("manhattan");
}
