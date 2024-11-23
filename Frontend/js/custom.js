$(".extra-fields-customer").click(function () {
  $(".customer_records").clone().appendTo(".customer_records_dynamic");
  $(".customer_records_dynamic .customer_records").addClass("single remove");
  $(".single .extra-fields-customer").remove();
  $(".single").append(
    '<a href="#" class="remove-field btn-remove-customer col-md-12 mt-2">Remove Fields</a>'
  );
  $(".customer_records_dynamic > .single").attr("class", "remove mt-3 row");

  $(".customer_records_dynamic input").each(function () {
    var count = 0;
    var fieldname = $(this).attr("name");
    $(this).attr("name", fieldname + count);
    count++;
  });
});

$(document).on("click", ".remove-field", function (e) {
  $(this).parent(".remove").remove();
  e.preventDefault();
});

$(".moreless-button").click(function () {
  $(".moretext").slideToggle();
  if ($(this).text() == "See more") {
    $(this).text("See less");
  } else {
    $(this).text("See more");
  }
});

// Add sector functionality
document
  .getElementById("add-sector-btn")
  .addEventListener("click", function () {
    const formContainer = document.getElementById("form-container");
    const newSector = document.querySelector(".sector-form").cloneNode(true);

    // Clear input values and remove validation errors in the cloned sector
    const inputs = newSector.querySelectorAll("input, select");
    inputs.forEach((input) => {
      if (input.tagName === "SELECT") {
        input.selectedIndex = 0;
      } else {
        input.value = "";
      }
      input.classList.remove("is-invalid"); // Remove validation error class
    });

    formContainer.appendChild(newSector);
  });

// Collect form data, validate, and submit
// document.getElementById("submit-btn").addEventListener("click", function () {
//   const formContainer = document.getElementById("form-container");
//   const sectors = formContainer.querySelectorAll(".sector-form");
//   const allFormData = [];
//   let isValid = true;

//   sectors.forEach((sector, index) => {
//     const formData = {};
//     const inputs = sector.querySelectorAll("input, select");

//     inputs.forEach((input) => {
//       const fieldName = input.getAttribute("data-label") || input.name;
//       const value = input.value.trim();

//       // Validate required fields
//       if (input.hasAttribute("required") && value === "") {
//         isValid = false;
//         input.classList.add("is-invalid");
//       } else {
//         input.classList.remove("is-invalid");
//       }

//       formData[fieldName] = value;
//     });

//     // Combine Departure Date & Time
//     formData["Departure Date & Time"] = `${formData.departureDate || ""} ${
//       formData.departureTime || ""
//     }`;
//     // Combine Arrival Date & Time
//     formData["Arrival Date & Time"] = `${formData.arrivalDate || ""} ${
//       formData.arrivalTime || ""
//     }`;

//     // Remove individual date and time fields
//     delete formData.departureDate;
//     delete formData.departureTime;
//     delete formData.arrivalDate;
//     delete formData.arrivalTime;

//     allFormData.push(formData);
//   });

//   if (!isValid) {
//     alert("Please fill out all required fields.");
//     return; // Stop submission if validation fails
//   }

//   console.log("Form Data:", allFormData);

//   fetch("http://127.0.0.1:8000/api/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(allFormData),
//   })
//   .then((response) => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
// })
//     .then((data) => console.log("Server Response:", data))
//     .catch((error) => console.error("Error:", error));
// });

document.getElementById("submit-btn").addEventListener("click", function () {
  const formContainer = document.getElementById("form-container");
  const sectors = formContainer.querySelectorAll(".sector-form");
  const allFormData = [];
  let isValid = true;

  sectors.forEach((sector, index) => {
    const formData = {};
    const inputs = sector.querySelectorAll("input, select");

    inputs.forEach((input) => {
      const fieldName = input.getAttribute("data-label") || input.name;
      const value = input.value.trim();

      // Validate required fields
      if (input.hasAttribute("required") && value === "") {
        isValid = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }

      formData[fieldName] = value;
    });

    // Combine Departure Date & Time
    formData["Departure Date & Time"] = `${formData.departureDate || ""} ${
      formData.departureTime || ""
    }`;
    // Combine Arrival Date & Time
    formData["Arrival Date & Time"] = `${formData.arrivalDate || ""} ${
      formData.arrivalTime || ""
    }`;

    
    delete formData.departureDate;
    delete formData.departureTime;
    delete formData.arrivalDate;
    delete formData.arrivalTime;

    allFormData.push(formData);
  });

  if (!isValid) {
    alert("Please fill out all required fields.");
    return; // Stop submission if validation fails
  }

  console.log("Form Data:", allFormData);

  fetch("http://127.0.0.1:8000/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(allFormData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Server Response:", data);

      
      
      const tableBody = document.getElementById("table-body");
      tableBody.innerHTML = "";
      allFormData.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item["Select Aircraft"] || "N/A"}</td>
          <td>${item["Origin"] || "N/A"}</td>
          
          <td>${item["Departure Date & Time"] || "N/A"}</td>
          <td>${item["Arrival Date & Time"] || "N/A"}</td>
          <td>${item["Flight Time"] || "N/A"}</td>
        `;
        tableBody.appendChild(row);
      });

      // Show the table
      const dataTable = document.getElementById("data-table");
      dataTable.style.display = "table";
    })
    .catch((error) => console.error("Error:", error));
});


function validateForm(form) {
  let isValid = true;
  const sectorForms = form.querySelectorAll(".sector-form");

  sectorForms.forEach((sectorForm) => {
    const fields = sectorForm.querySelectorAll("input, select");
    fields.forEach((field) => {
      const value = field.value.trim();
      if (field.hasAttribute("required") && value === "") {
        isValid = false;
        field.classList.add("is-invalid"); // Highlight invalid fields
      } else {
        field.classList.remove("is-invalid");
      }
    });
  });

  return isValid;
}
const toggleDataBtn = document.getElementById("toggle-data-btn");
const tableBody = document.getElementById("table-body");
const dataTable = document.getElementById("data-table");
let isDataVisible = false;

const fetchData = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const backendData = await response.json(); // Parse the JSON response
    return backendData; // Return the raw response data
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null in case of an error
  }
};

const populateTable = (backendData) => {
  const tableBody = document.getElementById("table-body"); // Ensure this is the correct table body ID
  tableBody.innerHTML = ""; // Clear existing rows

  if (!backendData || !backendData.data || !backendData.data[0]) {
    console.error("Invalid data format");
    return;
  }

  const rows = backendData.data[0].row_data; // Access row data

  rows.forEach((item) => {
    console.log(item);
    
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.aircraft || "N/A"}</td>
      <td>${item.origin || "N/A"}</td>
      <td>${item.departure_dt || "N/A"}</td>
      <td>${item.arrival_dt || "N/A"}</td>
      <td>${item.flight_time || "N/A"}</td>
    `;
    tableBody.appendChild(row);
  });
};

toggleDataBtn.addEventListener("click", async () => {
  if (isDataVisible) {
    tableBody.innerHTML = "";
    dataTable.style.display = "none";
    toggleDataBtn.textContent = "Show Data";
    isDataVisible = false;
  } else {
    toggleDataBtn.textContent = "Loading...";
    try {
      const data = await fetchData();
      if (data && data.flag) {
        // Check the flag to determine whether to display the data
        populateTable(data);
        dataTable.style.display = "table";
        toggleDataBtn.textContent = "Hide Data";
        isDataVisible = true;
      } else {
        console.error("Data fetch unsuccessful or invalid");
      }
    
    } catch (error) {
      console.error("Error fetching data:", error);
      toggleDataBtn.textContent = "Show Data";
    }
  }
});

dataTable.style.display = "none";
