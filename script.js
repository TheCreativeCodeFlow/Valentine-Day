let currentPage = 1;

        function selectRelation(relation) {
            document.getElementById('startPage').classList.add('hidden');
            document.getElementById(`${relation}Pages`).classList.remove('hidden');
        }

        function nextPage(relation, page) {
            document.getElementById(`${relation}Page${page}`).classList.add('hidden');
            currentPage++;
            const nextPageElement = document.getElementById(`${relation}Page${currentPage}`);
            nextPageElement.classList.remove('hidden');

            // Adding floating hearts
            const heart = document.createElement('div');
            heart.classList.add('heart');
            nextPageElement.appendChild(heart);

            setTimeout(() => heart.remove(), 3000); // Remove heart after animation
        }

        function backToStart() {
            currentPage = 1;
            document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
            document.querySelectorAll('.page')[0].classList.remove('hidden');
            document.getElementById('startPage').classList.remove('hidden');
            document.getElementById('brotherPages').classList.add('hidden');
            document.getElementById('girlfriendPages').classList.add('hidden');
            document.getElementById('sisterPages').classList.add('hidden');
        }