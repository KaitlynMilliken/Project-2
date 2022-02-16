const passageText = `COVID-19 is a disease caused by a virus called SARS-CoV-2. Most people with COVID-19 have mild symptoms, but some people can become severely ill. Although most people with COVID-19 get better within weeks of illness, some people experience post-COVID conditions. Post-COVID conditions are a wide range of new, returning, or ongoing health problems people can experience more than four weeks after first being infected with the virus that causes COVID-19. Older people and those who have certain underlying medical conditions are more likely to get severely ill from COVID-19. Vaccines against COVID-19 are safe and effective.

COVID-19 spreads when an infected person breathes out droplets and very small particles that contain the virus. These droplets and particles can be breathed in by  other people or land on their eyes, noses, or mouth. In some circumstances, they may contaminate surfaces they touch. People who are closer than 6 feet from the infected person are most likely to get infected.

COVID-19 is spread in three main ways: Breathing in air when close to an infected person who is exhaling small droplets and particles that contain the virus. Having these small droplets and particles that contain virus land on the eyes, nose, or mouth, especially through splashes and sprays like a cough or sneeze. Touching eyes, nose, or mouth with hands that have the virus on them.. 

Symptoms are chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, Nausea or vomiting, and or diarrhea.

This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.`;



const questionText = 'What is COVID-19?';


const questionInput = document.getElementById("question");
const passageInput = document.getElementById("passage");
const resultInput = document.getElementById("result");
const aiButton = document.getElementById("ai");
questionInput.value = questionText;
passageInput.innerText = passageText;
aiButton.addEventListener('click', getAnswer);
let qnaModel = null;
qna.load().then(model => {
    qnaModel = model;
    aiButton.disabled = false;
});

function getTextNode(nodes, index) {
    let totalLength = 0;
    for (let i = 0; i < nodes.length; i++) {
        totalLength += nodes[i].length;
        if (totalLength > index) {
            return [nodes[i], nodes[i].length];
        }
    }
}

function getAnswer(e) {
    e.preventDefault();
    let minIndex = 9999999;
    let maxIndex = 0;
    qnaModel.findAnswers(questionInput.value, passageInput.innerText).then(answers => {
        console.log(answers);
        let answerOption = "";
        answers.forEach((answer) => {
            answerOption = answerOption + "\n" + answer.text;
            if (answer.startIndex < minIndex) {
                minIndex = answer.startIndex;
            }
            if (answer.endIndex > maxIndex) {
                maxIndex = answer.endIndex;
            }
        });
        resultInput.value = answerOption
        passageInput.focus();


        const range = document.createRange();
        const nodes = passageInput.childNodes;
        const textNodes = Array.from(passageInput.childNodes).filter(x => x.nodeType === 3);
        const [minTextNode, minLength] = getTextNode(textNodes, minIndex);
        const [maxTextNode, maxLength] = getTextNode(textNodes, maxIndex);

        range.setStart(minTextNode, 0); // minIndex
        range.setEnd(maxTextNode, maxLength); // maxIndex
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);


    });
}