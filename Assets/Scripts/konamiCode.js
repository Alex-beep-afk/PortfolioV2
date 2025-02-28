
        // Séquence de touches souhaitée (par exemple, "abc")
        const sequence = ['s','a','n','t','i'];
        let currentSequence = [];

        // Écouter les événements de touches
        document.addEventListener('keydown', (event) => {
            // Ajouter la touche pressée à la séquence actuelle
            currentSequence.push(event.key);

            // Vérifier si la séquence actuelle correspond à la séquence souhaitée
            if (currentSequence.join('').includes(sequence.join(''))) {
                // Rediriger l'utilisateur vers une autre page
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }

            // Limiter la longueur de la séquence actuelle pour éviter les dépassements
            if (currentSequence.length > sequence.length) {
                currentSequence.shift();
            }
        });
