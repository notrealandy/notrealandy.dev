const icon0 = document.getElementById("center-section-icons-0")
const icon1 = document.getElementById("center-section-icons-1")
const icon2 = document.getElementById("center-section-icons-2")
const tooltip = document.getElementById("tooltip")


function mLeave() {
    tooltip.style.opacity = 0
}

function mMove(e) {
    const offset = 15 // spacing from pointer
    tooltip.style.left = e.clientX + offset + "px"
    tooltip.style.top = e.clientY + offset + "px"
}

// Show tooltip on hover
icon0.addEventListener("mouseenter", () => {
    tooltip.textContent = "GitHub - Check my cool projects!";
    tooltip.style.opacity = 1;
})
icon1.addEventListener("mouseenter", () => {
    tooltip.textContent = "Discord - Add me!"
    tooltip.style.opacity = 1
})
icon2.addEventListener("mouseenter", () => {
    tooltip.textContent = "CV – Working on it :)"
    tooltip.style.opacity = 1
})

// Hide tooltip when leaving
icon0.addEventListener("mouseleave", mLeave)
icon1.addEventListener("mouseleave", mLeave)
icon2.addEventListener("mouseleave", mLeave)

// Update tooltip position to follow cursor
icon0.addEventListener("mousemove", mMove)
icon1.addEventListener("mousemove", mMove)
icon2.addEventListener("mousemove", mMove)