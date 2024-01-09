// Catalogue Items Data

const itemDescriptions = {
  cream1_button: {
    image: "images/facecream1.jpg",
    title: "Radiant Goddess Face Cream",
    description:
      "Indulge your skin in the luxurious Radiant Glow Face Cream, a powerhouse of hydration and rejuvenation. Specially formulated with a unique blend of botanical extracts and vitamins, this face cream nourishes and revitalizes your skin, leaving it looking radiant and youthful. The lightweight formula absorbs quickly, providing intense moisture and promoting a smooth, luminous complexion.",
    ingredients:
      "Ingredients: Hyaluronic Acid, Vitamin C, Jojoba Oil, Aloe Vera Extract, Green Tea Extract.",
  },
  cream2_button: {
    image: "images/facecream2.png",
    title: "Timeless Youth Face Cream",
    description:
      "Unlock the secret to timeless beauty with our Timeless Youth Face Cream. Enriched with powerful anti-aging ingredients, this cream works to reduce fine lines and wrinkles while improving skin elasticity. The velvety texture glides on effortlessly, leaving your skin feeling supple and hydrated. Embrace a radiant, youthful complexion with Timeless Youth Face Cream, your daily dose of age-defying skincare.",
    ingredients:
      "Ingredients: Retinol, Collagen, Shea Butter, Vitamin E, Rosehip Seed Oil.",
  },
  cream3_button: {
    image: "images/facecream3.png",
    title: "Soothing Calm Face Cream",
    description:
      "Experience tranquility for your skin with Soothing Calm Face Cream. This gentle yet effective formula is designed for sensitive skin, providing relief from irritation and redness. The hypoallergenic blend of natural ingredients soothes and nourishes, restoring balance to your complexion. Say goodbye to discomfort and hello to a calm, happy face with Soothing Calm Face Cream.",
    ingredients:
      "Ingredients: Chamomile Extract, Calendula Oil, Lavender Essential Oil, Oat Extract, Shea Butter.",
  },
  bodycream1_button: {
    image: "images/bodylotion.jpg",
    title: "Silky Smooth Body Lotion",
    description:
      "Indulge your skin in the Silky Smooth Body Lotion, a luxurious blend of moisture-rich ingredients. This fast-absorbing lotion hydrates and softens, leaving your skin feeling silky smooth all day long. The enchanting fragrance lingers, providing a delightful sensory experience. Pamper your body with this lightweight, non-greasy formula for irresistibly soft and supple skin.",
    ingredients:
      "Ingredients: Coconut Oil, Shea Butter, Vitamin E, Almond Oil, Silk Amino Acids.",
  },
  bodycream2_button: {
    image: "images/bodyscrub.jpg",
    title: "Exfoliating Bliss Body Scrub",
    description:
      "Reveal the radiant skin beneath with our Exfoliating Bliss Body Scrub. Formulated with natural exfoliants, this scrub gently buffs away dead skin cells, leaving your skin refreshed and revitalized. The invigorating scent awakens your senses, turning your shower routine into a spa-like experience. Treat your body to the ultimate pampering with Exfoliating Bliss Body Scrub for a smooth and glowing complexion.",
    ingredients:
      "Ingredients: Brown Sugar, Coffee Grounds, Coconut Oil, Vitamin C, Peppermint Essential Oil.",
  },
  hairshampoo_button: {
    image: "images/hairshampoo.png",
    title: "Golden Nourishing Shampoo",
    description:
      "Transform your hair care routine with our Nourishing Locks Shampoo. This enriching formula cleanses and nourishes your hair, leaving it feeling soft, shiny, and manageable. Infused with a blend of botanical extracts and vitamins, this shampoo promotes a healthy scalp and revitalizes dull hair. Elevate your daily shower experience with Nourishing Locks Shampoo for hair that looks and feels truly revitalized.",
    ingredients:
      "Ingredients: Argan Oil, Aloe Vera, Biotin, Pro-Vitamin B5, Chamomile Extract.",
  },
  hairconditioner_button: {
    image: "images/hairconditioner.jpg",
    title: "Magical Repair Conditioner",
    description:
      "Revitalize your locks with our Intensive Repair Conditioner, a rich and creamy formula designed to nourish and repair damaged hair. Packed with revitalizing ingredients, this conditioner penetrates deep into the hair shaft, restoring moisture and improving elasticity. Say goodbye to dry and frizzy hair, and hello to silky-smooth locks with Intensive Repair Conditioner.",
    ingredients:
      "Ingredients: Keratin, Coconut Milk, Jojoba Oil, Shea Butter, Peppermint Essential Oil.",
  },
  hairmask_button: {
    image: "images/hairmask.jpg",
    title: "Botanical Hair Mask",
    description:
      "Give your hair a spa day with our Revitalizing Hair Mask. This deeply nourishing treatment is designed to repair and rejuvenate damaged hair, leaving it soft, shiny, and manageable. The luxurious blend of botanical extracts and essential oils provides intense hydration and promotes overall hair health. Treat yourself to the ultimate hair pampering experience with Botanical Hair Mask.",
    ingredients:
      "Ingredients: Avocado Oil, Honey, Argan Oil, Silk Amino Acids, Rosemary Extract.",
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

// function added2cart() {
//   var cartmessage = document.getElementById("cartmessage");
//   cartmessage.classList.toggle("visible");
// }

const toastTrigger = document.getElementById("additembtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
