const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');

//画像
const img = new Image();
img.src = './img/map.png';

const cellSize = 50;
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 2, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 2, 0, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
// ctx.drawImage(画像ｿｰｽ, ｽﾀｰﾄ描画座標x, ｽﾀｰﾄ描画座標y, 画像幅, 画像高さ, 
//              canvas位置x, canvs位置y, canvasｻｲｽﾞwidth, canvasｻｲｽﾞHeight);

function drawMaze() {
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 0) {
                ctx.drawImage(img, 0, 0, 32, 32, cellSize * x, cellSize * y, cellSize, cellSize);
            }
            if (maze[y][x] === 1 || maze[y][x] === 2) {
                ctx.drawImage(img, 32, 0, 32, 32, cellSize * x, cellSize * y, cellSize, cellSize);
            }
        }
    }
}

const player = {
    x: 1,
    y: 1,
    color: 'red'
};

const goal = {
    x: 12,
    y: 12,
    color: 'green'
};

let startTime = null;
let intervalId = null;

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(
        player.x * cellSize + cellSize / 2,
        player.y * cellSize + cellSize / 2,
        cellSize / 2 - 5,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

function drawGoal() {
    ctx.fillStyle = goal.color;
    ctx.fillRect(
        goal.x * cellSize,
        goal.y * cellSize,
        cellSize,
        cellSize
    );
}

//ギミック
function clearPlayer() {
    ctx.fillStyle = 'white';
    ctx.fillRect(
        player.x * cellSize,
        player.y * cellSize,
        cellSize,
        cellSize
    );
    if (maze[player.y][player.x] === 0) {
        ctx.drawImage(img, 0, 0, 32, 32, cellSize * player.x, cellSize * player.y, cellSize, cellSize);
    } else if (maze[player.y][player.x] === 1 || maze[player.y][player.x] === 2) {
        ctx.drawImage(img, 32, 0, 32, 32, cellSize * player.x, cellSize * player.y, cellSize, cellSize);
    }
}

// コリジョン処理
function movePlayer(dx, dy) {
    if (maze[player.y + dy][player.x + dx] !== 1) {
        clearPlayer();
        player.x += dx;
        player.y += dy;
        drawPlayer();
        checkGoal();
    }
}
// ゴール時
function checkGoal() {
    if (player.x === goal.x && player.y === goal.y) {
        clearInterval(intervalId);
        alert(`ゴール!${document.getElementsByClassName('time')[0].textContent}`);
    }
}
// 開始時間ｽﾀｰﾄ
function startTimer() {
    startTime = Date.now();
    intervalId = setInterval(() => {
        const ElapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const Time = document.getElementsByClassName('time');
        for (let i = 0; i < Time.length; i++) {
            Time[i].textContent = `Time: ${ElapsedTime}s`;
        }
    }, 1000);
}

// 操作
document.addEventListener('keydown', (event) => {
    if (startTime === null) {
        startTimer();
    }
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});
// 実行
img.addEventListener('load', function() {
    drawMaze();
    drawGoal();
    drawPlayer();
}, false);