const form = document.getElementById('form');
const result = document.getElementById('result');
// Je recupere l'element du formulaire

form.addEventListener('submit', async function (e) {
    // J'empeche le fonctionnement par defaut du submit
    e.preventDefault();
    // Dans FormData je crée un nouvel objet FormData qui prend en parametre le formulaire
    const formData = new FormData(form);
    // Je transforme le formData en objet JS , en utilisant la methode fromEntries qui va prendre toutes les entrées de formData et les mettre dans un objet 
    const object = Object.fromEntries(formData);

    // J'insére un message de chargement via innerHTML
    result.innerHTML = "Please wait..."
    // Test ce bout de code 
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            // Cette ligne va prendre l'objet JavaScript et le transformer en JSON
            body: JSON.stringify(object)
        });
        // Si le try à fonctionné je recupere la data
        const data = await response.json();
        
        // Je traite la reponse en fonction de son statut "200 => success"
        if (response.status == 200) {
            result.innerHTML = "Merci pour votre message!";
            result.classList.add('success');
        } else {
            result.innerHTML = data.message;
        }

    } catch (error) {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    }
    form.reset();
    setTimeout(() => {
        result.style.display = "none";
    }, 3000);
 
});