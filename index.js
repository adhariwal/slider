var CurrentSlider = 1; // define var
var slides = ''; // define var
var bullets = ''; // define var
var Data = [{
    "Image": "img/slider1.jpg", //https://ekdesigns.com image is copy from here by google
    "Text": "slider One",
}, {
    "Image": "img/slider2.jpg", //https://ekdesigns.com image is copy from here by google
    "Text": "slider Two",
}, {
    "Image": "img/slider3.jpg", //https://ekdesigns.com image is copy from here by google
    "Text": "slider Three",
}, {
    "Image": "img/slider4.jpg", //https://ekdesigns.com image is copy from here by google
    "Text": "slider four",
}]
class Slider {
    // function which run on load of the page 
    OnPageLoad() {
            Sliders.CreateHtml();
            Sliders.ChangeSlide(CurrentSlider);
            document.body.addEventListener("keyup", function(event) {
                if (event.keyCode === 37) {
                    // 37 is left key value
                    Sliders.NextAndPreviousSlide(-1);
                } else if (event.keyCode === 39) {
                    // 39 is right key value
                    Sliders.NextAndPreviousSlide(1);
                }
            });
            // Perform action onclick
            document.getElementById('PreviousArrow').addEventListener("click", function() {
                Sliders.NextAndPreviousSlide(-1);
            });
            document.getElementById('NextArrow').addEventListener("click", function() {
                Sliders.NextAndPreviousSlide(1);
            });
            var classname = document.getElementsByClassName("Bullet");
            for (var i = 0; i < classname.length; i++) {
                classname[i].addEventListener('click', function() {
                    var id = Math.round(this.id);
                    Sliders.MoveToSlide(id);
                }, false);
            }
        }
        // function to Create HTML using javascript
    CreateHtml() {
            var MainContainer = document.getElementById('MainContainer');
            var BulletContainer = document.getElementById('BulletContainer');
            for (var j = 0; j < Data.length; j++) {
                var Block = document.createElement("div");
                Block.className = 'Block';
                var img = document.createElement("img");
                img.src = Data[j].Image;
                img.className = 'Image';
                img.alt = Data[j].Text;
                var Text = document.createElement("div");
                Text.className = 'TextOnImage';
                var TextData = document.createTextNode(Data[j].Text);
                Text.appendChild(TextData);
                Block.appendChild(img);
                Block.appendChild(Text);
                MainContainer.appendChild(Block);
                var Bullet = document.createElement("div");
                Bullet.className = 'Bullet';
                Bullet.id = j + 1;
                BulletContainer.appendChild(Bullet);
            }

            var PreviousArrow = document.createElement("a");
            PreviousArrow.id = 'PreviousArrow';
            PreviousArrow.text = '❮';
            if (Data.length <= 1) {
                PreviousArrow.style.display = 'none';
            }
            MainContainer.appendChild(PreviousArrow);
            var NextArrow = document.createElement("a");
            NextArrow.id = 'NextArrow';
            NextArrow.text = '❯';
            if (Data.length <= 1) {
                NextArrow.style.display = 'none';
            }
            MainContainer.appendChild(NextArrow);
            slides = document.getElementsByClassName("Block");
            bullets = document.getElementsByClassName("Bullet");


        }
        // function to change slider +1 or -1 from current slider
    NextAndPreviousSlide(PlusAndMinusOne) {
            this.ChangeSlide(CurrentSlider += PlusAndMinusOne);
        }
        // function to go to slider by number
    MoveToSlide(SlideNumber) {
            this.ChangeSlide(CurrentSlider = SlideNumber);
        }
        // Main function which change slider by adding active class
    ChangeSlide(SlideNumber) {
        if (SlideNumber > slides.length) {
            CurrentSlider = 1;
        } else if (SlideNumber < 1) {
            CurrentSlider = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (var i = 0; i < bullets.length; i++) {
            bullets[i].className = bullets[i].className.replace("active", "");
        }
        slides[CurrentSlider - 1].style.display = "block";
        bullets[CurrentSlider - 1].className += " active";
    }
}
//class call
var Sliders = new Slider();
//call onload function
Sliders.OnPageLoad();