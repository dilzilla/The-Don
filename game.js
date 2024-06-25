import { scenarios, storylineEvents } from './scenarios.js';

const MAX_STAT = 10;
const MIN_STAT = 0;
const DECISION_TIME = 20000;

const gameState = {
    arms: 5,
    money: 5,
    family: 5,
    church: 5,
    yearsInPower: 0,
    lastCharacterType: null,
    usedEvents: new Set(),
    currentEvent: null,
    timer: null,
    currentStoryline: null,
    achievements: []
};
const characters = {
    "Consigliere": [
        { image: "consigliere1.jpg", name: "Salvatore 'Sal' Russo", description: "The wise and strategic advisor." },
        { image: "consigliere2.jpg", name: "Antonio 'Tony' Bellini", description: "The shrewd and calculating counselor." },
        { image: "consigliere3.jpg", name: "Giuseppe 'Joe' Lombardi", description: "The pragmatic and loyal confidant." }
    ],
    "Enforcer": [
        { image: "enforcer1.jpg", name: "Big Louie 'The Hammer' Martino", description: "The intimidating and forceful enforcer." },
        { image: "enforcer2.jpg", name: "Vincent 'Vinnie' Rossi", description: "The brawny and loyal muscle." },
        { image: "enforcer3.jpg", name: "Frank 'The Tank' DeMarco", description: "The steadfast and fearsome enforcer." }
    ],
    "Informant": [
        { image: "informant1.jpg", name: "Jimmy 'The Weasel' Mancuso", description: "The slippery and untrustworthy spy." },
        { image: "informant2.jpg", name: "Charlie 'The Rat' Fiore", description: "The cunning and deceitful informer." },
        { image: "informant3.jpg", name: "Tommy 'The Squealer' Marino", description: "The talkative and unreliable informant." }
    ],
    "Capo": [
        { image: "capo1.jpg", name: "Vito 'The Captain' Giordano", description: "The ambitious and strategic capo." },
        { image: "capo2.jpg", name: "Rocco 'Rocky' Moretti", description: "The commanding and respected leader." },
        { image: "capo3.jpg", name: "Nino 'The Knife' Santoro", description: "The ruthless and tactical capo." }
    ],
    "Dirty Cop": [
        { image: "dirtycop1.jpg", name: "Detective Mick O'Reilly", description: "The corrupt and greedy lawman." },
        { image: "dirtycop2.jpg", name: "Officer Frank 'Dirty' Delaney", description: "The bribable and unethical cop." },
        { image: "dirtycop3.jpg", name: "Sgt. Jack 'Shady' Murphy", description: "The manipulative and corrupt officer." }
    ],
    "Business Owner": [
        { image: "businessowner1.jpg", name: "Tony 'The Mechanic' Lombardi", description: "The crafty and resourceful frontman." },
        { image: "businessowner2.jpg", name: "Giovanni 'The Shopkeeper' Ricci", description: "The pragmatic and strategic businessman." },
        { image: "businessowner3.jpg", name: "Carlo 'The Café' Bianchi", description: "The shrewd and opportunistic businessman." }
    ],
    "Politician": [
        { image: "politician1.jpg", name: "Mayor Frank 'The Handshake' Romano", description: "The influential and corrupt politician." },
        { image: "politician2.jpg", name: "Senator Michael 'The Fixer' Marino", description: "The shady and deal-making politician." },
        { image: "politician3.jpg", name: "Councilman Joe 'The Deal' Moretti", description: "The crooked and transactional politician." }
    ],
    "Rival Leader": [
        { image: "rivalleader1.jpg", name: "Patrick 'Paddy' O'Connor", description: "The rival gang's ambitious leader." },
        { image: "rivalleader2.jpg", name: "Connor 'The Boss' McNamara", description: "The ruthless and strategic rival leader." },
        { image: "rivalleader3.jpg", name: "Liam 'The King' Byrne", description: "The fearless and cunning gang leader." }
    ],
    "Money Man": [
        { image: "moneyman1.jpg", name: "Carlo 'The Calculator' Ricci", description: "The meticulous and crafty accountant." },
        { image: "moneyman2.jpg", name: "Vinny 'The Book' Carbone", description: "The clever and efficient money man." },
        { image: "moneyman3.jpg", name: "Sal 'The Ledger' Mancini", description: "The precise and shrewd financier." }
    ],
    "Family Member": [
        { image: "familymember1.jpg", name: "Gina 'Little Sis' Lombardi", description: "The caring but ambitious sister." },
        { image: "familymember2.jpg", name: "Maria 'The Confidant' Rossi", description: "The loyal and protective family member." },
        { image: "familymember3.jpg", name: "Angela 'The Protector' Bianchi", description: "The supportive but shrewd relative." }
    ],
    "Priest": [
        { image: "priest1.jpg", name: "Father Michael 'The Confessor' Donato", description: "The compassionate and wise priest." },
        { image: "priest2.jpg", name: "Father Dominic 'The Guide' Lombardi", description: "The ethical and insightful clergyman." },
        { image: "priest3.jpg", name: "Father Antonio 'The Shepherd' Ricci", description: "The moral and strategic priest." }
    ],
    "Nun": [
        { image: "nun1.jpg", name: "Sister Mary 'The Saint' De Luca", description: "The charitable and dedicated nun." },
        { image: "nun2.jpg", name: "Sister Teresa 'The Healer' Romano", description: "The caring and community-oriented nun." },
        { image: "nun3.jpg", name: "Sister Frances 'The Advocate' Russo", description: "The activist and compassionate nun." }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');

    if (startButton) {
        console.log('Start button found');
        startButton.addEventListener('click', startGame);
    } else {
        console.error('Start button not found');
    }

    if (restartButton) {
        console.log('Restart button found');
        restartButton.addEventListener('click', startGame);
    } else {
        console.error('Restart button not found');
    }

    initializeSwipeFeature();
});

function startGame() {
    console.log('Starting game');
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    resetGame();
    newTurn();
}

function resetGame() {
    Object.assign(gameState, {
        arms: 5,
        money: 5,
        family: 5,
        church: 5,
        yearsInPower: 0,
        lastCharacterType: null,
        usedEvents: new Set(),
        currentEvent: null,
        timer: null,
        currentStoryline: null
    });
}

function newTurn() {
    if (gameState.currentStoryline) {
        continueStoryline();
    } else if (Math.random() < 0.05) { // 5% chance to start a storyline
        startStoryline();
    } else {
        regularTurn();
    }
}

function regularTurn() {
    const character = getRandomCharacter();
    gameState.lastCharacterType = character.type;
    const event = getRandomEvent(character.type);
    gameState.currentEvent = event;

    updateCharacterUI(character, event);
    updateUI();
    startTimer();
}

function startStoryline() {
    const storylineKeys = Object.keys(storylineEvents);
    const randomStoryline = storylineKeys[Math.floor(Math.random() * storylineKeys.length)];
    gameState.currentStoryline = {
        name: randomStoryline,
        currentEventId: storylineEvents[randomStoryline][0].id
    };
    continueStoryline();
}

function continueStoryline() {
    const currentStoryline = storylineEvents[gameState.currentStoryline.name];
    const currentEvent = currentStoryline.find(event => event.id === gameState.currentStoryline.currentEventId);
    displayStorylineEvent(currentEvent);
}

function displayStorylineEvent(event) {
    const storylineName = gameState.currentStoryline.name;
    const formattedStorylineName = storylineName
        .split(/(?=[A-Z])/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    updateCharacterUI({ name: formattedStorylineName }, event);
    
    const characterImage = document.getElementById('character-image');
    if (characterImage) {
        characterImage.src = `${event.id}.jpg`;
        characterImage.alt = formattedStorylineName;
    }

    const specialElement = document.getElementById('special-storyline-element');
    if (specialElement) {
        specialElement.textContent = event.specialData || '';
        specialElement.style.display = event.specialData ? 'block' : 'none';
    }

    updateUI();
    startTimer();
}

function updateCharacterUI(character, event) {
    const characterNameElement = document.getElementById('character-name');
    const dialogueElement = document.getElementById('dialogue');
    const choice1Button = document.getElementById('choice1');
    const choice2Button = document.getElementById('choice2');
    const characterImageElement = document.getElementById('character-image');

    if (characterNameElement) characterNameElement.textContent = character.name;
    if (dialogueElement) dialogueElement.textContent = event.dialogue;

    if (characterImageElement) {
        console.log('Attempting to load image:', character.image);
        characterImageElement.onload = () => console.log('Image loaded successfully:', character.image);
        characterImageElement.onerror = () => console.error('Failed to load image:', character.image);
        characterImageElement.src = character.image;
    } else {
        console.error('Character image element not found');
    }

    if (event.choices && event.choices.length >= 2) {
        choice1Button.textContent = event.choices[0].text;
        choice2Button.textContent = event.choices[1].text;
        
        choice1Button.onclick = () => makeChoice(0);
        choice2Button.onclick = () => makeChoice(1);

        choice1Button.style.display = 'inline-block';
        choice2Button.style.display = 'inline-block';
    } else {
        console.error('Event does not have expected choices:', event);
        choice1Button.style.display = 'none';
        choice2Button.style.display = 'none';
    }
}

function makeChoice(choiceIndex) {
    clearTimeout(gameState.timer);
    if (gameState.currentStoryline) {
        makeStorylineChoice(choiceIndex);
    } else {
        makeRegularChoice(choiceIndex);
    }
}

function makeRegularChoice(choiceIndex) {
    const effects = gameState.currentEvent.choices[choiceIndex].effects;
    for (let stat in effects) {
        gameState[stat] = Math.max(MIN_STAT, Math.min(MAX_STAT, gameState[stat] + effects[stat]));
    }
    gameState.yearsInPower++;
    updateUI();

    if (checkGameOver()) {
        return;
    }
    newTurn();
}

function makeStorylineChoice(choiceIndex) {
    const currentStoryline = storylineEvents[gameState.currentStoryline.name];
    const currentEvent = currentStoryline.find(event => event.id === gameState.currentStoryline.currentEventId);
    const choice = currentEvent.choices[choiceIndex];

    if (choice.effects) {
        for (let stat in choice.effects) {
            if (stat === 'achievement') {
                addAchievement(choice.effects[stat]);
            } else if (stat === 'game_over') {
                showGameOver(choice.outcome);
                return;
            } else {
                gameState[stat] = Math.max(MIN_STAT, Math.min(MAX_STAT, gameState[stat] + choice.effects[stat]));
            }
        }
    }

    if (choice.outcome) {
        displayOutcome(choice.outcome);
    }

    if (choice.nextId) {
        gameState.currentStoryline.currentEventId = choice.nextId;
        newTurn();
    } else {
        endStoryline();
    }

    updateUI();
}

function displayOutcome(outcome) {
    const outcomeContainer = document.createElement('div');
    outcomeContainer.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
    
    const outcomeCard = document.createElement('div');
    outcomeCard.className = 'bg-gray-800 p-8 rounded-lg max-w-md text-center';
    
    const title = document.createElement('h2');
    title.textContent = 'Outcome';
    title.className = 'text-2xl font-bold mb-4 text-yellow-500';
    
    const description = document.createElement('p');
    description.textContent = outcome;
    description.className = 'mb-4';
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Continue';
    closeButton.className = 'bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded';
    closeButton.onclick = () => {
        outcomeContainer.remove();
    };
    
    outcomeCard.appendChild(title);
    outcomeCard.appendChild(description);
    outcomeCard.appendChild(closeButton);
    outcomeContainer.appendChild(outcomeCard);
    document.body.appendChild(outcomeContainer);
}

function endStoryline() {
    gameState.currentStoryline = null;
    newTurn();
}

function addAchievement(achievement) {
    if (!gameState.achievements.includes(achievement)) {
        gameState.achievements.push(achievement);
        displayAchievement(achievement);
    }
}

function displayAchievement(achievement) {
    const achievementContainer = document.createElement('div');
    achievementContainer.className = 'fixed bottom-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-full shadow-lg text-2xl animate-bounce';
    achievementContainer.textContent = `New Achievement: ${achievement}`;
    document.body.appendChild(achievementContainer);
    setTimeout(() => {
        achievementContainer.remove();
    }, 3000);
    updateAchievementsDisplay();
}

function updateAchievementsDisplay() {
    const achievementsDisplay = document.getElementById('achievements-display');
    if (achievementsDisplay) {
        achievementsDisplay.textContent = gameState.achievements.join(' ');
    }
}

function updateUI() {
    ['arms', 'money', 'family', 'church'].forEach(stat => {
        const progressBar = document.getElementById(`${stat}-progress`);
        if (progressBar) {
            progressBar.style.width = `${gameState[stat] * 10}%`;
        }
    });

    const yearsInPowerElement = document.getElementById('years-in-power');
    if (yearsInPowerElement) {
        yearsInPowerElement.textContent = `${gameState.yearsInPower} years in power`;
    }
    
    updateAchievementsDisplay();
}

function getRandomCharacter() {
    const availableTypes = Object.keys(characters).filter(type => type !== gameState.lastCharacterType);
    const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
    const characterOptions = characters[randomType];
    return {
        ...characterOptions[Math.floor(Math.random() * characterOptions.length)],
        type: randomType
    };
}

function getRandomEvent(characterType) {
    if (!scenarios[characterType]) {
        console.error(`No events found for character type: ${characterType}`);
        return {
            dialogue: 'No events available.',
            choices: [
                { text: 'Continue', effects: {} }
            ]
        };
    }

    const availableEvents = scenarios[characterType].filter(scenario => !gameState.usedEvents.has(scenario.id));
    if (availableEvents.length === 0) {
        gameState.usedEvents.clear();
        return getRandomEvent(characterType);
    }
    const event = availableEvents[Math.floor(Math.random() * availableEvents.length)];
    gameState.usedEvents.add(event.id);
    return event;
}

function checkGameOver() {
    const stats = ['arms', 'money', 'family', 'church'];
    for (let stat of stats) {
        if (gameState[stat] <= MIN_STAT) {
            showGameOver(`You've run out of ${stat}. Your empire crumbles.`);
            return true;
        }
        if (gameState[stat] >= MAX_STAT) {
            const reasons = {
                arms: "Your military power became too strong, and you were overthrown in a coup.",
                money: "Your extreme wealth attracted too much attention, leading to your downfall.",
                family: "Your family became too powerful and decided they no longer needed you.",
                church: "The church's influence grew too strong, and they turned against you."
            };
            showGameOver(reasons[stat]);
            return true;
        }
    }
    return false;
}

function showGameOver(reason) {
    clearTimeout(gameState.timer);
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.remove('hidden');
    document.getElementById('death-message').textContent = `${reason} You lasted ${gameState.yearsInPower} years as the Don.`;
}

function startTimer() {
    const timerBar = document.getElementById('timer-progress');
    timerBar.style.width = '100%';
    let timeLeft = DECISION_TIME;

    function updateTimer() {
        timeLeft -= 100;
        const width = (timeLeft / DECISION_TIME) * 100;
        timerBar.style.width = `${width}%`;

        if (timeLeft <= 0) {
            timeExpired();
        } else {
            gameState.timer = setTimeout(updateTimer, 100);
        }
    }

    gameState.timer = setTimeout(updateTimer, 100);
}

function timeExpired() {
    const stats = ['arms', 'money', 'family', 'church'];
    const randomStat = stats[Math.floor(Math.random() * stats.length)];
    gameState[randomStat] = Math.max(MIN_STAT, gameState[randomStat] - 2);

    updateUI();
    if (checkGameOver()) {
        return;
    }
    newTurn();
}

function initializeSwipeFeature() {
    const gameCard = document.getElementById('game-card');
    if (gameCard && typeof Hammer !== 'undefined') {
        const hammer = new Hammer(gameCard);

        hammer.on('panleft panright', handlePan);
        hammer.on('panend', handlePanEnd);
    } else {
        console.error('Game card element not found or Hammer.js not loaded');
    }
}

function handlePan(event) {
    const gameCard = document.getElementById('game-card');
    const choiceLeft = document.querySelector('.choice-left');
    const choiceRight = document.querySelector('.choice-right');

    if (event.type === 'panleft') {
        gameCard.classList.add('swiping-left');
        if (choiceLeft) choiceLeft.style.opacity = Math.min(event.deltaX / -100, 1);
    } else if (event.type === 'panright') {
        gameCard.classList.add('swiping-right');
        if (choiceRight) choiceRight.style.opacity = Math.min(event.deltaX / 100, 1);
    }
}

function handlePanEnd(event) {
    const gameCard = document.getElementById('game-card');
    const choiceLeft = document.querySelector('.choice-left');
    const choiceRight = document.querySelector('.choice-right');

    gameCard.classList.remove('swiping-left', 'swiping-right');
    if (choiceLeft) choiceLeft.style.opacity = 0;
    if (choiceRight) choiceRight.style.opacity = 0;

    if (Math.abs(event.deltaX) > 100) {
        if (event.deltaX < 0) {
            makeChoice(0); // Left swipe
        } else {
            makeChoice(1); // Right swipe
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
