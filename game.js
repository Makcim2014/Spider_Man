const elements = {
    clicker: document.querySelector("#clicker"),
    clickerimg: document.querySelector("#clicker img"),
    score: document.querySelector("#score"),
    avtoscore: document.querySelector("#avto_score"),
    autopower: document.querySelector("#power"),
    skidish: document.querySelector(".skidish"),
    skidishVideo: document.querySelector(".skidish video"),
    pobedatext: document.querySelector("#pobeda h4")
};

// Игровые данные
const gameState = {
    count: 0,
    power: 1,
    level: 0,
    autoclick: 0,
    prices: [30, 200, 80, 2500, 1000, 30000, 9000, 1000000],
    levels: ['img/lvl2.png', 'img/lvl3.webp', 'img/lvl4.webp', 'img/lvl5.jpg'],
    pobeda: ['победа над носорогом', 'победа над фиском', 'победа над ли', 'победа над доктором октавиусом']
};

// Конфигурация улучшений
const upgrades = [
    { id: 'br_rk', type: 'power', value: 3, priceIndex: 0 },
    { id: 'gz_rk', type: 'power', value: 10, priceIndex: 2 },
    { id: 'zl_rk', type: 'power', value: 100, priceIndex: 4 },
    { id: 'alm_rk', type: 'power', value: 1000, priceIndex: 6 },
    { id: 'avto', type: 'autoclick', value: 10, priceIndex: 1 },
    { id: 'ctpd', type: 'autoclick', value: 100, priceIndex: 3 },
    { id: 'pom', type: 'autoclick', value: 1000, priceIndex: 5 },
    { id: 'pobeda', type: 'level', value: 0, priceIndex: 7 }
];

// Обновление отображения счета
function updateScore() {
    elements.score.textContent = gameState.count;
    elements.autopower.textContent = gameState.power;
    elements.avtoscore.textContent = gameState.autoclick;
}

// Проверка доступности улучшений
function checkPrice() {
    upgrades.forEach((upgrade, index) => {
        const element = document.querySelector(`#${upgrade.id}`);
        if (gameState.count >= gameState.prices[upgrade.priceIndex]) {
            element.classList.remove("upgrade-card-close");
        } else {
            element.classList.add("upgrade-card-close");
        }
    });
}

// Покупка улучшения
function buyUpgrade(upgrade) {
    const priceIndex = upgrade.priceIndex;
    const price = gameState.prices[priceIndex];
    
    if (gameState.count >= price) {
        gameState.count -= price;
        
        // Применяем эффект улучшения
        switch (upgrade.type) {
            case 'power':
                gameState.power += upgrade.value;
                break;
            case 'autoclick':
                gameState.autoclick += upgrade.value;
                break;
            case 'level':
                upgradeGame();
                break;
        }
        
        // Увеличиваем цену
        gameState.prices[priceIndex] = Math.round(price * 1.15);
        
        // Обновляем интерфейс
        const element = document.querySelector(`#${upgrade.id}`);
        element.lastElementChild.textContent = `цена ${gameState.prices[priceIndex]}`;
        
        updateScore();
        checkPrice();
    }
}

// Переход на новый уровень
function upgradeGame() {
    gameState.count = 0;
    gameState.power = 1;
    gameState.autoclick = 0;
    gameState.level++;
    
    // Сбрасываем цены
    gameState.prices = [30, 200, 80, 2500, 1000, 30000, 9000, 1000000];
    
    // Обновляем изображение
    if (gameState.level < gameState.levels.length) {
        elements.clickerimg.src = gameState.levels[gameState.level-1];
        elements.pobedatext.innerHTML = gameState.pobeda[gameState.level-1];

    }
    
    // Обновляем цены в интерфейсе
    upgrades.forEach(upgrade => {
        const element = document.querySelector(`#${upgrade.id}`);
        element.lastElementChild.innerHTML = `цена ${gameState.prices[upgrade.priceIndex]}`;
    });
    
    // Показываем заставку
    showSkidish();
    
    updateScore();
    checkPrice();
}

// Показ заставки
function showSkidish() {
    elements.skidish.style.display = "flex";
    elements.skidishVideo.play();
    
    setTimeout(() => {
        elements.skidish.style.display = "none";
    }, 6000);
}

// Инициализация игры
function initGame() {
    // Обработчик клика
    elements.clicker.onclick = () => {
        gameState.count += gameState.power;
        updateScore();
        checkPrice();
    };
    
    // Автокликер
    setInterval(() => {
        gameState.count += gameState.autoclick;
        updateScore();
        checkPrice();
    }, 1000);
    
    // Инициализация улучшений
    upgrades.forEach(upgrade => {
        const element = document.querySelector(`#${upgrade.id}`);
        element.onclick = () => buyUpgrade(upgrade);
        element.lastElementChild.textContent = `цена ${gameState.prices[upgrade.priceIndex]}`;
    });
    
    // Начальное обновление интерфейса
    updateScore();
    checkPrice();
}

// Запуск игры
initGame();