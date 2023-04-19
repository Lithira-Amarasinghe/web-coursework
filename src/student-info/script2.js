// Define an array of student objects with their information
const students = [
    {
      name: "Lithira amarasinghe",
      photo: 
      
    },
    {
      name: "Nadun wijesinghe",
      photo: 
     
    },
    {
      name: "Amantha sanuja ",
      photo: 
     
    },
    {
      name: "Akila jayawardhana",
      photo: 

    },
  ];
  
  // Loop through the array of students and create a card for each one
  const studentCards = document.querySelector(".student-cards");
  students.forEach((student) => {
    // Create elements for the student card
    const card = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("h2");
    const bio = document.createElement("p");
  
    // Add class names to the elements
    card.classList.add("card");
    imgContainer.classList.add("img-container");
  
    // Set the attributes and content for the elements
    img.src = student.photo;
    img.alt = student.name;
    name.textContent = student.name;
   
  
    // Append the elements to their respective parent elements
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);
    card.appendChild(name);
    studentCards.appendChild(card);
  
    // Add event listener for hovering over the image
    imgContainer.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.1)";
    });
    imgContainer.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
  