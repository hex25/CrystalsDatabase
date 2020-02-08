/* the database of all crystals - just add in accordance with the template, copy paste from { to },  :
    {
        name : [''],
        zodiac : [''],
        planet : [''],
        element : [''],
        chakra : [''],
        info : [''],
    }, */

const crystals = [
    {
        name: ' Amethyst',
        zodiac: [' Virgo', ' Sagittarius', ' Capricorn', ' Aquarius', ' Pisces'],
        planet: [' Jupiter'],
        element: [' Air', ' Water'],
        chakra: [' Third Eye Chakra', ' Crown Chakra'],
        imagePath: ['./images/amethyst.jpg'],
        application: ['Test1','Test2','Test3'],
        info: ' Amethyst is a powerful and protective stone.  It guards against psychic attack, transmuting the energy into love and protecting the wearer from all types of harm, including geopathic or electromagnetic stress and ill wishes from others.  Amethyst is a natural tranquiliser, it relieves stress and strain, soothes irritability, balances mood swings, dispels anger, rage, fear and anxiety.  Alleviates sadness and grief, and dissolves negativity.  Amethyst activates spiritual awareness, opens intuition and enhances psychic abilities.  It has strong healing and cleansing powers.  Amethyst encourages sobriety, having a sobering effect on overindulgence of alcohol, drugs or other addictions.  It calms and stimulates the mind, helping you become more focused, enhancing memory and improving motivation.  Amethyst assists in remembering and understanding dreams.  It relieves insomnia.  Encourages selflessness and spiritual wisdom. Amethyst boosts hormone production, tunes the endocrine system and metabolism.  It strengthens the immune system, reduces pain and strengthens the body to fight against cancer. It destroys malignant tumours and aids in tissue regeneration.  Cleanses the blood.  Relieves physical, emotional and psychological pain or stress.  Amethyst eases headaches and releases tension.  It reduces bruising, swellings, injuries, and treats hearing disorders.  Amethyst heals diseases of the lungs and respiratory tract, skin conditions, cellular disorders and diseases of the digestive tract.',
    },
    {
        name: ' Rose Quartz',
        zodiac: [' Taurus', ' Libra'],
        planet: [' Venus'],
        element: [' Earth', ' Water'],
        chakra: [' Heart Chakra'],
        imagePath: ['./images/rose_quartz.jpeg'],
        application: ['Test2'],
        info: [' Rose Quartz is the stone of universal love.  It restores trust and harmony in relationships, encouraging unconditional love.  Rose Quartz purifies and opens the heart at all levels to promote love, self-love, friendship, deep inner healing and feelings of peace.  Calming and reassuring, it helps to comfort in times of grief.  Rose Quartz dispels negativity and protects against environmental pollution, replacing it with loving vibes.  It encourages self forgiveness and acceptance invoking self trust and self worth. Rose Quartz strengthens and balances the physical heart and circulatory system, and releases impurities from body fluids.  It hastens recovery, reduces high blood pressure, aids chest and lung problems, heals the kidneys and adrenals, and alleviates vertigo.  A good energetic support for those with leukaemia. Rose Quartz has the power to increase fertility and to protect both mother and unborn fetus from miscarriage.'],
    },
    {
        name: [' Black Onyx'],
        zodiac: [' Gemini', ' Leo'],
        planet: [' Saturn'],
        element: [' Earth'],
        chakra: [' Root Chakra'],
        imagePath: ['./images/black_onyx.jpg'],
        application: ['Test2','Test3','Test4'],
        info: [' Onyx gives strength.  It promotes vigor, steadfastness and stamina.  Imparts self-confidence, helping you to be at ease in your surroundings.  Onyx banishes grief, enhances self-control and stimulates the power of wise decision-making.  It encourages happiness and good fortune. Onyx treats disorders of the bones, bone marrow and blood.  It is beneficial for teeth and the feet.'],
    },
    /* template, copy paste from { to }, 
    {
        name : [''],
        zodiac : [''],
        planet : [''],
        element : [''],
        chakra : [''],
        info : [''],
    },
    */

];

// formatting crystal info
function formatCrystal(crystal, container) {
    let crystalHeader = document.createElement("H2");
    crystalHeader.innerHTML = crystal.name;
    let crystalImage = document.createElement("IMG");
    crystalImage.src = crystal.imagePath;
    crystalImage.className = 'crystal-image';
    let crystalName = document.createElement("P");
    crystalName.innerHTML = '<strong>Name :</strong>' + crystal.name;
    let crystalZodiac = document.createElement("P");
    crystalZodiac.innerHTML = '<strong>Zodiac :</strong>' + crystal.zodiac;
    let crystalPlanets = document.createElement("P");
    crystalPlanets.innerHTML = '<strong>Planets :</strong>' + crystal.planet;
    let crystalElements = document.createElement("P");
    crystalElements.innerHTML = '<strong>Elements :</strong>' + crystal.element;
    let crystalChakras = document.createElement("P");
    crystalChakras.innerHTML = '<strong>Chakras :</strong>' + crystal.chakra;
    let crystalApplication = document.createElement("P");
    crystalApplication.innerHTML = '<strong>Application :</strong>' + crystal.application;
    let crystalInfo = document.createElement("P");
    crystalInfo.innerHTML = crystal.info;


    container.appendChild(crystalHeader);
    container.appendChild(crystalImage);
    container.appendChild(crystalName);
    container.appendChild(crystalZodiac);
    container.appendChild(crystalPlanets);
    container.appendChild(crystalElements);
    container.appendChild(crystalChakras);
    container.appendChild(crystalApplication);
    container.appendChild(crystalInfo);


}

// resetting container and buttons 
function clearAll() {
    let inactiveButtons = document.getElementsByClassName('category-button');
            for (let k=0;k<inactiveButtons.length;k++) {
                inactiveButtons[k].style.backgroundColor = '#fff';
            }
   /* let cleanContainer = document.getElementsByClassName('info-container');
            for (let k=0;k<cleanContainer.length;k++) {
                cleanContainer[k].innerHTML = '';
            }*/
}

// creating buttons based on crystal's keys (name, element, planet, etc..)

function createNameButton(array) {
    let nameArray = [];
    let container = document.getElementById('name-container');
    for (let i = 0; i < array.length; i++) {
        nameArray.push(array[i].name);
    }
    nameArray.sort();
    for (i = 0; i < nameArray.length; i++) {
        let aButton = document.createElement("DIV");
        aButton.className = 'category-button';
        aButton.id = nameArray[i] + '-button';
        aButton.innerHTML = nameArray[i];
        document.getElementById('name-button-container').appendChild(aButton);
        document.getElementById(aButton.id).addEventListener("click", function(){
            container.innerHTML = '';
            clearAll();
            document.getElementById(aButton.id).style.backgroundColor = '#ccc';
            for (let i = 0; i < crystals.length; i++) {
                if (crystals[i].name.includes(this.innerHTML)) {
                    formatCrystal(crystals[i], container);
                }
            }
    })
}

}
createNameButton(crystals);

function createElementButton(array) {
    let elementArray = [];
    let container = document.getElementById('element-container');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].element.length; j++) {
            elementArray.push(array[i].element[j]);
        }
    }
    elementArray.sort();
    let distinctElement = [...new Set(elementArray)];
    for (i = 0; i < distinctElement.length; i++) {
        let aButton = document.createElement("DIV");
        aButton.className = 'category-button';
        aButton.id = distinctElement[i] + '-button';
        aButton.innerHTML = distinctElement[i];
        document.getElementById('element-button-container').appendChild(aButton);
        document.getElementById(aButton.id).addEventListener("click", function(){
            container.innerHTML = '';
            clearAll();
            document.getElementById(aButton.id).style.backgroundColor = '#ccc';
            for (let i = 0; i < crystals.length; i++) {
                if (crystals[i].element.includes(this.innerHTML)) {
                    formatCrystal(crystals[i], container);
                }
            }
    })
}
}
createElementButton(crystals);

function createZodiacButton(array) {
    let zodiacArray = [];
    let container = document.getElementById('zodiac-container');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].zodiac.length; j++) {
            zodiacArray.push(array[i].zodiac[j]);
        }
    }
    zodiacArray.sort();
    let distinctZodiac = [...new Set(zodiacArray)];
    for (i = 0; i < distinctZodiac.length; i++) {
        let aButton = document.createElement("DIV");
        aButton.className = 'category-button';
        aButton.id = distinctZodiac[i] + '-button';
        aButton.innerHTML = distinctZodiac[i];
        document.getElementById('zodiac-button-container').appendChild(aButton);
        document.getElementById(aButton.id).addEventListener("click", function(){
            container.innerHTML = '';
            clearAll();
            document.getElementById(aButton.id).style.backgroundColor = '#ccc';
            for (let i = 0; i < crystals.length; i++) {
                if (crystals[i].zodiac.includes(this.innerHTML)) {
                    formatCrystal(crystals[i], container);
                }
            }
    })
    }
}
createZodiacButton(crystals);

function createChakraButton(array) {
    let chakraArray = [];
    let container = document.getElementById('chakra-container');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].chakra.length; j++) {
            chakraArray.push(array[i].chakra[j]);
        }
    }
    chakraArray.sort();
    let distinctChakra = [...new Set(chakraArray)];
    for (i = 0; i < distinctChakra.length; i++) {
        let aButton = document.createElement("DIV");
        aButton.className = 'category-button';
        aButton.id = distinctChakra[i] + '-button';
        aButton.innerHTML = distinctChakra[i];
        document.getElementById('chakra-button-container').appendChild(aButton);
        document.getElementById(aButton.id).addEventListener("click", function(){
            container.innerHTML = '';
            clearAll();
            document.getElementById(aButton.id).style.backgroundColor = '#ccc';
            for (let i = 0; i < crystals.length; i++) {
                if (crystals[i].chakra.includes(this.innerHTML)) {
                    formatCrystal(crystals[i], container);
                }
            }
    })
    }
}
createChakraButton(crystals);

function createPlanetButton(array) {
    let planetArray = [];
    let container = document.getElementById('planet-container');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].planet.length; j++) {
            planetArray.push(array[i].planet[j]);
        }
    }
    planetArray.sort();
    let distinctPlanet = [...new Set(planetArray)];
    for (i = 0; i < distinctPlanet.length; i++) {
        let aButton = document.createElement("DIV");
        aButton.className = 'category-button';
        aButton.id = distinctPlanet[i] + '-button';
        aButton.innerHTML = distinctPlanet[i];
        document.getElementById('planet-button-container').appendChild(aButton);
        document.getElementById(aButton.id).addEventListener("click", function(){
            container.innerHTML = '';
            clearAll();
            document.getElementById(aButton.id).style.backgroundColor = '#ccc';
            for (let i = 0; i < crystals.length; i++) {
                if (crystals[i].planet.includes(this.innerHTML)) {
                    formatCrystal(crystals[i], container);
                }
            }
    })
    }
}
createPlanetButton(crystals);

function createApplicationButton(array) {
    let applicationArray = [];
    let container = document.getElementById('application-container');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].application.length; j++) {
            applicationArray.push(array[i].application[j]);
        }
    }
    applicationArray.sort();
    let distinctApplication = [...new Set(applicationArray)];
    for (i = 0; i < distinctApplication.length; i++) {
        let aButton = document.createElement("DIV");
        aButton.className = 'category-button';
        aButton.id = distinctApplication[i] + '-button';
        aButton.innerHTML = distinctApplication[i];
        document.getElementById('application-button-container').appendChild(aButton);
        document.getElementById(aButton.id).addEventListener("click", function(){
            container.innerHTML = '';
            clearAll();
            document.getElementById(aButton.id).style.backgroundColor = '#ccc';
            for (let i = 0; i < crystals.length; i++) {
                if (crystals[i].application.includes(this.innerHTML)) {
                    formatCrystal(crystals[i], container);
                }
            }
    })
    }
}
createApplicationButton(crystals);

// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}