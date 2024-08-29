// Внедрение слайдера на готовый сайт
document.addEventListener('DOMContentLoaded', () => {
    // Переменные для смены темы
    const changeThemeButton = document.getElementById('change-theme');
    const h2Element=document.querySelector('#properties h2');
    // Переменная для применения стилей для слабовидящих
    const toggleAccessibilityButton=document.getElementById('toggle-accessibility');
    // Переменные для аккордеона
    const toggleDiscountDetailsButton=document.getElementById('toggle-discount-details');
    const texts=['Показать детали','Скрыть детали'];
    let state=0;
    const discountDetails=document.getElementById('discountDetails');


    // Смена темы
    changeThemeButton.addEventListener('click',()=>{
        document.body.classList.toggle('dark-theme');
        h2Element.classList.toggle('h2-color');
    });

    // Версия для слабовидящих
    toggleAccessibilityButton.addEventListener('click',()=>{
        document.body.classList.remove('dark-theme');
        h2Element.classList.remove('h2-color');
        document.body.classList.toggle('accessibility');
    });

    // Показать/скрыть детали скидок
    toggleDiscountDetailsButton.addEventListener('click',()=>{
        discountDetails.classList.toggle('accordeon-hidden');
        discountDetails.classList.toggle('accordeon-show');
        state=1-state;
        toggleDiscountDetailsButton.textContent=texts[state];
    });
});