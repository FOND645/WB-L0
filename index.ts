interface counterArguments {
    plusElementID: string;
    minusElementID: string;
    countElementID: string;
    initialCount: number;
    maxCount: number;
}

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
    plusElement: HTMLElement;
    minusElement: HTMLElement;
    countElement: HTMLInputElement;
    count: number;
    maxCount: number;
    constructor(args: counterArguments) {
        // Получаем все элементы DOM'a
        this.plusElement = document.getElementById(args.plusElementID) as HTMLElement;
        this.minusElement = document.getElementById(args.minusElementID) as HTMLElement;
        this.countElement = document.querySelector(args.countElementID) as HTMLInputElement;
        this.count = args.initialCount;
        this.maxCount = args.maxCount;
        this.countElement.innerText = `${this.count}`;

        // Это реально надо комментировать? Неужели этот код может быть непонятным?
        // Добавляем листнеры событий на соответствующие элементы
        this.plusElement.addEventListener("click", this.incrementCount);
        this.minusElement.addEventListener("click", this.incrementCount);
        this.countElement.addEventListener("input", this.setCount);
    }

    // Хэндлер клика на +
    // Если нажали - увеличиваем внутренний счетчик и записываемв DOM новое значение
    // Так же диспатчим событие изменения счетчика для пересчета сумм
    incrementCount() {
        if (this.count === this.maxCount) return;
        this.count++;
        this.countElement.innerText = `${this.count}`;
        document.dispatchEvent("");
    }

    // Аналогично, но для нажатия на -
    decrementCount() {
        if (this.count === 1) return;
        this.count--;
        this.countElement.innerText = `${this.count}`;
        document.dispatchEvent({ type: "bascetIsChanged" });
    }

    // Хэндлер для вводимого вручную значения
    setCount(_: Event) {
        const { value } = this.countElement;
        // Если пользователь как-то введет дробную часть числа - выкидываем ее
        if (!Number.isInteger(value)) this.countElement.value = Math.trunc(+value).toString();
        this.count = Math.trunc(+value);
        this.countElement.innerText = `${this.count}`;
        document.dispatchEvent({ type: "bascetIsChanged" });
    }
}

interface productArgs {
    counterArgs: counterArguments;
    maxCount: number;
    basicPrice: number;
    discount: number;

    productContainerID: string;
    productLikeButtonID: string;
    productDeleteButtonID: string;
    productCheckBoxContainerID: string;
}

// Класс продуктов
export class Product {
    counter: Counter;

    maxCount: number;
    basicPrice: number;
    discount: number;

    isEnable: boolean;
    isLiked: boolean;
    isSelected: boolean;
    isHovered: boolean;

    productContainerElement: HTMLElement;
    productLikeButtonElement: HTMLElement;
    productDeleteButtonElement: HTMLElement;
    productCheckBoxContainerElement: HTMLElement;

    constructor(args: productArgs) {
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
        this.productContainerElement = document.getElementById(args.productContainerID) as HTMLElement;
        this.productLikeButtonElement = document.getElementById(args.productLikeButtonID) as HTMLElement;
        this.productDeleteButtonElement = document.getElementById(args.productDeleteButtonID) as HTMLElement;
        this.productCheckBoxContainerElement = document.getElementById(args.productCheckBoxContainerID) as HTMLElement;

        // Ставим листнеры на клики по управляющим элементам
        this.productLikeButtonElement.addEventListener("click", this.setLiked);
        this.productDeleteButtonElement.addEventListener("click", this.changeSelect);
        this.productCheckBoxContainerElement.addEventListener("click", this.changeSelect);

        // Ставим листнеры для отслеживания ховеров на
        // контейнер товара
        this.productContainerElement.addEventListener("mouseover", this.containerHoverHandler(true));
        this.productContainerElement.addEventListener("mouseout", this.containerHoverHandler(false));

        // кнопку лайка
        this.productLikeButtonElement.addEventListener("mouseover", this.likeHoverHandler(true));
        this.productLikeButtonElement.addEventListener("mouseout", this.likeHoverHandler(false));

        // кнопку удаления
        this.productDeleteButtonElement.addEventListener("mouseover", this.deleteHoverHandler(true));
        this.productDeleteButtonElement.addEventListener("mouseout", this.deleteHoverHandler(false));
    }

    // Функция возвращающая хэндлер наведения на кнопку лайка в зависимости от наведения (true - наведено, false - не наведено) и состояния лайка
    likeHoverHandler(isHovered: boolean) {
        return () => {
            if (isHovered) {
                this.productLikeButtonElement.innerHTML = this.isLiked ? hoveredActiveLikeHTML : hoveredLikeHTML;
            } else {
                this.productLikeButtonElement.innerHTML = this.isLiked ? activeLikeHTML : likeHTML;
            }
        };
    }

    // Функция возвращающая хэндлер наведения на кнопку удаления в зависимости от наведения (true - наведено, false - не наведено)
    deleteHoverHandler(isHovered: boolean) {
        return () => {
            if (isHovered) {
                this.productDeleteButtonElement.innerHTML = deleteHoveredHTML;
            } else {
                this.productDeleteButtonElement.innerHTML = deleteHTML;
            }
        };
    }

    // Функция возвращающая хэндлер наведения на контейнер продукта в зависимости от наведения (true - наведено, false - не наведено)
    containerHoverHandler(isHovered: boolean) {
        return () => {
            console.log('container hovered')
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

interface bascetArgs {
    productsArgs: productArgs[];
    finalSumElementID: string;
    basicSumElementID: string;
    discountSumElementID: string;
}

// Класс корзины
class bascet {
    products: Product[];
    basicSum: number;
    discountSum: number;
    finalSumElement: HTMLElement;
    basicSumElement: HTMLElement;
    discountSumElement: HTMLElement;
    constructor(args: bascetArgs) {
        // Инициализируем все товары, пришедшие в аргументах
        this.products = args.productsArgs.map((ProdArgs) => new Product(ProdArgs));

        // Высчитываем базовую сумму и сумму со скидкой
        this.basicSum = this.products.reduce((Sum, Prod) => (Sum += Prod.basicPrice * Prod.counter.count), 0);
        this.discountSum = this.products.reduce((Sum, Prod) => (Sum += Prod.discount), 0);

        // Получаем элементы сумм из DOM'a
        this.finalSumElement = document.getElementById(args.finalSumElementID) as HTMLElement;
        this.basicSumElement = document.getElementById(args.basicSumElementID) as HTMLElement;
        this.discountSumElement = document.getElementById(args.discountSumElementID) as HTMLElement;

        // Записываем значения сумм в DOM
        this.basicSumElement.innerText = `${this.basicSum.toLocaleString()}`;
        this.discountSumElement.innerText = `${this.discountSum.toLocaleString()}`;
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`;

        // Добавляем листнер на изменения в корзине
        document.addEventListener("bascetIsChanged", this.updateSum);
    }

    // Хэндлер изменений в корзине
    updateSum() {
        // Высчитываем базовую сумму и сумму скидки
        this.basicSum = this.products.reduce((Sum, Prod) => (Sum += Prod.isEnable ? Prod.basicPrice : 0), 0);
        this.discountSum = this.products.reduce((Sum, Prod) => (Sum += Prod.isEnable ? Prod.discount : 0), 0);

        // Записываем все суммы в DOM
        this.basicSumElement.innerText = this.basicSum.toLocaleString();
        this.discountSumElement.innerText = this.discountSum.toLocaleString();
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`;
    }
}

interface freeNotificationArgs {
    targetTextID: string;
    targetNotificationID: string;
}

// Класс для всплывающих подсказок
class freeNotification {
    targetTextElement: HTMLElement;
    targetNotificationElement: HTMLElement;
    constructor(args: freeNotificationArgs) {
        this.targetTextElement = document.getElementById(args.targetTextID) as HTMLElement;
        this.targetNotificationElement = document.getElementById(args.targetNotificationID) as HTMLElement;

        this.targetTextElement.addEventListener("mouseover", this.notificationHandler(true));
        this.targetTextElement.addEventListener("mouseout", this.notificationHandler(false));
    }

    notificationHandler(isHover: boolean) {
        return () => {
            if (isHover) {
                this.targetNotificationElement.style.display = "initial";
            } else {
                this.targetNotificationElement.style.display = "none";
            }
        };
    }
}

const pageBascet = new bascet({
    finalSumElementID: "basic-sum-element",
    basicSumElementID: "basic-sum-element",
    discountSumElementID: "discount-sum-element",
    productsArgs: [1, 2, 3].map((Ind) => {
        return {
            basicPrice: [0, 1051, 11500, 247][Ind],
            discount: [0, 529, 1000, 228][Ind],
            maxCount: [0, 2, Infinity, 2][Ind],
            productCheckBoxContainerID: `product-${Ind}-in-stock-check-box-container`,
            productContainerID: `product-${Ind}-in-stock-container`,
            productDeleteButtonID: `product-${Ind}-delete-button-container`,
            productLikeButtonID: `product-${Ind}-like-button-container`,
            counterArgs: {
                minusElementID: `product-${Ind}-decrementer`,
                plusElementID: `product-${Ind}-counter`,
                countElementID: `product-${Ind}-incrementer`,
                maxCount: [0, 2, Infinity, 2][Ind],
                initialCount: [0, 1, 200, 2][Ind],
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
