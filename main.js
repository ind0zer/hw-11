const bankAccount = {
    ownerName: "Artem",
    accountNumber: 777,
    balance: 6123,
    deposit: function (amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Ви поповнили рахунок на ${amount} грн. Поточний баланс: ${this.balance} грн.`);
      } else {
        console.log("Сума поповнення має бути більше 0.");
      }
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Ви зняли ${amount} грн. Поточний баланс: ${this.balance} грн.`);
      } else {
        console.log("Недостатньо коштів на рахунку або сума зняття некоректна.");
      }
    }
  };
  
  const depositPrompt = prompt("Добрий день, введіть + якщо хочете положити кошти на рахунок, та - щоб зняти.");
  
  if (depositPrompt == "+") {
    const depositMoney = Number(prompt(`Введіть сумму депозиту`));
    bankAccount.deposit(depositMoney);
  } else if (depositPrompt == "-") {
    const withdrawMoney = Number(prompt(`Введіть сумму зняття`));
    bankAccount.withdraw(withdrawMoney);
  } else {
    console.log("Невірний вибір. Введіть + або -.");
  }
  

const weather = {
    temperature: 35,
    humidity: 10,
    windSpeed: 23,
    temperatureCheck: function (temperature) {
        if (temperature < 0) {
            return true;
        } else if (temperature >= 0) {
            return false;
        }
    }
}

const weatherPrompt = parseFloat(prompt("Введіть температуру"));

if (isNaN(weatherPrompt)) {
    console.log("Ви ввели не число");
} else if (weather.temperatureCheck(weatherPrompt)) {
    console.log("Температура нижче 0 градусів Цельсія");
} else {
    console.log("Температура більше або дорівнює 0 градусів Цельсія");
}

const user = {
    name: 'Indozer',
    email: 'indozer@proton.me',
    password: '123123Aa',
    login: function () {
        if (this.email.includes("@") && this.email.includes(".") && this.password.length >= 8) {
            alert("Введені данні підлягають реєстрації");
        } else {
            alert("{Можливо в пошті немає @ та крапки, або пароль менше 8 символів");
        }
    }
}

console.log(user)
user.login();

const movieRating = parseFloat(prompt(`Поставте оцінку фільму People in Black`));

const movie = {
    title: "People in black",
    director: 'indozer',
    year: 2009,
    rating: [movieRating],
    ratingValidation: function () {
        if (movieRating > 8) {
            alert("Рейтинг більше 8")
        } else if (movieRating <= 8){
            alert("Рейтинг менше або дорівнює 8")
        } else {
            alert("Ви ввели не число")
        }
    }
}

movie.ratingValidation();