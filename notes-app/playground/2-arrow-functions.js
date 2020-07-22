const square = function (x) {
    return x + x
}

const squareArrow = (x) => {
    return x + x
}

const squareArrow2 = (x) => x + x

console.log(square(2))
console.log(squareArrow(3))
console.log(squareArrow2(4))

/************************ */

const event = {
    name: "Birthday party",
    guestList: ['Bruce', 'Steve', 'Thor'],
    printGuestList() {
        const that = this
        console.log('Guest list for: ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + that.name)
        })
    }
}

event.printGuestList()