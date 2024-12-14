document.querySelectorAll('.myButton').forEach(button => {
    button.addEventListener('click', function(event) {
        let buttonText = event.target.innerText; // Veya event.target.textContent
        alert('Clicked button text: ' + buttonText);

        window.location.href = "" + buttonText; // Açmak istediğiniz URL'yi buraya yazın
    });
});
