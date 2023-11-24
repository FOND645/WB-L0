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
</svg>`;

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

const activeRatio = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10.5" r="7.5" fill="#CB11AB" stroke="#CB11AB"/>
<path d="M10 13.5C11.6569 13.5 13 12.1569 13 10.5C13 8.84315 11.6569 7.5 10 7.5C8.34315 7.5 7 8.84315 7 10.5C7 12.1569 8.34315 13.5 10 13.5Z" fill="white"/>
</svg>`;

const inactiveRatio = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10.5" r="7.5" stroke="black" stroke-opacity="0.2"/>
</svg>`;

// SVG маленькие логотипов банковских карт
const maestroSVG = `<svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="32" height="24" rx="4" fill="#F6F6FA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8883 18.0017H12.7637V6.99487H18.8884L18.8883 18.0017Z" fill="#6C6BBD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1515 12.5001C13.1515 10.2674 14.1969 8.27845 15.8248 6.99668C14.5928 6.02523 13.0681 5.49766 11.4992 5.50001C7.63356 5.50001 4.5 8.63401 4.5 12.5001C4.5 16.3662 7.63356 19.5002 11.4992 19.5002C13.0681 19.5025 14.5929 18.9749 15.8249 18.0035C14.1971 16.7219 13.1515 14.7329 13.1515 12.5001Z" fill="#EB001B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.1497 12.5001C27.1497 16.3662 24.0161 19.5002 20.1505 19.5002C18.5814 19.5024 17.0565 18.9749 15.8242 18.0035C17.4526 16.7217 18.498 14.7329 18.498 12.5001C18.498 10.2672 17.4526 8.27845 15.8242 6.99668C17.0564 6.02523 18.5813 5.49773 20.1504 5.50001C24.016 5.50001 27.1496 8.63401 27.1496 12.5001" fill="#0099DF"/>
</svg>`;

const masterCardSVG = `<svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="32" height="24" rx="4" fill="#F6F6FA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.9337 16.8367V16.5649H26.8629L26.781 16.7514L26.6996 16.5649H26.6286V16.8367H26.6788V16.632L26.7554 16.8086H26.8075L26.884 16.6315V16.8367H26.9339H26.9337ZM26.4846 16.8367V16.6115H26.5752V16.5656H26.3438V16.6115H26.4343V16.8367H26.4846Z" fill="#F79410"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8883 18.0014H12.7637V6.99463H18.8884L18.8883 18.0014Z" fill="#FF5F00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1515 12.4999C13.1515 10.2671 14.1969 8.27821 15.8248 6.99643C14.5928 6.02498 13.0681 5.49741 11.4992 5.49976C7.63356 5.49976 4.5 8.63376 4.5 12.4999C4.5 16.3659 7.63356 19.4999 11.4992 19.4999C13.0681 19.5023 14.5929 18.9747 15.8249 18.0032C14.1971 16.7217 13.1515 14.7327 13.1515 12.4999Z" fill="#EB001B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.1497 12.4999C27.1497 16.3659 24.0161 19.4999 20.1505 19.4999C18.5814 19.5022 17.0565 18.9747 15.8242 18.0032C17.4526 16.7215 18.498 14.7327 18.498 12.4999C18.498 10.267 17.4526 8.27821 15.8242 6.99643C17.0564 6.02498 18.5813 5.49749 20.1504 5.49976C24.016 5.49976 27.1496 8.63376 27.1496 12.4999" fill="#F79410"/>
</svg>`;

const visaCardSVG = `<svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="32" height="24" rx="4" fill="#F6F6FA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4709 10.6782C16.453 12.0858 17.7254 12.8713 18.6838 13.3384C19.6686 13.8176 19.9994 14.1249 19.9956 14.5534C19.9881 15.2093 19.21 15.4987 18.4818 15.51C17.2113 15.5297 16.4727 15.167 15.8855 14.8926L15.4279 17.0341C16.017 17.3057 17.108 17.5425 18.2394 17.5528C20.8949 17.5528 22.6323 16.242 22.6418 14.2095C22.6521 11.6301 19.0738 11.4873 19.0982 10.3343C19.1067 9.98472 19.4403 9.61163 20.1713 9.51674C20.5331 9.46886 21.532 9.43217 22.6643 9.95366L23.1087 7.88176C22.4998 7.65997 21.7171 7.44757 20.7427 7.44757C18.2431 7.44757 16.485 8.77627 16.4709 10.6782ZM27.3796 7.6261C26.8947 7.6261 26.4859 7.90899 26.3037 8.3431L22.5102 17.4006H25.1638L25.6919 15.9412H28.9347L29.241 17.4006H31.5799L29.5389 7.6261H27.3796ZM27.7507 10.2666L28.5165 13.9369H26.4192L27.7507 10.2666ZM13.2535 7.6261L11.1618 17.4006H13.6904L15.7812 7.6261H13.2535ZM9.51266 7.6261L6.88061 14.279L5.81595 8.62215C5.69101 7.99074 5.19768 7.6261 4.64982 7.6261H0.347122L0.286962 7.90992C1.17028 8.10159 2.17385 8.41077 2.78179 8.74153C3.15386 8.94353 3.2601 9.12018 3.38222 9.60037L5.39874 17.4006H8.07123L12.1682 7.6261H9.51266Z" fill="#1434CB"/>
</svg>`;

const mirCardSVG = `<svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="32" height="24" rx="4" fill="#F6F6FA"/>
<path d="M17.682 9.34377L15.8652 13.2583H15.6814V8.50031H13.0859V16.5024H15.238C15.8219 16.5024 16.341 16.1672 16.5898 15.6481L18.4174 11.7444H18.6012V16.5024H21.1966V8.50031H19.0121C18.4498 8.50031 17.9199 8.83553 17.682 9.34377Z" fill="#319B42"/>
<path d="M7.97268 9.54923L6.90207 13.2583H6.71823L5.6368 9.54923C5.45296 8.92204 4.8798 8.50031 4.23095 8.50031H1.66797V16.5024H4.26339V11.7444H4.44723L5.9396 16.5024H7.66988L9.16225 11.7444H9.34609V16.5024H11.9415V8.50031H9.37853C8.72968 8.50031 8.14571 8.92204 7.97268 9.54923Z" fill="#319B42"/>
<path d="M22.3247 12.0674V16.5024H24.9209V13.9063H27.7119C28.9235 13.9063 29.9512 13.1383 30.3298 12.0674H22.3247Z" fill="#319B42"/>
<path d="M27.636 8.50031H21.8594C22.2164 10.4041 23.8823 11.7454 25.8836 11.7454H30.3729C30.4054 11.5724 30.427 11.3776 30.427 11.1829C30.427 9.6361 29.183 8.50031 27.636 8.50031Z" fill="#1F8ED5"/>
<defs>
<linearGradient id="paint0_linear_17_1070" x1="21.8594" y1="10.1229" x2="30.427" y2="10.1229" gradientUnits="userSpaceOnUse">
<stop stop-color="#00A3E1"/>
<stop offset="0.3042" stop-color="#009ADD"/>
<stop offset="0.7987" stop-color="#0082D4"/>
<stop offset="1" stop-color="#0076CF"/>
</linearGradient>
</defs>
</svg>`;

const outStockTitleText = ["0 товаров", "1 товар", "2 товара", "3 товара"];

// Класс всплывающих подсказок по скидке
class discountNotification {
    constructor(args) {}
}

// Класс "Оплатить сразу"
class payImmediatly {
    constructor(args) {
        this.isImmediatly = false;
        this.sumCache = undefined;
        this.checkBoxContainerElement = document.getElementById(args.checkBoxContainerID);
        this.checkBoxContainerElement.addEventListener("click", this.checkBoxHandler.bind(this));
        this.checkBoxContainerElement.innerHTML = disabledCheckBoxHTML;

        this.confirmButtonTextElement = document.getElementById(args.confirmButtonTextID);
        this.leftSideDescriptionTextElement = document.getElementById(args.leftSideDescriptionTextID);
    }

    checkBoxHandler() {
        this.isImmediatly = !this.isImmediatly;
        this.checkBoxContainerElement.innerHTML = this.isImmediatly ? enabledCheckBoxHTML : disabledCheckBoxHTML;
        this.updateSums();
    }

    updateSums(sum) {
        this.sumCache = sum ?? this.sumCache;
        this.confirmButtonTextElement.innerText = this.isImmediatly ? `Оплатить ${this.sumCache.toLocaleString()} сом` : "Заказать";
        this.leftSideDescriptionTextElement.innerText = this.isImmediatly ? "" : "Спишем оплату с карты при получении";
    }
}

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

        this.discountCommonElement = document.getElementById(args.discountCommonID);
        this.discountPersonalElement = document.getElementById(args.discountPersonalID);

        this.countElement.value = `${this.count}`;

        this.tooltipElement = document.getElementById(args.tooltipContainerID);
        this.tooltipTargetElement = document.getElementById(args.tooltipTargetID);
        this.tooltipTargetElement.addEventListener("mouseover", this.tooltipHandler(this.tooltipElement, true).bind(this));
        this.tooltipTargetElement.addEventListener("mouseout", this.tooltipHandler(this.tooltipElement, false).bind(this));

        // Это реально надо комментировать? Неужели этот код может быть непонятным?
        // Добавляем листнеры событий на соответствующие элементы
        this.plusElement.addEventListener("click", this.incrementCount.bind(this));
        this.minusElement.addEventListener("click", this.decrementCount.bind(this));
        this.countElement.addEventListener("input", this.setCount.bind(this));
        this.updatePlusMinusStyles();
        this.updateSums();
    }

    tooltipHandler(element, isShow) {
        return () => {
            element.style.display = isShow ? "flex" : "none";
        };
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
        if (value === "") return;
        // Если пользователь ввел кол-во превышающее максимальное - выводим максимальное
        if (value > this.maxCount) value = this.maxCount;
        // Если пользователь ввел число меньше 1 то принудительно ставим 1
        if (value < 1) value = 1;
        // Если пользователь как-то введет дробную часть числа - выкидываем ее
        if (!Number.isInteger(value)) value = Math.trunc(+value).toString();
        this.count = Math.trunc(+value);
        this.countElement.value = `${this.count}`;
        this.updatePlusMinusStyles();
        this.updateSums();
        document.dispatchEvent(new Event("bascetIsChanged"));
    }

    updateSums() {
        this.productFinalSumElement.classList = (this.basicPrice - this.discount) * this.count >= 1000000 ? ["h4"] : ["h3"];
        this.productFinalSumElement.innerText = ((this.basicPrice - this.discount) * this.count).toLocaleString();
        this.productBasicSumElement.innerText = (this.basicPrice * this.count).toLocaleString();

        this.discountCommonElement.innerText = ((this.discount / 2) * this.count).toLocaleString();
        this.discountPersonalElement.innerText = ((this.discount / 2) * this.count).toLocaleString();
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
        this.firstDeliveryLimit = args.firstDeliveryLimit;

        // Инициализируем состояния товара
        this.isSelected = true;
        this.isEnable = true;
        this.isLiked = false;

        this.distributorTooltipElement = document.getElementById(args.distributorTooltipID);
        this.distributorTooltipTargetElement = document.getElementById(args.distributorTooltipTargetID);
        this.distributorTooltipTargetElement.addEventListener("mouseover", this.tooltipHandler(this.distributorTooltipElement, true).bind(this));
        this.distributorTooltipTargetElement.addEventListener("mouseout", this.tooltipHandler(this.distributorTooltipElement, false).bind(this));

        this.firstDeliveryCounterElement = document.getElementById(args.firstDeliveryCounterID);
        this.firstDeliveryCounterContainerElement = document.getElementById(args.firstDeliveryCounterContainerID);
        this.firstDeliveryContainerElement = document.getElementById(args.firstDeliveryContainerID);
        this.secondDeliveryCounterElement = document.getElementById(args.secondDeliveryCounterID);
        this.secondDeliveryCounterContainerElement = document.getElementById(args.secondDeliveryCounterContainerID);
        this.secondDeliveryContainerElement = document.getElementById(args.secondDeliveryContainerID);

        // Получаем элементы из DOM дерева
        this.productContainerElement = document.getElementById(args.productContainerID);
        this.productLikeButtonElement = document.getElementById(args.productLikeButtonContainerID);
        this.productDeleteButtonElement = document.getElementById(args.productDeleteButtonContainerID);
        this.productCheckBoxContainerElement = document.getElementById(args.productCheckBoxContainerID);

        // Ставим листнеры на клики по управляющим элементам
        // this.productLikeButtonElement.addEventListener("click", this.setLiked);
        this.productDeleteButtonElement.addEventListener("click", this.delete.bind(this));
        this.productCheckBoxContainerElement.addEventListener("click", this.changeSelect.bind(this));

        this.productLikeButtonElement.addEventListener("click", this.setLiked.bind(this));
        document.addEventListener("bascetIsChanged", this.updateDeliveryCounters.bind(this));
        this.updateDeliveryCounters();
    }

    tooltipHandler(element, isShow) {
        return () => {
            element.style.display = isShow ? "flex" : "none";
        };
    }

    setLiked() {
        this.isLiked = !this.isLiked;
        this.productLikeButtonElement.style.fill = this.isLiked ? "#C400A7" : "inherit";
    }

    outsideSetSelect(selected) {
        this.isSelected = selected;
        this.productCheckBoxContainerElement.innerHTML = this.isSelected ? enabledCheckBoxHTML : disabledCheckBoxHTML;
        document.dispatchEvent(new Event("bascetIsChanged"));
    }

    updateDeliveryCounters() {
        if (!this.isEnable || !this.isSelected) {
            this.firstDeliveryContainerElement.style.display = "none";
            this.secondDeliveryContainerElement.style.display = "none";
            return;
        }
        this.firstDeliveryCounterElement.innerText = this.counter.count <= this.firstDeliveryLimit ? this.counter.count : this.firstDeliveryLimit;
        this.firstDeliveryCounterContainerElement.style.display = this.counter.count === 1 ? "none" : "flex";
        this.firstDeliveryContainerElement.style.display = this.counter.count === 0 ? "none" : "unset";

        this.secondDeliveryCounterElement.innerText = this.counter.count - this.firstDeliveryLimit;
        this.secondDeliveryCounterContainerElement.style.display = this.counter.count - this.firstDeliveryLimit === 1 ? "none" : "flex";
        this.secondDeliveryContainerElement.style.display = this.counter.count < this.firstDeliveryLimit ? "none" : "unset";
    }

    // Хэндлер чекбокса
    changeSelect() {
        this.isSelected = !this.isSelected;
        this.productCheckBoxContainerElement.innerHTML = this.isSelected ? enabledCheckBoxHTML : disabledCheckBoxHTML;
        document.dispatchEvent(new Event("bascetIsChanged"));
        document.dispatchEvent(new Event("productSelectChanged"));
    }

    // Хэндлер удаления продукта
    delete() {
        this.isEnable = false;
        this.productContainerElement.style.display = "none";
        document.dispatchEvent(new Event("bascetIsChanged"));
    }
}

// Класс корзины
class bascet {
    constructor(args) {
        // Инициализируем все товары, пришедшие в аргументах
        this.products = args.productsArgs.map((ProdArgs) => new Product(ProdArgs));

        this.payImmediatly = new payImmediatly(args.payImmediatlyParams);

        this.isShowed = true;
        this.isSelectAll = true;

        this.deliveryContainersElements = args.delvierySecondIDs.map((ID) => document.getElementById(ID));
        this.productCounterContainerElement = document.getElementById(args.productCounterContainerID);
        this.productCounterElement = document.getElementById(args.porductCounterID);
        this.arrowButtonElement = document.getElementById(args.arrowButtonID);
        this.productsContainerElement = document.getElementById(args.productsContainerID);
        this.bascetCheckBoxElemnt = document.getElementById(args.bascetCheckBoxContainerID);

        this.arrowButtonElement.addEventListener("click", this.setShowed.bind(this));
        this.bascetCheckBoxElemnt.addEventListener("click", this.setSelectAll.bind(this));

        // Получаем элементы сумм из DOM'a
        this.finalSumElement = document.getElementById(args.finalSumElementID);
        this.basicSumElement = document.getElementById(args.basicSumElementID);
        this.discountSumElement = document.getElementById(args.discountSumElementID);

        this.updateSum();

        // Записываем значения сумм в DOM
        this.basicSumElement.innerText = `${this.basicSum.toLocaleString()}`;
        this.discountSumElement.innerText = `−${this.discountSum.toLocaleString()}`;
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`;

        // Добавляем листнер на изменения в корзине
        document.addEventListener("bascetIsChanged", this.updateSum.bind(this));
        document.addEventListener("productSelectChanged", this.productSlectedHandler.bind(this));
    }

    updateDispalyDelivery() {
        const isSecondDate = !this.products.every((Prod) => Prod.counter.count - Prod.firstDeliveryLimit <= 0);
        this.deliveryContainersElements.forEach((Element) => (Element.style.display = isSecondDate ? "flex" : "none"));
    }

    productSlectedHandler() {
        const isAllSelected = this.products.every((Prod) => Prod.isSelected);
        this.bascetCheckBoxElemnt.innerHTML = isAllSelected ? enabledCheckBoxHTML : disabledCheckBoxHTML;
        this.isSelectAll = isAllSelected;
    }

    setShowed() {
        this.isShowed = !this.isShowed;
        this.arrowButtonElement.style.transform = this.isShowed ? "rotate(0deg)" : "rotate(180deg)";
        this.productsContainerElement.style.display = this.isShowed ? "flex" : "none";
    }

    setSelectAll() {
        this.isSelectAll = !this.isSelectAll;
        this.products.forEach((Prod) => {
            Prod.outsideSetSelect(this.isSelectAll);
        });
        this.bascetCheckBoxElemnt.innerHTML = this.isSelectAll ? enabledCheckBoxHTML : disabledCheckBoxHTML;
    }

    // Хэндлер изменений в корзине
    updateSum() {
        // Высчитываем базовую сумму и сумму скидки
        this.basicSum = this.products.reduce((Sum, Prod) => (Sum += Prod.basicPrice * Prod.counter.count * +(Prod.isSelected && Prod.isEnable)), 0);
        this.discountSum = this.products.reduce((Sum, Prod) => (Sum += Prod.discount * Prod.counter.count * +(Prod.isSelected && Prod.isEnable)), 0);
        const productsCount = this.products.reduce((Sum, Prod) => (Sum += +Prod.isEnable), 0);

        // Записываем все суммы в DOM
        this.productCounterElement.innerText = productsCount ? productsCount : "";
        if (productsCount) {
            this.productCounterContainerElement.style.backgroundColor = "rgba(245, 81, 35, 1)";
        } else {
            this.productCounterContainerElement.style.backgroundColor = "transparent";
        }

        this.basicSumElement.innerText = this.basicSum.toLocaleString();
        this.discountSumElement.innerText = `${this.discountSum === 0 ? "" : "−"}${this.discountSum.toLocaleString()}`;
        this.finalSumElement.innerText = `${(this.basicSum - this.discountSum).toLocaleString()}`;
        this.payImmediatly.updateSums(this.basicSum - this.discountSum);
        this.updateDispalyDelivery();
    }
}

// Класс отсутствующих продуктов
class outStockProduct {
    constructor(args) {
        this.productContainerElement = document.getElementById(args.productContainerID);
        this.likeButtionElement = document.getElementById(args.likeButtonID);
        this.deleteButtonElement = document.getElementById(args.deleteButtonID);

        this.isLiked = false;
        this.isEnable = true;

        this.deleteButtonElement.addEventListener("click", this.delete.bind(this));
        this.likeButtionElement.addEventListener("click", this.setLiked.bind(this));
    }

    setLiked() {
        this.isLiked = !this.isLiked;
        this.likeButtionElement.style.fill = this.isLiked ? "#C400A7" : "inherit";
    }

    delete() {
        this.isEnable = false;
        this.productContainerElement.style.display = "none";
        document.dispatchEvent(new Event("outStockProdsIsChanged"));
    }
}

// Класс управления способами оплаты
class paymentsSelector {
    constructor(args) {
        this.initialButtonsElements = args.initialButtons.map((ID) => document.getElementById(ID));
        this.initialButtonsElements.forEach((Element) => Element.addEventListener("click", this.modalControl(true).bind(this)));

        this.CloseButtonElement = document.getElementById(args.CloseButtonID);
        this.CloseButtonElement.addEventListener("click", this.cancleChoise.bind(this));

        this.ConfirmButtonElement = document.getElementById(args.confirmButtonID);
        this.ConfirmButtonElement.addEventListener("click", this.confirmChoiseCard.bind(this));

        this.cardsRatioButtonsElements = args.cardsRatioButtons.map((ID) => document.getElementById(ID));
        this.cardsRatioButtonsElements.forEach((Element, ind) => Element.addEventListener("click", this.cardsSelectHandler(ind).bind(this)));
        this.cardsContainersElements = args.cardsContainers.map((ID) => document.getElementById(ID));

        this.modalElement = document.getElementById(args.modalID);
        this.cardsParams = args.cardsParams;
        this.chosenCardIndex = 0;
        this.selectedCardIndex = 0;
        this.confirmChoiseCard(0);
    }

    cardsSelectHandler(cardIndex) {
        return () => {
            this.selectedCardIndex = cardIndex;
            this.cardsRatioButtonsElements.forEach((Elemnet, ind) => (Elemnet.innerHTML = ind === cardIndex ? activeRatio : inactiveRatio));
        };
    }

    cancleChoise() {
        this.selectedCardIndex = this.chosenCardIndex;
        this.modalControl(false)();
    }

    confirmChoiseCard() {
        this.chosenCardIndex = this.selectedCardIndex;
        this.cardsContainersElements.forEach((Element) => (Element.innerHTML = this.cardsParams[this.chosenCardIndex].cardIconSVG));
        this.cardsRatioButtonsElements.forEach((Elemnet, ind) => (Elemnet.innerHTML = ind === this.chosenCardIndex ? activeRatio : inactiveRatio));
        this.modalControl(false)();
    }

    modalControl(isShow) {
        return () => {
            this.modalElement.style.display = isShow ? "flex" : "none";
        };
    }
}

// Класс управления способами доставки
class deliverySelector {
    constructor(args) {
        this.publicAddresses = args.publicAddresses;
        this.privateAddresses = args.privateAddresses;

        this.deletedPublicAddresses = [];
        this.deletedPrivateAddresses = [];

        this.isChoisedAdressPublic = true;
        this.choisedAddressIndex = 0;

        this.isSelectedAdressPublic = true;
        this.selectedAddressIndex = 0;

        // Заголоки меню доставки в правой и левой части
        this.deliveryTitleRigthElement = document.getElementById(args.deliveryTitleRigthID);
        this.deliveryTitleLeftElement = document.getElementById(args.deliveryTitleLeftID);

        // Звездочки рейтинга в левой части
        this.deliveryDetailContainerElement = document.getElementById(args.deliveryDetailContainerID);

        // Варианты пунктов доставки
        this.publicAddressesElements = args.publicAddressesID.map((ID) => document.getElementById(ID));

        // Варинаты доставки на дом
        this.privateAddressesElements = args.privateAddressesID.map((ID) => document.getElementById(ID));

        // Элементы для подстановки адресов в основном окне
        this.deliveryAddressesConainersElements = args.deliveryAddressesConainersID.map((ID) => document.getElementById(ID));

        // Элементы открывающие модальное окно
        this.initialButtonsElements = args.initialButtonsID.map((ID) => document.getElementById(ID));
        this.initialButtonsElements.forEach((Element) => Element.addEventListener("click", this.openModal.bind(this)));

        // Модальное окно
        this.modalContainerElement = document.getElementById(args.modalContainerID);

        // Чекбоксы пунктов доставки
        this.privatePointsCheckBoxesElements = args.privatePointsCheckBoxesID.map((ID) => document.getElementById(ID));
        this.privatePointsCheckBoxesElements.forEach((Element, ind) => Element.addEventListener("click", this.selectAdressIndex(ind).bind(this)));

        // Чекбоксы адресов доставки на дом
        this.publicPointsCheckBoxesElements = args.publicPointsCheckBoxesID.map((ID) => document.getElementById(ID));
        this.publicPointsCheckBoxesElements.forEach((Element, ind) => Element.addEventListener("click", this.selectAdressIndex(ind).bind(this)));

        // Кнопки - удалить пункты доставки в ПВЗ
        this.deletePublicPointElements = args.deletePublicPointID.map((ID) => document.getElementById(ID));
        this.deletePublicPointElements.forEach((Element, ind) => Element.addEventListener("click", this.deleteDeliveryPoint(true, ind).bind(this)));

        // Кнопки - удалить пункты доставки домой
        this.deletePrivatePointElements = args.deletePrivatePointID.map((ID) => document.getElementById(ID));
        this.deletePrivatePointElements.forEach((Element, ind) => Element.addEventListener("click", this.deleteDeliveryPoint(false, ind).bind(this)));

        // Кнопка "Курьером"
        this.privatePointsSelectorElement = document.getElementById(args.privatePointsSelectorID);
        this.privatePointsSelectorElement.addEventListener("click", this.swichAddressType(false).bind(this));

        // Кнопка "В пункт выдачи"
        this.publicPointsSelectorElement = document.getElementById(args.publicPointsSelectorID);
        this.publicPointsSelectorElement.addEventListener("click", this.swichAddressType(true).bind(this));

        // "Закрыть" - или крестик на модальном окне
        this.CloseButtonElement = document.getElementById(args.CloseButtonID);
        this.CloseButtonElement.addEventListener("click", this.closeModal.bind(this));

        // Кнопка "Выбрать"
        this.confirmButtonElement = document.getElementById(args.confirmButtonID);
        this.confirmButtonElement.addEventListener("click", this.confirmSelect.bind(this));
        this.confirmSelect();
    }

    openModal() {
        this.modalContainerElement.style.display = "flex";
    }

    swichAddressType(isPublic) {
        return () => {
            this.isSelectedAdressPublic = isPublic;
            this.privateAddressesElements.forEach(
                (Element, ind) => (Element.style.display = !isPublic && !this.isDeliveryPointHidden(false, ind) ? "flex" : "none")
            );
            this.publicAddressesElements.forEach(
                (Element, ind) => (Element.style.display = isPublic && !this.isDeliveryPointHidden(true, ind) ? "flex" : "none")
            );
            this.privatePointsSelectorElement.style.borderColor = isPublic ? "rgba(203, 17, 171, 0.15)" : "rgba(203, 17, 171, 1)";
            this.publicPointsSelectorElement.style.borderColor = isPublic ? "rgba(203, 17, 171, 1)" : "rgba(203, 17, 171, 0.15)";
        };
    }

    isDeliveryPointHidden(isPublic, ind) {
        const result = isPublic ? this.deletedPublicAddresses.includes(ind) : this.deletedPrivateAddresses.includes(ind);
        return result;
    }

    selectAdressIndex(index) {
        return () => {
            this.publicPointsCheckBoxesElements.forEach(
                (Element, ind) => (Element.innerHTML = this.isSelectedAdressPublic && ind === index ? activeRatio : inactiveRatio)
            );
            this.privatePointsCheckBoxesElements.forEach(
                (Element, ind) => (Element.innerHTML = !this.isSelectedAdressPublic && ind === index ? activeRatio : inactiveRatio)
            );
            this.selectedAddressIndex = index;
        };
    }

    deleteDeliveryPoint(isPublic, index) {
        return () => {
            if (isPublic) {
                this.deletedPublicAddresses.push(index);
            } else {
                this.deletedPrivateAddresses.push(index);
            }
            this.swichAddressType(this.isSelectedAdressPublic)();
        };
    }

    // hideDeletedPoints() {
    //     this.publicAddressesElements.forEach((Element, Ind) => (Element.style.display = this.isDeliveryPointHidden(true, Ind) ? "none" : "flex"));
    //     this.privateAddressesElements.forEach((Element, Ind) => (Element.style.display = this.isDeliveryPointHidden(false, Ind) ? "none" : "flex"));
    // }

    confirmSelect() {
        this.isChoisedAdressPublic = this.isSelectedAdressPublic;
        this.choisedAddressIndex = this.selectedAddressIndex;
        this.deliveryAddressesConainersElements.forEach(
            (Element) => (Element.innerText = (this.isChoisedAdressPublic ? this.publicAddresses : this.privateAddresses)[this.choisedAddressIndex])
        );
        this.deliveryDetailContainerElement.style.display = this.isChoisedAdressPublic ? "flex" : "none";
        this.deliveryTitleRigthElement.innerText = this.isChoisedAdressPublic ? "Доставка в пункт выдачи" : "Доставка домой";
        this.deliveryTitleLeftElement.innerText = this.isChoisedAdressPublic ? "Пункт выдачи" : "Адрес доставки";
        this.closeModal();
    }

    closeModal() {
        this.swichAddressType(this.isChoisedAdressPublic)();
        this.selectAdressIndex(this.choisedAddressIndex)();
        this.modalContainerElement.style.display = "none";
    }
}

// Класс корзины отсутствующих продуктов
class outStockBascet {
    constructor(args) {
        this.products = args.productArgs.map((ProdArgs) => new outStockProduct(ProdArgs));
        this.arrowButtonElement = document.getElementById(args.arrowButtonID);
        this.productsCounterElement = document.getElementById(args.productsConterID);
        this.productsContainerElement = document.getElementById(args.productsContainerID);

        this.isHidden = false;

        this.arrowButtonElement.addEventListener("click", this.arrowHandler.bind(this));
        document.addEventListener("outStockProdsIsChanged", this.updateProductsCounter.bind(this));
    }

    arrowHandler() {
        this.isHidden = !this.isHidden;
        this.productsContainerElement.style.display = this.isHidden ? "none" : "flex";
        this.arrowButtonElement.style.transform = this.isHidden ? "rotate(180deg)" : "rotate(0deg)";
    }

    updateProductsCounter() {
        this.productsCounterElement.innerText = outStockTitleText[this.products.reduce((Sum, Prod) => (Sum += +Prod.isEnable), 0)];
    }
}

// Класс для всплывающих подсказок
class tooltip {
    constructor(args) {
        this.targetElement = document.getElementById(args.targetTooltipElement);
        this.targetTooltipElement = document.getElementById(args.targetTooltipID);

        this.targetElement.addEventListener("mouseover", this.notificationHandler(true).bind(this));
        this.targetElement.addEventListener("mouseout", this.notificationHandler(false).bind(this));
    }

    notificationHandler(isHover) {
        return () => {
            if (isHover) {
                this.targetTooltipElement.style.display = "flex";
            } else {
                this.targetTooltipElement.style.display = "none";
            }
        };
    }
}

// Класс
class inputValidation {
    constructor(args) {
        this.conditionRegExp = args.conditionRegExp;
        this.errorText = args.errorText;
        this.fieldName = args.fieldName;
        this.upperPlaceHolderElement = document.getElementById(args.upperPlaceHolderID);
        this.errorContainerElement = document.getElementById(args.errorContainerID);
        this.inputElement = document.getElementById(args.inputID);

        this.inputElement.addEventListener("focusout", () => {});
        this.inputElement.addEventListener("input", this.inputHandler.bind(this));
    }

    inputHandler() {
        const isEmpty = this.inputElement.value.length === 0;
        console.log(isEmpty);
        this.upperPlaceHolderElement.innerText = isEmpty ? "" : this.fieldName;
    }

    validation() {
        const isValid = this.conditionRegExp.test(this.inputElement.value);
    }
}

// Инициализируем корзину налич. товаров
const pageBascet = new bascet({
    finalSumElementID: "final-sum-element",
    basicSumElementID: "basic-sum-element",

    productCounterContainerID: "header-protuct-counter-container",
    porductCounterID: "header-protuct-counter",

    bascetCheckBoxContainerID: "show-all-in-stock-button",

    productsContainerID: "main-in-stock-products",

    payImmediatlyParams: {
        leftSideDescriptionTextID: "left-side-immediatly-pay-text",
        confirmButtonTextID: "order-confirm-button",
        checkBoxContainerID: "immediatly-pay-checkbox-container",
    },

    arrowButtonID: "bascet-in-stock-arrow-btn",
    discountSumElementID: "discount-sum-element",

    delvierySecondIDs: ["second-delivery-date", "second-delivery-date-container"],

    deliveryContainers: [],
    productsArgs: [1, 2, 3].map((Ind) => {
        return {
            basicPrice: [0, 1080, 11200, 480][Ind],
            discount: [0, 108, 1120, 48][Ind],
            maxCount: [0, 2, Infinity, 2][Ind],
            productCheckBoxContainerID: `product-${Ind}-in-stock-check-box-container`,
            productContainerID: `product-${Ind}-in-stock-container`,

            firstDeliveryLimit: [0, 4, 184, 4][Ind],

            firstDeliveryCounterID: `delivery-first-date-counter-${Ind}`,
            firstDeliveryCounterContainerID: `delivery-first-date-counter-container-${Ind}`,
            firstDeliveryContainerID: `delivery-first-date-container-${Ind}`,

            secondDeliveryCounterID: `delivery-second-date-counter-${Ind}`,
            secondDeliveryCounterContainerID: `delivery-second-date-counter-container-${Ind}`,
            secondDeliveryContainerID: `delivery-second-date-container-${Ind}`,

            productDeleteButtonContainerID: `product-${Ind}-delete-button-container`,

            productLikeButtonContainerID: `product-${Ind}-like-button-container`,

            distributorTooltipID: `distributor-tooltip-${Ind}`,
            distributorTooltipTargetID: `distributor-tooltip-target-${Ind}`,

            counterArgs: {
                minusElementID: `product-${Ind}-decrementer`,
                plusElementID: `product-${Ind}-incrementer`,
                countElementID: `product-${Ind}-counter`,
                maxCount: [0, 2, Infinity, 2][Ind],
                initialCount: [0, 1, 200, 2][Ind],
                productFinalSumID: `product-${Ind}-final-sum`,
                productBasicSumID: `product-${Ind}-basic-sum`,
                basicPrice: [0, 1080, 11500, 480][Ind],
                discount: [0, 108, 1150, 48][Ind],
                discountCommonID: `product-common-discount-${Ind}`,
                discountPersonalID: `product-personal-discount-${Ind}`,
                tooltipContainerID: `product-disount-tooltip-${Ind}`,
                tooltipTargetID: `product-disount-tooltip-target-${Ind}`,
            },
        };
    }),
});

// Инициализируем корзину отсутствующих товаров
const outStockBAscet = new outStockBascet({
    productsConterID: "out-stock-products-counter",
    arrowButtonID: "out-stock-arrow",
    productsContainerID: "main-out-stock-products-container",
    productArgs: [1, 2, 3].map((Ind) => {
        return {
            productContainerID: `out-stock-product-container-${Ind}`,
            likeButtonID: `product-out-${Ind}-like-button-container`,
            deleteButtonID: `product-out-${Ind}-delete-button-container`,
        };
    }),
});

// Инициализируем всплывающую подсказку о бесплатной доставке в левой части
const leftSideNotification = new tooltip({
    targetTooltipID: "left-side-notification",
    targetTooltipElement: "left-notification-text",
});

// Инициализируем всплывающую подсказку о бесплатной доставке в правой части
const rightSideNotification = new tooltip({
    targetTooltipID: "right-side-notification",
    targetTooltipElement: "right-notification-text",
});

// Инициализируем управление способами оплаты
const paymentsControl = new paymentsSelector({
    modalID: `modal-payment-container`,
    initialButtons: ["open-select-payment-1", "open-select-payment-2"],
    CloseButtonID: "modal-payment-exit",
    confirmButtonID: "modal-payment-confirm-button",
    cardsRatioButtons: Array(4)
        .fill(0)
        .map((_, ind) => `modal-payment-${ind}-ratio`),
    cardsContainers: ["card-container-right", "card-container-left"],
    cardsParams: [{ cardIconSVG: mirCardSVG }, { cardIconSVG: visaCardSVG }, { cardIconSVG: masterCardSVG }, { cardIconSVG: maestroSVG }],
});

const deliveryControl = new deliverySelector({
    privateAddresses: [
        "г. Бишкек, улица Табышалиева, 57",
        "г. Бишкек, улица Жукеева-Пудовкина, 77/1",
        "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
    ],
    publicAddresses: [
        "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
        "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
        "г. Бишкек, улица Табышалиева, д. 57",
    ],
    CloseButtonID: "modal-delivery-exit-btn",
    privatePointsSelectorID: "modal-delivery-type-btn-private",
    publicPointsSelectorID: "modal-delivery-type-btn-public",
    initialButtonsID: ["delivery-open-modal-0", "delivery-open-modal-1"],
    deliveryAddressesConainersID: ["delivery-address-0", "delivery-address-1"],
    privateAddressesID: ["delivery-point-private-0", "delivery-point-private-1", "delivery-point-private-2"],
    publicAddressesID: ["delivery-point-pub-0", "delivery-point-pub-1", "delivery-point-pub-2"],
    modalContainerID: "modal-delivery-container",
    privatePointsCheckBoxesID: ["modal-delivery-checkbox-private-0", "modal-delivery-checkbox-private-1", "modal-delivery-checkbox-private-2"],
    publicPointsCheckBoxesID: ["modal-delivery-checkbox-public-0", "modal-delivery-checkbox-public-1", "modal-delivery-checkbox-public-2"],
    confirmButtonID: "modal-delivery-confirm-button",
    deletePrivatePointID: ["delete-private-addr-0", "delete-private-addr-1", "delete-private-addr-2"],
    deletePublicPointID: ["delete-public-addr-0", "delete-public-addr-1", "delete-public-addr-2"],
    deliveryDetailContainerID: "main-order-delivery-point-details",
    deliveryTitleLeftID: "delivery-title-left",
    deliveryTitleRigthID: "delivery-title-right",
});

const inputFirstName = new inputValidation({
    fieldName: "Имя",
    errorText: "Введите имя",
    conditionRegExp: /^[А-ЯЁA-Z][а-яёa-z\s-]*$/,
    upperPlaceHolderID: "input-upper-placeholder-first-name",
    inputID: "input-first-name",
    errorContainerID: "input-error-first-name",
});

const inputLastName = new inputValidation({
    fieldName: "Фамилия",
    errorText: "Введите фамилию",
    conditionRegExp: /^[А-ЯЁA-Z][а-яёa-z\s-]*$/,
    upperPlaceHolderID: "input-upper-placeholder-last-name",
    inputID: "input-last-name",
    errorContainerID: "input-error-last-name",
});

const inputMail = new inputValidation({
    fieldName: "Почта",
    errorText: "Введите почту",
    conditionRegExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    upperPlaceHolderID: "input-upper-placeholder-mail",
    inputID: "input-mail",
    errorContainerID: "input-error-mail",
});

const inputPhone = new inputValidation({
    fieldName: "Телефон",
    errorText: "Введите телефон",
    conditionRegExp: /^[А-ЯЁA-Z][а-яёa-z\s-]*$/,
    upperPlaceHolderID: "input-upper-placeholder-phone",
    inputID: "input-phone",
    errorContainerID: "input-error-phone",
});

const inputINN = new inputValidation({
    fieldName: "ИНН",
    errorText: "Введите ИНН",
    conditionRegExp: /^\d{14}$/,
    upperPlaceHolderID: "input-upper-placeholder-inn",
    inputID: "input-inn",
    errorContainerID: "input-error-inn",
});
