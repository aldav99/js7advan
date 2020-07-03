const form = document.getElementById('e-buyTicket-form');

form.addEventListener('submit', submitHandler);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandler(event) {
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const formData = {
        flight: form.elements.flight.value,
        fullName: form.elements.fullname.value,
        type: Number(form.elements.type.value),
        buyTime: new Date(),
    };

    try {
        const buyTime = formData.buyTime.getTime();

        const ticket = world.buyTicket(world.flights, formData.flight, buyTime, formData.fullName, formData.type);

        alert(`You successfully bought seat`);

        form.elements.flight.value = "";
        form.elements.fullname.value = "";
        form.elements.type.value = "";
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();
}
