let urlImage = [
  "https://img.freepik.com/premium-photo/lake-pier-with-mountains-background_1033303-296.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais",
  "https://img.freepik.com/premium-photo/frozen-fiord-surrounded-by-majestic-mountains-evergreen-forests-with-mysterious-blue-hue_124507-89757.jpg",
  "https://img.freepik.com/premium-photo/landscape-high-icy-mountains-near-lake-digital-art-generative-ai_665346-37252.jpg",
  "https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/036/135/743/small_2x/ai-generated-colored-water-drops-on-abstract-background-water-drops-on-colorful-background-colored-wallpaper-ultra-hd-colorful-wallpaper-background-with-colored-bubbles-photo.jpg",
  "https://static.vecteezy.com/system/resources/previews/032/268/213/large_2x/wallpapers-hd-wallpaper-peacock-flowers-house-nature-water-waterfalls-ai-generated-free-photo.jpg"
]
let konten_el = document.getElementById("konten-holder");
let button1 = document.getElementById("but1");
let button2 = document.getElementById("but2");
let button3 = document.getElementById("but3");

function display(arrNumbers){
  konten_el.innerHTML = "";
  for (let i = 0; i < arrNumbers.length; i++){
    konten_el.innerHTML += `
      <div class="p-2 col-md-3">
          <div class="card">
            <div class="card-body">
              <img src="${urlImage[arrNumbers[i]]}" style="height: 100%; width:100%;"/>
            </div>
        </div>
      </div>
    `;
  }
}

display([0, 1 , 2, 3, 4, 5]);

$('#exampleModal').modal(options)

function show_all() {
  display([0, 1 , 2, 3, 4, 5]);
  document.getElementById("but1").style.background = 'yellow';
  document.getElementById("but2").style.background = 'none';
  document.getElementById("but3").style.background = 'none';
}

function show_opsi1() {
  display([0, 2, 4, 5]);
  document.getElementById("but1").style.background = 'none';
  document.getElementById("but2").style.background = 'yellow';
  document.getElementById("but3").style.background = 'none';
}

function show_opsi2() {
  display([1 , 3, 5]);
  document.getElementById("but1").style.background = 'none';
  document.getElementById("but2").style.background = 'none';
  document.getElementById("but3").style.background = 'yellow';
}
