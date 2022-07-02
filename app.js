const quote = document.querySelector(".quote-area > p")
const character = document.querySelector(".char")
const generateBtn = document.getElementById("btn")


generateBtn.addEventListener("click", async () => {
    generateBtn.classList.add("loading")
    generateBtn.textContent = "Loading..."

    const url = "https://animechan.vercel.app/api/random"
    const res = await fetch(url)
    const  data = await res.json()

    quote.textContent = data.quote
    character.textContent = `${data.character}(${data.anime})`
    
    generateBtn.classList.remove("loading")
    generateBtn.textContent = "Get Quote"
})