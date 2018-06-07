"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */
/* global storage */


// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {
	"Kutsche": "Kutsche.mp3",
	"Schrank": "Schrank.mp3"
};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {
	"Inventar": "inventar_mit_items.png",
	"KarikaturWVS": "KarikaturWVS.PNG",
	"KarikaturA": "KarikaturA.PNG",
	"KarikaturH": "KarikaturH.PNG",
	"KarikaturE": "KarikaturE.PNG",
	"KarikaturJ": "KarikaturJ.PNG",
	"KarikaturP": "KarikaturP.PNG",
	"KarikaturD": "KarikaturD.png",
};

// Define the backgrounds for each scene.
const scenes = {
"einleitung": "einleitung.jpg",
"background": "background.jpg",
"background2": "background2.jpg",
"Sammelalbum1": "sammelalbum_s1.jpg",
"Sammelalbum2": "sammelalbum_s2.jpg",
"Sammelalbum3": "sammelalbum_s3.jpg",
"Sammelalbum4": "sammelalbum_s4.jpg",
"Sammelalbum5": "sammelalbum_s5.jpg",
"Sammelalbum6": "sammelalbum_s6.jpg",
"Sammelalbum7": "sammelalbum_s7.jpg",
"Sammelalbum8": "sammelalbum_s8.jpg",
"sagan2": "sagan2.jpg"
};


// Define the Characters
const characters = {

	 "d": {
		"Name": "Dorothea",
		"Color": "#DC143C",
        "Face": "dorothea.png"
            }
,
	"a": {
   		"Name": "Anselm von Feuerbach",
   		"Color": "#5bcaff",
		   	"Face": "anselm_von_feuerbach.png"
	   }
,
	"b": {
   		"Name": "Brassier",
   		"Color": "#5bcaff",
		   "Face": "brassier.png"
	   }
,
	"e": {
   		"Name": "Elisa van der Recke",
   		"Color": "#5bcaff",
		   "Face": "elisa_van_der_recke.png"
	   }
,
	"h": {
   		"Name": "Herzog",
   		"Color": "#5bcaff",
		   "Face": "herzog.png"
	   }
,
	"p": {
   		"Name": "Pauline",
   		"Color": "#5bcaff",
		   "Face": "pauline.png"
	   }
,
	"w": {
   	   "Name": "Welker",
   	   "Color": "#5bcaff",
   			"Face": "welcker_klein.PNG"
   		   }
,
	"wvs": {
   		"Name": "Wilhelmine von Sagan",
   		"Color": "#5bcaff",
		   "Face": "wilhelmine_von_sagan.png"
	   }
};



let script = {
	// The game starts here.
	"Start": [
		"play music Theme loop",
		"scene einleitung with fadeIn",
		 "Ein Tag im Schloss Löbichau beginnt.",
		 "Die Herzogin Anna Dorothea von Kurland trifft die letzten Vorbereitungen, um ihrer Rolle als Salondame gerecht zu werden..",
		 "Alle Gäste zählen auf ihre Qualitäten als Gastgeberin, denn Dorothea ist bekannt dafür, dass man bei ihr wunschlos glücklich ist.",
		 "Weltgewandt wie sie war, fiel es ihr leicht, einflussreiche Staatsmänner, Dichter, Künstler, Bürgerliche sowie den höchsten gesellschaftlichen Kreisen Europas eine angenehme Zeit zu bereiten - denn unter ihrem Dach waren alle Freunde." ,
	 	"scene background with fadeIn",
		"d Ich freue mich schon auf meine Gäste! Die ersten werden bald eintreffen - und einjeder mit einer anderen Vorliebe.",
		"d Mal schauen, ob schon alles in meinem Vorratsschrank vorhanden ist.",
		"play sound Schrank",
		"show Inventar center with fadeIn",
		"d Ah... Ein Tintengeschirr mit Feder, ein köstlicher Apfel, ein Stammbuch, Notenblätter, das Modell eines Tempels aus Kork sowie eine antike Vase... Es ist für alles gesorgt. Egal ob Dame oder Herr ...",
		"stop sound",
		"jump WelkerScene"
	],


	// Neue Scene Welker
		"WelkerScene": [
		"scene background with fadeIn",
		"w Guten Morgen liebste Herzogin!",
		"d Guten Morgen, werter Herr Welker! Sind Sie heute schon von der Muse geküsst worden?",
		"w Ich war eben im Zeichenunterricht mit Emilie, als mir eine Idee kam: Wenn heute philosophiert, diskutiert, politisiert, musiziert und gedichtet wird, möchte ich derjenige sein, der diese illustre Runde zu Papier bringt.",
		"d Oh, welch wunderbare Idee!",
		"play sound Kutsche",
		"d Ich höre, dass gerade eine Kutsche eintrifft. Das wird wohl unser erster Gast sein!",
		// Kutschengeräusch
		"jump WilhelmineScene"
	],


	// Neue Scene (Wilhelmine)
	"WilhelmineScene": [
		"scene background with fadeIn",
		"stop sound",
		"wvs Liebste Mutter! Ich bin zurück von meiner Reise und freu mich darauf den Sommer wieder mit euch zu verbringen.",
		"d Meine Liebe Wilhelmine, du kannst es Dir kaum denken, wie leer und öde Löbichau war, als Ihr alle fort waret. Wie war die Reise?",
		"wvs Wir waren tagelang zu Pferde unterwegs. Du weißt ja wie sehr ich mein Gespann aus edlen Rösser liebe. Herrn Welker traf ich draußen auf dem Hof und er meinte sie seien genauso edel und prächtig wie ihre Herrin. Damit dem auch so bleibt muss ich den Stallburschen jedoch zeigen was er füttern soll",
		"jump FirstChoice"
	],
	// Item auswählen = Apflel richti
	"FirstChoice": [
		"d Was wird wohl dem edlen Rössern schmecken? Wähle das passende Objekt aus!",
		{"Choice":{
    		"Apfel":{
        	"Text": "Apfel",
         	"Do": "jump AnselmScene"
    	},
	    	"Korkmodell":{
	        "Text": "Korkmodell",
	        "Do": "jump falsch1"
	    },
			"Notenblatt":{
			"Text": "Notenblatt",
			"Do": "jump falsch1"
		},
			"Stammbuch":{
			"Text": "Stammbuch",
			"Do": "jump falsch1"
		},
			"Tintenfass":{
			"Text": "Tintenfass",
			"Do": "jump falsch1"
		},
			"Vase":{
			"Text": "Vase",
			"Do": "jump falsch1"
		}
	}}
	],


	// Neue Scene (Anselm Feuerbach)
	"AnselmScene": [
			"scene background with fadeIn",
			"d Bring ihm diesen Apfel und sag ihm er einen großen Sack voll davon im Garten. Hier ist noch deine Zeichnung und spurte dich, die anderen Gäste müssten auch bald ankommen.",
			// Erhählt Karikatur
			"show KarikaturWVS",
			"wvs  Vielen Dank Mutter, wie passend ich doch dargestellt bin.",
			"hide KarikaturWVS",
			"d Ah, der junge Joseph Anselm von Feuerbach! Wie geht das Studium voran?",
			"a Bestens! Seit kurzem studiere ich Archäologie in Heidelberg.",
			"d Sie treten also nicht in die Fußstapfen Ihres Vaters?",
			"a Nein, die Strafverfolgung und Kriminologie sind das Steckenpferd meines Vaters. Mich reizen die Geheimnisse fremder Länder und ich möchte in Italien der Antike auf die Spur gehen. Leider lässt meine Gesundheit eine Studienreise momentan nicht zu.",
			"jump SecondChoice"
	],
	// Item muss ausgewählt werden = Vase richtig
	"SecondChoice": [
		"d Nun brauche ich etwas das typisch Antike ist? Wähle das passende Objekt aus!",
				{"Choice":{
		    		"Apfel":{
		        	"Text": "Apfel",
		         	"Do": "jump falsch2"
		    	},
			    	"Korkmodell":{
			        "Text": "Korkmodell",
			        "Do": "jump falsch2"
			    },
					"Notenblatt":{
					"Text": "Notenblatt",
					"Do": "jump falsch2"
				},
					"Stammbuch":{
					"Text": "Stammbuch",
					"Do": "jump falsch2"
				},
					"Tintenfass":{
					"Text": "Tintenfass",
					"Do": "jump falsch2"
				},
					"Vase":{
					"Text": "Vase",
					"Do": "jump AnselmScene2"
				}
			}}
			],
	"AnselmScene2": [
			"d Vielleicht heitert Sie diese antike griechische Vase auf! Sie zeigt Szenen der Mythologie. Ich schenke Sie Ihnen gerne.",
			"a Danke, Dorothea! Ich weiß diese Geste sehr zu schätzen. Diese Vase wird sich hervorragend in meinem Studierzimmer machen. Bei dieser Gelegenheit möchte ich Sie noch um einen Gefallen bitten, Dorothea. Joseph von Brassier hat mir sein Stammbuch gegeben, damit ich mich dort verewigen kann.",
			"d Mir ist schon zu Ohren gekommen, dass Joseph von Brassier nun ebenfalls ein Studium aufgenommen hat. Da ist es natürlich nahezu verpflichtend, diese Tradition aufzunehmen und seine Freunde um eine Widmung im Stammbuch zu bitten.",
			"a Ganz genau. Wären Sie so freundlich, ihm das Stammbuch zukommen zu lassen?",
			"d Selbstverständlich.",
			// Erhählt Karikatur
			"show KarikaturA",
			"a Vielen Dank, Dorothea. Möchten Sie einen Blick auf meine Karikatur werfen? Ernst Welker hat sich einen Scherz erlaubt und mich als brave Amsel skizziert.",
			"hide KarikaturA",
			"jump HerzogScene"
	],

	// Neue Scene (Herzog)
	"HerzogScene": [
			"scene background with fadeIn",
			"h Dorothea! Es ist mir eine Freude, wieder Gast in Ihrem Salon zu sein. Ich freue mich schon auf Kunst, Kultur und anregende politische Gespräche.",
			"d Werter Herzog von Gotha, die Freude ist natürlich ganz meinerseits. Ich freue mich stets, so hohe Gäste wie Sie hier begrüßen zu dürfen. Ihre Liebe für die schönen Künste beflügelt jede Diskussion über Kultur. Allerdings hoffe ich, dass diese Liebe heute nicht überstrapaziert wird… Ernst Welker, der Zeichenlehrer meiner Ziehenkelin, fertigt heute Portraits der Gäste an. Allerdings sind diese-",
			"h ...als Tiere dargestellt? (Lacht) Meine Liebe, keine Sorge! In dieser netten Gemeinschaft verzeihe ich solche Späße nur zu gerne. Ich muss sagen, dass Herr Welker mich nicht schlecht getroffen hat.",
			// Erhählt Karikatur
			"show KarikaturH",
			"d Ein Pfau? Eine sehr stattliche Erscheinung!",
			"hide KarikaturH",
			"h Ganz recht, ganz recht! Und er hat nicht ganz Unrecht dabei, dass ich mich gerne mit erlesenen Federn schmücke und wertvolle Kunst und Kuriositäten aus allen Ländern sammle.",
			"jump ThirdChoice"
		],
	// Item muss ausgewählt werden = Korkmodell richtig
	"ThirdChoice": [
		"d Der Herzog ist ein Sammler durch und durch. Er hat Figuren aus Porzellan und Modelle aus Wachs. Was fehlt ihm wohl noch? Wähle das passende Objekt aus!",
			{"Choice":{
				"Apfel":{
				"Text": "Apfel",
				"Do": "jump falsch3"
			},
				"Korkmodell":{
				"Text": "Korkmodell",
				"Do": "jump HerzogScene2"
			},
				"Notenblatt":{
				"Text": "Notenblatt",
				"Do": "jump falsch3"
			},
				"Stammbuch":{
				"Text": "Stammbuch",
				"Do": "jump falsch3"
			},
				"Tintenfass":{
				"Text": "Tintenfass",
				"Do": "jump falsch3"
			},
				"Vase":{
				"Text": "Vase.",
				"Do": "jump HerzogScene2"
			}
		}}
	],
	"HerzogScene2": [
			"d Mein lieber Herzog, Ihre Sammlungen sind weit bekannt und suchen wirklich ihresgleichen. Vielleicht ergänzt dieses Souvenir aus Italien Ihre Schatzkammer?",
			"h Oh, was für ein aufmerksames Geschenk! Diese Korkmodelle sind sehr begehrt. Dieses Exemplar wird sich ganz vorzüglich in meiner Sammlung machen.",
			"jump ElisaScene"
	],



	// Neue Scene (Elisa)
	"ElisaScene": [
			"scene background with fadeIn",
			"e Verehrte Dorothea! Ihr müsst mir helfen.",
			"d Liebe Elisa, so beruhigt euch doch erst einmal.",
			"e Dasselbe hat Tiedge auch schon zu mir gesagt und mir Tobak angeboten! Das löst jedoch nicht mein Problem. Ich wollte gerade in die Bibliothek um eine Idee für ein neues Gedicht niederzuschreiben und da viel mir auf, dass ich das wichtigste daheim vergessen habe.",
			"jump FourthChoice"
	],
	// Item muss ausgewählt werden = Tintenfass richtig
	"FourthChoice": [
		"d Was  braucht man um seine Ideen niederzuschreiben? Wähle das richtige Objekt aus!",
			{"Choice":{
				"Apfel":{
				"Text": "Apfel",
				"Do": "jump falsch4"
			},
				"Korkmodell":{
				"Text": "Korkmodell",
				"Do": "jump falsch4"
			},
				"Notenblatt":{
				"Text": "Notenblatt",
				"Do": "jump falsch4"
			},
				"Stammbuch":{
				"Text": "Stammbuch",
				"Do": "jump falsch4"
			},
				"Tintenfass":{
				"Text": "Tintenfass",
				"Do": "jump ElisaScene2"
			},
				"Vase":{
				"Text": "Vase",
				"Do": "jump falsch4"
			}
		}}
	],
	"ElisaScene2": [
			"d Kein Grund zur Sorge, ich habe erst neue Schreibfedern und Tinte von Herrn Goethe bei seinem letzten Besuch geschenkt bekommen. Diese könnt ihr gern benutzen.",
			//Erhählt Karikatur
			"show KarikaturE",
			"e Dorothea, ihr seid mal wieder meine Rettung. Nirgendwo anders wird so gut für seine Gäste gesorgt wie in eurem Salon.",
			"hide KarikaturE",
			"jump JosephScene"
	],


	// Neue Scene (Joseph v. Brassier)
	"JosephScene": [
			"scene background with fadeIn",
			"b Dorothea! Wie schön, wieder hier zu sein. Ich freue mich über die Abwechslung zum Treiben in Berlin, wo ich seit kurzem studiere.",
			"d Lieber Joseph, es freut mich sehr, dass es Ihnen so gut geht, nachdem Ihre Familie einige Schicksalsschläge erleiden musste.",
			"b Da mein Vater in der Französischen Revolution alles verloren hatte, mussten wir nach Deutschland flüchten. Hier haben wir aber Verbündete und Freunde gefunden. Und als Student macht man sowieso viele neue Bekanntschaften.",
			"jump FifthChoice"
	],

	// Item muss ausgewählt werden = Stammbuch richtig
	"FifthChoice": [
		"d Da gibt es doch ein Buch in welches Freunde und Bekannte Widmungen, Wappen, kleine Bilder oder Gedichte eintragen können. Das wäre das richtige für Joseph. Wähle das richtige Objekt aus!",
			{"Choice":{
				"Apfel":{
				"Text": "Apfel",
				"Do": "jump falsch5"
			},
				"Korkmodell":{
				"Text": "Korkmodell",
				"Do": "jump falsch5"
			},
				"Notenblatt":{
				"Text": "Notenblatt",
				"Do": "jump falsch5"
			},
				"Stammbuch":{
				"Text": "Stammbuch",
				"Do": "jump JosephScene2"
			},
				"Tintenfass":{
				"Text": "Tintenfass",
				"Do": "jump falsch5"
			},
				"Vase":{
				"Text": "Vase",
				"Do": "jump falsch5"
			}
		}}
	],
	"JosephScene2": [
			"d Und diese Bekanntschaften müssen sich nach studentischer Manier natürlich alle ins Stammbuch eintragen. Anselm Feuerbach bat mich, Ihnen Ihr Stammbuch zu geben.",
			// Erhählt Karikatur
			"show KarikaturJ",
			"b Der gute Anselm! Ich freue mich schon darauf, zu lesen, wie er sich verewigt hat. A propos verewigen: Haben Sie schon die Zeichnung Ernst Welkers gesehen? Er hat mich als Hering gezeichnet.",
			"hide KarikaturJ",
			"jump PaulinchenScene"
	],

	// Neue Scene (Pauline)
	"PaulinchenScene": [
			"scene background with fadeIn",
			"d Ach Paulinchen, gut das ich dich sehe. Meine Gäste haben schon nach dir gefragt. Sie wollen auch heute abend wieder musikalisch unterhalten werden.",
			"p Liebste Mutter, ich würde diesen Wünschen unserer Gäste wirklich gern nachkommen... Ich fürchte nur ich habe keine neuen Stücke vorzutragen. Verzeih mir, aber es ist mir ist nicht danach zu Mute dieselben Arien zu singen.",
			"d Auch dafür habe ich eine Lösung.",
			"jump SixthChoice"
	],
	// Item muss ausgewählt werden = Noten richtig
	"SixthChoice": [
		"d Musik liegt in der Luft… Wähle das richtige Objekt aus!",
			{"Choice":{
				"Apfel":{
				"Text": "Apfel",
				"Do": "jump falsch6"
			},
				"Korkmodell":{
				"Text": "Korkmodell",
				"Do": "jump falsch6"
			},
				"Notenblatt":{
				"Text": "Notenblatt",
				"Do": "jump PaulinchenScene2"
			},
				"Stammbuch":{
				"Text": "Stammbuch",
				"Do": "jump falsch6"
			},
				"Tintenfass":{
				"Text": "Tintenfass",
				"Do": "jump falsch6"
			},
				"Vase":{
				"Text": "Vase",
				"Do": "jump falsch6"
			}
		}}
	],
	"PaulinchenScene2": [
			"d Ich habe ein Buch mit Noten. Du kannst sogar Gäste auffordern zusammen mit dir zu singen, da es Canons sind.",
			"p Ich werde sogleich ans üben gehen und schauen wer von unseren Gästen mitsingen möchte.",
			"d Herrn Welker brauchst du nicht zu fragen, er ist mit malen beschäftigt. Auch für dich habe ich ein Bild von ihm.",
			// Karikatur geben
			"show KarikaturP",
			"d Da ich gerade von ihm spreche…. Ich werde ihn einmal suchen...",
			"hide KarikaturP",
			"jump WelckerSceneD"
	],

	//Neue Scene Welcker
	"WelckerSceneD": [
		"d Liebster Herr Welker, da seid Ihr ja und immer noch mit zeichnen beschäftigt! Alle Gäste die ich bisher traf sind so begeistert von Euren Karikaturen. ",
		"w Oh das freut mich sehr. Es trifft sich gut, dass Ihr gerade hier seid. Noch ein letzter Strich und das Werk ist vollendet. Voilà!",
		// Karikatur geben
		"show KarikaturD",
		"d So ein netter Spruch. Da vergebe ich es Ihnen auch, dass sie mich als Pudel zeichnen.",
		"hide KarikaturD",
		"w Aber der Pudel ist doch der Inbegriff von Schönheit und Eleganz. Da Ihr Euch immer so vortrefflich um all Eure Gäste kümmert, sollte es etwas sein, dass jeder mit Treu verbindet und liebt. ",
		"d Ach Herr Welker! Ich genieße es einfach so viele tolle Persönlichkeiten unter meinem Dach zu haben. Nun lasse ich euch weiter malen. Es kommen ja noch mehr Gäste und der Tag ist noch nicht zu Ende...",
		"w Ach wie nett, gerne dürfen Sie auch einen Blick in meine restlichen Werke werfen.",
		"d Mit Vergnügen, vielen Dank!",
		"hide d",
		"jump Info",
	],

	"Info": [
		"scene background",
		"d Nachfolgend kannst du  noch die restlichen Zeichnungen von Herrn Welker begutachten. Um mich auszublenden klick unten im Menü auf 'Ausblenden'.",
		"jump SammelalbumScene1"
	],
	//Neue Scene Sammelalbum
	"SammelalbumScene1": [
		"scene Sammelalbum1 with fadeIn",
		"d Nachfolgend kannst du  noch die restlichen Zeichnungen von Herrn Welker begutachten. Um mich auszublenden klicke unten im Menü auf 'Ausblenden'.",
		"jump SammelalbumScene2"
	],
	"SammelalbumScene2": [
		"scene Sammelalbum2 with fadeIn",
		"d Nachfolgend kannst du  noch die restlichen Zeichnungen von Herrn Welker begutachten. Um mich auszublenden klicke unten im Menü auf 'Ausblenden'.",
		"jump SammelalbumScene3"
	],
	"SammelalbumScene3": [
		"scene Sammelalbum3 with fadeIn",
		"d Nachfolgend kannst du  noch die restlichen Zeichnungen von Herrn Welker begutachten. Um mich auszublenden klicke unten im Menü auf 'Ausblenden'.",
		"jump SammelalbumScene4"
	],
	"SammelalbumScene4": [
		"scene Sammelalbum4 with fadeIn",
		"d Nachfolgend kannst du  noch die restlichen Zeichnungen von Herrn Welker begutachten. Um mich auszublenden klicke unten im Menü auf 'Ausblenden'.",
		"jump SammelalbumScene5"
	],
	"SammelalbumScene5": [
		"scene Sammelalbum5 with fadeIn",
		"d Nachfolgend kannst du  noch die restlichen Zeichnungen von Herrn Welker begutachten. Um mich auszublenden klicke unten im Menü auf 'Ausblenden'.",
		"jump SammelalbumScene6"
	],
	"SammelalbumScene6": [
		"scene Sammelalbum6 with fadeIn",
		"d Nachfolgend kannst du  noch die restlichen Zeichnungen von Herrn Welker begutachten. Um mich auszublenden klicke unten im Menü auf 'Ausblenden'.",
		"jump SammelalbumScene7"
	],
	"SammelalbumScene7": [
		"scene Sammelalbum7 with fadeIn",
		"d Nachfolgend kannst du  noch die restlichen Zeichnungen von Herrn Welker begutachten. Um mich auszublenden klicke unten im Menü auf 'Ausblenden'.",
		"jump SammelalbumScene8"
	],
	"SammelalbumScene8": [
		"scene Sammelalbum8 with fadeIn",
	],

	"falsch1": [
		"d Das war leider falsch, probiere es doch nocheinmal",
		"jump FirstChoice",
	],

	"falsch2": [
		"d Das war leider falsch, probiere es doch nocheinmal",
		"jump SecondChoice"
	],

	"falsch3": [
		"d Das war leider falsch, probiere es doch nocheinmal",
		"jump ThirdChoice"
	],

	"falsch4": [
		"d Das war leider falsch, probiere es doch nocheinmal",
		"jump FourthChoice"
	],

	"falsch5": [
		"d Das war leider falsch, probiere es doch nocheinmal",
		"jump FifthChoice"
	],

	"falsch6": [
		"d Das war leider falsch, probiere es doch nocheinmal",
		"jump SixthChoice"
	]


};
