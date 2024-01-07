// Catalogue Items Data

const itemDescriptions = {
  cream1_button: {
    image: "images/facecream1.jpg",
    title: "Cream 1",
    description:
      "This is an example of a quick description for the selected item. It will only show when selected from the menu on the left, and hidden when another item is selected.",
    ingredients:
      "Ingredients: ingredient a, ingredient b, ingredient c, ingredient d, and ingredient e.",
  },
  cream2_button: {
    image: "images/facecream2.png",
    title: "Cream 2",
    description:
      "This is an example of a quick description for the selected item. It will only show when selected from the menu on the left, and hidden when another item is selected.",
    ingredients:
      "Ingredients: ingredient a, ingredient b, ingredient c, ingredient d, and ingredient e.",
  },
  cream3_button: {
    image: "images/facecream3.png",
    title: "Cream 3",
    description:
      "This is an example of a quick description for the selected item. It will only show when selected from the menu on the left, and hidden when another item is selected.",
    ingredients:
      "Ingredients: ingredient a, ingredient b, ingredient c, ingredient d, and ingredient e.",
  },
  bodycream1_button: {
    image: "images/bodylotion.jpg",
    title: "Body Lotion",
    description:
      "This is an example of a quick description for the selected item. It will only show when selected from the menu on the left, and hidden when another item is selected.",
    ingredients:
      "Ingredients: ingredient a, ingredient b, ingredient c, ingredient d, and ingredient e.",
  },
  bodycream2_button: {
    image: "images/bodyscrub.jpg",
    title: "Body Scrub",
    description:
      "This is an example of a quick description for the selected item. It will only show when selected from the menu on the left, and hidden when another item is selected.",
    ingredients:
      "Ingredients: ingredient a, ingredient b, ingredient c, ingredient d, and ingredient e.",
  },
  hairshampoo_button: {
    image: "images/hairshampoo.png",
    title: "Hair Shampoo",
    description:
      "This is an example of a quick description for the selected item. It will only show when selected from the menu on the left, and hidden when another item is selected.",
    ingredients:
      "Ingredients: ingredient a, ingredient b, ingredient c, ingredient d, and ingredient e.",
  },
  hairconditioner_button: {
    image: "images/hairconditioner.jpg",
    title: "Hair Conditioner",
    description:
      "This is an example of a quick description for the selected item. It will only show when selected from the menu on the left, and hidden when another item is selected.",
    ingredients:
      "Ingredients: ingredient a, ingredient b, ingredient c, ingredient d, and ingredient e.",
  },
  hairmask_button: {
    image: "images/hairmask.jpg",
    title: "Hair Mask",
    description:
      "This is an example of a quick description for the selected item. It will only show when selected from the menu on the left, and hidden when another item is selected.",
    ingredients:
      "Ingredients: ingredient a, ingredient b, ingredient c, ingredient d, and ingredient e.",
  },
};

// Catalogue Buttons Functions

const targetButtons = document.querySelectorAll(
  "button[data-bs-toggle]:not([id^='avoid'])"
);

function hasCollapseAttribute(elt) {
  return elt.getAttribute("data-bs-toggle") == "collapse";
}

let isPanelOpen = false;

Object.keys(itemDescriptions).map((buttonId) => {
  document.getElementById(buttonId).addEventListener("click", () => {
    const button = document.getElementById(buttonId);
    if (isPanelOpen) {
      if (hasCollapseAttribute(button)) {
        targetButtons.forEach((elt) => {
          elt.setAttribute("data-bs-toggle", "collapse");
        });
        isPanelOpen = false;
      } else {
        console.log("button does not have collapse attribute");
        targetButtons.forEach((elt) => {
          elt.setAttribute("data-bs-toggle", "");
        });
        button.setAttribute("data-bs-toggle", "collapse");
      }
    } else {
      console.log("panel is not open.");

      targetButtons.forEach((elt) => {
        elt.setAttribute("data-bs-toggle", "");
      });

      button.setAttribute("data-bs-toggle", "collapse");

      isPanelOpen = true;
    }
    document.getElementById("info_box_title").innerHTML =
      itemDescriptions[buttonId].title;
    document.getElementById("info_box_description").innerHTML =
      itemDescriptions[buttonId].description;
    document
      .getElementById("info_box_pic")
      .setAttribute("src", itemDescriptions[buttonId].image);
    document.getElementById("info_box_ingredients").innerHTML =
      itemDescriptions[buttonId].ingredients;
  });
});
