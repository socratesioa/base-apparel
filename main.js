const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const iconError = document.querySelector(".icon-error");

const handleSubmit = (e) => {
  e.preventDefault();

  const emailError = document.getElementById("email-error");

  emailInput.classList.remove("input-error");
  emailError.textContent = "";
  iconError.style.display = "none";

  const data = Object.fromEntries(new FormData(e.target));
  const errors = {};

  const email = data.email.trim();

  if (!email) {
    errors.email = "Please provide a valid email address";
    emailInput.classList.add("input-error");
    emailInput.focus();
    iconError.style.display = "block";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Please provide a valid email address";
    emailInput.classList.add("input-error");
    iconError.style.display = "block";
  }

  if (Object.keys(errors).length > 0) {
    displayErrors(errors);
    console.log(errors);
  } else {
    console.log("Form is Valid!", data);
  }

  function displayErrors(errors) {
    for (const key in errors) {
      const errorElement = document.getElementById(`${key}-error`);
      if (errorElement) {
        errorElement.textContent = errors[key];
      }
    }
  }
};

form.addEventListener("submit", handleSubmit);

// const form = document.getElementById("form");

// if (form) {
//   console.log("✅ Form found");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("🚀 Submit handler triggered");

//     const data = Object.fromEntries(new FormData(form));
//     const email = data.email?.trim();
//     const errors = {};

//     if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//       errors.email = "Please provide a valid email address";
//     }

//     const errorEl = document.getElementById("email-error");
//     if (Object.keys(errors).length > 0) {
//       console.log("❌ Validation failed:", errors);
//       if (errorEl) {
//         errorEl.textContent = errors.email;
//       }
//     } else {
//       console.log("✅ Validation passed. Submitted email:", email);
//       if (errorEl) {
//         errorEl.textContent = ""; // clear any previous error
//       }
//     }
//   });
// } else {
//   console.warn("⚠️ Form not found!");
// }
