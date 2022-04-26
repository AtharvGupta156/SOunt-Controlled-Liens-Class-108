function startClassification() {
    // This is to ask the user for microhpone permission
    navigator.mediaDevices.getUserMedia({audio:true});
    // Whenever uploading the model we should always write model.json other wise it will not work
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1FzSwlfgI/model.json', modelReady);
}

function modelReady() {
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        colour_r= Math.floor(Math.random()*255)+1;
        colour_g= Math.floor(Math.random()*255)+1;
        colour_b= Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = 'I Can Hear :'+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+colour_r+","+colour_g+","+colour_b+")";

        img = document.getElementById("alien_1");
        img1 = document.getElementById("alien_2")
        img2 = document.getElementById("alien_3")
        img3 = document.getElementById("alien_4")

        if (results[0].label == "Clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == "Snap") {
            img1.src = 'aliens-02.gif';
            img.src = 'aliens-01.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png'; 
        }
        else if (results[0].label == "Bell") {
            img2.src = 'aliens-03.gif';
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img3.src = 'aliens-04.png'; 
        }
        else {
            img3.src = 'aliens-04.gif';
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png'; 
        }
        }   
    }

