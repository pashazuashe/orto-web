const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
	constructor (questions, current)
	{

		//Массив с вопросами
		this.questions = questions;

		//Номер текущего вопроса
		this.current = current;
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, idQuestion, isStart, isEnd, answers)
	{
		this.text = text; 
		this.idQuestion = idQuestion;
		this.answers = answers; 
		this.isStart = isStart;
		this.isEnd = isEnd;
	}

}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, nextQuestion) 
	{
		this.text = text; 
		this.nextQuestion = nextQuestion;
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}
}

//Массив с результатами
const results = 
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже неплохо разбираетесь", 2),
	new Result("Ваш уровень выше среднего", 4),
	new Result("Вы в совершенстве знаете тему", 6)
];

var questions = [];

questions[0] = {
	q: new Question("Состояние зубных рядов", 0, true, false,
	[
		new Answer("Сужение верхнего зр, нижний зр в норме", 1),
		new Answer("Перекрестный прикус (нижние премоляры лингвально)", 2),
		new Answer("Сужение верхнего и нижнего зубного ряда", 3),
		new Answer("Сужение нижнего зубного ряда, верхний зр в норме", 4),
		new Answer("Адентия (в анамнезе не указано удаление зубов)", 5),
		new Answer("Сверхкомплектные зубы", 6),
		new Answer("Удаление первых времянных моляров", 7),
		new Answer("Удаление временных вторых моляров и/или клыков", 8),
		new Answer("Удаление временных резцов", 9)
	])
}
questions[1] = {
	q: new Question("Сужение верхнего зр, нижний зр в норме", 1, false, false,
	[
		new Answer("Кт челюстей - определение сужения зубных рядов/верхней челюсти", 10)
	])
}
questions[2] = {
	q: new Question("Перекрестный прикус (нижние премоляры лингвально)", 2, false, false,
	[
		new Answer("Сопоставить в конструктивынй прикус и определить степень сужения- возможно требуется протракция нижней челюсти в комбинации с зубоальвеолярным расширением нижнего зр", 0)
	])
}
questions[3] = {
	q: new Question("Cужение верхнего и нижнего зубного ряда", 3, false, false,
	[
		new Answer("Скелетная форма по  данным  кт челюстей", 12),
		new Answer("Зубоальвеолярная форма", 13)
	])
}
questions[4] = {
	q: new Question("Результат", 4, false, true,
	[
		new Answer("Сужение нижнего зубного ряда, верхний зр в норме", -1)
	])
}
questions[5] = {
	q: new Question("Адентия (в анамнезе не указано удаление зубов)", 5, false, false,
	[
		new Answer("Перспективы и второй этап лечения", 14),
		new Answer("Компьютерная томография - оценка расположения клыков и премоляров", 15)
	])
}
questions[6] = {
	q: new Question("Сверхкомплектные зубы", 6, false, false,
	[
		new Answer("Консультация с хирургом о времени удаления, перспективы прорезывания постоянных зубов", -1)
	])
}
questions[7] = {
	q: new Question("Удаление первых временных моляров", 7, false, false,
	[
		new Answer("Ротация моляров: аппарат для деротации моляров", 17),
		new Answer("Мезиальная ангуляция: элемент для изменения ангуляуции постоянного моляра", 18),
		new Answer("Сохраняется местов зр, отсутствуют нарушения в положении первого моляра", 19)
	])
}
questions[8] = {
	q: new Question("Удаление временных вторых моляров и/или клыков", 8, false, false,
	[
		new Answer("Удержание мест, динамическое наблюдение", 20)
	])
}
questions[9] = {
	q: new Question("Удаление временных резцов", 9, false, false,
	[
		new Answer("Смещение зубов в сторону дефекта", 21),
		new Answer("Упрощение формы зубного ряда", 22)
	])
}
questions[10] = {
	q: new Question("Кт челюстей - определение сужения зубных рядов/верхней челюсти", 10, false, false,
	[
		new Answer("Небный расширитель/одночелюстной аппарат с винтом", 23)
	])
}
questions[11] = {
	q: new Question("Результат", 11, false, true,
	[
		new Answer("Сопоставить в конструктивынй прикус и определить степень сужения- возможно требуется протракция нижней челюсти в комбинации с зубоальвеолярным расширением нижнего зр", -1)
	])
}
questions[12] = {
	q: new Question(" Cужение верхнего и нижнего зубного ряда", 12, false, false,
	[
		new Answer("небный расширтель на верхнюю челюсть, работа с остеопатом, оценка потенциала роста по данным ТРГ в боковой проекции", 24)
	])
}
questions[13] = {
	q: new Question("зубоальвеолярная формa", 13, false, false,
	[
		new Answer("наклон боковых зубов лингвально/небно, скученность в переднем участке - одночелюстной аппарат на обе челюсти", 25),
		new Answer("ретрузия верхних резцов - конструкция аппарта с толкателем для передней группы зубов", 26),
		new Answer("открытый рот, нарушения функции - аппарат Френкеля, активатор Андрезена Гойпля", 27),
		new Answer("незначительная скученность зубных рядов , носовое дыхание - эластопозиционер", 28)
	])
}
questions[14] = {
	q: new Question("Результат", 14, false, true,
	[
		new Answer("Перспективы и второй этап лечения", -1)
	])
}
questions[15] = {
	q: new Question("Результат", 15, false, true,
	[
		new Answer("Компьютерная томография - оценка расположения клыков и премоляров", 24)
	])
}
questions[16] = {
	q: new Question("Результат", 16, false, true,
	[
		new Answer("Консультация с хирургом о времени удаления, перспективы прорезывания постоянных зубов", -1)
	])
}
questions[17] = {
	q: new Question("Результат", 17, false, true,
	[
		new Answer("Ротация моляров: аппарат для деротации моляров", -1)
	])
}
questions[18] = {
	q: new Question("Результат", 18, false, true,
	[
		new Answer("Мезиальная ангуляция: элемент для изменения ангуляции постоянного моляра", -1)
	])
}
questions[19] = {
	q: new Question("Результат", 19, false, true,
	[
		new Answer("Сохраняется место зр, отсутствуют нарушения в положении первого моляра", -1)
	])
}
questions[20] = {
	q: new Question("Результат", 20, false, true,
	[
		new Answer("Ротация моляров: аппарат для деротации моляров", -1)
	])
}
questions[21] = {
	q: new Question("Смещение зубов в сторону дефекта", 21, false, false,
	[
		new Answer("Рукообразный захват съемным аппарато, частичная брекет-система", 29)
	])
}
questions[22] = {
	q: new Question("Результат", 22, false, false,
	[
		new Answer("Губной бампер, частичная брекет-система", 30)
	])
}
questions[23] = {
	q: new Question("Результат", 23, false, true,
	[
		new Answer("Небный расширитель/одночелюстной аппарат с винтом", -1)
	])
}
questions[24] = {
	q: new Question(" Cужение верхнего и нижнего зубного ряда", 24, false, true,
	[
		new Answer("небный расширтель на верхнюю челюсть, работа с остеопатом, оценка потенциала роста по данным ТРГ в боковой проекции", -1)
	])
}

questions[25] = {
	q: new Question(" Результат", 25, false, true,
	[
		new Answer("наклон боковых зубов лингвально/небно, скученность в переднем участке - одночелюстной аппарат на обе челюсти", -1)
	])
}
	

//Сам тест
const quiz = new Quiz(questions, 0);

Update();


//Обновление теста
function Update()
{
	//Если есть, меняем вопрос в заголовке
	headElem.innerHTML = quiz.questions[quiz.current].q.text;
	// console.log(quiz.questions[0].q.answers.length);

	//Удаляем старые варианты ответов
	buttonsElem.innerHTML = "";

	//Создаём кнопки для новых вариантов ответов
	for(let i = 0; i < quiz.questions[quiz.current].q.answers.length; i++)
	{
		let btn = document.createElement("button");
		btn.className = "button";

		btn.innerHTML = quiz.questions[quiz.current].q.answers[i].text;

		btn.setAttribute("index", quiz.questions[quiz.current].q.answers[i].nextQuestion);
		btn.setAttribute("id", quiz.questions[quiz.current].q.answers[i].nextQuestion);

		buttonsElem.appendChild(btn);
	}
	
	//Выводим номер текущего вопроса
	pagesElem.innerHTML = "";
	pagesElem.innerHTML = "№ " + (quiz.current);

	//Вызываем функцию, которая прикрепит события к новым кнопкам
	Init();
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	// let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");
	console.log(quiz.questions[index].q.answers)
	console.log(index);

	// Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}
	document.getElementById(index).className = "button button_correct";
	// btns[index].className = "button button_correct";

	quiz.current = index;
	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}




