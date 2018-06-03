webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/surah/surah.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surah_surah__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.gotoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__surah_surah__["a" /* SurahPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Murtuza\IPs\TwentySixSurtah\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item (click)="gotoPage()">Darud sharif</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Fatiha</ion-item>\n\n    <ion-item (click)="gotoPage()">Ayatal Kursh</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Bukarah First And Last Ruku</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Al-Imran Last Ruku</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah kahaf</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Sajda</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Yaseen</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Duhkhan</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Fatah</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Quaf</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah rehman</ion-item>\n\n    <ion-item (click)="gotoPage()">Darud sharif</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Wakiya</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Hadeed</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Hashr</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah rehman</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Jumma</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah rehman</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Tehrim</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Nuh</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Jinn</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Muzammil</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Kiyama</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Dehr</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Naba</ion-item>\n\n    <ion-item (click)="gotoPage()">Surah Aliya</ion-item>\n\n    <ion-item (click)="gotoPage()">Manjeel</ion-item>\n\n    <ion-item (click)="gotoPage()">Hadse se bachna ke dua</ion-item>\n\n\n\n\n\n    <ion-item (click)="gotoPage()">Darud sharif</ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Murtuza\IPs\TwentySixSurtah\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_surah_surah__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_surah_surah__["a" /* SurahPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/surah/surah.module#SurahPageModule', name: 'SurahPage', segment: 'surah', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_surah_surah__["a" /* SurahPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Murtuza\IPs\TwentySixSurtah\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Murtuza\IPs\TwentySixSurtah\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurahPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SurahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurahPage = /** @class */ (function () {
    function SurahPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SurahPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurahPage');
    };
    SurahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-surah',template:/*ion-inline-start:"C:\Murtuza\IPs\TwentySixSurtah\src\pages\surah\surah.html"*/'<!--\n\n  Generated template for the SurahPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Surah</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h5 >Page No 1</h5>\n\n<p>The Quran (/kɔːrˈɑːn/[a] kor-AHN; Arabic: القرآن‎ al-Qurʾān,[b] literally meaning "the recitation"; also romanized Qur\'an or Koran[c]) is the central religious text of Islam, which Muslims believe to be a revelation from God (Allah).[1] It is widely regarded as the finest work in classical Arabic literature.[2][3][4][5] The Quran is divided into chapters (surah in Arabic), which are then divided into verses (ayah).\n\nMuslims believe that the Quran was verbally revealed by God to Muhammad through the angel Gabriel (Jibril),[6][7] gradually over a period of approximately 23 years, beginning on 22 December 609 CE,[8] when Muhammad was 40, and concluding in 632, the year of his death.[1][9][10] Muslims regard the Quran as the most important miracle of Muhammad, a proof of his prophethood,[11] and the culmination of a series of divine messages that started with the messages revealed to Adam and ended with Muhammad. The word "Quran" occurs some 70 times in the text of the Quran, although different names and words are also said to be references to the Quran.[12]\n\nAccording to the traditional narrative, several companions of Muhammad served as scribes and were responsible for writing down the revelations.[13] Shortly after Muhammad\'s death, the Quran was compiled by his companions who wrote down and memorized parts of it.[14] These codices had differences that motivated the Caliph Uthman to establish a standard version now known as Uthman\'s codex, which is generally considered the archetype of the Quran known today.]</p>\n\n<h5 >Page No 2</h5>\n\n<p> There are, however, variant readings, with mostly minor differences in meaning.[13]\n\nThe Quran assumes familiarity with major narratives recounted in the Biblical scriptures. It summarizes some, dwells at length on others and, in some cases, presents alternative accounts and interpretations of events.[15][16][17] The Quran describes itself as a book of guidance for mankind 2:185. It sometimes offers detailed accounts of specific historical events, and it often emphasizes the moral significance of an event over its narrative sequence.[18][19] The Quran is used along with authentic and reliable hadith to interpret sharia law.[20] During prayers, the Quran is recited only in Arabic.[21]</p>\n\nSomeone who has memorized the entire Quran is called a hafiz. Quranic verse (ayah) is sometimes recited with a special kind of elocution reserved for this purpose, called tajwid. During the month of Ramadan, Muslims typically complete the recitation of the whole Quran during tarawih prayers. In order to extrapolate the meaning of a particular Quranic verse, most Muslims rely on exegesis, or tafsir.[22\n\n<p>Etymology and meaning\n\n  The word qurʼān appears about 70 times in the Quran itself, assuming various meanings. \n\n  It is a verbal noun (maṣdar) of the Arabic verb qaraʼa (قرأ), meaning "he read" or "he recited". \n\n  The Syriac equivalent is (ܩܪܝܢܐ) qeryānā, which refers to "scripture reading" or "lesson".[23] \n\n  While some Western scholars consider the word to be derived from the Syriac, the majority of Muslim authorities hold the origin of the word is qaraʼa itself.[1]\n\n Regardless, it had become an Arabic term by Muhammad\'s lifetime.[1] \n\n </p>\n\n <h5 >Page No 3</h5>\n\n\n\n  <p> An important meaning of the word is the "act of reciting", as reflected in an early Quranic passage: "It is for Us to collect it and to recite it (qurʼānahu)."[24]\n\nIn other verses, the word refers to "an individual passage recited [by Muhammad]". Its liturgical context is seen in a number of passages, for example: "So when al-qurʼān is recited, listen to it and keep silent."[25] The word may also assume the meaning of a codified scripture when mentioned with other scriptures such as the Torah and Gospel.[26]\n\nThe term also has closely related synonyms that are employed throughout the Quran. Each synonym possesses its own distinct meaning, but its use may converge with that of qurʼān in certain contexts. Such terms include kitāb (book); āyah (sign); and sūrah (scripture). The latter two terms also denote units of revelation. In the large majority of contexts, usually with a definite article (al-), the word is referred to as the "revelation" (waḥy), that which has been "sent down" (tanzīl) at intervals.[27][28] Other related words are: dhikr (remembrance), used to refer to the Quran in the sense of a reminder and warning, and ḥikmah (wisdom), sometimes referring to the revelation or part of it.[1][29]\n\nThe Quran describes itself as "the discernment" (al-furqān), "the mother book" (umm al-kitāb), "the guide" (huda), "the wisdom" (hikmah), "the remembrance" (dhikr) and "the revelation" (tanzīl; something sent down, signifying the descent of an object from a higher place to lower place).[30] Another term is al-kitāb (The Book), though it is also used in the Arabic language for other scriptures, such as the Torah and the Gospels. The term mus\'haf (\'written work\') is often used to refer to particular Quranic manuscripts but is also used in the Quran to identify earlier revealed books.[1]</p>\n\n<h5 >Page No 4</h5>\n\nThe Moral (Akhlaq) of Prophet Muhammad (PBUH)\n\n11/03/2010 Yusuf Kara\n\nThe finest and most impeccable example of Islam which is the biggest humanness is our beloved prophet (PBUH).\n\n\n\nThe moral model which he revealed by living and practising himself gives hints about the perfectness of Islamic morales.\n\nYes, now some samples from his fine Islamic morales are below:\n\nDesire what you want for you also for anybody else, and do not desire what you do not want for you also for anybody else.\n\nLook like as you are, or be as you look like.\n\nShow respect for the elders and show love for youngers.\n\nForgive and act tolerantly.\n\nDo not search for the other people’s faults.\n\nSuppress your anger, keep your promise, be loyal to your oath.\n\nNever give up being honest and integrated.\n\nBe trustworthy.\n\nBe modest, keep away from conceit and pride.\n\nKeep away from greediness and stinginess.\n\nBe generous.\n\nBe patient in every sort of situations.\n\nNever give up being fair.\n\nDo not neglect your spiritual and physical cleaning.\n\nBe careful about the health and well-being which was granted to you by Allah Almighty (SWT).\n\nSpend your spare time in charities and by good deeds and do not waste your life by trivial things.\n\nTell people to be patient and righteous (Haqq).\n\nKeep living honestly till the end of your life.\n\nThe Prophet of Islam, from the aspect of ethics was the most eminent of men and a perfect human being. \n\nHe possessed all good qualities to perfection and was pure of all evils and bad manners. \n\nThe criteria of morals, which are mentioned in Islam and Quran, were personified in the being of His Eminence as Ayesha,\n\n his wife and other companions have also admitted.\n\nAbu Darda says: I asked Ayesha about the morals and manners of the Holy Prophet (S). \n\nShe said: The morals of the Prophet were based on Quran. He was pleased with whatever \n\nAlmighty Allah was pleased with and was angry at whatever Almighty Allah was angry with.1\n\nHe was having such excellent morals that Quran has praised him and said with regard to him:\n\n<h5 >Page No 5</h5>\n\n<p>\n\nAlthough in this short treatise it is not possible to explain all the great manners and morals of the Messenger of Allah (S), we would try to mention some of them here:\n\n\n\nAmirul Momineen (a.s.) in the description of the Holy Prophet (S) says:\n\n\n\nIn generosity, he was ahead of all the people. He was the bravest of all. He was most truthful, loyal and had a kind disposition. \n\nHe was the most social person. Whoever encountered him initially was influenced by his awe and after meeting him and being in his company used become fond of him. \n\nI have neither seen anyone like His Eminence before or after that.2\n\nAnas ibn Malik has said with regard to His Eminence: He had the most excellent manners, was most forbearing and generous of the people. \n\nIt never happened that they asked something from him and he refused.3\n\n\n\nAyesha says: The Holy Prophet (S) was not bad mannered lacking morals and he was not of those who raised a hue and cry in the markets.\n\n He did not recompense a bad deed with a bad turn; on the contrary he always forgave mistakes.4\n\n\n\nHusain ibn Ali (a.s.) has narrated from his father that he said:\n\n\n\nThe Holy Prophet (S) was always cheerful, good natured and soft spoken; he was never nasty, bad natured and fault-picker and he ignored that which he did not like. \n\nHe never disappointed anyone. He had purified his self from three things: Argumentation, extravagance and vain acts. \n\nIn three things he had nothing to do with anyone: He was never harsh and a fault finder; he was never inclined to expose the secrets and hidden deficiencies of others; he never spoke, except when it entailed gaining heavenly rewards\n\n</p>\n\n<h5 >Page No 6</h5>\n\n.5\n\nAnas ibn Malik says: I went to the Holy Prophet (S) to find him wearing a dress with a coarse edge. \n\nA Bedouin came to His Eminence, held his garment and pulled it roughly in such a way that \n\nI saw its signs on his shoulder; then he said: Muhammad, give me some of Allah’s wealth. \n\nThe Holy Prophet (S) looked at him and smiled; then he ordered his men to give something to that man.\n\n6The Prophet of Islam (S) diligently observed the manners of society. He was extremely humble and kind. He treated all Muslims equally, respected all and expressed his love for them. He asked the well-being of those who were absent and visited the sick. He was present in funeral ceremonies. He accorded respect to children and greeted them first.\n\nAbu Qatada has said with regard to His Eminence. Despite that grade and status, his humility exceeded that of other people.\n\nWhen he came to a group of companions, they stood up to pay respect to him, but he said: Do not honor me like the Persians who stand to pay respect to each other. I am the servant of God and I eat and drink like them. The Holy Prophet (S) sometimes used to be astride a donkey and also made another person sit behind him. He visited the poor to show his support and interacted with the underprivileged and even accepted invitations of slaves. When he entered an assembly, he took a seat in the last row.7\n\nJarir says with regard to the Messenger of Allah (S): He joked and spoke jovially with his friends. \n\nHe also played with children and seated them in his lap. He accepted the invitation of all; visited the sick in the farthest corner of the city;\n\n accepted the excuse of those who committed mistakes.8\n\n <h5 >Page No 7</h5>\n\n\n\nAnas says: The Holy Prophet (S) never stretched his legs before others.\n\n He saluted first whenever he met someone. He shook hands with his friends. \n\n He never stretched his legs before his companions. He accorded respect to all who came to meet him.\n\n  Sometimes he used to spread out his cloak for the visitor to sit on or gave him that on which he was himself sitting. \n\n  He addressed his companions with their agnomen (Kunyah) and called them with the best of names. He never interrupted when others spoke.9\n\n\n\nIbn Masud says: A person wanted to speak to the Holy Prophet (S), but began to tremble at the awe of His Eminence.\n\n The Prophet said: Take it easy. I am not a king. Rather, I am the son of a lady who ate dried meat.10\n\n\n\nAbu Dharr says: The Messenger of Allah (S) was seated among the companions when a poor man entered the assembly; \n\nbut he could not recognize the Holy Prophet (S) without asking who the Prophet was.11\n\nAnas says: The Messenger of Allah (S) passed by some children and greeted them.\n\nHe also says: When the Holy Prophet (S) did not see one of the companions for three days, he inquired about his well-being. \n\nIf he were on a journey, he used to pray for him and if he was in town he used to go and meet him; if he was sick he paid a visit to him.12\n\nAyesha says: The Holy Prophet (S) never beat up his servants and he never hit anyone except in Holy war (Jihad).13\n\nImam Ja’far Sadiq (a.s.) said: The Messenger of Allah (S) distributed his attention equally to all his companions and looked at them for equal \n\nduration of time.14\n\nAs a result of the good morals and manners of the Holy Prophet (S) people were attracted to him and accepted his call as the Quran has said:\n\n<h5 >Page No 8</h5>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Murtuza\IPs\TwentySixSurtah\src\pages\surah\surah.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SurahPage);
    return SurahPage;
}());

//# sourceMappingURL=surah.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map