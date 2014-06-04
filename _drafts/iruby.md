---
layout: post
title: "IRuby: IPython naRuby"
assets: /assets/2014-06-iruby
subtitle: Jak jsem se naučil nedělat si starosti a mít rád notebook
dependencies: |
  <script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
---

<i>Text vychází z přednášky na [květnovém Ruby srazu](http://pojd.me/3hg) v Praze. Pokud jste tam byli, nebo vás nezajímá historický exkurz, přeskočte rovnou k části [Jak na to](#howto).</i>

# tl;dr

* Je otrava pracovat s kódem ve slidech.
* Řadu problémů [řeší notebook](#notebook).
* IPython [není jen pro Python](#ipython).
* Ruby v IPythonu [řeší IRuby](#iruby).
* S notebooky se [dá přednášet](#slidemode).

# Průšvih se slidy

Od loňského roku jsem začal na [Fakultě informačních technologií ČVUT](https://fit.cvut.cz/) učit programování v Ruby (předmět [MI-RUB](http://bk.fit.cvut.cz/cz/predmety/00/00/00/00/00/00/01/47/77/p1477706.html)). Jedna z věcí která mě na přednáškách nebavila, je příprava materiálů. Je to smutné, ale přednášky o programování nabízí málo prostoru pro kreativitu, dříve nebo později dojde na ukázky kódu.

<figure class="full">
![]({{page.assets}}/slide.png)
</figure>

Prezentace pak slouží jednak jako vodítko pro přednášející, jednak jako reference pro studenty.^[1] Takže sáhneme po nějakém „slideware“ typu PowerPoint nebo raději po LaTeXu, který se alespoň postará o obarvení kódu. Progresivnější přednášející si připraví prezentaci v prohlížeči třeba s [Reveal.js], ještě lépe psanou v Markdown -- třeba s [Remark.js](http://remarkjs.com/).

^[1]: V ideálním případě by vedle prezentace existoval ještě samostatně zpracovaný handout s podrobnostmi... Ale kdo se s tím má připravovat?

Při učení se nového jazyka (a programování vůbec) mi připadá důležitá fáze experimentování, možnost spustit existující kód, upravit jej, pozorovat změnu chování, rozbít jej, zjistit proč to nefunguje atp. Statické slidy s ukázkami kódu od experimentování spíše odrazují; pokud si chci ukázky sám vyzkoušet nebo předvést jejich variaci, kód musím postupně zkopírovat do samostatného souboru nebo interpreta jazyka (například [<acronym title="Interactive Ruby Shell">IRB</acronym>](http://en.wikipedia.org/wiki/Interactive_Ruby_Shell)) -- „ideálně“ je kód přes několik slidů s vnořenými bloky. V případě MI-RUB udržujeme celistvé ukázky kódu stranou, což je zase více práce (nemluvě o porušení <acronym title="Don't Repeat Yourself" lang="en">DRY</acronym>).

# REPL FTW!

Když jsem přemýšlel nad těmito nedostatky přednášek, napadlo mě, zda by se řešení nemohlo skrývat v REPL -- [Read--eval--print--loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop), tedy interaktivní shell pro jazyk, jako je již zmíněný IRB pro Ruby. Kouzlo REPL spočívá ve velice krátké smyčce mezi vstupem a zpětnou vazbou: napíšu řádku kódu a vidím výsledek -- nebo chybu. Je to mnohem přístupnější než tradiční práce s textovým editorem nebo IDE, kde jsou fáze *psaní kódu* a *spouštění kódu* striktně oddělené. Velice pěkně toho využívá stránka [TryRuby](http://tryruby.org/), která spojuje lineární výklad s experimentováním v REPL pro výuku jazyka.

Některé programovací jazyky a prostředí pracují používají REPL jako primární způsob interakce. Na SNM jsme to úspěšně použili pro [analýzy v jazyce R](https://medium.com/studia-novych-medii/doctor-who-ve-sparech-text-miningu-6908584ddb21) -- [RStudio IDE](http://www.rstudio.com/) funguje především jako velký REPL s pokročilou historií a náhledem na data. Naše analýzy v R však většinou byly jednoduché dávkové skripty pro které je tento způsob práce naprosto ideální.

Pro účely výuky má však REPL řadu nevýhod. Není úplně jednoduché vrátit se zpět a změnit předchozí definici: musím si jí najít v historii, upravit a znovu spustit. Velký problém je i reprodukovatelnost: schválně, jak si v IRB uložím do souboru to, co jsem napsal? Že jsem měl použít [Pry](http://pryrepl.org/)? Nicméně výsledkem bude stále jen neokomentovaný textový soubor s mými vstupy, který můžu spustit jako celek a nebo řádku po řádce. S přípravou materiálů to příliš nepomůže.

Co bychom potřebovali je zkombinovat interaktivitu REPL s přenositelností prezentace nebo textového dokumentu. Dobrá zpráva je, že *řešení existuje* -- a matematici nemusí číst dál.

# Notebook je kamarád
{:#notebook}

Zdá se, že vědci -- matematici, fyzici a další lidé, kteří používají počítače pro seriózní počty -- tento problém vyřešili už před více jak dvaceti roky. V aplikacích pro symbolickou matematiku a vizualizace, jako je Maple nebo Mathematica, se pracuje s interaktivními dokumenty, tzv. <i>worksheety</i> nebo <i>notebooky</i>.

<figure>
[![Mathematica logistic bifurcation](//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mathematica_logistic_bifurcation.png/512px-Mathematica_logistic_bifurcation.png)](http://commons.wikimedia.org/wiki/File%3AMathematica_logistic_bifurcation.png)

<figcaption>
Notebook v aplikaci Wolfram Mathematica ([zdroj](http://commons.wikimedia.org/wiki/File%3AMathematica_logistic_bifurcation.png))
</figcaption>
</figure>

Notebook se skládá z jednotlivých buněk (<i>cells</i>); do buňky zapíšu kus kódu, který spustím -- výsledek se mi zobrazí pod buňkou. Funguje to podobně jako REPL -- ale se všemi výhodami textového dokumentu. Můžu změnit libovolný kus kódu a ten opět spustit: rozhodující není pořadí buněk v dokumentu, ale pořadí jejich spuštění.

Navíc v buňkách nemusí být jenom spustitelný kód -- mohou být i textové, ať už se jedná o zformátovaný text nebo nadpisy. Notebook se ukládá i s výsledky výpočtů, takže ho můžu sdílet dál a převést do jiného formátu -- nebo vytvořit [interaktivní prezentaci](http://reference.wolfram.com/mathematica/howto/CreateASlideShow.html). Skvělé na tom je, že mi stačí jediný kanonický dokument s textem, kódem i jeho výsledky, který můžu sdílet dál bez ztráty informací nebo interaktivity. A nepotřebuji dělat vědecké výpočty, jako je třeba vizualizace [Batmanovy křivky](http://www.wolframalpha.com/input/?i=bat-insignia), abych využil výhody, které mi notebook nabízí.

Maple i Mathematica jsou však proprietární aplikace -- a [docela](http://www.maplesoft.com/products/Maple/personal_edition/){: rel="nofollow"} [drahé](http://www.wolfram.com/mathematica/how-to-buy/industry-individuals.html){: rel="nofollow"}. Proto vznikly svobodné alternativy; například [Sage](http://www.sagemath.org/), který nabízí mimo jiné rozhraní pro notebook v prohlížeči [sagenb](http://nb.sagemath.org/).

Nicméně i Sage trpí jiným neduhem: je primárně dělaný pro práci v jednom konkrétním jazyce a tím je Python, společně s ekosystémem knihoven a rozšíření specifických pro Sage. Celý systém je úzce provázaný, takže je nám pro výuku jiných jazyků k ničemu.

## IPython -- univerzální notebooky
{:#ipython}

Sage se zaměřuje na výpočty a vizualizace -- a jako prostředek používá Python. Paralelně však na bázi Pythonu vznikl jiný projekt: [IPython](http://ipython.org/); původním cílem bylo vytvořit lepší REPL a postupem času vznikl jeden z nejpropracovanějších interaktivních shellů vůbec, který mimo jiné umí [zobrazovat vizualizace](http://ipython.org/ipython-doc/stable/interactive/qtconsole.html). Ale zatímco Sage od základu nabízí vše „all inclusive,“ IPython je čistý Python s podporou pro jiné formy výstupu. Podobně jako Sage také nabízí rozhraní pro práci s notebookem v prohlížeči -- [IPython Notebook](http://ipython.org/notebook.html).

Notebook je v tomto případě jeden ze tří standardních <i>frontendů</i> -- vedle textového rozhraní a grafické Qt konzole. Frontend je striktně oddělený od výpočetního <i>jádra</i>, které přijímá zprávy z frontendu a vrací výsledky.

<figure class="full">
![]({{page.assets}}/ipython1.png)
<figcaption>
  *Notebook* běží jako webserver a komunikuje s výpočetním *jádrem*; zároveň běží jako klientská aplikace v prohlížeči která se serverem komunikuje přes websockets.
</figcaption>
</figure>

Oddělení jádra od frontendu vypadá na první pohled jako samolibý <i>overengineering</i>, ale je to zcela zásadní výhoda IPythonu. Komunikace s jádrem probíhá pomocí [ZeroMQ](http://zeromq.org/), takže jádro může běžet na jiném stroji, než frontend. Jader ale může být víc, IPython má nativní podporu pro [paralelní výpočty](http://ipython.org/ipython-doc/dev/parallel/parallel_intro.html). Můžete tak ovládat výpočetní cluster přímo z pohodlí notebooku.

<figure class="full">
![]({{page.assets}}/ipython2.png)
</figure>

Pro nás je ovšem zásadní fakt, že výpočetní jádro nemusí být vůbec napsané v Pythonu. Alternativní jádra mají stále výraznější podporu od tvůrců IPythonu. Velice dobré podpoře se těší [jádro pro Haskell](https://github.com/gibiansky/IHaskell) -- a [jádro pro jazyk Julia](https://github.com/JuliaLang/IJulia.jl) je dokonce oficiální součástí [projektu Julia](http://julialang.org/#Designed.for.Parallelism.and.Cloud.Computing). A ano, existuje i jádro pro Ruby, obligátně nazvané [IRuby](https://github.com/minad/iruby).

## Co je v notebooku

IPython notebook je soubor s příponou `.ipynb`. Je to obyčejný [JSON soubor](https://github.com/minad/iruby/blob/master/IRuby-Example.ipynb), ve kterém je jak obsah jednotlivých buňek, tak výstup spuštěného kódu. Přes příkaz `ipython notebook` (případně `iruby notebook`) si pak spustím v aktuálním adresáři webserver s editorem notebooku.

<figure class="full">
[![IRuby notebook]({{page.assets}}/iruby-nb1.png)]({{page.assets}}/iruby-nb1.png)
</figure>

Buňky v dokumentu mohou být různých typů -- kromě samotného kódu to můžou být i bloky textu psané v [Markdown](https://en.wikipedia.org/wiki/Markdown) nebo nadpisy různých úrovní (pro lepší strukturování). Vedle toho může nést buňka i různá metadata, což se hodí především pro tvorbu prezentací. Metadata buňky můžu editovat přes <i lang="en">Cell Toolbar</i>.

<figure id="cell-meta">
[![]({{page.assets}}/iruby-nb2.png))]({{page.assets}}/iruby-nb2.png))
</figure>

Buňky s kódem můžu spustit dvojhmatem <kbd>Ctrl+Enter</kbd>. Rozhodující přitom není pořadí buněk v dokumentu, ale pořadí jejich spuštění -- to indikují čísla nalevo od buňky. Definice si pamatuje aktuálně běžící jádro, takže pokud server mezitím restartuji nebo notebook otevřu na jiném počítači, je většinou dobré spustit všechny buňky v pořadí, v jakém jsou dokumentu. Tím, že buňky běží ve stejném kontextu, lze z nich postupně sestavit aplikace, které sahají přes několik tříd a metod.

<figure>
[![]({{page.assets}}/iruby-nb3.png))]({{page.assets}}/iruby-nb3.png))
<figcaption>
  Číslo vlevo od buňky označuje pořadí spuštění tak, jak si je pamatuje jádro.
</figcaption>
</figure>

Speciální funkce pro vizualizaci v noteboocích jsou nejlépe podporované v Pythonu (nepřekvapivě). IRuby se v tomto směru začíná zlepšovat, takže s využitím dalších gemů je možné i v notebooku vytvářet [elegantní grafy](http://nbviewer.ipython.org/github/minad/iruby/blob/master/IRuby-Example.ipynb#Gruff).

## K čemu se notebooky nehodí

Notebooky jsou ideální na ukázku ukázku syntaxe a základních konstrukcí jazyka, případně na demonstraci jednoduchých aplikací. Jsou však místa, na která se formát notebooku nehodí z principu.

U základních aplikací se často pracuje s přímým uživatelským vstupem z klávesnice (`gets` a podobně.) -- ten však bohužel neumíme v notebooku nasimulovat, takže příklady by s tím neměly pracovat.

Problém může být také u rozsáhlejších aplikací, například na frameworkem Rails -- notebook sice může načítat vnější závislosti, třeba webserver přímo z notebooku nejspíše nepoběží: jádro se zablokuje na vstupu ze socketu a nebude přijímat další příkazy. Leda by se spustilo v separátním vlákně... Na druhou stranu, zprovoznit konzoli Rails v IPython notebooku, to už je zajímavá výzva.

Velký problém mohou být i chyby v jádru jazyka. IRuby funguje tak, že nahrazuje některé standardní třídy (včetně třídy Kernel) vlastní implementací, aby se například výstupy metod dostaly zpět do notebooku. Občas se mi pak stává, že zkrátka není implementovaná nějaká metoda, se kterou se počítá. V takovém případě to chce klid a [hlásit chyby](https://github.com/minad/iruby/issues).

## Notebooky v praxi

Během prvního semestru jsem přepsal část přednášek z LaTeXu do formy notebooků a osvědčilo se mi to v několika směrech.

Příprava materiálů je mnohem pohodlnější. Mám jistotu, že ukázkový kód bude fungovat a bude vracet správný výstup. Navíc se v Markdownu pracuje mnohem lépe, než v LaTeXu.

Práce s výstupy je jednodušší. Když mám zdrojové materiály v LaTeXu, musím je upravit, vyexportovat do PDF (zpravidla ve více variantách) a ty uploadovat na náš [„serverový cluster pro podporu výuky“](https://edux.fit.cvut.cz/). Zdrojový notebook můžu verzovat ve veřejném repozitáři a kdokoliv si jej může zobrazit přes [nbviewer](http://nbviewer.ipython.org/) i pokud nemá nainstalovaný IPython. Pokud už dojde na prezentaci nebo jiný výstup, můžu jej zkonvertovat [jedním příkazem](http://ipython.org/ipython-doc/stable/notebook/nbconvert.html) do řady dalších formátů -- včetně LaTeXu.

A v neposlední řadě se vše rychleji upravuje a lépe se mi pracuje se zpětnou vazbou. Pokud si během přednášky někdo všimne chyby nebo padne zajímavý dotaz nebo nastane nějaká nejasnost, můžu chybu opravit, případně doplnit další kód, který problém lépe vysvětluje. Po přednášce pak změny uhladím a publikuju.

IRuby jsem si vyzkoušel i na [Rails Girls]({% post_url 2014-05-31-railsgirls %}), kde jsme si v notebooku ukazovali dědičnost.


// TODO
<figure>
<blockquote class="twitter-tweet tw-align-center">
<footer>
</footer>
</blockquote>
</figure>

Nicméně já s IPythonem víceméně ještě začínám. Například Eric Matthes [používá IPython pro úvod do programování](http://peak5390.wordpress.com/2013/09/22/how-ipython-notebook-and-github-have-changed-the-way-i-teach-python/) a C. T. Brown s ním [učí evoluční biologii](http://ivory.idyll.org/blog/teaching-with-ipynb-2.html).

***

# Jak na to
{: #howto}

## IPython a IRuby

* Zprovozněte IPython Notebook alespoň verze 1.2 (aktuální je 2.1) -- viz [oficiální dokumentace](http://ipython.org/install.html)
* Pro instalaci gemu je nutné mít správnou verzi knihovny ZeroMQ (alespoň 3.2) pro gem [ffi-rzmq](http://zeromq.org/bindings:ruby-ffi)
  * Pod Debianem a Ubuntu buď balíček `libzmq3-dev` (pro kompilaci) nebo `ruby-ffi-rzmq` s `libzmq3`.
  * Pod Windows (netestoval jsem) bude nutné nainstalovat [ZeroMQ](http://zeromq.org/distro:microsoft-windows)
* Gem nainstalovat přes `gem install iruby`

Server se spouští příkazem `iruby notebook` v adresáři s notebooky. Chová se stejně jako příkaz `ipython`, ale pracuje se zcela izolovaným [adresářem pro profily](http://ipython.org/ipython-doc/dev/config/intro.html).

## Prezentace s notebookem

Pro vytváření prezentací používám výše zmíněná [metadata u buněk](#cell-meta). Buňce nastavím příslušné chování (-/Slide/Subslide/Fragment/Skip/Notes) a podle kterého se vygeneruje výsledná prezentace. Tím pádem mohu některé buňky z prezentace zcela vynechat a některé použít jako poznámky přednášejícího -- názorně je to ukázané [v tomto článku](http://www.damian.oquanta.info/posts/make-your-slides-with-ipython.html). Zkonvertovaný notebook pak bude používat [Reveal.js](http://lab.hakim.se/reveal-js/).

To má však jeden zásadní háček: vygenerovaná prezentace obsahuje opět jenom statické ukázky kódu, tím pádem celá anabáze za lepším přednášením ztrácí smysl. Editor notebooků je jenom JavaScript, HTML a CSS, takže není problém jej rozšířit o další funkce. K tomu existuje celý [repozitář notebook-extensions](https://github.com/ipython-contrib/IPython-notebook-extensions/wiki)konkrétně rozšíření [slidemode](https://github.com/ipython-contrib/IPython-notebook-extensions/tree/master/slidemode), které umožňuje editor notebooku přepnout do režimu prezentace. Ta se potom chová podobně jako vyexportovaná prezentace (používá stejná metadata) ale všechny buňky je možné upravovat a spouštět.

<figure class="full">
[![]({{page.assets}}/iruby-slidemode.png))]({{page.assets}}/iruby-slidemode.png))
<figcaption>
  Slidemode v prohlížeči
</figcaption>
</figure>

Systém rozšíření se však v IPythonu 2 změnil, takže současná rozšíření fungují zřejmě jinak. V mezičase nabízím [svojí verzi slidemode](https://github.com/jnv/IPython-notebook-extensions) pro IPython 1.2.1, kompatibilní s profilem IRuby.

Třeba se časem dočkáme [i oficiální podpory](https://github.com/ipython/ipython/issues/1580).

# Další zdroje
{:#refs}

## Jiné nástroje a postupy

* [repl.it](http://repl.it/) řeší REPL přímo v prohlížeči -- interpret jazyka je zkompilovaný pomocí [Emscripten](http://emscripten.org/) do JavaScriptu.
* Pro jazyk R existuje [R Markdown](http://rmarkdown.rstudio.com/), standardní Markdown dokumenty, kde se bloky kódu automaticky spustí. Z takových dokumentů je možné i [generovat prezentace](https://support.rstudio.com/hc/en-us/articles/200486468-Authoring-R-Presentations).
* [GitBook](https://www.gitbook.io/) slouží primárně pro psaní interaktivních knih, ale také umožňuje vložit interaktivní kusy kódu -- v současnosti je podporovaný JavaScript, ale podle autorů je [plánovaná podpora Ruby i Pythonu](https://github.com/GitbookIO/gitbook#exercises).
* Zajímavé je využití notebooků pro ukázku API. [Projekt RAML](http://raml.org/) pro popis REST API nabízí [API Notebook](https://api-notebook.anypoint.mulesoft.com/), což je spíše obecný notebook pro JavaScript s knihovnou pro import RAML.

## Jiný přístup k notebooku

* [Emacs IPython Notebook](http://tkf.github.io/emacs-ipython-notebook/) přidává práci s IPython Notebookem přímo do editoru.
* Obdobný plugin [existuje i pro Sublime Text](https://github.com/maximsch2/SublimeIPythonNotebook).
* Naopak pro editor v prohlížeči je možné použít rozšíření [IPython Vimception](https://github.com/ivanov/ipython-vimception), které simuluje chování Vimu.

## O IPythonu

* Fernando Perez, autor IPythonu, sepsal zajímavou [historickou perspektivu o IPython Notebook](http://blog.fperez.org/2012/01/ipython-notebook-historical.html) -- jaký je vztah k projektu Sage a co všechno umožnila zvolená architektura IPythonu.
* Andrew Gibiansky popsal velice podrobně [co zahrnuje vytvoření jádra pro IPython](http://andrew.gibiansky.com/blog/ipython/ipython-kernels/).
* Eric Matthes popsal jak [IPython a GitHub změnili jeho způsob výuky programování](http://peak5390.wordpress.com/2013/09/22/how-ipython-notebook-and-github-have-changed-the-way-i-teach-python/) (k lepšímu).
* C. Titus Brown popisuje svou [zkušenost s IPythonem pro výuku evoluční biologie](http://ivory.idyll.org/blog/teaching-with-ipynb-2.html) a shrnuje výhody a rizika tohoto přístupu.
