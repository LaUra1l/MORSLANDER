document.addEventListener('DOMContentLoaded',()=>{
    const slides=[
        [
            new Slide(
                '<span data-pl="Narodziny Innowacji" data-es="El Nacimiento de la Innovación" data-en="The Birth of Innovation">Narodziny Innowacji</span>',
                '<span data-pl="W pierwszej połowie XIX wieku świat znajdował się na progu <span class=\'unique\'>rewolucji komunikacyjnej</span>. <span class=\'author\'>Samuel Morse</span>, artysta malarz i wynalazca, doznał tragicznego wydarzenia, które miało ogromny wpływ na jego przyszłe dokonania. W 1825 roku Morse otrzymał wiadomość o <span class=\'unique\'>śmiertelnej chorobie swojej żony</span> zbyt późno, aby zdążyć do niej przed jej śmiercią. Zrozpaczony tym, jak powolne były ówczesne metody komunikacji, postanowił poświęcić się poszukiwaniu szybszych i bardziej efektywnych sposobów przekazywania informacji." data-es="A principios del siglo XIX, el mundo estaba al borde de una <span class=\'unique\'>revolución en las comunicaciones</span>. <span class=\'author\'>Samuel Morse</span>, artista y inventor, experimentó un evento trágico que tuvo un gran impacto en sus futuros logros. En 1825, Morse recibió un mensaje sobre la <span class=\'unique\'>enfermedad terminal de su esposa</span> demasiado tarde para llegar a ella antes de su muerte. Desesperado por la lentitud de los métodos de comunicación de la época, decidió dedicarse a encontrar formas más rápidas y eficientes de transmitir información." data-en="In the first half of the 19th century, the world stood on the brink of a <span class=\'unique\'>communication revolution</span>. <span class=\'author\'>Samuel Morse</span>, an artist and inventor, experienced a tragic event that had a huge impact on his future achievements. In 1825, Morse received a message about his wife’s <span class=\'unique\'>terminal illness</span> too late to reach her before her death. Desperate about the slow communication methods of the time, he decided to dedicate himself to finding faster and more efficient ways of transmitting information.">W pierwszej połowie XIX wieku świat znajdował się na progu <span class="unique">rewolucji komunikacyjnej</span>. <span class="author">Samuel Morse</span>, artysta malarz i wynalazca, doznał tragicznego wydarzenia, które miało ogromny wpływ na jego przyszłe dokonania. W 1825 roku Morse otrzymał wiadomość o <span class="unique">śmiertelnej chorobie swojej żony</span> zbyt późno, aby zdążyć do niej przed jej śmiercią. Zrozpaczony tym, jak powolne były ówczesne metody komunikacji, postanowił poświęcić się poszukiwaniu szybszych i bardziej efektywnych sposobów przekazywania informacji.'
            ),
            
    
            new Slide('<span class="headline">Wynalezienie Telegrafu</span>',`Inspiracja do stworzenia telegrafu pojawiła się podczas podróży morskiej do Europy, gdzie Morse zainteresował się <span class="unique">elektromagnetyzmem</span>. W 1832 roku, podczas powrotu do Stanów Zjednoczonych, wpadł na pomysł telegrafu elektrycznego. Z pomocą współpracowników, takich jak <span class="author">Alfred Vail</span>, udało mu się skonstruować działający prototyp. Telegraf Morse'a działał na zasadzie przesyłania sygnałów elektrycznych przez druty, które były odbierane i interpretowane przez urządzenie końcowe.`),
    
            new Slide(` <span class="headline">Powstanie Kodu Morse'a</span>`,`Jednakże sam telegraf nie byłby użyteczny bez odpowiedniego systemu kodowania informacji. Tutaj pojawia się jeden z największych wynalazków Morse'a - <span class="unique">kod Morse'a, stworzony w 1837 roku</span>. Kod ten opierał się na prostym systemie <span class="unique">kropek</span> i <span class="unique">kresek</span> (sygnałów krótkich i długich), które mogły reprezentować litery alfabetu, cyfry i znaki interpunkcyjne. Morse opracował ten kod, aby przekazywać wiadomości w sposób <span class="unique">szybki i jednoznaczny</span>, umożliwiając niemal natychmiastową komunikację na duże odległości.`),
    
            new Slide(`<span class="headline">Kod Morse'a w Praktyce</span>`,`<span class="unique">Pierwsza wiadomość</span> telegraficzna została przesłana przez Morse'a <span class="unique">24 maja 1844 roku</span>, z Waszyngtonu do Baltimore. Brzmiała ona: <span class="unique">"What hath God wrought?" (Co Bóg uczynił?)</span>. Ten historyczny przekaz oznaczał początek nowej ery komunikacji. Wkrótce sieci telegraficzne zaczęły rozprzestrzeniać się po całych Stanach Zjednoczonych i Europie, rewolucjonizując sposób, w jaki ludzie komunikowali się na dużych odległościach.`),
    
            new Slide(`<span class="headline">Zastosowania Kodu Morse'a</span>`,`Kod Morse'a znalazł szerokie zastosowanie w różnych dziedzinach. <span class="unique">Był kluczowy w komunikacji kolejowej, wojskowej oraz morskiej. </span>Podczas obu wojen światowych kod Morse'a był nieocenionym narzędziem w przekazywaniu <span class="unique">tajnych i pilnych informacji. </span> Nawet dziś, mimo rozwoju nowoczesnych technologii, kod Morse'a pozostaje ważnym środkiem komunikacji w sytuacjach awaryjnych i w środowiskach, gdzie tradycyjne metody są niedostępne.`),
    
            new Slide(`<span class="headline">Dziedzictwo Morse'a</span>`,`  <span class="author">Samuel Morse</span> zrewolucjonizował komunikację, przyczyniając się do powstania globalnej sieci telegraficznej. Jego wynalazek nie tylko przyspieszył tempo przekazywania informacji, ale także zbliżył do siebie ludzi na całym świecie. Kod Morse'a, pomimo upływu lat, pozostaje symbolem ludzkiej innowacyjności i dążenia do przełamywania barier.`)
        ],
        [
            new Slide(
                'El Nacimiento de la Innovación',
                'A principios del siglo XIX, el mundo estaba al borde de una <span class="unique">revolución en las comunicaciones</span>. <span class="author">Samuel Morse</span>, artista y inventor, experimentó un evento trágico que tuvo un gran impacto en sus futuros logros. En 1825, Morse recibió un mensaje sobre la <span class="unique">enfermedad terminal de su esposa</span> demasiado tarde para llegar a ella antes de su muerte. Desesperado por la lentitud de los métodos de comunicación de la época, decidió dedicarse a encontrar formas más rápidas y eficientes de transmitir información.'
            ),
            
            new Slide(
                '<span class="headline">La Invención del Telégrafo</span>',
                'La inspiración para crear el telégrafo surgió durante un viaje en barco a Europa, donde Morse se interesó en <span class="unique">electromagnetismo</span>. En 1832, mientras regresaba a los Estados Unidos, tuvo la idea del telégrafo eléctrico. Con la ayuda de colaboradores como <span class="author">Alfred Vail</span>, logró construir un prototipo funcional. El telégrafo de Morse funcionaba mediante la transmisión de señales eléctricas a través de cables, que eran recibidas e interpretadas por un dispositivo receptor.'
            ),
            
            new Slide(
                '<span class="headline">El Surgimiento del Código Morse</span>',
                'Sin embargo, el telégrafo en sí no sería útil sin un sistema adecuado de codificación de la información. Aquí es donde entra uno de los mayores inventos de Morse: el <span class="unique">código Morse, creado en 1837</span>. Este código se basaba en un sistema simple de <span class="unique">puntos</span> y <span class="unique">rayas</span> (señales cortas y largas), que podían representar letras del alfabeto, números y signos de puntuación. Morse desarrolló este código para transmitir mensajes de manera <span class="unique">rápida y clara</span>, permitiendo una comunicación casi instantánea a largas distancias.'
            ),
            
            new Slide(
                '<span class="headline">El Código Morse en la Práctica</span>',
                'El <span class="unique">primer mensaje</span> telegráfico fue enviado por Morse el <span class="unique">24 de mayo de 1844</span>, de Washington a Baltimore. Decía: <span class="unique">"¿Qué ha hecho Dios?"</span>. Este mensaje histórico marcó el comienzo de una nueva era en la comunicación. Pronto, las redes telegráficas comenzaron a expandirse por los Estados Unidos y Europa, revolucionando la forma en que la gente se comunicaba a largas distancias.'
            ),
            
            new Slide(
                '<span class="headline">Aplicaciones del Código Morse</span>',
                'El código Morse encontró una amplia gama de aplicaciones en diferentes campos. <span class="unique">Fue clave en la comunicación ferroviaria, militar y marítima.</span> Durante ambas guerras mundiales, el código Morse fue una herramienta invaluable para transmitir <span class="unique">información secreta y urgente.</span> Incluso hoy, a pesar del desarrollo de tecnologías modernas, el código Morse sigue siendo un medio importante de comunicación en situaciones de emergencia y en entornos donde los métodos tradicionales no están disponibles.'
            ),
            
            new Slide(
                '<span class="headline">El Legado de Morse</span>',
                '<span class="author">Samuel Morse</span> revolucionó las comunicaciones, contribuyendo a la creación de una red telegráfica global. Su invento no solo aceleró el ritmo de la transmisión de información, sino que también acercó a las personas de todo el mundo. El código Morse, a pesar del paso del tiempo, sigue siendo un símbolo de la innovación humana y el deseo de superar barreras.'
            )
        ],
        [
            new Slide(
                'The Birth of Innovation',
                'In the first half of the 19th century, the world stood on the brink of a <span class="unique">communication revolution</span>. <span class="author">Samuel Morse</span>, an artist and inventor, experienced a tragic event that had a huge impact on his future achievements. In 1825, Morse received a message about his wife’s <span class="unique">terminal illness</span> too late to reach her before her death. Desperate about the slow communication methods of the time, he decided to dedicate himself to finding faster and more efficient ways of transmitting information.'
            ),
            
            new Slide(
                '<span class="headline">The Invention of the Telegraph</span>',
                'The inspiration for creating the telegraph came during a sea voyage to Europe, where Morse became interested in <span class="unique">electromagnetism</span>. In 1832, while returning to the United States, he came up with the idea of the electric telegraph. With the help of collaborators like <span class="author">Alfred Vail</span>, he managed to construct a working prototype. The Morse telegraph operated by sending electrical signals through wires, which were received and interpreted by a receiving device.'
            ),
            
            new Slide(
                '<span class="headline">The Birth of Morse Code</span>',
                'However, the telegraph itself would have been useless without an appropriate system for encoding information. This is where one of Morse’s greatest inventions comes in - <span class="unique">Morse code, created in 1837</span>. This code was based on a simple system of <span class="unique">dots</span> and <span class="unique">dashes</span> (short and long signals), which could represent letters of the alphabet, numbers, and punctuation marks. Morse developed this code to transmit messages in a <span class="unique">quick and clear</span> manner, allowing for almost instant communication over long distances.'
            ),
            
            new Slide(
                '<span class="headline">Morse Code in Practice</span>',
                'The <span class="unique">first telegraphic message</span> was sent by Morse on <span class="unique">May 24, 1844</span>, from Washington to Baltimore. It read: <span class="unique">"What hath God wrought?"</span>. This historic message marked the beginning of a new era in communication. Soon, telegraph networks began to spread across the United States and Europe, revolutionizing how people communicated over long distances.'
            ),
            
            new Slide(
                '<span class="headline">Applications of Morse Code</span>',
                'Morse code found wide application in various fields. <span class="unique">It was crucial in railway, military, and maritime communication.</span> During both world wars, Morse code was an invaluable tool for transmitting <span class="unique">secret and urgent information.</span> Even today, despite the development of modern technologies, Morse code remains an important means of communication in emergency situations and in environments where traditional methods are unavailable.'
            ),
            
            new Slide(
                '<span class="headline">Morse’s Legacy</span>',
                '<span class="author">Samuel Morse</span> revolutionized communication by contributing to the creation of a global telegraphic network. His invention not only accelerated the pace of information transmission but also brought people closer together across the world. Morse code, despite the passage of time, remains a symbol of human innovation and the drive to break down barriers.'
            )
        ]
    ];
    
    const slider=new Slider('.sliderDiv b','.slide p','.nextSlide',slides);
    console.log("JEZYK: ",localStorage.getItem('lang'))
    
    
    slider.changeSlide('activeSlide')
})