---
layout: post
title: Rails Girls Prague pohledem kouče
assets: /assets/2014-05-railsgirls
dependencies: |
  <script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
---

Před dvěma týdny jsem měl možnost koučovat na třetím ročníku [Rails Girls v Praze](http://railsgirls.com/prague). Byla to natolik výborná zkušenost, že jsem se rozhodl sepsat k ní pár myšlenek -- a zároveň jsem chtěl [shrnout připomínky](#todo), které jsem probíral s účastnicemi a ostatními kouči.

[Rails Girls](http://railsgirls.com/) je iniciativa s cílem zpřístupnit programování ženám a dívkám skrze vývoj webových aplikací v [Ruby on Rails](http://rubyonrails.org/). Začalo to v roce 2010 ve Finsku víkendovými workshopy, které se dnes [konají po celém světě](http://railsgirls.com/events). Od minulého roku také pořádají [Rails Girls Summer of Code](http://railsgirlssummerofcode.org/), kde účastnice tři měsíce pracují na vybraných open-source projektech -- a dostanou za to zaplaceno. Je to vlastně ekvivalent [Google Summer of Code](http://www.google-melange.com/) pro začínající programátorky.

Kromě Prahy se pořádají workshopy také [v Ostravě](http://railsgirls.com/ostrava) a (zrovna tento víkend) [v Brně](http://railsgirls.com/brno) -- a údajně se chystá i Olomouc.

Workshopy probíhají zhruba takto:

* V pátek se koná „install party,“ kde se zprovozní základní nástroje: Ruby, Rails a textový editor.
* V sobotu se projdou základy programování, jazyka Ruby a webových aplikací, během odpoledne si pak účastnice vytvoří jednoduchou aplikaci v Rails [podle návodu](http://guides.railsgirls.com/app/).
* V neděli se aplikace vypustí do světa a účastnice si jí přízpůsobí k obrazu svému.

Na jeden víkend je toho skutečně hodně avšak cílem akce není z účastnic udělat ostřílené programátorky během tří dnů. Cílem je ukázat, že počítače nejsou černé skřínky žijící si vlastním životem a programování není magie, kterou by měla ovládat úzká skupina vyvolených. Řada účastnic má „ajťáky“ ve svém okolí a díky Rails Girls nahlédnou do žargonu, na kterém celé IT stojí. Zároveň získají základní představu, jak fungují webové stránky které denně používají, ať už je to iDnes, IDOS nebo Facebook. A v nejlepším případě je programování zaujme natolik, že po workshopu pokračují dále a v některém z dalších ročníků začnou samy koučovat.

Poslední možnost zní zbožné přání jak by to hypoteticky mělo fungovat. Ale zdá se, že to funguje: právě letos koučovaly dvě účastnice z předešlých ročníků -- děvčata navíc chystají projekt [Bezlepci](http://www.bezlepci.cz/) pro lidi s bezlepkovou dietou. Rails Girls mají reálný dopad.

# Proč vůbec Ruby?

Když se bavím o Rails Girls s jinými vývojáři, občas dojde na otázku „Proč by se holky měly učit právě Ruby? Proč ne třeba `${můj oblíbený jazyk}`?“ Rails Girls samozřejmě znamenají framework Ruby on Rails, který stojí na jazyce Ruby.

Osobně si myslím, že samotný vznik Rails Girls nebyl předurčený pouze syntaxí nebo jinými vlastnostmi jazyka, jako spíše základními myšlenkami a konkrétními osobnostmi, které formovaly komunitu Ruby vývojářů.

Začal bych u tvůrce jazyka Ruby -- Yukihiro „Matz“ Matsumoto. Matz možná není geniální programátor, ale klade důraz na přístupnost programování pro lidi, nikoliv pro stroje. To bylo i principem pro návrh Ruby:

> Doufám, že Ruby pomůže všem programátorům aby byli produktivnější, aby je programování bavilo a aby byli šťastní. To je hlavní cíl jazyka Ruby.
>
> <footer><cite>Yukihiro Matsumoto, [Ruby 1.9](https://www.youtube.com/watch?v=oEkJvvGEtB4) na Google Tech Talks</cite>

Matzův nekonfliktní a přátelský přístup vedl i ke rčení <q lang="en">Matz is Nice So We Are Nice</q> jako určitému pravidlu komunity. A přestože toto pravidlo [ztratilo časem váhu](http://blog.steveklabnik.com/posts/2011-08-19-matz-is-nice-so-we-are-nice) a [ne všichni rubysti](http://codon.com/the-dhh-problem) jsou tak přátelští, komunita kolem Ruby je rozmanitá a plná lidí, které prostě baví programovat.[^1]

[^1]: Což neznamená, že jiné programovací jazyky takové lidi nemají -- tedy kromě [Rasmuse Lerdorfa](http://en.wikiquote.org/wiki/Rasmus_Lerdorf).

Další unikátní postavou mezi rubysty byl [why the lucky stiff](http://en.wikipedia.org/wiki/Why_the_lucky_stiff); byla to právě whyova tvorba, která mě přivedla k Ruby. Programátor, spisovatel, hudebník a kreslíř v jedné osobě, why viděl programování jako další formu exprese, způsob jak vyjádřit své myšlenky.

<blockquote lang="en">
when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.

<footer>
<cite>why the lucky stiff</cite>, [via Joey Devilla](http://www.joeydevilla.com/2008/08/08/why-the-lucky-stiff-on-why-you-should-create/)
</footer>
</blockquote>

Why skrze projekty jako [TryRuby](http://tryruby.org/) a [Hackety Hack!](http://hackety.com/) zkoumal jak zpřístupnit programování neprogramátorům, především dětem; v textu [Průšvih malého kodéra](https://github.com/hacketyhack/hacketyhack/wiki/The-Little-Coder%27s-Predicament) shrnuje, že problém je v uzavřenosti systémů a nepřístupnosti nástrojů.

<figure class="full">
[![díky Whyově srdceryvné příručce se i kojenci mohou naučit Ruby. Je to tak jednoduché!]({{page.assets}}/about.the.poignant.guide-2.jpg)]({{page.assets}}/about.the.poignant.guide-2.jpg)
<figcaption>
  <cite>[why's (poignant) guide to Ruby](http://mislav.uniqpath.com/poignant-guide/book/chapter-1.html), why the lucky stiff</cite>
</figcaption>
</figure>

Mimo to napsal i legendární [whyovu (srdceryvnou) příručku Ruby](http://mislav.uniqpath.com/poignant-guide/), což není ani tak učebnice jazyka, jako spíše post-moderní hybrid poezie, komiksu a kódu. Upřímně, není to kniha pro každého ale garantuji vám, že si s ní rozšíříte slovní zásobu, představivost a (v kombinaci s psychotropními látkami) vědomí -- a nezapomeňte, že ke knize existuje neméně [skvělý soundtrack](http://mislav.uniqpath.com/poignant-guide/soundtrack/).


Už je to pět let co why ukončil svou digitální existenci, ale jeho projekty stále existují a na jeho odkaz navazují další lidé.

To mě přivádí k Lindě Liukas -- jedné ze zakladatelek Rails Girls a autorce chystané knihy [Hello Ruby](http://www.helloruby.com/), učebnice programování pro děti ve věku od čtyř do sedmi let. Kniha vypráví o děvčátku Ruby, které se během svých dobrodružství skamarádí se Sněhovým leopardem, upeče perníčky se zelenými roboty a také potká moudré tučňáky a kluka, který se jmenuje Django... Podobnost s existujícími softwarovými projekty je zcela záměrná, ale není to hlavní pointa knihy.

<figure class="full">
<div class="embed">
  <iframe width="640" height="480" src="https://www.kickstarter.com/projects/lindaliukas/hello-ruby/widget/video.html" frameborder="0" scrolling="no">
  </iframe>
</div>
<figcaption>
[Hello Ruby](http://kck.st/1hNiJag), Linda Liukas
</figcaption>
</figure>

Linda chce ukázat svět softwaru jako svět netušených možností, svět, ve kterém se nápady snadno stanou skutečností -- a programování je prostředek, jak se v tomto světě neztratit. Stejně jako u whye, za každou řádkou kódu se skrývá příběh a cílem je radost z tvoření skrze programování. Tak, jak si to přál Matz.

Takže proto Ruby.

Ale můj pohled je zkreslený tím, že jsem rubysta. Jiné jazyky mají své vlastní iniciativy, ať už se jedná třeba o [pyLadies](http://www.pyladies.com/), [Clojure Bridge](http://www.clojurebridge.org/) nebo [PHP Women](http://phpwomen.org/). Cílem není pokračovat svatou válku o nejlepší jazyk, ale zpřístupnit programování všem, kteří mají aspoň trochu zájem, bez ohledu na rasu nebo pohlaví. Nedostatek diverzity v IT se týká celého odvětví, ne jenom Ruby.

# Proč koučovat?

Přednášel jsem sice o programování v Ruby celý semestr na ČVUT, ale teprve na Rails Girls jsem si vyzkoušel co o tom skutečně vím. Vysvětlit principy programovacího jazyka studentovi IT a někomu, kdo právě napsal první řádku kódu není různě obtížné, je to naprosto nesrovnatelné. A práce s neprogra&shy;mátory má řadu výhod -- nemají špatné návyky z jiných jazyků a nepošlou vás do háje s tím, že v *jejich* jazyce se to řeší mnohem lépe!

Část práce odvedou přednášející -- Karel Minařík v úvodu vysvětlil, že „algoritmus“ je vlastně totéž, jako kuchařský recept. A Robin Pokorný zase ukázal, k čemu jsou dobré kaskádové styly. Ale je potom na koučích vysvětlit konkrétní koncepty a provést účastnice nejastnostmi. K tomu koučové potřebují tři věci: znalost Ruby, trpělivost, ochotu a kofein. Schopnost počítat do čtyř je výhodou.

Pokud zůstane něco nepochopeno, zkuste to vysvětlit jinak. Mně se třeba osvědčilo popisovat „co počítači říkám“ -- a proč a jak si to počítač vykládá. A pokud ani to nepomůže, zkuste přivolat jiného kouče, třeba to prostě vidíte jinak.

Po dvou dnech vysvětlování jsem necítil hlasivky a na nohou mě držel především maté -- ale stálo to za to. Atmosféra workshopu se nedá popsat; ještě jsem nezažil takový zájem o učení se, natož u tak složitých technických konceptů. Motivace všech účastníků dělá tyto workshopy skutečně výjimečné. A každé drobné vítězství nad kódem, každý úspěšně pochopený koncept je pro kouče ohromná radost.

# Co udělat lépe?
{:#todo}

Na konci workshopu jsme ještě s ostatními kouči probírali, co by bylo možné do budoucna zlepšit. Píšu si to jako referenci do budoucna, ale zároveň jako výzvu pro další programátory, aby přiložili ruku k dílu.

## TryRuby stojí za zkoušku, ale...

Sobotní dopoledne věnujeme [TryRuby](http://tryruby.org/), které obsahuje krátký úvod do konceptů jazyka, provázeného whyovými ilustracemi. Ačkoli témata i texty jsou dobré, narazili jsme na několik konkrétních problémů:

Rychlost
: Aplikace běží kompletně on-line a odpovědi někdy trvají příliš dlouho, někdy nepřijdou vůbec.

Nepředvidatelnost
: Ačkoli by se mělo jednat o plnohodnotný interpret jazyka, nechová se tak -- některé standardní metody zkrátka nefungují. Opačný problém je naopak v lekcích, kde se najednou pracuje s předdefinovanou proměnnou -- přitom její definice není vidět.

Motivace
: U lekcí jsou sice řečené dílčí kroky, ale není už příliš dobře vysvětlené, k čemu se směřuje. Je fajn, že si můžeme vypsat všechny prvky z pole, ale co s tím? Buď musí nastoupit koučové, nebo by měl být nejprve stanovený cíl a pak probrány dílčí kroky.

Míra abstrakce
: Fakt, že aplikace běží v prohlížeči bez jakékoliv vazby na reálné prostředí může být překvapivý problém. Když přijde na vypisování souborů, odkud se ten soubor vzal? Kde se nachází? V takovém případě je nejlepší vzít `irb` a ukázat tytéž příkazy na lokálním systému.

Bohužel stávající kód TryRuby není dostupný, takže není v naší moci tyto problémy řešit v on-line verzi. Asi jako nejlepší alternativa se nabízí vytvořit tutorial nad `irb` v podobě gemu, který si každý spustí u sebe.

## Ruby Warrior je super, ale ne pro každého

Některé workshopy vedle TryRuby pracují i se hrou [Ruby Warrior](https://www.bloc.io/ruby-warrior), což je takový drsnější [Robot Karel](http://cs.wikipedia.org/wiki/Karel_%28programovac%C3%AD_jazyk%29). Cílem je provést rytíře přes hordu nepřátel až k východu.

Je to výborné cvičení pro algoritmizaci, ale s velice rychle rostoucí obtížností. Navíc mi připadá, že úlohy nejsou příliš dobré na pochopení principů jazyka, ale jsou spíše vedené ke strukturování kódu, což není pro Rails Girls úplně přínosné.

Pro pokročilejší programátorky a odhodlané bojovnice je to však skvělá výzva. Sice nám to nějakou dobu trvalo, ale probojovali jsme se až do páté úrovně.

<figure class="embed">
<blockquote class="twitter-tweet" lang="en">
Yep, that's it! I am a programmer! :) <a href="https://twitter.com/search?q=%23railsgirlsprg&amp;src=hash">#railsgirlsprg</a> <a href="http://t.co/i39hA1Gz3j">pic.twitter.com/i39hA1Gz3j</a>
<footer>
  <cite>Barbora Dušková (@chillipes) <a href="https://twitter.com/chillipes/statuses/467691303946682368">May 17, 2014</a></cite>
</footer>
</blockquote>
</figure>

## Dokumentace je dobrá, jen místy nepřehledná

Pro workshopy existuje společná příručka -- [Rails Girls Guides](http://guides.railsgirls.com/). Po obsahové stránce je vymyšlená dobře, vysvětluje co kam zkopírovat, ale současně dává prostor pro vlastní iniciativu a další zdroje.

Problémem se však překvapivě ukázalo být formátování, respektive jeho nedostatek. Příručka pracuje s určitou symbolikou, přesto jsme stále museli řešit která řádka má přijít do terminálu a která do kódu -- a zda před `<body>` nebo `</body>`, což občas vedlo ke kuriózním chybám. Svojí roli mohla sehrát i angličtina; přestože jazyková bariéra nebyla v našem případě zásadní problém, v cizojazyčném textu je jednodušší se ztratit.

Příručku bychom proto rádi přeložili a současně zlepšili její formátování. Osobně si myslím, že by pomohlo rozdělení na jednotlivé kroky, podobně jak to řeší [GitBook](https://www.gitbook.io/).

## Windows 8 mají problém JavaScriptem

Většina účastnic používá Windows, kde jsme vývojové prostředí řešili přes [RailsInstaller](http://railsinstaller.org/). Na Windows 8 nás však čekalo nemilé překvapení, aplikace havarovala na [nedostupnosti interpreta pro JavaScript](http://stackoverflow.com/questions/12520456/execjsruntimeerror-on-windows-trying-to-follow-rubytutorial). *Korektní* řešení je oprava ExecJS -- na kterou [čekáme už dva roky](https://github.com/sstephenson/execjs/issues/81). *Jednoduché* řešení je odstranit ze souboru `app/assets/application.js` řádku `//= require_tree .`

Případně nainstalovat [Node.js](http://www.nodejs.org/).

## Heroku není na soubory

V neděli jsme aplikaci nasazovali na [Heroku](https://www.heroku.com/), což s sebou nese ne zcela zřejmý problém: aplikace zahrnuje ukládání obrázků. A ukládání souborů v cloudových službách není jednoduchá věc -- instance aplikace jsou dočasné a všechny lokální soubory se dříve nebo později ztratí. Oficiální doporučení zní: [ukládejte soubory na Amazon S3](https://devcenter.heroku.com/articles/s3) -- což je pro nás na workshopu nepoužitelné.

Vojta Hýža s Karlem Minaříkem proto vytvořili [gem carrierwave-blob](https://gist.github.com/karmi/f1dc8c75d67b92b23a55), který ukládá soubory do databáze. Není to sice efektivní, ale funguje to.

# Rails Girls bez Rails

Nepřekvapilo by mě, kdyby účastnice měly po víkendu hlavu nafouklou jako balon -- během cca 20 hodin jsme probrali témata, která většina vývojářů vstřebává roky. Jenže taková je koncepce Rails Girls: od všeho trochu. Jak už jsem zmínil, cílem není pochopit vše do hloubky, ale poznat základní principy.

Svojí roli hraje i určitý „wow efekt“ -- za víkend si vytvořit vlastní aplikaci bez předchozích zkušeností. Je to mnohem efektnější a užitečnější než vytvořit jen aplikaci pro terminál nebo jen statickou stránku. Mám však obavy, že tento přístup může být polarizující -- někdo se zalekne nad množstvím a šířkou témat, případně utvrdí v přesvědčení, že programování je jenom pro programátory.

Užší záběr by však měl řešit separátní workshop.

Třeba [Czechitas](http://www.czechitas.cz/), které pořádají Rails Girls na Moravě, berou na separátních srazech algoritmizaci od základu v prostředí [Scratch](http://scratch.mit.edu/).

Nebo to můžeme vzít přes webové technologie. Dobrým příkladem je [Mozilla Webmaker](https://webmaker.org/), což je sada nástrojů a postupů jak začít tvořit na webu pro web. Koneckonců jsem si všiml, že účastnice zaujala možnost upravit existující stránky pomocí inspektoru, tedy standardního nástroje v každém prohlížeči -- to je zajímavá motivace pro pochopení webových technologií. Sám jsem se mnoho naučil psaním jednoduchých userscriptů pro [Greasemonkey](http://en.wikipedia.org/wiki/Greasemonkey), které upravovaly existující služby -- v praxi to může být přínosnější, než schopnost napsat si aplikaci vlastní.

Možností je celá řada, proto pevně doufám že začátečnické workshopy v ČR nezůstanou jen doménou Rails Girls -- nejenom Rails a nejenom pro holky. Ale třeba jen o takových akcích nevím.

---

To však není kritika Rails Girls -- je to iniciativa, která už si vybudovala jméno a která rozhodně má smysl.

Chtěl bych poděkovat organizátorům -- [Karlovi](https://twitter.com/karmiq), [Láďovi](https://twitter.com/abtris), [Elišce](https://twitter.com/eliskah) a [Vojtovi](https://twitter.com/vhyza) -- že akci uspořádali a že jsem měl možnost být součástí téhle výborné iniciativy. Těším se na další ročník.

<figure class="embed">
<blockquote class="twitter-tweet">
Díky hlavně všem koučům co věnovali svůj čas na tuhle skvělou akci. <a href="https://twitter.com/search?q=%23railsgirlsprg&amp;src=hash">#railsgirlsprg</a> <a href="http://t.co/dQnVnp2DWu">pic.twitter.com/dQnVnp2DWu</a>

<footer>
  <cite>Rails Girls Prague (@RailsGirlsPRG) <a href="https://twitter.com/RailsGirlsPRG/statuses/468074979607986176">May 18, 2014</a></cite>
</footer>
</blockquote>
</figure>
