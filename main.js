function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0K3eALFru/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("label").innerHTML = 'I can hear:' + results[0].label;
        img = document.getElementById('animal_image');


        if (results[0].label == "lion") {
            img.src = 'lion.gif';


        } else if (results[0].label == "parrot") {


            img.src = 'parrot.gif';

        } else if (results[0].label == "Background noise") {

            img.src = 'Background noise.gif';



        } else {
            img.src = 'dog.gif';


        }



    }

}
