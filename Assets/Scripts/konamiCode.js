
        // Séquence de touches souhaitée (par exemple, "abc")
        const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a','Enter'];
        let currentSequence = [];

        // Écouter les événements de touches
        document.addEventListener('keydown', (event) => {
            
            // Ajouter la touche pressée à la séquence actuelle
            currentSequence.push(event.key);

            // Vérifier si la séquence actuelle correspond à la séquence souhaitée
            if (currentSequence.join('').includes(sequence.join(''))) {
                // Rediriger l'utilisateur vers une autre page
                window.location.href = 'https://alex-beep-afk.github.io/Treasurequest/';
            }

            // Limiter la longueur de la séquence actuelle pour éviter les dépassements
            if (currentSequence.length > sequence.length) {
                currentSequence.shift();
            }
        });
