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
    OnPageLoad() { // function which run on load of the page 
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
    CreateHtml() { // function to Create HTML using javascript
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
        MainContainer.appendChild(PreviousArrow);
        var NextArrow = document.createElement("a");
        NextArrow.id = 'NextArrow';
        NextArrow.text = '❯';
        MainContainer.appendChild(NextArrow);
        slides = document.getElementsByClassName("Block");
        bullets = document.getElementsByClassName("Bullet");

    }
    NextAndPreviousSlide(PlusAndMinusOne) { // function to change slider +1 or -1 from current slider
        this.ChangeSlide(CurrentSlider += PlusAndMinusOne);
    }
    MoveToSlide(SlideNumber) { // function to go to slider by number
        this.ChangeSlide(CurrentSlider = SlideNumber);
    }
    ChangeSlide(SlideNumber) { // Main function which change slider by adding active class
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


var Sliders = new Slider(); //class call
Sliders.OnPageLoad();