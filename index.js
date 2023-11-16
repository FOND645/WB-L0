// HTML код элементов для подстановки
const enabledCheckBoxHTML = `<img
    src="images/check-box.svg"
    class="main-in-stock-product-image-check-box-svg check-box-default check-box"
/>
<img
    src="images/check-mark.svg"
    class="main-in-stock-product-image-check-mark-svg check-box-default-mark check-mark"
/>`;
const disabledCheckBoxHTML = `<img
    src="images/check-box.svg"
    class="main-in-stock-product-image-check-box-svg check-box-default check-box"
/>`;

const likeHTML = ' <img src="images/like.svg" class="main-in-stock-product-like" />';
const hoveredLikeHTML = '<img src="images/like-hover.svg" class="main-in-stock-product-like" />';
const activeLikeHTML = '<img src="images/like-active.svg" class="main-in-stock-product-like" />';
const hoveredActiveLikeHTML = '<img src="images/like-active-hover.svg" class="main-in-stock-product-like" />';

const deleteHTML = '<img src="images/delete.svg" class="main-in-stock-product-delete" />';
const deleteHoveredHTML = '<img src="images/delete-hover.svg" class="main-in-stock-product-delete" />';

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
        // Если пользователь как-то введет дробную часть числа - выкидываем ее
        const value = this.countElement.innerText;
        if (!Number.isInteger(this.countElement.innerText)) this.countElement.innerText = Math.trunc(+value).toString();
        this.count = Math.trunc(+value);
        this.countElement.value = `${this.count}`;
        this.updatePlusMinusStyles();
        this.updateSums();
        document.dispatchEvent(new Event("bascetIsChanged"));
    }

    updateSums() {
        console.log("basic price", this.basicPrice);
        console.log("discount", this.discount);
        console.log("final price", this.basicPrice - this.discount);
        console.log("full basic price", this.basicPrice * this.count);
        console.log("full discount", this.discount * this.count);
        console.log("full final price", (this.basicPrice - this.discount) * this.count);
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
        this.isHovered = false;

        // Получаем элементы из DOM дерева
        this.productContainerElement = document.getElementById(args.productContainerID);
        this.productLikeButtonElement = document.getElementById(args.productLikeButtonID);
        this.productDeleteButtonElement = document.getElementById(args.productDeleteButtonID);
        this.productCheckBoxContainerElement = document.getElementById(args.productCheckBoxContainerID);

        // Ставим листнеры на клики по управляющим элементам
        this.productLikeButtonElement.addEventListener("click", this.setLiked);
        this.productDeleteButtonElement.addEventListener("click", this.changeSelect);
        this.productCheckBoxContainerElement.addEventListener("click", this.changeSelect);

        // Ставим листнеры для отслеживания ховеров на
        // контейнер товара
        this.productContainerElement.addEventListener("mouseover", this.containerHoverHandler(true).bind(this));
        this.productContainerElement.addEventListener("mouseout", this.containerHoverHandler(false).bind(this));

        // кнопку лайка
        this.productLikeButtonElement.addEventListener("mouseover", this.likeHoverHandler(true).bind(this));
        this.productLikeButtonElement.addEventListener("mouseout", this.likeHoverHandler(false).bind(this));

        // кнопку удаления
        this.productDeleteButtonElement.addEventListener("mouseover", this.deleteHoverHandler(true).bind(this));
        this.productDeleteButtonElement.addEventListener("mouseout", this.deleteHoverHandler(false).bind(this));

        this.productLikeButtonElement.innerHTML = "";
        this.productDeleteButtonElement.innerHTML = "";
    }

    // Функция возвращающая хэндлер наведения на кнопку лайка в зависимости от наведения (true - наведено, false - не наведено) и состояния лайка
    likeHoverHandler(isHovered) {
        return () => {
            if (isHovered) {
                this.productLikeButtonElement.innerHTML = this.isLiked ? hoveredActiveLikeHTML : hoveredLikeHTML;
            } else {
                this.productLikeButtonElement.innerHTML = this.isLiked ? activeLikeHTML : likeHTML;
            }
        };
    }

    // Функция возвращающая хэндлер наведения на кнопку удаления в зависимости от наведения (true - наведено, false - не наведено)
    deleteHoverHandler(isHovered) {
        return () => {
            if (isHovered) {
                this.productDeleteButtonElement.innerHTML = deleteHoveredHTML;
            } else {
                this.productDeleteButtonElement.innerHTML = deleteHTML;
            }
        };
    }

    // Функция возвращающая хэндлер наведения на контейнер продукта в зависимости от наведения (true - наведено, false - не наведено)
    containerHoverHandler(isHovered) {
        return () => {
            if (isHovered) {
                this.productLikeButtonElement.innerHTML = this.isLiked ? activeLikeHTML : likeHTML;
                this.productDeleteButtonElement.innerHTML = deleteHTML;
            } else {
                this.productLikeButtonElement.innerHTML = this.isLiked ? activeLikeHTML : "";
                this.productDeleteButtonElement.innerHTML = "";
            }
        };
    }

    // Хэндлер лайка
    setLiked() {
        this.isLiked = !this.isLiked;
        this.productLikeButtonElement.innerHTML = this.isLiked ? hoveredActiveLikeHTML : hoveredLikeHTML;
    }

    // Хэндлер чекбокса
    changeSelect() {
        this.isSelected = !this.isSelected;
        this.productCheckBoxContainerElement.innerHTML = this.isSelected ? enabledCheckBoxHTML : disabledCheckBoxHTML;
    }

    // Хэндлер удаления продукта
    delete() {
        this.isEnable = false;
        this.productContainerElement.style.height = "0px";
    }
}

// Класс корзины
class bascet {
    constructor(args) {
        // Инициализируем все товары, пришедшие в аргументах
        this.products = args.productsArgs.map((ProdArgs) => new Product(ProdArgs));

        // Высчитываем базовую сумму и сумму со скидкой
        this.basicSum = this.products.reduce((Sum, Prod) => (Sum += Prod.basicPrice * Prod.counter.count), 0);
        this.discountSum = this.products.reduce((Sum, Prod) => (Sum += Prod.discount * Prod.counter.count), 0);

        // Получаем элементы сумм из DOM'a
        this.finalSumElement = document.getElementById(args.finalSumElementID);
        this.basicSumElement = document.getElementById(args.basicSumElementID);
        this.discountSumElement = document.getElementById(args.discountSumElementID);

        // Записываем значения сумм в DOM
        this.basicSumElement.innerText = `${this.basicSum.toLocaleString()}`;
        this.discountSumElement.innerText = `−${this.discountSum.toLocaleString()}`;
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`;

        // Добавляем листнер на изменения в корзине
        document.addEventListener("bascetIsChanged", this.updateSum.bind(this));
    }

    // Хэндлер изменений в корзине
    updateSum() {
        // Высчитываем базовую сумму и сумму скидки
        this.basicSum = this.products.reduce((Sum, Prod) => (Sum += Prod.isEnable ? Prod.basicPrice * Prod.counter.count : 0), 0);
        this.discountSum = this.products.reduce((Sum, Prod) => (Sum += Prod.isEnable ? Prod.discount * Prod.counter.count : 0), 0);

        // Записываем все суммы в DOM
        this.basicSumElement.innerText = this.basicSum.toLocaleString();
        this.discountSumElement.innerText = `−${this.discountSum.toLocaleString()}`;
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`;
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

const pageBascet = new bascet({
    finalSumElementID: "final-sum-element",
    basicSumElementID: "basic-sum-element",
    discountSumElementID: "discount-sum-element",
    productsArgs: [1, 2, 3].map((Ind) => {
        return {
            basicPrice: [0, 1051, 11500, 475][Ind],
            discount: [0, 529, 1000, 228][Ind],
            maxCount: [0, 2, Infinity, 2][Ind],
            productCheckBoxContainerID: `product-${Ind}-in-stock-check-box-container`,
            productContainerID: `product-${Ind}-in-stock-container`,
            productDeleteButtonID: `product-${Ind}-delete-button-container`,
            productLikeButtonID: `product-${Ind}-like-button-container`,
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

const leftSideNotification = new freeNotification({
    targetNotificationID: "left-side-notification",
    targetTextID: "left-notification-text",
});

const rightSideNotification = new freeNotification({
    targetNotificationID: "right-side-notification",
    targetTextID: "right-notification-text",
});
