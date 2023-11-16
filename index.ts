interface counterArguments {
    plusElementID: string
    minusElementID: string
    countElementID: string
    initialCount: number
    maxCount: number
}

const enabledCheckBoxHTML = ``
const disabledCheckBoxHTML = ``

const enableLikeHTML = ``
const disableLikeHTML = ``




class Counter {
    plusElement: HTMLElement
    minusElement: HTMLElement
    countElement: HTMLInputElement 
    count: number
    maxCount: number
    constructor(args: counterArguments) {
        const ss = document.querySelector('input')

        this.plusElement = document.getElementById(args.plusElementID) as HTMLElement
        this.minusElement = document.getElementById(args.minusElementID) as HTMLElement
        this.countElement = document.querySelector(args.countElementID) as HTMLInputElement
        this.count = args.initialCount

        this.countElement.innerText = `${this.count}`

        this.plusElement.addEventListener('click', this.incrementCount)
        this.minusElement.addEventListener('click', this.incrementCount)
        this.countElement.addEventListener('change', this.setCount)
    }

    incrementCount() {
        if (this.count === this.maxCount) return
        this.count++
        this.countElement.innerText = `${this.count}`
        document.dispatchEvent({type: "bascetIsChanged"})
    }

    decrementCount() {
        if (this.count === 1) return
        this.count--
        this.countElement.innerText = `${this.count}`
        document.dispatchEvent({type: "bascetIsChanged"})
    }

    setCount(_: Event) {
        const {value} = this.countElement
        if (!Number.isInteger(value)) return
        this.count = +value
        this.countElement.innerText = `${this.count}`
        document.dispatchEvent({type: "bascetIsChanged"})
    }
}

interface productArgs {
    counterArgs: counterArguments
    maxCount: number
    basicPrice: number
    discount: number

    productContainerID: string
    productLikeButtonID: string
    productDeleteButtonID: string
    productCheckBoxContainerID: string
}

class Product {
    counter: Counter

    maxCount: number
    basicPrice: number
    discount: number

    isEnable: boolean
    isLiked: boolean
    isSelected: boolean

    productContainerElement: HTMLElement
    productLikeButtonElement: HTMLElement
    productDeleteButtonElement: HTMLElement
    productCheckBoxContainerElement: HTMLElement

    constructor(args: productArgs) {
        this.counter = new Counter(args.counterArgs)

        this.maxCount = args.maxCount
        this.basicPrice = args.basicPrice
        this.discount = args.discount

        this.isSelected = true
        this.isEnable = true
        this.isLiked = false

        this.productContainerElement = document.getElementById(args.productContainerID) as HTMLElement
        this.productLikeButtonElement = document.getElementById(args.productLikeButtonID) as HTMLElement
        this.productDeleteButtonElement = document.getElementById(args.productDeleteButtonID) as HTMLElement
        this.productCheckBoxContainerElement = document.getElementById(args.productCheckBoxContainerID) as HTMLElement

        this.productLikeButtonElement.addEventListener('click', this.setLiked)
        this.productDeleteButtonElement.addEventListener('click', this.changeSelect)
        this.productCheckBoxContainerElement.addEventListener('click', this.changeSelect)
    }

    setLiked() {
        this.isLiked = !this.isLiked
        this.productLikeButtonElement.innerHTML = this.isLiked ? enableLikeHTML : disableLikeHTML
    }

    changeSelect() {
        this.isSelected = !this.isSelected
        this.productCheckBoxContainerElement.innerHTML = this.isSelected ? enabledCheckBoxHTML : disabledCheckBoxHTML
    }

    delete() {
        this.isEnable = false
        // Дописать 
    }
}

interface bascetArgs {
    productsArgs: productArgs[]
    finalSumElement: HTMLElement
    basicSumElement: HTMLElement
    discountSumElement: HTMLElement
}

class bascet {
    products: Product[]
    basicSum: number
    discountSum: number
    finalSumElement: HTMLElement
    basicSumElement: HTMLElement
    discountSumElement: HTMLElement
    constructor(args: bascetArgs) {
        this.products = args.productsArgs.map(ProdArgs => new Product(ProdArgs))
        this.basicSum = this.products.reduce((Sum, Prod) => Sum += Prod.basicPrice, 0)
        this.discountSum = this.products.reduce((Sum, Prod) => Sum += Prod.discount, 0)

        this.finalSumElement = args.finalSumElement
        this.basicSumElement = args.basicSumElement
        this.discountSumElement = args.discountSumElement

        this.basicSumElement.innerText = `${this.basicSum.toLocaleString()}`
        this.discountSumElement.innerText = `${this.discountSum.toLocaleString()}`
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`
        document.addEventListener("bascetIsChanged", this.updateSum)
    }

    updateSum() {
        this.basicSum = this.products.reduce((Sum, Prod) => Sum += Prod.isEnable ? Prod.basicPrice : 0, 0)
        this.discountSum = this.products.reduce((Sum, Prod) => Sum += Prod.isEnable ? Prod.discount : 0, 0)
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`
    }
}