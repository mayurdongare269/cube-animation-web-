const cube = document.querySelector('.cube');
cube.addEventListener('mouseover', () => cube.style.animationPlayState = 'paused');
cube.addEventListener('mouseout', () => cube.style.animationPlayState = 'running');
