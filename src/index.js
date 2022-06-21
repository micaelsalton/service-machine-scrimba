const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const weedBtn = document.getElementById("weed-btn")
const invoiceBtn = document.getElementById("invoice-btn")
const totalPrice = document.getElementById("total-price")
const serviceUl = document.getElementById("service-ul")
const priceUl = document.getElementById("price-ul")
let priceArr = []
let isClikedWash = false
let isClikedMow = false
let isClikedWeed = false
let serviceList = ""
let washList = ""
let mowList = ""
let weedList = ""

//Buttons section
washBtn.addEventListener("click", function() {
	if (isClikedWash === false) {
		priceArr.push(10)
		isClikedWash = true
	
	    washList = `<li id="washServiceTag">Wash Car</li>
                  <button id="washRemoveBtn" onclick="arrayRemove(priceArr, 10, 2, 2)">remove</button>
                  <li id="washPriceTag">$10</li>`   
    }
	render()
})

mowBtn.addEventListener("click", function() {
	if (isClikedMow === false) {
		priceArr.push(20)
		isClikedMow = true
	
	    mowList = `<li id="mowServiceTag">Mow Lawn</li>
                  <button id="mowRemoveBtn" onclick="arrayRemove(priceArr, 20, 1, 1)">remove</button>
                  <li id="mowPriceTag">$20</li>`
    }
	render()
})

weedBtn.addEventListener("click", function() {
	if (isClikedWeed === false) {
		priceArr.push(30)
		isClikedWeed = true

	    weedList = `<li id="weedServiceTag">Pull Weed</li>
                  <button id="weedRemoveBtn" onclick="arrayRemove(priceArr, 30)">remove</button>
                  <li id="weedPriceTag">$30</li>`
    }
	render()
})

//Render section
function render() {
	let sum = 0
	for (let i = 0; i < priceArr.length; i++) {
		sum += priceArr[i]
	}
    serviceList = washList + mowList + weedList
	totalPrice.textContent = "$" + sum
	serviceUl.innerHTML = serviceList
    
    
    
}

//Reset section
invoiceBtn.addEventListener("click", function() {
	priceArr = [0]
	isClikedWash = false
	isClikedMow = false
	isClikedWeed = false
    washList = ""
    mowList = ""
    weedList = ""
	render()
})

//Remove button section

function arrayRemove(arr, value, key, item) { 
    priceArr = arr.filter(function(e) { return e !== value })
    
        if ( key === 1 && item === 1) {
            isClikedMow = false
            mowList = ""
        } else if ( key === 2 && item === 2) {
            isClikedWash = false
            washList = ""
        } else {
            isClikedWeed = false
            weedList = ""
        }
        
       render() 
    }