const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");
var percents = 0;

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

var questions = [];
////////////////////////// ДЕРЕВО 3.2 ////////////////////////////////////////////
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
		new Answer("Сопоставить в конструктивынй прикус и определить степень сужения- возможно требуется протракция нижней челюсти в комбинации с зубоальвеолярным расширением нижнего зр", 11)
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
		new Answer("Сужение нижнего зубного ряда, верхний зр в норме", -1),
		new Answer("Следующий тест", 64)
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
		new Answer("Консультация с хирургом о времени удаления, перспективы прорезывания постоянных зубов", 16)
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
		new Answer("Сопоставить в конструктивынй прикус и определить степень сужения- возможно требуется протракция нижней челюсти в комбинации с зубоальвеолярным расширением нижнего зр", -1),
		new Answer("Следующий тест", 64)
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
		new Answer("Перспективы и второй этап лечения", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[15] = {
	q: new Question("Результат", 15, false, true,
	[
		new Answer("Компьютерная томография - оценка расположения клыков и премоляров", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[16] = {
	q: new Question("Результат", 16, false, true,
	[
		new Answer("Консультация с хирургом о времени удаления, перспективы прорезывания постоянных зубов", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[17] = {
	q: new Question("Результат", 17, false, true,
	[
		new Answer("Ротация моляров: аппарат для деротации моляров", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[18] = {
	q: new Question("Результат", 18, false, true,
	[
		new Answer("Мезиальная ангуляция: элемент для изменения ангуляции постоянного моляра", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[19] = {
	q: new Question("Результат", 19, false, true,
	[
		new Answer("Сохраняется место зр, отсутствуют нарушения в положении первого моляра", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[20] = {
	q: new Question("Результат", 20, false, true,
	[
		new Answer("Ротация моляров: аппарат для деротации моляров", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[21] = {
	q: new Question("Смещение зубов в сторону дефекта", 21, false, false,
	[
		new Answer("Рукообразный захват съемным аппарато, частичная брекет-система", 29),
		new Answer("Следующий тест", 64)
	])
}
questions[22] = {
	q: new Question("Уплощение формы зубного ряда", 22, false, false,
	[
		new Answer("Губной бампер, частичная брекет-система", 30)
	])
}
questions[23] = {
	q: new Question("Результат", 23, false, true,
	[
		new Answer("Небный расширитель/одночелюстной аппарат с винтом", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[24] = {
	q: new Question("Результат", 24, false, true,
	[
		new Answer("Небный расширтель на верхнюю челюсть, работа с остеопатом, оценка потенциала роста по данным ТРГ в боковой проекции", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[25] = {
	q: new Question("Результат", 25, false, true,
	[
		new Answer("Наклон боковых зубов лингвально/небно, скученность в переднем участке - одночелюстной аппарат на обе челюсти", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[26] = {
	q: new Question("Результат", 26, false, true,
	[
		new Answer("Pетузия верхних резцов - конструкция аппарта с толкателем для передней группы зубов", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[27] = {
	q: new Question("Результат", 2, false, true,
	[
		new Answer("Oткрытый рот, нарушения функции - аппарат Френкеля, активатор Андрезена Гойпля", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[28] = {
	q: new Question("Результат", 28, false, true,
	[
		new Answer("незначительная скученность зубных рядов , носовое дыхание - эластопозиционер", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[29] = {
	q: new Question("Результат", 29, false, true,
	[
		new Answer("Pукообразный захватв съемном аппарате;частичная брекет-система", -1),
		new Answer("Следующий тест", 64)
	])
}
questions[30] = {
	q: new Question("Результат", 30, false, true,
	[
		new Answer("Губной бампер;частичная брекет-система", -1),
		new Answer("Следующий тест", 64)
	])
}/////////////////////// ДЕРЕВО 3.1 ///////////////////////////////
questions[31] = {
	q: new Question("Кооперация", 31, true, false,
	[
		new Answer("Контактен, открывает рот", 32),
		new Answer("Неконтактен, боится", 33),
		new Answer("Контактен, повышеный рвотный рефлекс", 34)
	])
}
questions[32] = {
	q: new Question("Контактен, открывает рот", 32, false, false,
	[
		new Answer("Тест Люшера, рисунок , понимание личной мотивации ребенка", 35)
	])
}
questions[33] = {
	q: new Question("Неконтактен, боится", 33, false, false,
	[
		new Answer("Рисунок ДЕРЕВО СЕМЬЯ ЧЕЛОВЕК", 36)
	])
}
questions[34] = {
	q: new Question("Контактен, повышеный рвотный рефлекс", 34, false, false,
	[
		new Answer("дать слепочную ложку для тренировки дома (даже в случае сканирования)", 37)
	])
}
questions[35] = {
	q: new Question("Тест Люшера, рисунок , понимание личной мотивации ребенка", 35, false, false,
	[
		new Answer("Есть личная заинтересованность", 38),
		new Answer("Нет личной мотивации", 39)
	])
}
questions[36] = {
	q: new Question("Результат", 36, false, true,
	[
		new Answer("Рисунок ДЕРЕВО СЕМЬЯ ЧЕЛОВЕК", -1),
		new Answer("Следующий тест", 0)
	])
}
questions[37] = {
	q: new Question("Дать слепочную ложку для тренировки дома (даже в случае сканирования)", 37, false, false,
	[
		new Answer("'Перевод' в группу контактен", 40),
		new Answer("Консультация остеопата", 41),
		new Answer("Примерка слепочной ложки", 42)
	])
}
questions[38] = {
	q: new Question("Есть личная заинтересованность", 38, false, false,
	[
		new Answer("Возможно использование съемной аппаратуры", 43)
	])
}
questions[39] = {
	q: new Question("Нет личной мотивации", 39, false, false,
	[
		new Answer("несъемная техника +курс профессионального ухода за полостью рта, решение о необходимости эндогенной профилактики", 44)
	])
}
questions[40] = {
	q: new Question("Результат", 40, false, true,
	[
		new Answer(`"Перевод" в группу контактен`, -1),
		new Answer("Следующий тест", 0)
	])
}
questions[41] = {
	q: new Question("Результат", 41, false, true,
	[
		new Answer("Консультация остеопата", -1),
		new Answer("Следующий тест", 0)
	])
}
questions[42] = {
	q: new Question("Примерка слепочной ложки", 42, false, false,
	[
		new Answer("Минимизировани рвотный рефлекс", 45),
		new Answer("Сохраняется рвотный рефлекс", 46)
	])
}
questions[43] = {
	q: new Question("Результат", 43, false, true,
	[
		new Answer("возможно использование съемной аппаратуры", -1),
		new Answer("Следующий тест", 0)
	])
}
questions[44] = {
	q: new Question("Результат", 44, false, true,
	[
		new Answer("несъемная техника +курс профессионального ухода за полостью рта, решение о необходимости эндогенной профилактики", -1),
		new Answer("Следующий тест", 0)
	])
}
questions[45] = {
	q: new Question("Минимизирован рвотный рефлекс", 45, false, false,
	[
		new Answer("Изготовление съемного аппарата", 47)
	])
}
questions[46] = {
	q: new Question("Сохраняется рвотный рефлекс", 46, false, false,
	[
		new Answer("Выбор несъемной конструкции с минимальным прилеганием к небу", 48),
		new Answer("Отсрочка ортодонтического лечения, работа с остеопатом", 49)
	])
}
questions[47] = {
	q: new Question("Результат", 47, false, true,
	[
		new Answer("Изготовление съемного аппарата", -1),
		new Answer("Следующий тест", 0)
	])
}
questions[48] = {
	q: new Question("Результат", 48, false, true,
	[
		new Answer("Выбор несъемной конструкции с минимальным прилеганием к небу", -1),
		new Answer("Следующий тест", 0)
	])
}
questions[49] = {
	q: new Question("Результат", 49, false, true,
	[
		new Answer("Отсрочка ортодонтического лечения, работа с остеопатом", -1),
		new Answer("Следующий тест", 0)
	])
}////////////////////////// ДЕРЕВО 1 //////////////////////////////////////////
questions[50] = {
	q: new Question("Пациент с дистальной окклюзией", 50, true, false,
	[
		new Answer("Клинический осмотр/консультация", 51)
	])
}
questions[51] = {
	q: new Question("Клинический осмотр/консультация", 51, false, false,
	[
		new Answer("Данные диагностических моделей челюстей", 52),
		//new Answer("Данные телерентгенограммы", 53),
		new Answer("Данные ортопантомограммы/компьютерной томографии", 54),
		new Answer("Кооперация/сотрудничество", 55)
	])
}
questions[52] = {
	q: new Question("Результат", 52, false, true,
	[
		new Answer("Данные диагностических моделей челюстей", -1),
		new Answer("Следующий тест", 56)
	])
}
questions[53] = {
	q: new Question("Результат", 53, false, true,
	[
		new Answer("Данные телерентгенограммы", -1),
		new Answer("Следующий тест", 56)
	])
}
questions[54] = {
	q: new Question("Результат", 54, false, true,
	[
		new Answer("Данные ортопантомограммы/компьютерной томографии", -1),
		new Answer("Следующий тест", 56)
	])
}
questions[55] = {
	q: new Question("Результат", 55, false, true,
	[
		new Answer("Кооперация/сотрудничество", -1),
		new Answer("Следующий тест", 56)
	])
}///////////////////// ДЕРЕВО 2 ///////////////////////////////////
questions[56] = {
	q: new Question("Клинический осмотр", 56, true, false,
	[
		new Answer("Асимметрия лица", 57),
		new Answer("Анамнез соматических заболеваний: заболевания ЛОР-органов/аллергический ринит/заболевания нервной системы/сколиоз", 58),
		new Answer("Вредные привычки", 59)
	])
}
questions[57] = {
	q: new Question("Асимметрия лица", 57, false, false,
	[
		new Answer("Трг в прямой проекции/КЛКТ/анализ лица в фас: дифференциальная диагностика скелетной и функциональной асимметрии ", 60)
	])
}
questions[58] = {
	q: new Question("Анамнез соматических заболеваний: заболевания ЛОР-органов/аллергический ринит/заболевания нервной системы/сколиоз", 58, false, false,
	[
		new Answer("Снимок для визуализации  гайморовых пазух/шейного отдела позвоночника/оценка аденоидной ткани", 61)
	])
}
questions[59] = {
	q: new Question("Вредные привычки", 59, false, false,
	[
		new Answer("Cамоконтроль/психолог/невролог", 62)
	])
}
questions[60] = {
	q: new Question("Результат", 60, false, true,
	[
		new Answer("Трг в прямой проекции/КЛКТ/анализ лица в фас: дифференциальная диагностика скелетной и функциональной асимметрии", -1),
		new Answer("Следующий тест", 31)
	])
}
questions[61] = {
	q: new Question("Снимок для визуализации  гайморовых пазух/шейного отдела позвоночника/оценка аденоидной ткани", 61, false, false,
	[
		new Answer("Cопровождение у специалистов – ЛОР-врач, остеопат, ортопед, аллерголог", 63)
	])
}
questions[62] = {
	q: new Question("Результат", 62, false, true,
	[
		new Answer("самоконтроль/психолог/невролог", -1),
		new Answer("Следующий тест", 31)
	])
}
questions[63] = {
	q: new Question("Результат", 63, false, true,
	[
		new Answer("Cопровождение у специалистов – ЛОР-врач, остеопат, ортопед, аллерголог", -1),
		new Answer("Следующий тест", 31)
	])
}/////////////////////////// ДЕРЕВО 4 ////////////////////////////////////////////////////////
questions[64] = {
	q: new Question("Гииенический статус", 64, true, false,
	[
		new Answer("Перекус", 65),
		new Answer("Уровень гигиены полости рта", 66)
	])
}
questions[65] = {
	q: new Question("Перекус", 65, false, false,
	[
		new Answer("До 4 раз", 67),
		new Answer("4 раза и более", 68)
	])
}
questions[66] = {
	q: new Question("Уровень гигиены полости рта", 66, false, false,
	[
		new Answer("Хороший", 69),
		new Answer("Удовлетворительный", 70),
		new Answer("Неудовлетворительный и плохой", 71)
	])
}
questions[67] = {
	q: new Question("До 4 раз", 67, false, false,
	[
		new Answer("Контроль гигиены полости рта после приема пищи", 72)
	])
}
questions[68] = {
	q: new Question("4 раза и более", 68, false, false,
	[
		new Answer("Прием до витаминов и минералов, реминерализация, сокращение перекусов", 73)
	])
}
questions[69] = {
	q: new Question("Хороший", 69, false, false,
	[
		new Answer("Профессиональная гигиена полости рта, сопровождение  процесса ортодонтического лечения", 74)
	])
}
questions[70] = {
	q: new Question("Удовлетворительный", 70, false, false,
	[
		new Answer("Профессиональная гигиена полости рта, глубокое фторирование, домашние средства по уходу", 75)
	])
}
questions[71] = {
	q: new Question("Неудовлетворительный и плохой", 71, false, false,
	[
		new Answer("Уточнение анамнеза о поступлении минеральных компонентов с пищей прием препаратов фтора внутрь, применение методов реминерализации", 76)
	])
}
questions[72] = {
	q: new Question("Результат", 72, false, true,
	[
		new Answer("Контроль гигиены полости рта после приема пищи", -1),
		new Answer("Итог", 999)
	])
}
questions[73] = {
	q: new Question("Результат", 73, false, true,
	[
		new Answer("Прием до витаминов и минералов, реминерализация, сокращение перекусов", -1),
		new Answer("Итог", 999)
	])
}
questions[74] = {
	q: new Question("Результат", 74, false, true,
	[
		new Answer("Профессиональная гигиена полости рта, сопровождение  процесса ортодонтического лечения", -1),
		new Answer("Итог", 999)
	])
}
questions[75] = {
	q: new Question("Результат", 75, false, true,
	[
		new Answer("Профессиональная гигиена полости рта, глубокое фторирование, домашние средства по уходу", -1),
		new Answer("Итог", 999)
	])
}
questions[76] = {
	q: new Question("Результат", 76, false, true,
	[
		new Answer("Уточнение анамнеза о поступлении минеральных компонентов с пищей прием препаратов фтора внутрь, применение методов реминерализации", -1),
		new Answer("Итог", 999)
	])
}

var answers = []
	
//Сам тест
quiz = new Quiz(questions, 0);
ChangeTree(3);

// Update();

function ChangeTree(value){
	let btns = document.getElementsByClassName("buttonTree");
	// console.log(btns);

	if (btns.length > 0){
		// Делаем кнопки серыми
		for(let i = 0; i < btns.length; i++)
		{
			btns[i].className = "buttonTree button_passive";
		}
		btns[value -1].className = "buttonTree button_correct";
	}
	switch (value) {
		case 0:{
			quiz.current = 50;
			Update();
			break;
		}
		case 2:{
			quiz.current = 56;
			Update();

			break;
		}
		case 3:{
			quiz.current = 31;
			Update();

			break;
		}
		case 4:{
			quiz.current = 0;
			Update();

			break;
		}
		case 5:{
			quiz.current = 64;
			Update();

			break;
		}
		default:
			break;
	}
}


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
	// console.log(quiz.current);
	

	if (quiz.questions[quiz.current].q.isEnd){
		answers.push(quiz.current);
		let btn = document.getElementById("-1");
		btn.className = "button button_correct";
		percents += 33.33;
	} else {
		let btn = document.createElement("button");
		btn.className = "buttonSkip";

		btn.innerHTML = "Пропустить";

		if (quiz.current >= 31 && quiz.current <= 49){
			btn.setAttribute("index", Number(0));
			btn.setAttribute("id", Number(0));
		} else if (quiz.current >= 0 && quiz.current <= 30){
			btn.setAttribute("index", Number(64));
			btn.setAttribute("id", Number(64));
		} else if (quiz.current >= 64 && quiz.current <= 76){
			btn.setAttribute("index", Number(999));
			btn.setAttribute("id", Number(999));
		}

		// btn.setAttribute("index", Number(999));
		// btn.setAttribute("id", Number(999));
		// console.log(Number(Number(quiz.current) + Number(1)));
		

		buttonsElem.appendChild(btn);
	}

	//Выводим номер текущего вопроса
	pagesElem.innerHTML = "";
	pagesElem.innerHTML = Math.ceil(percents) + "%";
	//Вызываем функцию, которая прикрепит события к новым кнопкам
	Init();
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");
	// console.log(btns);

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
	let tbtn = document.getElementsByClassName("buttonSkip");
	tbtn[0].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
}

function Click(index) 
{
	console.log(index);
	if (index == 888){
		ChangeTree(3);
		return;
	}
	//Получаем номер правильного ответа
	// let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");
	// console.log(quiz.questions[index].q.answers)
	// console.log(index);

	// Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}
	document.getElementById(index).className = "button button_correct";
	// btns[index].className = "button button_correct";

	if (index == 999) {
		///Выводим итог
		Summary();
	} else {
		quiz.current = index;
		//Ждём секунду и обновляем тест
		setTimeout(Update, 1000);
	}
	
	
}

function Summary()
{
	// console.log(answers);
	console.log(answers.length)
	if (answers.length == 0){
		headElem.innerHTML = "Тест не пройден";
		buttonsElem.innerHTML = "";
		let btn = document.createElement("button");
		btn.className = "button";

		btn.innerHTML ="Начать сначала";

		btn.setAttribute("index", 888);
		btn.setAttribute("id", 888);
		buttonsElem.appendChild(btn);
		Init();
		return;
	}

	str= "";
	for (i = answers.length - 1; i >= 0 ; i--){
		newDiv = document.createElement("div");
		newContent = document.createTextNode(Number(i + 1) + "-й тест: " + questions[answers[i]].q.answers[0].text);
		newDiv.appendChild(newContent);

		headElem.insertAdjacentElement("afterend",newDiv);
	}



	//Если есть, меняем вопрос в заголовке
	headElem.innerHTML = "Ответы:";
	// console.log(quiz.questions[0].q.answers.length);

	//Удаляем старые варианты ответов
	buttonsElem.innerHTML = "";
	pagesElem.innerHTML = Math.ceil(percents) + "%";
}




