alert ("HI!!!!")
function shake() {
    flip()
    var fortune=get_a_fortune()
    display_fortune(fortune)
}
function flip() {
}
function get_a_fortune() {
    let fortunes = ["DEFINITELY", "NO", "maybe...", "ask one more time for your REVEAL", "That's a secret...", "Signs point to... YES!", "Signs point to... no"]
    let random_index=randInt(fortunes.length)
    return fortunes [random_index]
    return "Signs point to yes"
}
function randInt(length) {
    let r=Math.random()
    let br=r*length
    let index=Math.floor(br)
    return index
}
function display_fortune(fortune) {
    alert(fortune)
}
