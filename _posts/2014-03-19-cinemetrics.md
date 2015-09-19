---
layout: post
title:  "Muži, kteří nenávidí filmy"
subtitle: "Vizualizace filmů na tři způsoby"
category: StuNoMe
date:   2014-03-19 19:30:00
assets: /assets/2014-03-cinemetrics
dependencies: |
  <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.4.2/d3.min.js" charset="utf-8"></script>
  <script src="/assets/2014-03-cinemetrics/cinemetrics.js" charset="utf-8"></script>
---

V závěru Digital Humanities jsme opustili [text]({% post_url 2014-02-28-voyant %}) i [grafy](https://medium.com/studia-novych-medii/e12094e3565) a pustili se do zkoumání pixelů. Vzorem nám nebyl opět nikdo menší než Lev Manovič, který se v rámci kulturní analýzy zabývá zejména [zkoumáním obrazového materiálu](http://lab.softwarestudies.com/2011/06/mondrian-vs-rothko-footprints-and.html). Možná, že jsou Van Goghovy obrazy mistrovským dílem, ale pro nás je to jen shluk čísel vykazujících určité vlastnosti: světlost, dominantní odstín, poměr stran… Namísto kvality děl nás zajímá kvantita dat -- vlastnosti, které lze objektivně měřit a porovnávat. Svým způsobem je to leitmotiv Digital Humanities, který nejradikálněji vyjadřuje Franco Moretti jako [Distant Reading](http://www.nytimes.com/2011/06/26/books/review/the-mechanic-muse-what-is-distant-reading.html?pagewanted=all&_r=0){: lang="en" hreflang="en"}: proč bychom měli díla číst, když je může analyzovat stroj? Při množství informací a děl, které lidstvo každý den vyprodukuje, má tento přístup něco do sebe. Redukce informací však nemusí být cíl sám o sobě, analytický pohled "z dálky" nám může odhalit nové souvislosti.

# ImagePlot: Larsson v grafu

V naší analýze jsme se zaměřili na filmy. Nejprve jsme si je rozsekali na jednotlivé záběry pomocí aplikace Shotdetect, se kterou jsem se již důvěrně [seznámil při analýze zpravodajství]({% post_url 2014-02-23-ivasms %}#tv). Výsledné záběry jsme si zanesli na graf prostřednictvím ImagePlot, což je zajímavý "hack" nad aplikací ImageJ.

Software [ImageJ](http://imagej.nih.gov/ij/) byl původně vyvinutý pro analýzu radiologických snímků, jedná se však o dobře rozšiřitelnou platformu pro zkoumání obrazových dat. Manovič a spol. si jej proto vybrali jako základní nástroj pro své kulturní průzkumy a vytvořili makro [ImagePlot](http://lab.softwarestudies.com/p/imageplot.html). Ten vezme výsledek analýzy sady obrázků z ImageJ a zanese je do grafu; co budou jednotlivé osy grafu znamenat, to záleží na tom, co zkoumáte. Podrobný postup [popsal Pavel](http://www.abclinuxu.cz/blog/Svedek_Damdoguv/2014/1/vizualizace-filmu-trocha-jinak), včetně kreativních triků jak data pro ImagePlot poupravit.

Pro účely analýzy jsem si vybral rovnou dva filmy; konkrétně švédskou a americkou adaptaci románu Stiega Larssona <cite>Muži, kteří nenávidí ženy</cite>. Není v tom nějaká speciální záliba v předloze nebo v některé z adaptací, na americké verzi mě zdaleka nejvíc zaujal soundtrack od T. Reznora a A. Rosse (Nine Inch Nails). Je to však zajímavý materiál pro porovnání, protože oba filmy zpracovávají stejný příběh a přitom vznikly krátce po sobě (2009 a 2011).

Přes ImagePlot jsem zanesl záběry z filmů na graf ukazující závislost mezi časem a průměrnou světlostí snímku. Pro získání dat o záběrech jsem sáhl do výstupů ze Shotdetectu a [pomocí skriptu](https://gist.github.com/jnv/9558429) si je převedl na tabulku. Výsledná data jsem přidal jako další sloupce do výsledku analýzy z ImageJ; tímto způsobem se potom dá se stopáží filmu pracovat jako s dalším parametrem pro ImagePlot.

<figure>
<figcaption>
  Grafy záběrů z obou filmů; osa X představuje čas snímku ve filmu, osa Y jeho průměrnou hodnotu šedé ("světlost").
</figcaption>
<figure>
[![]({{page.assets}}/ip-swe-t.jpg)]({{page.assets}}/ip-swe.jpg)
<figcaption>
  Švédská adaptace <cite lang="sv">Män som hatar kvinnor</cite> (2009)
</figcaption>
</figure>

<figure>
[![]({{page.assets}}/ip-usa-t.jpg)]({{page.assets}}/ip-usa.jpg)
<figcaption>
  Americká adaptace <cite lang="en">The Girl With the Dragon Tattoo</cite> (2011)
</figcaption>
</figure>
</figure>

Co z toho? Obligátně lze konstatovat, že americká adaptace je celkově ponurejší, možná i vizuálně méně kontrastní. Zdá se však, že co do celkové barevnosti jsou si oba filmy podobné; že by se zde projevovala severská bezútěšnost polární zimy?

Hustota informací je v této vizualizaci až tak vysoká, že celek není dobře čitelný. Namísto jednotlivých střihů by stačilo snímky z filmu sesbírat s konstantním odstupem času, třeba každé 3 sekundy. Tím by se eliminovaly "clustery" střihů a graf by se zpřehlednil. Případně by reálné obrázky z filmů mohly zastoupit barevné body v dominantní barvě záběru (nepodařilo se mi však zjistit, jak k tomu ImagePlot donutit).

Pokud chci analyzovat pouze barevné složení a vyváženost, je pro mě časová informace zanedbatelná. Zajímavě vyšel graf porovnávající průměrnou světlost a směrodatnou odchylku (<i lang="en">standard deviation</i>).

<figure>
<figcaption>
Grafy záběrů ze švédské (první obr.) a americké adaptace (druhý obr.); osa X je průměrná hodnota šedé, osa Y je směrodatná odchylka šedé barvy.
</figcaption>
<figure>
[![]({{page.assets}}/swe-meanstdev-t.jpg)]({{page.assets}}/swe-meanstdev.jpg)
</figure>
<figure>
[![]({{page.assets}}/usa-meanstdev-t.jpg)]({{page.assets}}/usa-meanstdev.jpg)
</figure>
</figure>

Zde rozdíl mezi světelnou (ne)vyvážeností obou filmů bije do očí. Přitom však mají oba filmy jednu věc společnou: nejsvětlejší záběry tvoří detaily obrazovek či papírů. Málo scén se odehrává na denním světle a Fincher zřejmě více pracuje s barevným tónováním scén. Porovnání trochu zkresluje fakt, že řada snímků ve švédské adaptaci je jakoby zduplikovaných, zřejmě v důsledku častějších střihů či chybné automatické detekce záběrů.

# Vizuální stopa

Postupnou redukcí informací se můžeme od zdrojového materiálu vzdálit natolik, až nám zůstane jen pouhý záblesk původního díla. Některé projekty se zabývají právě vytvářením takového "perceptuálního hashe," otisku, který film jednoznačně identifikuje. Ten může říct něco o obsahu filmu, ale současně třeba umožní jeho porovnání s dalšími díly.

<section>
## Moviebarcode: Film jako čárový kód

Velice jednoduchý systém představuje [moviebarcode](http://moviebarcode.tumblr.com/). Snímky filmu se zredukují na jeden pixel široké proužky, čímž vznikne barevný "čárový kód." Ačkoli nenese mnoho informací o původním díle, jedná se o poměrně efektní a nenáročnou vizualizaci. K tomu existuje řada open-source implementací (já jsem použil [tento skript](https://github.com/mckelvin/moviebarcode) -- ano, má čínský manuál a ne, není v něm nic důležitého).

<figure class="full">
<figure>
[![]({{page.assets}}/bc-swe.png)]({{page.assets}}/bc-swe.png)
</figure>
<figure>
[![]({{page.assets}}/bc-usa.png)]({{page.assets}}/bc-usa.png)
</figure>
<figcaption>
  Moviebarcode pro švédskou (první obr.) a americkou (druhý obr.) adaptaci románu <cite>Muži, kteří nenávidí ženy</cite>.
</figcaption>
</figure>

Rozdílná světlost i barevná příbuznost obou filmů je zde už zcela zřejmá, ale to je asi tak vše, co se z tohoto kódu dá odvodit. V každém případě si budou žánrově bližší než třeba... <cite>Planeta Teror</cite> od Roberta Rodrigueze.

<figure class="full">
[![]({{page.assets}}/bc-planet.png)]({{page.assets}}/bc-planet.png)
<figcaption>
  Moviebarcode pro film <cite lang="en">Planet Terror</cite> (2007)
</figcaption>
</figure>

</section>
<section>
## Cinemetrics

Naopak o co nejkomplexnější pohled se pokusil Frederic Brodbeck v projektu [Cinemetrics](http://cinemetrics.fredericbrodbeck.de/).[^cinemetrics] Jeho cílem je zachytit většinu aspektů filmu -- kromě barev a střihů pracuje i s mírou pohybu, zvukovou stopou, rozdělením kapitol či sentimentem titulků. Část kódu pro sběr dat byla zveřejněna, byť bez dokumentace a s chybami; ty se mi [podařilo opravit](https://github.com/jnv/cinemetrics), takže jsem mohl provést analýzu.[^deric]

Samotný proces sběru dat je poměrně zdlouhavý; skládá se z minimálně deseti kroků a počítá s tím, že se data budou upravovat. Pro manuální výběr střihů se ze záběrů sestaví <i lang="en">slitscan</i>, kde se z každého snímku vezme proužek odpovídající jeho pořadí v průběhu záběru.

<figure>
[![]({{page.assets}}/slitscan.jpg)]({{page.assets}}/slitscan.jpg)
<figcaption>
Slitscan záběru z <cite lang="en">The Girl With the Dragon Tattoo</cite> (2011). Záběr začíná pohybem kamery zleva, ale pravá část obrazu pak zůstává nehybná.
</figcaption>
</figure>

Já jsem však záběry po automatickém zpracování netřídil, nebylo to zapotřebí. Sběr dat už neřeší samotnou vizualizaci; výstupem může být plakát či interaktivní animace -- k tomu autor vytvořil zajímavou aplikaci, kterou už však nezveřejnil. Tak jsem si jím navržený systém vizualizace implementoval s použitím knihovny [D3](http://d3js.org/).

<figure class="full" id="cm-viz">
<figcaption>
  Vizualizace pohybu a barev pro kapitoly obou adaptací románu <cite>Muži, kteří nenávidí ženy</cite>.
</figcaption>

<figure>
<figcaption>
  <cite lang="sv">Män som hatar kvinnor</cite> (2009)
</figcaption>
<div data-cinemetrics data-w="400" data-h="400" data-src="{{page.assets}}/cm-swe.json">
<i>Pro zobrazení animace navštivte [článek na původním webu]({{site.url}}{{page.url}}#cm-viz).</i>
<noscript>
...nebo si zapněte JavaScript.
</noscript>
![]({{page.assets}}/cm-swe.png){: width="400" height="400"}
</div>
</figure>

<figure>
<figcaption>
  <cite lang="en">The Girl With the Dragon Tattoo</cite> (2011)
</figcaption>
<div data-cinemetrics data-w="400" data-h="400" data-src="{{page.assets}}/cm-usa.json">
![]({{page.assets}}/cm-usa.png){: width="400" height="400"}
</div>
</figure>
</figure>

Vizualizace se snaží zachytit barevnost jednotlivých kapitol filmu (výseče kruhu) a celkovou míru pohybu v záběrech (znázorněný soustředným pohybem výsečí). V případě americké verze filmu jsem ještě vyjmul úvodní titulky, které se od zbytku filmu [výrazně liší](https://www.youtube.com/watch?v=sY4f_83t_rw).

Na první pohled se zdá, že švédská adaptace bude akčnější, avšak spíše se projevují nedostatky vizualizace v této formě; míra pohybu je spočítaná jako medián záběrů v celé kapitole, takže se ve výsledku akční záběry vykrátí s pomalými. Tempo americké verze je velice proměnlivé, proto pohled na celkovou kapitolu mnoho neodhalí. Zajímavější by bylo vizualizovat míru pohybu po záběrech, což je i myšlenkou Brodbeckovy původní implementace. To by však bylo celkově náročnější na zpracování dat i výsledné zobrazení.

Dalším nedostatkem této vizualizace je zobrazení barev: tím, že zůstávají staticky na místě, to budí dojem, jako by vnější a vnitřní barvy měly větší celkový podíl na záběrech. To není úmysl. Zadřel jsem si mozkové závity na středoškolské geometrii, ale problém se mi vyřešit nepodařilo. Každopádně [kód vizualizace je k dispozici](https://github.com/jnv/bitoff.cz/tree/gh-pages/assets/2014-03-cinemetrics/cinemetrics.js) (zralý na celkový přepis).

Upřímně, očekával jsem o něco vizuálně atraktivnější výsledek, ale zjevně jsem si vybral špatný žánr. Inu, není to <cite>Planeta Teror</cite>...

<figure class="full">
<figcaption>
  Vizualizace pro <cite lang="en">Planet Terror</cite> (2001)
</figcaption>
<div data-cinemetrics data-w="400" data-h="400" data-src="{{page.assets}}/cm-planet.json">
![]({{page.assets}}/cm-planet.png){: width="400" height="400"}
</div>
</figure>

[^cinemetrics]: Neplést s projektem [Cinemetrics.lv](http://cinemetrics.lv/), který se zabývá především manuálním sběrem dat o filmech.

[^deric]: Zde bych rád poděkoval Tomáši Bartoňovi, který mě na tento projekt upozornil a současně vyřešil část problémů s kódem a dokumentací.
</section>

Vizuální otisk filmu vypadá jako esteticky zajímavá, leč neužitečná hračka. Nicméně představuje jednu z cest jak uvažovat nad multimediálním dílem ve snaze postihnout co nejvíce jeho aspektů. Pro zkoumání určitého žánru nebo filmografie konkrétního režiséra to může být užitečný nástroj.

# Sen o robotickém divákovi

Strojová analýza filmů je podstatně tvrdší oříšek než analýza textu. Dat je mnohem více a užitečné informace se z nich získávají mnohem obtížněji. Své o tom ví i Netflix, který si pro svou [absurdně podrobnou klasifikaci filmů](http://www.theatlantic.com/technology/archive/2014/01/how-netflix-reverse-engineered-hollywood/282679/) najal armádu lidí, kteří filmy hodnotí v měřítkách jako je "míra romance" či "morálka postav." Výsledek však představuje jen další vstup pro algoritmy strojového učení, které vám doporučí filmy v žánrech typu "Kontroverzní vězeňské satiry z 90. let." Nejspíše je pouze otázka času, než nás ve sledování filmů také nahradí dostatečně sofistikované programy...
