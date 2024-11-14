// DiceRollergame

function rollDice()
{
    const input = document.getElementById("input").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < input; i++)
    {
        const value =Math.ceil(Math.random()*6);
        values.push(value);
        images.push(`<img src="DiceImage/${value}.png" alt="Dice: ${value}">`);
    }
    diceResult.textContent = `dice= ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
}

