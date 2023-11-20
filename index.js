// HTML код элементов для подстановки
const enabledCheckBoxHTML = `<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7_1035)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.653961 3.77606C0 5.05953 0 6.73969 0 10.1V12.9C0 16.2603 0 17.9405 0.653961 19.2239C1.2292 20.3529 2.14708 21.2708 3.27606 21.846C4.55953 22.5 6.23969 22.5 9.6 22.5H12.4C15.7603 22.5 17.4405 22.5 18.7239 21.846C19.8529 21.2708 20.7708 20.3529 21.346 19.2239C22 17.9405 22 16.2603 22 12.9V10.1C22 6.73969 22 5.05953 21.346 3.77606C20.7708 2.64708 19.8529 1.7292 18.7239 1.15396C17.4405 0.5 15.7603 0.5 12.4 0.5H9.6C6.23969 0.5 4.55953 0.5 3.27606 1.15396C2.14708 1.7292 1.2292 2.64708 0.653961 3.77606Z" fill="#CB11AB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7354 7.17929L9.58662 15.9839L5.25781 11.1682L6.74523 9.83115L9.60819 13.0162L16.2676 5.8208L17.7354 7.17929Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_7_1035">
<rect width="22" height="22" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`;
const disabledCheckBoxHTML = `<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7_1080)">
<path d="M0.5 10.1C0.5 8.41159 0.500389 7.17536 0.580085 6.19993C0.659303 5.23034 0.814384 4.56255 1.09946 4.00305C1.62677 2.96816 2.46816 2.12677 3.50305 1.59946C4.06255 1.31438 4.73034 1.1593 5.69993 1.08008C6.67536 1.00039 7.91159 1 9.6 1H12.4C14.0884 1 15.3246 1.00039 16.3001 1.08008C17.2697 1.1593 17.9374 1.31438 18.4969 1.59946C19.5318 2.12677 20.3732 2.96816 20.9005 4.00305C21.1856 4.56255 21.3407 5.23034 21.4199 6.19993C21.4996 7.17536 21.5 8.41159 21.5 10.1V12.9C21.5 14.5884 21.4996 15.8246 21.4199 16.8001C21.3407 17.7697 21.1856 18.4374 20.9005 18.9969C20.3732 20.0318 19.5318 20.8732 18.4969 21.4005C17.9374 21.6856 17.2697 21.8407 16.3001 21.9199C15.3246 21.9996 14.0884 22 12.4 22H9.6C7.91159 22 6.67536 21.9996 5.69993 21.9199C4.73034 21.8407 4.06255 21.6856 3.50305 21.4005C2.46816 20.8732 1.62677 20.0318 1.09946 18.9969C0.814384 18.4374 0.659303 17.7697 0.580085 16.8001C0.500389 15.8246 0.5 14.5884 0.5 12.9V10.1Z" stroke="black" stroke-opacity="0.2"/>
</g>
<defs>
<clipPath id="clip0_7_1080">
<rect width="22" height="22" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`;

const outStockTitleText = [
    '0 товаров',
    '1 товар',
    "2 товара",
    "3 товара"
]


// Класс для счетчик
class Counter {
    constructor(args) {
        // Получаем все элементы DOM'a
        this.plusElement = document.getElementById(args.plusElementID);
        this.minusElement = document.getElementById(args.minusElementID);
        this.countElement = document.getElementById(args.countElementID);
        this.productFinalSumElement = document.getElementById(args.productFinalSumID);
        this.productBasicSumElement = document.getElementById(args.productBasicSumID);

        this.count = args.initialCount;
        this.maxCount = args.maxCount;
        this.basicPrice = args.basicPrice;
        this.discount = args.discount;

        this.countElement.value = `${this.count}`;

        // Это реально надо комментировать? Неужели этот код может быть непонятным?
        // Добавляем листнеры событий на соответствующие элементы
        this.plusElement.addEventListener("click", this.incrementCount.bind(this));
        this.minusElement.addEventListener("click", this.decrementCount.bind(this));
        this.countElement.addEventListener("input", this.setCount.bind(this));
        this.updatePlusMinusStyles();
        this.updateSums()
    }

    // Хэндлер клика на +
    // Если нажали - увеличиваем внутренний счетчик и записываемв DOM новое значение
    // Так же диспатчим событие изменения счетчика для пересчета сумм
    incrementCount() {
        if (this.count === this.maxCount) return;
        this.count++;
        this.countElement.value = `${this.count}`;
        this.updatePlusMinusStyles();
        this.updateSums();
        document.dispatchEvent(new Event("bascetIsChanged"));
    }

    // Аналогично, но для нажатия на -
    decrementCount() {
        if (this.count === 1) return;
        this.count--;
        this.countElement.value = `${this.count}`;
        this.updatePlusMinusStyles();
        this.updateSums();
        document.dispatchEvent(new Event("bascetIsChanged"));
    }

    // Хэндлер для вводимого вручную значения
    setCount(_) {
        let value = this.countElement.value;
        // Если введена пустая строка - не делаем ничего, ждем еще чего-нибудь
        if (value === "") return
        // Если пользователь ввел кол-во превышающее максимальное - выводим максимальное
        if (value > this.maxCount) value = this.maxCount
        // Если пользователь ввел число меньше 1 то принудительно ставим 1
        if (value < 1) value = 1
        // Если пользователь как-то введет дробную часть числа - выкидываем ее
        if (!Number.isInteger(value)) value = Math.trunc(+value).toString();
        this.count = Math.trunc(+value);
        this.countElement.value = `${this.count}`;
        this.updatePlusMinusStyles();
        this.updateSums();
        document.dispatchEvent(new Event("bascetIsChanged"));
    }

    updateSums() {
        // console.log("basic price", this.basicPrice);
        // console.log("discount", this.discount);
        // console.log("final price", this.basicPrice - this.discount);
        // console.log("full basic price", this.basicPrice * this.count);
        // console.log("full discount", this.discount * this.count);
        // console.log("full final price", (this.basicPrice - this.discount) * this.count);
        this.productFinalSumElement.classList = (this.basicPrice - this.discount) * this.count >= 1000000 ? ['h4'] : ['h3']
        this.productFinalSumElement.innerText = ((this.basicPrice - this.discount) * this.count).toLocaleString();
        this.productBasicSumElement.innerText = (this.basicPrice * this.count).toLocaleString();
    }

    updatePlusMinusStyles() {
        this.plusElement.style.color = this.count === this.maxCount ? `#00000033` : "#000000";
        this.plusElement.style.cursor = this.count === this.maxCount ? `default` : "pointer";

        this.minusElement.style.color = this.count === 1 ? `#00000033` : "#000000";
        this.minusElement.style.cursor = this.count === 1 ? `default` : "pointer";
    }
}

// Класс продуктов
class Product {
    constructor(args) {
        // Инициализируем счетчик для продукта
        this.counter = new Counter(args.counterArgs);

        // Принимаем максимальное баланс товаров и базовую сумму со скидкой
        this.maxCount = args.maxCount;
        this.basicPrice = args.basicPrice;
        this.discount = args.discount;

        // Инициализируем состояния товара
        this.isSelected = true;
        this.isEnable = true;
        this.isLiked = false;

        // Получаем элементы из DOM дерева
        this.productContainerElement = document.getElementById(args.productContainerID);
        // this.productLikeButtonElement = document.getElementById(args.productLikeButtonContainerID);
        this.productLikeButtonElement = document.getElementById(args.productLikeButtonContainerID)
        this.productDeleteButtonElement = document.getElementById(args.productDeleteButtonContainerID);
        this.productCheckBoxContainerElement = document.getElementById(args.productCheckBoxContainerID);

        // Ставим листнеры на клики по управляющим элементам
        // this.productLikeButtonElement.addEventListener("click", this.setLiked);
        this.productDeleteButtonElement.addEventListener("click", this.delete.bind(this));
        this.productCheckBoxContainerElement.addEventListener("click", this.changeSelect.bind(this));

        this.productLikeButtonElement.addEventListener('click', this.setLiked.bind(this))
    }

    setLiked() {
        console.log(this.isLiked)
        this.isLiked = !this.isLiked
        console.log(this.isLiked)
        this.productLikeButtonElement.style.fill = this.isLiked ? '#C400A7' : 'inherit'
    }

    outsideSetSelect(selected) {
        this.isSelected = selected
        this.productCheckBoxContainerElement.innerHTML = this.isSelected ? enabledCheckBoxHTML : disabledCheckBoxHTML;
        document.dispatchEvent(new Event("bascetIsChanged"));
    }

    // Хэндлер чекбокса
    changeSelect() {
        this.isSelected = !this.isSelected;
        this.productCheckBoxContainerElement.innerHTML = this.isSelected ? enabledCheckBoxHTML : disabledCheckBoxHTML;
        document.dispatchEvent(new Event("bascetIsChanged"));
        document.dispatchEvent(new Event("productSelectChanged"))
    }

    // Хэндлер удаления продукта
    delete() {
        this.isEnable = false;
        this.productContainerElement.style.display = 'none';
        document.dispatchEvent(new Event("bascetIsChanged"));
    }
}

// Класс корзины
class bascet {
    constructor(args) {
        // Инициализируем все товары, пришедшие в аргументах
        this.products = args.productsArgs.map((ProdArgs) => new Product(ProdArgs));

        this.isShowed = true
        this.isSelectAll = true

        this.productCounterContainerElement = document.getElementById(args.productCounterContainerID)
        this.productCounterElement = document.getElementById(args.porductCounterID)
        this.arrowButtonElement = document.getElementById(args.arrowButtonID)
        this.productsContainerElement = document.getElementById(args.productsContainerID)
        this.bascetCheckBoxElemnt = document.getElementById(args.bascetCheckBoxContainerID)

        this.arrowButtonElement.addEventListener('click', this.setShowed.bind(this))
        this.bascetCheckBoxElemnt.addEventListener('click', this.setSelectAll.bind(this))

        // Получаем элементы сумм из DOM'a
        this.finalSumElement = document.getElementById(args.finalSumElementID);
        this.basicSumElement = document.getElementById(args.basicSumElementID);
        this.discountSumElement = document.getElementById(args.discountSumElementID);

        this.updateSum()

        // Записываем значения сумм в DOM
        this.basicSumElement.innerText = `${this.basicSum.toLocaleString()}`;
        this.discountSumElement.innerText = `−${this.discountSum.toLocaleString()}`;
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`;

        // Добавляем листнер на изменения в корзине
        document.addEventListener("bascetIsChanged", this.updateSum.bind(this));
        document.addEventListener('productSelectChanged', this.productSlectedHandler.bind(this))
    }

    productSlectedHandler() {
        const isAllSelected = this.products.every(Prod => Prod.isSelected)
        this.bascetCheckBoxElemnt.innerHTML = isAllSelected ? enabledCheckBoxHTML : disabledCheckBoxHTML
        this.isSelectAll = isAllSelected
    }

    setShowed() {
        this.isShowed = !this.isShowed
        this.arrowButtonElement.style.rotate = this.isShowed ? '0' : '180'
        this.productsContainerElement.style.display = this.isShowed ? 'flex' : 'none'
    }

    setSelectAll() {
        this.isSelectAll = !this.isSelectAll
        this.products.forEach(Prod => {
            Prod.outsideSetSelect(this.isSelectAll)
        })
        this.bascetCheckBoxElemnt.innerHTML = this.isSelectAll ? enabledCheckBoxHTML : disabledCheckBoxHTML
    }

    // Хэндлер изменений в корзине
    updateSum() {
        // Высчитываем базовую сумму и сумму скидки
        this.basicSum = this.products.reduce((Sum, Prod) => (Sum += Prod.basicPrice * Prod.counter.count * +(Prod.isSelected && Prod.isEnable)), 0);
        this.discountSum = this.products.reduce((Sum, Prod) => (Sum += Prod.discount * Prod.counter.count * +(Prod.isSelected && Prod.isEnable)), 0);
        const productsCount = this.products.reduce((Sum, Prod) => Sum += +Prod.isEnable, 0)

        // Записываем все суммы в DOM
        this.productCounterElement.innerText = productsCount ? productsCount : ''
        if (productsCount) {
            this.productCounterContainerElement.style.backgroundColor = 'rgba(245, 81, 35, 1)'
        } else {
            this.productCounterContainerElement.style.backgroundColor = 'transparent'
        }

        this.basicSumElement.innerText = this.basicSum.toLocaleString();
        this.discountSumElement.innerText = `${this.discountSum === 0 ? '' : '−'}${this.discountSum.toLocaleString()}`;
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`;
    }
}

class outStockProduct {
    constructor(args) {
        console.log(args)
        this.productContainerElement = document.getElementById(args.productContainerID)
        this.likeButtionElement = document.getElementById(args.likeButtonID)
        this.deleteButtonElement = document.getElementById(args.deleteButtonID)
        
        this.isLiked = false
        this.isEnable = true

        this.deleteButtonElement.addEventListener('click', this.delete.bind(this))
        this.likeButtionElement.addEventListener('click', this.setLiked.bind(this))
    }

    setLiked() {
        this.isLiked = !this.isLiked
        this.likeButtionElement.style.fill = this.isLiked ? '#C400A7' : 'inherit'
    }

    delete() {
        this.isEnable = false;
        this.productContainerElement.style.display = 'none';
        document.dispatchEvent(new Event("outStockProdsIsChanged"));
    }
}

class outStockBascet {
    constructor(args) {
        this.products = args.productArgs.map(ProdArgs => new outStockProduct(ProdArgs))
        this.arrowButtonElement = document.getElementById(args.arrowButtonID)
        this.productsCounterElement = document.getElementById(args.productsConterID)
        this.productsContainerElement = document.getElementById(args.productsContainerID)

        this.isHidden = false
        
        this.arrowButtonElement.addEventListener('click', this.arrowHandler.bind(this))
        document.addEventListener('outStockProdsIsChanged', this.updateProductsCounter.bind(this))
    }

    arrowHandler() {
        this.isHidden = !this.isHidden
        this.productsContainerElement.style.display = this.isHidden ? "none" : "flex"
        this.arrowButtonElement.style.transform = this.isHidden ? 'rotate(180deg)' : 'rotate(0deg)'

    }

    updateProductsCounter () {
        console.log(this.products.reduce((Sum, Prod) => +Prod.isEnable, 0))
        this.productsCounterElement.innerText = outStockTitleText[this.products.reduce((Sum, Prod) => Sum += +Prod.isEnable, 0)]
    }
}

// Класс для всплывающих подсказок
class freeNotification {
    constructor(args) {
        this.targetTextElement = document.getElementById(args.targetTextID);
        this.targetNotificationElement = document.getElementById(args.targetNotificationID);

        this.targetTextElement.addEventListener("mouseover", this.notificationHandler(true).bind(this));
        this.targetTextElement.addEventListener("mouseout", this.notificationHandler(false).bind(this));
    }

    notificationHandler(isHover) {
        return () => {
            if (isHover) {
                this.targetNotificationElement.style.display = "flex";
            } else {
                this.targetNotificationElement.style.display = "none";
            }
        };
    }
}

// Инициализируем корзину налич. товаров
const pageBascet = new bascet({
    finalSumElementID: "final-sum-element",
    basicSumElementID: "basic-sum-element",

    productCounterContainerID: 'header-protuct-counter-container',
    porductCounterID: 'header-protuct-counter',

    bascetCheckBoxContainerID: 'show-all-in-stock-button',

    productsContainerID: "main-in-stock-products",

    arrowButtonID: 'bascet-in-stock-arrow-btn',
    discountSumElementID: "discount-sum-element",
    productsArgs: [1, 2, 3].map((Ind) => {
        return {
            basicPrice: [0, 1051, 11500, 475][Ind],
            discount: [0, 529, 1000, 228][Ind],
            maxCount: [0, 2, Infinity, 2][Ind],
            productCheckBoxContainerID: `product-${Ind}-in-stock-check-box-container`,
            productContainerID: `product-${Ind}-in-stock-container`,

            productDeleteButtonContainerID: `product-${Ind}-delete-button-container`,

            productLikeButtonContainerID: `product-${Ind}-like-button-container`,

            counterArgs: {
                minusElementID: `product-${Ind}-decrementer`,
                plusElementID: `product-${Ind}-incrementer`,
                countElementID: `product-${Ind}-counter`,
                maxCount: [0, 2, Infinity, 2][Ind],
                initialCount: [0, 1, 200, 2][Ind],
                productFinalSumID: `product-${Ind}-final-sum`,
                productBasicSumID: `product-${Ind}-basic-sum`,
                basicPrice: [0, 1051, 11500, 475][Ind],
                discount: [0, 529, 1000, 228][Ind],
            },
        };
    }),
});

// Инициализируем корзину отсутствующих товаров
const outStockBAscet = new outStockBascet({
    productsConterID: 'out-stock-products-counter',
    arrowButtonID: 'out-stock-arrow',
    productsContainerID: 'main-out-stock-products-container',
    productArgs: [1, 2, 3].map((Ind) => {
        return {
            productContainerID: `out-stock-product-container-${Ind}`,
            likeButtonID: `product-out-${Ind}-like-button-container`,
            deleteButtonID: `product-out-${Ind}-delete-button-container`
        }
    })
})

const leftSideNotification = new freeNotification({
    targetNotificationID: "left-side-notification",
    targetTextID: "left-notification-text",
});

const rightSideNotification = new freeNotification({
    targetNotificationID: "right-side-notification",
    targetTextID: "right-notification-text",
});
