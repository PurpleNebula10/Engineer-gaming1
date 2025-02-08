function loadBigguy() {
    document.getElementById("bigguy").src="bigfoot.png";
}

function moveBigguy() {
    alert('You found your fat mom + You are an idiot hahahahahahaha.')

    var picture = document.getElementById('bigguy')
  
    var x = Math.random() * 10000
    var y = Math.random() * 10000
  
    picture.style.top = x + 'px'
    picture.style.left = y + 'px'
    }
  