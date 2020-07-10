"use-strict"; 
// 09 07 2020
// ДЗ написать код самой
let state= "waiting"// "cooking" "ready"
let balance = document.querySelector(".balance");
let cup = document.querySelector(".cup img");

//Создаем функцию, которая будет принимать на себя два параметра название и цену
function cookCoffee(name, price, elem) { // внесли в index.php onclick="cookCoffee(`назв, цена)"
//Функция проверяет достаточность средств и меняет текст в дисплей в зависимости от результата
if (state != "waiting") {
  return;
}
 if (balance.value >= price) {
   state= "cooking";
   balance.style.backgroundColor = ""; //верни как было, если денег достаточно
   balance.value -= price; //вычесть из баланса стоимость кофе
   changeDisplayText(`Ваш ${name} готовится`);
   
   
   let coffeeImg = elem.querySelector("img");
   let coffeeSrc = coffeeImg.getAttribute("src");
   //console.log(coffeeSrc); //первый вариант получить изобр.кужки(абсолютная ссылка)
   //console.log(coffeeImg.src); //второй вариант получить изобр.кружки(относительная ссылка)
   
   startCooking(name, coffeeSrc);
 } else {
   changeDisplayText("Недостаточно средств");
   balance.style.backgroundColor = ("rgb(255, 0, 31)");//цвет окна красный, елсли недостаточно средств
 }
// .value - свойство элемента баланс, получаем доступ к балансу
}

//Планирование
// setTimeout(func, ms); - отрабатывает один раз
// setInterval(func, ms); - отрабатывает пока не отключим
// let timeout = setTimeout(func, ms);
// let interval = setTimeout(func, ms);
// clearTimeout(timeout);
// clearInterval(interval);


function startCooking(name, src) { // Функция приготовления кофе(заполняется progressBar)
 //let progressBar = document.querySelector(".progress-bar");
 
 cup.setAttribute("src", src); //меняем изображение по функции в блоке с cup
 cup.style.display = "inline"; //чтобы кружка стала видимой т.к. в css изначально сделали невидимой
 let t = 0;
 let cookingInterval = setInterval(() => { //тоже самое что и function()
   t++;
   cup.style.opacity = t + "%"; //прозрачность кружки
   //progressBar.style.width = t + "%"; //ширина прогрессбара
   changeProgressPersent(t);
   //console.log(t);
   
   if (t == 100) {
   state= "ready";
   clearInterval(cookingInterval);
   changeDisplayText(`Ваш ${name} готов!`);
   cup.style.cursor = "pointer"; //когда кофе готово (t=100%), курсор=>палец
   cup.onclick = function() {
     takeCoffee();
      }
   }
 }, 50);
}

// сбрасываем все изменения связанные с приготовлением кофе, чтобы сделать заказ снова
function takeCoffee() { 
  if (state != "ready") {
    return;
  }
 state = "waiting";
 changeProgressPersent(0);
 cup.style.oppacity = 0;
 cup.style.display = ""; // или "none"
 cup.style.cursor = "";
 changeDisplayText("Выберите кофе");
 cup.onklicl = null;
}

function changeProgressPersent(persent) { // функция дает возможность управлять % в прогресс бар в любой части кода
  let progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = persent + "%";
}

//Замена кружки (onclick="cookCoffee(`Каппучино`, 92, this)"> - добавили this каждому слоку с лушателем onclick, элемент this(этот))


//Создаем функцию для управления отображения процесса готовности в дисплей
//используем эту функцию вместо alert 
function changeDisplayText(text) { //(text) локальная переменная для функции
  if (text.length > 23) {
    text = text.slice(0, 23) + "..."; // обрезаем тект если кол-во символов больше 23
  }
  let displayText = document.querySelector(".display span");
  displayText.innerHTML = text; //.innerHTML свойство позволяет менять текст при выполнении условий
}

//10 07 2020
//================   Drag'n'Drop ============ //
//Захват элемента мышкой и его перенос

//Захват элемента мышкой и его перенос
// Для начала mousedown - зажали левую кнопку мыши, поключаем к каждой купюры. Для подключение функции к событие mousedown, используем циклыю.
let money = document.querySelectorAll(".money img");
//1 Вариант 
//for (let i = 0; i < money.length; i++) {
//  money[i].mousedown = takeMoney;
//}

//2 Вариант. Используем локальную переменную let bill of money
for (let bill of money) {
  bill.onmousedown = takeMoney; //в эту функцию передаем this
}
//В функцию, которая присвоена событию, первым параметром передается параметр MouseEvent(все возможные события мыши в браузере)
//Объект события - event
function takeMoney(event) {
  event.preventDefault();
  /* console.log(this);
  console.log(event);
  console.log([event.target, event.clientX, event.clientY]);*/
  let bill = this;
  //Чтобы получить все параметры элемента, воспользуемся методом .getBoundingClientRect()
  //console.log( bill.getBoundingClientRect() ); 
  
  let billCoords = bill.getBoundingClientRect();//получаем все параметры объекта
  
  let billHeight = billCoords.height;//получили высоту
  let billWidth = billCoords.width; //получили ширину
  
  bill.style.position = "absolute"; //выводим куупюру из дом-дерева
  if (!bill.style.transform) { //ball.style.transform == ""(=folse)
  //настраиваем координаты купюры X, Y ,чтобы курсор был по центру
    bill.style.top = (event.clientY - billHeight/2) + "px"; 
    bill.style.left = (event.clientX - billWidth/2) + "px"; 
    bill.style.transform = "rotate(90deg)"; //повернули на 90 градусов
  } else {
    bill.style.top = (event.clientY - billWidth/2) + "px"; 
    bill.style.left = (event.clientX - billHeight/2) + "px"; 
  }
    bill.style.transition = "transform.5s"; //задаем скорость повотора на 90гр
  
  window.onmousemove = function(event) { //Функция расботает в окне window при движении мыши .onmousemove - отслеживание перемещение мыши
    //console.log([event.clientX, event.clientY]); // отследиваем положение мыши в окне
    let billCoords = bill.getBoundingClientRect();
    let billHeight = billCoords.height;//получили высоту
    let billWidth = billCoords.width; //получили ширину
    bill.style.top = (event.clientY - billWidth/2) + "px"; 
    bill.style.left = (event.clientX - billHeight/2) + "px";
  }
  bill.onmouseup = function() {
  window.onmousemove = null;
  if ( inAtm(bill) ); //добавили в <div money> <img .... data-cost="50">
    console.log( bill.getAttribute("data-cost") );
    console.log( bill.dataset.cost );
    balance.value = +balance.value + +bill.dataset.cost; //сложение купюр
    bill.remove(); //Удаляет эл-т купюры(принята в atm)
  }
}

function inAtm(bill) {
  let atm = document.querySelector(".atm img");
  let atmCoords = atm.getBoundingClientRect();//получаем все параметры объекта
  let atmLeftX = atmCoords.x;
  let atmRightX = atmCoords.x + atmCoords.width;
  let atmTopY = atmCoords.y;
  let atmBottomY = atmCoords.y + atmCoords.height/3;//определяем примерно высоту как 1/3 часть atm, тобы найти нижнюю линию купюроприемника
  
  let billCoords = bill.getBoundingClientRect();
  let billLeftX = billCoords.x;
  let billRightX = billCoords.x + billCoords.width;
  let billY = billCoords.y;
  if(
       billLeftX > atmLeftX
    && billRightX < atmRightX
    && billY > atmTopY
    && billY < atmBottomY
    ) {
      return true;
    } else {
      return false;
    }
 
 return {
  atm: [atmLeftX, atmRightX, atmTopY, atmBottomY],
  bill: [billLeftX, billRightX, billY],
  };

}




