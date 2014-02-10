---
layout: post
title:  "Decentralizovaná budoucnost sociálních médií (NMI14)"
date:   2014-02-10 10:00:00
---

_Upravený text z přednášky na [New Media Inspiration 2014](http://www.tuesday.cz/akce/new-media-inspiration-2014/). Pokud jste přednášku viděli, mám k tématu ještě [pár dodatků](#addendum)_

<section>
<section>

Pravděpodobně jste zaznamenali, že Facebook letos 4. února oslavil deset let existence. Za tu dobu se ze seznamky pro vysokoškoláky stala globální komunikační platforma kterou používá [více jak sedmina lidstva](http://investor.fb.com/releasedetail.cfm?ReleaseID=821954).

Náš vztah s Facebookem je… komplikovaný. Je skvělé mít jedno místo, kde můžeme mít kontakt se všemi přáteli, ale nelíbí se nám, jak Facebook samotný zasahuje do našeho soukromí a uzurpuje si kontrolu nad našimi daty.

Své o tom vypovídá i [evoluce soukromí na Facebooku](http://mattmckeon.com/facebook-privacy/). Od roku 2005 do roku 2010 se výchozí nastavení soukromí změnilo do té míry, že vlastně žádné soukromí nemáte. Jistě, jedná se o výchozí hodnoty které můžete změnit, ale některé informace, jako vaší fotku či co "lajkujete" si skrýt nemůžete.

<figure id="s7">
  <blockquote class="blockquote" lang="en">
  People have really gotten comfortable not only sharing more information and different kinds, but more openly and with more people. That social norm is just something that has evolved over time.
  <footer>
  <cite>Mark Zuckerberg, [Facebook's Zuckerberg Says The Age of Privacy is Over](http://readwrite.com/2010/01/09/facebooks_zuckerberg_says_the_age_of_privacy_is_ov)</cite>
  </footer>
  </blockquote>
</figure>

Zuckerberg změny [vysvětloval](http://readwrite.com/2010/01/09/facebooks_zuckerberg_says_the_age_of_privacy_is_ov) tak, že blogování a „jiná média“ (jako Twitter), nás přivedly ke většímu sdílení informací s více lidmi. Údajně je to posun společenské normy. Tím však ve vší skromnosti opomíjí dopad samotného Facebooku – se stovkami milionů uživatelů má vaše jednání celospolečenský význam.

Je v tom skrytá agenda zavést lidstvo do Orwellovské dystopie?
Samozřejmě ne, v první řadě jde jen o peníze. Protože za dvacet let existence webu a řečí o demokratizaci médií slouží slavné sociální sítě primárně jako sofistikovaná platforma pro distribuci reklamy.

Trefně to vyjádřil matematik Jeff Hammerbacher:

<blockquote class="blockquote">
  Nejlepší mozky mé generace řeší, jak lidi donutit klikat na reklamy.
  <footer>
  <cite lang="en">Jeff Hammerbacher, [This Tech Bubble Is Different](http://www.businessweek.com/magazine/content/11_17/b4225060960537.htm)</cite>
  </footer>
</blockquote>

Dobrý způsob jak je přinutit je personalizovaná reklama. K tomu však potřebujete aby uživatelé o sobě sdíleli co nejvíce informací. A za to se pak mohou lépe spojit se svými oblíbenými značkami.

<blockquote class="twitter-tweet" lang="en">
<p>i love to wake up every morning and engage with my favorite <a href="https://twitter.com/search?q=%23brands&amp;src=hash">#brands</a> online!!!!!!!! fucccccck yeahhhhh!!!</p>&mdash; jon hendren (@fart) <a href="https://twitter.com/fart/statuses/429654902898315265">February 1, 2014</a>
</blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

A jestli je v něčem Facebook inovativní, je to právě vytěžování dat a distribuce reklamy.

Před sedmi lety uvedl [Facebook Beacon](http://en.wikipedia.org/wiki/Facebook_Beacon), který automaticky sdílel vaší aktivitu na různých stránkách. Po odporu veřejnosti funkci stáhnul a v roce 2010 jsme místo toho dostali [Instant Personalization](http://www.insidefacebook.com/2010/04/27/a-look-at-facebooks-three-instant-personalization-partners-yelp-pandora-docs-com/), což pro změnu spočívá v předávání vašich dat "vybraným partnerům."

</section>

<section>
# Federalizované sítě

Rok 2010 byl vůbec zajímavý. Byl vyhlášen oficiální [Den kdy skončíme s Facebookem](http://www.quitfacebookday.com/) (v době realizace se zavázalo asi 33000 lidí). A antifacebooková nálada ve společnosti vynesla do popředí [projekt Diaspora](https://diasporafoundation.org/).

## Diaspora

Čtyři studenti z New York University se rozhodli, že vytvoří otevřenou, decentralizovanou alternativu Facebooku. Neměli ještě ani řádku kódu, a přesto měli [profil v New York Times](http://www.nytimes.com/2010/05/12/nyregion/12about.html).

Namísto plánovaných 10000 dolarů se jim [na Kickstarteru](https://www.kickstarter.com/projects/mbs348/diaspora-the-personally-controlled-do-it-all-distr) podařilo získat 200000  a údajně přispěl i Mark Zuckerberg.

Jak Diaspora funguje?

Zvykli jsme si na centralizovaná sociální média.
Například máte tři profily na třech různých službách a každá služba je jasně ohraničené silo, ve kterém existují vaše data a prátelé.

<figure>
![Centralizovaná sociální média, schématicky naznačená jako oddělené bubliny](/img/nmi14/1centralized.png)
</figure>

Nemůžete – například – snadno přesunout svůj profil z Facebooku na Google+ (bez ztráty určitých informací).
Pokud chcete určitou službu využívat, musíte přistoupit na její pravidla.

Diaspora funguje jako federace. Vyberete si server, který se vám líbí nebo si spustíte vlastní. Tomu se říká "pod." Což ale neznamená, že můžete komunikovat pouze na daném serveru.

<figure>
![Federalizované sítě – servery, které mezi sebou mohou komunikovat](/img/nmi14/2federated.png)
</figure>

Ve federalizované službě můžete komunikovat s uživateli jiných serverů, bez ohledu kde se nacházejí.
Všichni používáme e-mail, který přesně takto funguje.
Diaspora tento koncept přenáší na sociální média.

Funkčně i vzhledem je Diaspora takový jednodušší Facebook. Svého času však třeba přinesla koncept organizace přátel do aspektů, kterými řídíte kdo vaše příspěvky uvidí. Google+ s funkcí kruhů byl [uveden až v roce 2011](http://raventools.com/blog/google-copies-diaspora/).

Tou dobou však už média Diasporu pomalu odepisovala. Antifacebooková revoluce se nekonala, Diaspora [nesplnila přehnaná očekávání](http://www.theverge.com/2012/10/8/3472588/diaspora-social-network-history).
Projekt také tragicky poznamenala [sebevražda jednoho z hlavních vývojářů](http://www.nytimes.com/2011/11/16/technology/ilya-zhitomirskiy-co-founder-of-social-network-dies-at-22.html).

## Friendica

V roce 2010 vznikl ještě jiný projekt, bez většího zájmu médií: [Friendica](http://friendica.com/).

Friendica není tak konzervativní jako Diaspora. Je extrémně konfigurovatelná, extrémně rozšiřitelná a… extrémně nepoužitelná.
Nicméně můžete si zapnout tlačítko Dislike a propojit se i s uživateli Diaspory.

Podle [statistiky z roku 2012](http://diekershoff.de/tobias/2012-11-27/friendica-the-network-as-of-today) bylo v síti 6200 veřejných profilů a přes 700 serverů.
To mimo jiné souvisí s tím, že zprovoznit si vlastní server je v případě Friendicy mnohem jednodušší, než u Diaspory.

Autor Friendicy v současnosti pracuje na pokračovateli, který nese název [Red Matrix](http://redmatrix.me/). Nebo Zot. Nepodařilo se mi jednoznačně určit co je co.
Nicméně vedlejším produktem vývoje je ohromné množství těchto obrázků, takže se máme ještě na co těšit.

[![Mark Zuckerberg + NSA = Not Got Zot.](/img/nmi14/zot.jpg)](https://zothub.com/photos/mike/image/f991a64fc9cf73677d640dff4d6a6ff8)

## Buddycloud

Ne všechny otevřené alternativy Facebooku musí být nepoužitelné, důkazem je [Buddycloud](http://buddycloud.com/).

Komunikace mezi servery probíhá prostřednictvím Jabberu (respektive [XMPP](http://en.wikipedia.org/wiki/XMPP)) a základním konceptem jsou kanály. Kanál může být váš osobní profil nebo i otevřená skupina.

Buddycloud je zajímavý protože staví na osvědčeném protokolu pro real-time komunikaci. Je tak vhodný třeba pro firemní nasazení, kde se Jabber dobře ujal.
</section>

* * *

<section>

Pojďme se bavit o Twitteru. Co je špatného na Twitteru? Všichni mají přece Twitter rádi!
Má jednoduché nastavení soukromí, reklamy nejsou tak vtíravé a nesnaží se nás různými algoritmy uzavřít do informační bubliny, jako Facebook.

Paul Graham šel tak daleko, že Twitter [označil za nový komunikační protokol](http://www.paulgraham.com/twitter.html), kde pouze nespecifikujete příjemce. V podstatě jej tak srovnává e-mailem nebo s hypertextem.

A v roce 2009, kdy jste měli na výběr desítky klientů (včetně tweetujících kytek) to tak skutečně vypadalo.

Ale věci šly v dalších letech z kopce, především pro vývojáře třetích stran, právě jejichž zásluhou se Twitter původně zviditelnil.

Twitter se totiž rozhodnul vydělávat na reklamě.
Což znamenalo převzít kontrolu nad daty a celým ekosystémem aplikací.[^twitter]

Situace vyvrcholila v roce 2012, kdy byla [oznámena nová verze aplikačního rozhraní](), ze které pro vývojáře vyplývala docela odlišná pravidla hry.
Předtím bylo možné získat většinu dat bez registrace (vzhledem k tomu, že většina tweetů je veřejných…), nyní jste nejenom museli podstoupit registrační proces, ale navíc vaše aplikace může mít jen omezený počet uživatelů.

Vývojáři tohle pochopitelně vnímali jako podraz. byl to jeden z důvodů, proč [vznikla platforma App.net](http://www.wired.com/gadgetlab/2013/08/the-great-app-net-mistake/), která slibovala „sociální real-time feed bez reklam“.

Ze začátku to vypadalo jako Twitter… Za 50 dolarů na rok. Čímž si App.net vysloužil označení jako "[Twitter pro technosnoby.](http://techcrunch.com/2012/08/17/ihave50dollars-is-an-app-net-for-people-with-50/)"

První aplikace byl mikroblog Alpha, což byl zdroj nepochopení.
[App.net](https://join.app.net/) totiž slouží jako aplikační platforma: je to vlastně úložiště dat zkombinované se sociálními funkcemi. Jak s ním budete zacházet záleží na vaší volbě aplikací.

Jsou zde aplikace pro [instant messaging](https://directory.app.net/app/238/whisper/), [kurvítko fotek](https://directory.app.net/app/203/sprinter/) nebo pro [správu souborů](https://directory.app.net/app/197/orbit-for-mac/).

Jako uživatelé máte centrální kontrolu nad všemi svými daty a nemusíte se neustále někde registrovat a hledat přátele, pokud chcete vyzkoušet novou aplikaci. Jako vývojáři máte aspoň minimální jistotu, že si vaše aplikace najde své uživatele a zároveň je vývoj mnohem jednodušší, protože se soustředíte na aplikaci samotnou.

Zájmy uživatelů, vývojářů i provozovatele jsou tak v souladu.
Myšlenky na kterých App.net stojí jsou dobré, ale stále je zde fatální vada: pokud App.net jednoho dne skončí, nebo se zpronevěří svým principům, úžasný ekosystém aplikací je vám k ničemu.

Řešením by bylo kdybyste si mohli svého provozovatele vybrat a nebo byste měli vlastní server.

# Aplikační platformy pro sociální média

## Tent

To třeba slibuje [Tent](https://tent.io/). Nejedná se o aplikaci, ale o nový protokol, který řeší podobnou funkcionalitu, jako App.net – decentralizovaně. Tent je ve vývoji, což je u protokolu problematické, specifikace se změní a vaše aplikace se rozbijí. Autoři proto ještě nedoporučují Tent používat pro produkční nasazení, nicméně už pro něj existují první aplikace.

Můžete si třeba vyzkoušet [službu Cupcake](https://cupcake.io/), která zároveň slouží jako referenční implementace. Opět je zde mikroblogovací klient, privátní zprávy a správa souborů.

Specifikace Tent by mohla být hotová ještě v tomto roce, takže uvidíme, co se z toho vyklube.

## trsst

Jiný postup zvolil [projekt Trsst](http://www.trsst.com/), který staví na formátu RSS. Přidává sociální funkce, šifrování a možnost mikroplateb přes kryptoměny.

RSS feedy používá většina z nás i pokud si to neuvědomujeme. Trsst by tak mohla být přirozená evoluce tohoto formátu.

* * *

Všechny úvahy nad federalizovanými sítěmi jsou fajn dokud jste doma v teple s rychlým připojením, ale co když se věci pokazí a situace je vážná? Dokonce tak vážná že vyrazíte do ulic [s pečivem na hlavě](http://knowyourmeme.com/memes/bread-helmet-man)?

V případě Arabského jara bývá často zdůrazňovaná [nezastupitelná role sociálních médií](http://www.fastcompany.com/1722492/how-social-media-accelerated-uprising-egypt). I pokud tato tvrzení akceptujete a myslíte si, že by sociální média mohla sloužit pro organizaci protestů a předávání informací, je zde stále jeden zásadní problém:

[![Provoz Internetu z/do Egypta mezi 27. a 28. lednem 2011. V 17.20 byl provoz náhle přerušen se všemi 80 poskytovateli připojení.](http://farm5.staticflickr.com/4097/5395495035_98541df2ce.jpg)](http://flic.kr/p/9dMjGt)

Pokud vláda odpojí Internet, odpojí vás od Twitteru. A federalizované sítě řeší problém jen částečně, protože mají stále centrální bod selhání.

# Distribuované sítě

![V distribuované síti se členové volně propojují mezi sebou bez centrálního serveru](/img/nmi14/3distributed.png)

Co potřebujete je distribuovaná síť. Data se replikují mezi členy sítě, takže je obtížné zastavit šíření informací.
Tak funguje například BitTorrent.

## twister

A tak funguje i [twister](http://twister.net.co/), což je distribuovaný mikroblog. Přestože existuje sotva pár měsíců, jedná se už o funkční náhradu Twitteru.

Zajímavá je i volba technologií; Twister se skládá ze tří propojených vrstev, které už se v praxi osvědčily u dobře známých distribuovaných systémů:[^twisterwp]

1. BitCoin – použitý je systém registrace a autentizace klientů. Uzly sítě si mohou jednou za 8 hodin „vytěžit“ privilegium poslat promovanou zprávu kterou uvidí celá síť.
2. [Distribuovaná hašovací tabulka](https://en.wikipedia.org/wiki/Distributed_hash_table) zde slouží pro ukládání sdílených zdrojů, například avatarů i krátkodobých informací, včetně nových zpráv.
3. BitTorrent pak řeší šíření samotných zpráv na bázi sdílení souborů, včetně dlouhodobých archivů.

* * *

Twister však stále počítá s tím, že máte funkční síťovou infrastrukturu, což může být stále luxus třeba v případě živelné katastrofy. Pokud nemáte infrastrukturu, musíte si jí vytvořit.

## qaul.net

Tím se zabývá například projekt [qaul.net](http://qaul.net/), který vytváří miniaturní sociální sítě na bázi mesh networkingu.

qaul.net se šíří jako virus.
Převezme kontrolu nad zařízením a vytvoří přístupový bod přes Wi-fi. Když se přes tento bod připojíte, stáhnete si software, který opět převezme kontrolu, začne nabízet připojení dalším členům sítě a tak dále.

Jakmile jste v síti, můžete chatovat, sdílet soubory a telefonovat. V rámci sítě, bez centrálního bodu.

A pokud nemáte ani elektřinu? Pak vám zbývá nejspíš jen holubí pošta.

[![Pojízdný holubník pro přepravu poštovních holubů za 1. světové války](/img/nmi14/bus-pigeon-loft.jpg)](http://commons.wikimedia.org/wiki/File:Bus_pigeon_loft.jpg)

</section>

<section>



</section>

</section>
# Addendum

## Další myšlenkové linie

## Na koho se nedostalo

[^twitter]: Což nebylo jediné východisko. Mnozí se zabývali [myšlenkou decentralizovaného Twitteru](http://scripting.com/stories/2008/01/16/aDecentralizedTwitter.html) i jako řešení problémů se škálováním. [Alex Payne popsal](https://al3x.net/2010/09/15/last-thing-about-twitter.html), že část zaměstnanců chtěla oddělit "twitter" jako médium od "Twitteru" jako společnosti. Twitter sám se mohl stát decentralizovanou platformou.

[^twisterwp]: Fungování twisteru podrobně popisuje [whitepaper](http://arxiv.org/abs/1312.7152).
