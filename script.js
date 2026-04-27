window.addEventListener('scroll', function() {

  let tag = document.querySelector('.we-do-tag');
  let heading = document.querySelector('.we-do-heading');
  let text = document.querySelector('.we-do-text');
  let items = document.querySelectorAll('.we-do-item');
  let image = document.querySelector('.we-do-image');

  let trigger = window.innerHeight / 1.2;

  if(tag && tag.getBoundingClientRect().top < trigger){
    tag.classList.add('active-show');
  }

  if(heading && heading.getBoundingClientRect().top < trigger){
    heading.classList.add('active-show');
  }

  if(text && text.getBoundingClientRect().top < trigger){
    text.classList.add('active-show');
  }

  items.forEach((item, index) => {
    if(item.getBoundingClientRect().top < trigger){
      setTimeout(() => {
        item.classList.add('active-show');
      }, index * 200);
    }
  });

  if(image && image.getBoundingClientRect().top < trigger){
    image.classList.add('active-show');
  }

});

// new section 

window.addEventListener("scroll", () => {
  document.querySelectorAll(".team-card, .portfolio-card").forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if(position < screen - 100){
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
});

// new section 

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function () {

    // Remove active from all
    document.querySelectorAll('.accordion-button').forEach(btn => {
      btn.classList.remove('active-faq');
    });

    // Add active to clicked
    this.classList.add('active-faq');

    // Smooth scroll to opened item
    setTimeout(() => {
      this.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 300);

  });
});

// hero section 
document.addEventListener("DOMContentLoaded", function () {

  const title = document.querySelector(".about-heading");
  const text = document.querySelectorAll(".about-para");

  if (title) {
    title.classList.add("active");
  }

  text.forEach(p => {
    p.classList.add("active");
  });

});

// about section 
document.addEventListener("DOMContentLoaded", function () {

  const title = document.querySelector(".about-hero-title");
  const desc = document.querySelector(".about-hero-desc");

  if (title && desc) {
    setTimeout(() => {
      title.classList.add("active");
      desc.classList.add("active");
    }, 200);
  }

});

// new section 
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// robot java 
 document.getElementById("contactForm").addEventListener("submit", function(e) {
  const check = document.getElementById("robotCheck");

  if (!check.checked) {
    e.preventDefault();
    alert("Please verify that you are not a robot!");
  } else {
    alert("Form submitted successfully!");
  }
});

// booking section 
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const inputs = this.querySelectorAll("input[required], select[required]");
  let valid = true;

  inputs.forEach(input => {
    if(input.value.trim() === ""){
      valid = false;
      input.style.borderBottom = "1px solid red";
    } else {
      input.style.borderBottom = "1px solid #38bdf8";
    }
  });

  if(valid){
    alert("✅ Meeting Booked Successfully!");
    this.reset();
  } else {
    alert("❌ Please fill all required fields!");
  }
});


// services js 
document.addEventListener("DOMContentLoaded", function(){

    const elements = document.querySelectorAll('.slide-left, .fade-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.25
    });

    elements.forEach(el => observer.observe(el));

});


// post section 
const elements = document.querySelectorAll('.slide-left, .slide-right');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));
// blog custom js
   const cards = document.querySelectorAll(".blog-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    let position = card.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if(position < screen - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// project section js 
// ================= HERO SECTION ANIMATION =================
document.addEventListener("DOMContentLoaded", function () {
    
    const heading = document.querySelector(".project-hero-title");

    // delay animation on page load
    setTimeout(() => {
        heading.classList.add("show-title");
    }, 300);

});

// ================= FLIP CARD JS =================
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".flip-card-main");

    cards.forEach(card => {

        card.addEventListener("mousemove", function () {
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active");
        });

    });

});

