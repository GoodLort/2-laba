
	var trigger=0, name, age, sex, education, mathematic, asu, cutting, programming, ver; // обьявляем переменные которые понадобятся в ходе работы	
		document.getElementById("Color").addEventListener("click",randColor)
		function randColor() {
/*СОЗДАЕМ ПЕРЕМЕННЫЕ
elem - элемент которому будем менять задний фон
code_color - получаем элемент в который будет выводить код цвета
r,g,b - отвечают за кодировку и вместе выводят цвет
color - в нее записываем полную строку значения цвета
*/
                r = Math.floor(Math.random() * (256));
                g = Math.floor(Math.random() * (256));
                b = Math.floor(Math.random() * (256));
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
				document.bgColor = color;
        }
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			name = prompt("Введите имя");
			age = prompt("Введите возраст");
			sex = prompt("Введите пол");
			ver = prompt("Какое у вас вероисповедание");
			education = confirm("У вас есть высше образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#ver").val(ver)
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			$("#ver").focus();
			document.getElementById("sex").innerText = sex;
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction(sex) { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("mathematic").checked ==true && 
		document.getElementById("programming").checked ==true &&
		document.getElementById("education").checked ==true ||
		sex == "Рептилоид")
		{
       		var text ='<p class="strokeT">ВЫ НАМ ПОДОШЛИ!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="strokeF">ВЫ НАМ НЕ НУЖНЫ!</p>'
		x.innerHTML = text;
			}
		}
		}


