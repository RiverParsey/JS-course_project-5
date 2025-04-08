// lesson-8 Test Task

// const items = [
//   { name: "Motorola MOTO G4 (XT1622) Black", oldPrice: "4 333 грн", price: "3 799 грн", reviews: '264 reviews' },
//   { name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!", price: "4 999 грн", reviews: '1355 reviews' },
//   { name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!", price: "5 199 грн", reviews: '426 reviews' },
//   { name: "Xiaomi Redmi Note 4X 3/32GB Black", price: "4 349 грн", reviews: '403 reviews' },
//   { name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!", price: "6 199 грн", reviews: '488 reviews' },
//   { name: "Lenovo K5 (A6020a40) Silver", oldPrice: "3 495 грн", price: "2 995 грн", reviews: '198 reviews' },
//   { name: "Apple iPhone 5s 16GB Space Gray", oldPrice: "9 799 грн", price: "7 999 грн", reviews: '352 reviews' },
//   { name: "Nokia 5 Dual Sim Tempered Blue", price: "5 999 грн", reviews: '59 reviews' },
//   { name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!", price: "11 999 грн", reviews: '119 reviews' },
//   { name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!", price: "3 999 грн", reviews: '1106 reviews' },
//   { name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!", price: "2 199 грн", reviews: '380 reviews' },
//   { name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!", oldPrice: "24 999 грн", price: "22 999 грн", reviews: '86 reviews' },
//   { name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!", price: "6 499 грн", reviews: '177 reviews' },
//   { name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)", price: "4 299 грн", reviews: '347 reviews' },
//   { name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!", price: "2 799 грн", reviews: '709 reviews' },
//   { name: "Huawei Y6 Pro Gold + чехол + защитное стекло!", price: "3 999 грн", reviews: '527 reviews' },
//   { name: "Apple iPhone 6s 32GB Gold", price: "16 499 грн", reviews: '66 reviews' },
// eslint-disable-next-line no-irregular-whitespace
//   { name: "Apple iPhone 6 32GB Space Gray", price: "11 499 грн", reviews: '14 reviews' },
//   { name: "Asus ZenFone 2 32GB (ZE551ML) Black", oldPrice: "7 399 грн", price: "5 999 грн", reviews: '70 reviews' },
//   { name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!", price  "4 299 грн", reviews: '45 reviews' },
//   { name: "Meizu M3 Note 32GB Grey (Международная версия)", price: "3 899 грн", reviews: '376 reviews' },
//   { name: "Sony Xperia X Dual (F5122) White", oldPrice: "9 999 грн", price: "7 999 грн", reviews: '111 reviews' },
//   { name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!", price: "2 222 грн", reviews: '40 reviews' },
//   { name: "Apple iPhone 7 32GB Black", price: "18 999 грн", reviews: '93 reviews' },
//   { name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!", price: "16 999 грн", reviews: '33 reviews' },
//   { name: "LG K5 X220ds Gold", oldPrice: "2 399 грн", price: "1 999 грн", reviews: '71 reviews' },
//   { name: "Lenovo C2 Power (K10a40) Black", price: "2 995 грн", reviews: '39 reviews' },
//   { name: "Nous NS 5006 Gold", price: "2 599 грн", reviews: '156 reviews' },
//   { name: "LG G6 Mystic White", price: "19 689 грн", reviews: '40 reviews' },
//   { name: "Motorola MOTO G5 (XT1676) Grey", price: "5 995 грн", reviews: '24 reviews' },
//   { name: "HTC One X10 Dual Sim Silver", oldPrice: "10 999 грн", price: "9 999 грн", reviews: '7 reviews' },
//   { name: "Sony Xperia L1 Dual Black", oldPrice: "5 999 грн", price: "4 999 грн", reviews: '18 reviews' }
// ];

// function sortByFeedbacks(arr) {
//   const temp = JSON.parse(JSON.stringify(arr));

//   temp.forEach(item => {
//     item.reviews = +item.reviews.replace(/\D/g, '');
//   });

//   temp.sort((a, b) => a.reviews > b.reviews ? 1 : -1);

//   document.querySelector('.result').innerHTML = '';

//   temp.forEach(item => {
//     document.querySelector('.result').innerHTML += `
//       <h3>${item.name}</h3>
//       <div>отзывов: ${item.reviews}</div>
//     `;
//   });
// }

// function sortByPrice(arr) {
//   const temp = JSON.parse(JSON.stringify(arr));

//   temp.forEach(item => {
//     item.price = +item.price.replace(/\D/g, '');
//   });

//   temp.sort((a, b) => a.price > b.price ? 1 : -1);

//   document.querySelector('.result').innerHTML = '';

//   temp.forEach(item => {
//     document.querySelector('.result').innerHTML += `
//       <h3>${item.name}</h3>
//       <div>цена: ${item.price}</div>
//       <div>отзывов: ${item.reviews}</div>
//     `;
//   });
// }

// document.querySelector('.price').addEventListener('click', () => {
//   sortByPrice(items);
// });

// document.querySelector('.feed').addEventListener('click', () => {
//   sortByFeedbacks(items);
// });







// lesson-7 Test Tasks

// const w = +prompt('ширина матрицы');
// const h = +prompt('высота матрицы');

// function matrix(w, h) {
//   let result = new Array(h).fill().map(() => new Array(w).fill(''));
//   let counter = 1;
//   let startCol = 0;
//   let endCol = w - 1;
//   let startRow = 0;
//   let endRow = h - 1;

//   while (startCol <= endCol && startRow <= endRow) {
//     for (let i = startCol; i <= endCol; i++) {
//       result[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     for (let j = startRow; j <= endRow; j++) {
//       result[j][endCol] = counter;
//       counter++;
//     }
//     endCol--;

//     for (let i = endCol; i >= startCol; i--) {
//       result[endRow][i] = counter;
//        counter++;
//     }
//     endRow--;

//     for (let j = endRow; j >= startRow; j--) {
//       result[j][startCol] = counter;
//       counter++;
//     }
//     startCol++;
//   }

//   return result;
// }

// console.log(matrix(w, h));







// lesson-6 Test Tasks

// const roles = [`Городничий`, `Аммос Федорович`, `Артемий Филиппович`, `Лука Лукич`, `Христиан Иванович`]

// const text = `Городничий. Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
// Аммос Федорович. Как ревизор?
// Артемий Филиппович. Как ревизор?
// Городничий. Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
// Аммос Федорович. Вот те на!
// Артемий Филиппович. Вот не было заботы, так подай!
// Лука Лукич. Господи Боже! еще и с секретным предписаньем!
// Городничий. Я как будто предчувствовал: сегодня мне всю ночь снились какие-то две необыкновенные крысы. Право, этаких я никогда не видывал: черные, неестественной величины! пришли, понюхали — и пошли прочь. Вот я вам прочту письмо, которое получил я от Андрея Ивановича Чмыхова, которого вы, Артемий Филиппович, знаете. Вот что он пишет: «Любезный друг, кум и благодетель (бормочет вполголоса, пробегая скоро глазами)... и уведомить тебя». А! вот: «Спешу, между прочим, уведомить тебя, что приехал чиновник с предписанием осмотреть всю губернию и особенно наш уезд (значительно поднимает палец вверх). Я узнал это от самых достоверных людей, хотя он представляет себя частным лицом. Так как я знаю, что за тобою, как за всяким, водятся грешки, потому что ты человек умный и не любишь пропускать того, что плывет в руки...» (остановясь), ну, здесь свои... «то советую тебе взять предосторожность, ибо он может приехать во всякий час, если только уже не приехал и не живет где-нибудь инкогнито... Вчерашнего дни я...» Ну, тут уж пошли дела семейные: «...сестра Анна Кириловна приехала к нам с своим мужем; Иван Кирилович очень потолстел и все играет на скрыпке...» — и прочее, и прочее. Так вот какое обстоятельство!
// Аммос Федорович. Да, обстоятельство такое... необыкновенно, просто необыкновенно. Что-нибудь недаром.
// Лука Лукич. Зачем же, Антон Антонович, отчего это? Зачем к нам ревизор?
// Городничий. Зачем! Так уж, видно, судьба! (Вздохнув.) До сих пор, благодарение Богу, подбирались к другим городам; теперь пришла очередь к нашему.
// Аммос Федорович. Я думаю, Антон Антонович, что здесь тонкая и больше политическая причина. Это значит вот что: Россия... да... хочет вести войну, и министерия-то, вот видите, и подослала чиновника, чтобы узнать, нет ли где измены.
// Городничий. Эк куда хватили! Еще умный человек! В уездном городе измена! Что он, пограничный, что ли? Да отсюда, хоть три года скачи, ни до какого государства не доедешь.
// Аммос Федорович. Нет, я вам скажу, вы не того... вы не... Начальство имеет тонкие виды: даром что далеко, а оно себе мотает на ус.
// Городничий. Мотает или не мотает, а я вас, господа, предуведомил. Смотрите, по своей части я кое-какие распоряженья сделал, советую и вам. Особенно вам, Артемий Филиппович! Без сомнения, проезжающий чиновник захочет прежде всего осмотреть подведомственные вам богоугодные заведения — и потому вы сделайте так, чтобы все было прилично: колпаки были бы чистые, и больные не походили бы на кузнецов, как обыкновенно они ходят по-домашнему.
// Артемий Филиппович. Ну, это еще ничего. Колпаки, пожалуй, можно надеть и чистые.
// Городничий. Да, и тоже над каждой кроватью надписать по-латыни или на другом каком языке... это уж по вашей части, Христиан Иванович, — всякую болезнь: когда кто заболел, которого дня и числа... Нехорошо, что у вас больные такой крепкий табак курят, что всегда расчихаешься, когда войдешь. Да и лучше, если б их было меньше: тотчас отнесут к дурному смотрению или к неискусству врача.
// Артемий Филиппович. О! насчет врачеванья мы с Христианом Ивановичем взяли свои меры: чем ближе к натуре, тем лучше, — лекарств дорогих мы не употребляем. Человек простой: если умрет, то и так умрет; если выздоровеет, то и так выздоровеет. Да и Христиану Ивановичу затруднительно было б с ними изъясняться: он по-русски ни слова не знает.
// Христиан Иванович издает звук, отчасти похожий на букву и и несколько на е.
// Городничий. Вам тоже посоветовал бы, Аммос Федорович, обратить внимание на присутственные места. У вас там в передней, куда обыкновенно являются просители, сторожа завели домашних гусей с маленькими гусенками, которые так и шныряют под ногами. Оно, конечно, домашним хозяйством заводиться всякому похвально, и почему ж сторожу и не завесть его? только, знаете, в таком месте неприлично... Я и прежде хотел вам это заметить, но все как-то позабывал.
// Аммос Федорович. А вот я их сегодня же велю всех забрать на кухню. Хотите, приходите обедать.
// Городничий. Кроме того, дурно, что у вас высушивается в самом присутствии всякая дрянь и над самым шкапом с бумагами охотничий арапник. Я знаю, вы любите охоту, но все на время лучше его принять, а там, как проедет ревизор, пожалуй, опять его можете повесить. Также заседатель ваш... он, конечно, человек сведущий, но от него такой запах, как будто бы он сейчас вышел из винокуренного завода, — это тоже нехорошо. Я хотел давно об этом сказать вам, но был, не помню, чем-то развлечен. Есть против этого средства, если уже это действительно, как он говорит, у него природный запах: можно ему посоветовать есть лук, или чеснок, или что-нибудь другое. В этом случае может помочь разными медикаментами Христиан Иванович.
// Христиан Иванович издает тот же звук.
// Аммос Федорович. Нет, этого уже невозможно выгнать: он говорит, что в детстве мамка его ушибла, и с тех пор от него отдает немного водкою.
// Городничий. Да я так только заметил вам. Насчет же внутреннего распоряжения и того, что называет в письме Андрей Иванович грешками, я ничего не могу сказать. Да и странно говорить: нет человека, который бы за собою не имел каких-нибудь грехов. Это уже так Самим Богом устроено, и волтерианцы напрасно против этого говорят.
// Аммос Федорович. Что ж вы полагаете, Антон Антонович, грешками? Грешки грешкам — рознь. Я говорю всем открыто, что беру взятки, но чем взятки? Борзыми щенками. Это совсем иное дело.
// Городничий. Ну, щенками или чем другим — всё взятки.
// Аммос Федорович. Ну нет, Антон Антонович. А вот, например, если у кого-нибудь шуба стоит пятьсот рублей, да супруге шаль...
// Городничий. Ну, а что из того, что вы берете взятки борзыми щенками? Зато вы в Бога не веруете; вы в церковь никогда не ходите; а я по крайней мере в вере тверд и каждое воскресенье бываю в церкви. А вы... О, я знаю вас: вы если начнете говорить о сотворении мира, просто волосы дыбом поднимаются.
// Аммос Федорович. Да ведь сам собою дошел, собственным умом.
// Городничий. Ну, в ином случае много ума хуже, чем бы его совсем не было. Впрочем, я так только упомянул об уездном суде; а по правде сказать, вряд ли кто когда-нибудь заглянет туда: это уж такое завидное место, сам Бог ему покровительствует. А вот вам, Лука Лукич, так, как смотрителю учебных заведений, нужно позаботиться особенно насчет учителей. Они люди, конечно, ученые и воспитывались в разных коллегиях, но имеют очень странные поступки, натурально неразлучные с ученым званием. Один из них, например, вот этот, что имеет толстое лицо... не вспомню его фамилии, никак не может обойтись без того, чтобы, взошедши на кафедру, не сделать гримасу, вот этак (делает гримасу), и потом начнет рукою из-под галстука утюжить свою бороду. Конечно, если он ученику сделает такую рожу, то оно еще ничего: может быть, оно там и нужно так, об этом я не могу судить; но вы посудите сами, если он сделает это посетителю, — это может быть очень худо: господин ревизор или другой кто может принять это на свой счет. Из этого черт знает что может произойти.
// Лука Лукич. Что ж мне, право, с ним делать? Я уж несколько раз ему говорил. Вот еще на днях, когда зашел было в класс наш предводитель, он скроил такую рожу, какой я никогда еще не видывал. Он-то ее сделал от доброго сердца, а мне выговор: зачем вольнодумные мысли внушаются юношеству.
// Городничий. То же я должен вам заметить и об учителе по исторической части. Он ученая голова — это видно, и сведений нахватал тьму, но только объясняет с таким жаром, что не помнит себя. Я раз слушал его: ну, покамест говорил об ассириянах и вавилонянах — еще ничего, а как добрался до Александра Македонского, то я не могу вам сказать, что с ним сделалось. Я думал, что пожар, ей-Богу! Сбежал с кафедры и что силы есть хвать стулом об пол. Оно, конечно, Александр Македонский герой, но зачем же стулья ломать? от этого убыток казне.
// Лука Лукич. Да, он горяч! Я ему это несколько раз уже замечал... Говорит: «Как хотите, для науки я жизни не пощажу».
// Городничий. Да, таков уже неизъяснимый закон судеб: умный человек — или пьяница, или рожу такую состроит, что хоть святых выноси.
// Лука Лукич. Не приведи Бог служить по ученой части! Всего боишься: всякий мешается, всякому хочется показать, что он тоже умный человек.
// Городничий. Это бы еще ничего, — инкогнито проклятое! Вдруг заглянет: «А, вы здесь, голубчики! А кто, скажет, здесь судья?» — «Ляпкин-Тяпкин». — «А подать сюда Ляпкина-Тяпкина! А кто попечитель богоугодных заведений?» — «Земляника». — «А подать сюда Землянику!» Вот что худо!
// `;

// const phrases = text.split('\n');
// let result = '';

// roles.forEach(role => {
//   let temp = `\n${role}: \n`;

//   phrases.forEach((line, j) => {
//     if (line.indexOf(role) >= 0 && line.indexOf(role) < role.length) {
//       const content = line.slice(role.length + 1);
//       temp += `${j + 1}) ${content}\n`;
//     }
//   });

//   result += temp;
// });

// console.log(result);






// lesson-5 Parser

// window.addEventListener('DOMContentLoaded', () => {
//   const body = document.querySelector('body');
//   let textNodes = [];

//   function recursy(element) {
//     element.childNodes.forEach(node => {
//       if (node.nodeName.match(/^H\d/)) {
//         const obj = {
//           header: node.nodeName,
//           content: node.textContent
//         };
//         textNodes.push(obj);
//       } else {
//         recursy(node);
//       }
//     });
//   }

//   recursy(body);
  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(textNodes)
//   })
//   .then(response => response.json())
//   .then(json => console.log(json));

// });







// lesson-4 FormData data sending

// window.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form');

//   // XMLHttpRequest
//   function req(e) {
//     e.preventDefault();

//     let formData = new FormData(form);
//     formData.append('id', Math.random());


//     let obj = {};
//     formData.forEach((value, key) => {
//       obj[key] = value;
//     });
//     let json = JSON.stringify(obj);


//     const request = new XMLHttpRequest();
//     request.open('POST', 'url');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send(json);
//     request.addEventListener('readystatechange', function() {
//       if (request.readyState === 4 && request.status == 200) {
//         let data = JSON.parse(request.response);
//         console.log(data);
//       } else {
//         console.error('что то пошло не так')
//       }
//     });

//     this.remove();
//   }

//   document.querySelector('button').addEventListener('click', (e) => req(e), {'once': true});

//   // function createCards(data) {
//   //   data.forEach(item => {
//   //     let card = document.createElement('div');

//   //     card.classList.add('card');

//   //     let icon;
//   //     if (item.sex === 'male') {
//   //       icon = 'icons/mars.png';
//   //     } else {
//   //       icon = 'icons/female.png';
//   //     }

//   //     card.innerHTML = `
//   //       <img src="${item.photo}" alt="">
//   //       <div class="name">${item.name} ${item.surname}</div>
//   //       <div class="sex">
//   //         <img src="${icon}" alt="${item.sex}">
//   //       </div>
//   //       <div class="age">${item.age}</div>
//   //     `;
//   //     document.querySelector('.app').appendChild(card);
//   //   });
//   // }

// });







// lesson-3 fetch API and Axios

// window.addEventListener('DOMContentLoaded', () => {

//   function req() {

//     this.remove();

//     // fetch
//     // getResource('url')
//     //   .then(data => createCards(data))
//     //   .catch(err => console.error(err));


//     // axios
//     getResource('url')
//     .then(data => createCards(data.data))
//     .catch(err => console.error(err));
//   }

//   document.querySelector('button').addEventListener('click', req, {'once': true});
  
//   // fetch
//   // async function getResource(url) {
//   //   const res = await fetch(`${url}`);

//   //   if (!res.ok) {
//   //     throw new Error(`could not fetch ${url}, status: ${res.status}`);
//   //   }

//   //   return await res.json();
//   // }

//   // axios
//   async function getResource(url) {
//     const res = await axios(`${url}`);

//     if (res.status !== 200) {
//       throw new Error(`could not fetch ${url}, status: ${res.status}`);
//     }

//     return res;
//   }

//   function createCards(data) {
//     data.forEach(item => {
//       let card = document.createElement('div');

//       card.classList.add('card');

//       let icon;
//       if (item.sex === 'male') {
//         icon = 'icons/mars.png';
//       } else {
//         icon = 'icons/female.png';
//       }

//       card.innerHTML = `
//         <img src="${item.photo}" alt="">
//         <div class="name">${item.name} ${item.surname}</div>
//         <div class="sex">
//           <img src="${icon}" alt="${item.sex}">
//         </div>
//         <div class="age">${item.age}</div>
//       `;
//       document.querySelector('.app').appendChild(card);
//     });
//   }

// });







// lesson-2 request with using XMLHttpRequest

// window.addEventListener('DOMContentLoaded', () => {

//   function req() {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'url');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
//     request.addEventListener('readystatechange', function() {
//       if (request.readyState === 4 && request.status == 200) {
//         let data = JSON.parse(request.response);
//         console.log(data);
//         createCards(data);
//       } else {
//         console.error('что то пошло не так')
//       }
//     });

//     this.remove();
//   }

//   document.querySelector('button').addEventListener('click', req, {'once': true});

//   function createCards(data) {
//     data.forEach(item => {
//       let card = document.createElement('div');

//       card.classList.add('card');

//       let icon;
//       if (item.sex === 'male') {
//         icon = 'icons/mars.png';
//       } else {
//         icon = 'icons/female.png';
//       }

//       card.innerHTML = `
//         <img src="${item.photo}" alt="">
//         <div class="name">${item.name} ${item.surname}</div>
//         <div class="sex">
//           <img src="${icon}" alt="${item.sex}">
//         </div>
//         <div class="age">${item.age}</div>
//       `;
//       document.querySelector('.app').appendChild(card);
//     });
//   }

// });