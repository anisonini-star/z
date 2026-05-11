// Функции для работы с формой калькулятора

// Сложение
function plus() {
    a = +window.document.form1.T1.value;
    b = +window.document.form1.T2.value;
    window.document.form1.T3.value = a + b;
}

// Вычитание
function minus() {
    a = +window.document.form1.T1.value;
    b = +window.document.form1.T2.value;
    window.document.form1.T3.value = a - b;
}

// Умножение
function proizv() {
    a = +window.document.form1.T1.value;
    b = +window.document.form1.T2.value;
    window.document.form1.T3.value = a * b;
}

// Деление
function delen() {
    a = +window.document.form1.T1.value;
    b = +window.document.form1.T2.value;
    if (b != 0) {
        window.document.form1.T3.value = a / b;
    } else {
        alert("Делить на ноль нельзя!");
        window.document.form1.T2.focus();
        window.document.form1.T2.select();
    }
}

// Возведение в степень
function stepen() {
    a = +window.document.form1.T1.value;
    b = +window.document.form1.T2.value;
    window.document.form1.T3.value = Math.pow(a, b);
}

// Модуль числа
function modul() {
    a = +window.document.form1.T1.value;
    window.document.form1.T3.value = Math.abs(a);
}

// Квадратный корень
function koren() {
    a = +window.document.form1.T1.value;
    if (a >= 0) {
        window.document.form1.T3.value = Math.sqrt(a);
    } else {
        alert("Нельзя извлечь корень из отрицательного числа!");
        window.document.form1.T1.focus();
        window.document.form1.T1.select();
    }
}

// Экспонента
function exponent() {
    a = +window.document.form1.T1.value;
    window.document.form1.T3.value = Math.exp(a);
}

// Натуральный логарифм
function logarifm() {
    a = +window.document.form1.T1.value;
    if (a > 0) {
        window.document.form1.T3.value = Math.log(a);
    } else {
        alert("Логарифм определён только для положительных чисел!");
        window.document.form1.T1.focus();
        window.document.form1.T1.select();
    }
}

// Синус
function sinus() {
    a = +window.document.form1.T1.value;
    window.document.form1.T3.value = Math.sin(a);
}

// Косинус
function cosinus() {
    a = +window.document.form1.T1.value;
    window.document.form1.T3.value = Math.cos(a);
}

// Тангенс
function tangens() {
    a = +window.document.form1.T1.value;
    window.document.form1.T3.value = Math.tan(a);
}

// Котангенс
function cotangens() {
    a = +window.document.form1.T1.value;
    if (Math.tan(a) != 0) {
        window.document.form1.T3.value = 1 / Math.tan(a);
    } else {
        alert("Нельзя рассчитать котангенс из нуля!");
        window.document.form1.T1.focus();
        window.document.form1.T1.select();
    }
}

// Установка точности
function tochnost() {
    a = +window.prompt("Введите точность (количество знаков после запятой)", "2");
    b = +window.document.form1.T3.value;
    window.document.form1.T3.value = b.toFixed(a);
}

// Округление вверх
function okruglverh() {
    a = +window.document.form1.T3.value;
    window.document.form1.T3.value = Math.ceil(a);
}

// Округление вниз
function okruglvniz() {
    a = +window.document.form1.T3.value;
    window.document.form1.T3.value = Math.floor(a);
}

// Математическое округление
function okrugl() {
    a = +window.document.form1.T3.value;
    window.document.form1.T3.value = Math.round(a);
}