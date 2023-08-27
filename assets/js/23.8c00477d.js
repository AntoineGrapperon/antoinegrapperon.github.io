(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{296:function(e,r,t){"use strict";t.r(r);var s=t(14),o=Object(s.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"qfield-cartographier-sur-la-route"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qfield-cartographier-sur-la-route"}},[e._v("#")]),e._v(" QField - cartographier sur la route")]),e._v(" "),r("p",[e._v("Pour faire court, ma petite amie a récemment commencé une formation pour devenir arboriculteur. En plus des exigences physiques du travail, elle devait également apprendre beaucoup de choses sur les arbres : reconnaître leur espèce (en été et en hiver), leurs blessures, comment en prendre soin, etc. Nous vivons à Montréal, et ce "),r("a",{attrs:{href:"https://quebio.ca/fr/arbresmtl",target:"_blank",rel:"noopener noreferrer"}},[e._v("site web"),r("OutboundLink")],1),e._v(" s'est avéré très utile pour apprendre à identifier les espèces d'arbres : il montre une carte avec chaque arbre géré publiquement sur l'île de Montréal, et leur espèce. Nous allions faire de longues promenades pour essayer d'identifier les arbres.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/quebio_trees.PNG",alt:"Quebio"}}),e._v(" "),r("em",[e._v("Sans surprise: au Canada les érables sont majoritaires!")])]),e._v(" "),r("p",[e._v("Au bout d'un moment, il est devenu évident que certaines informations sur les arbres étaient obsolètes, soit l'arbre avait été abattu, soit il manquait de nouveaux arbres, soit l'espèce signalée était incorrecte. Mais si vous regardez le site Quebio, vous verrez qu'il n'y a aucun moyen de proposer une modification ou une correction à la base de données, et nous avons rapidement été frustrés par cela.")]),e._v(" "),r("p",[e._v("Nous voulions créer notre propre base de données d'arbres pour Montréal, que nous pourrions modifier pendant nos promenades. J'étais déjà familier avec "),r("a",{attrs:{href:"https://www.qgis.org/en/site/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGIS"),r("OutboundLink")],1),e._v(", un système d'information géographique (SIG). La partie intéressante est qu'il est gratuit ! Mais il fonctionne sur ordinateur, pas sur smartphone et nous ne voulions pas apporter un ordinateur portable avec nous pendant nos promenades (au milieu de l'hiver à Montréal, il peut faire jusqu'à -30°C : pas question de s'arrêter et d'attendre que l'ordinateur démarre !). Après avoir fait quelques recherches, j'ai d2couvert "),r("a",{attrs:{href:"https://qfield.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QField"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("QField est une application pour téléphone qui offre une interface graphique très simple à un système d'information géographique stocké dans le cloud (QField Cloud). Le "),r("a",{attrs:{href:"https://docs.qfield.org/get-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutoriel"),r("OutboundLink")],1),e._v(" est plutôt bien fait, donc je vais simplement le résumer ici :")]),e._v(" "),r("ul",[r("li",[e._v("créer un compte QFieldCloud")]),e._v(" "),r("li",[e._v("utiliser QGIS pour créer un projet SIG, créer les différentes fonctionnalités et couches dont vous avez besoin et les styliser")]),e._v(" "),r("li",[e._v("publier votre projet sur QFieldCloud")]),e._v(" "),r("li",[e._v("installer QField sur votre téléphone et vous connecter à votre compte")]),e._v(" "),r("li",[e._v("vous pouvez commencer à modifier vos données SIG en déplacement, mais n'oubliez pas de synchroniser vos données de votre téléphone vers le cloud !")]),e._v(" "),r("li",[e._v("point bonus, cela permet de versionner les modifications de données, ce qui nous permet de revenir en arrière dans le temps")])]),e._v(" "),r("p",[e._v("Toutes choses considérées, il nous a fallu une journée (6-8 heures) pour comprendre comment tout cela fonctionne, nous familiariser avec et commencer à l'utiliser. Notre projet est public et stocké "),r("a",{attrs:{href:"https://app.qfield.cloud/a/antoinegrapperon/ArbresMontreal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ici"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"alternatives-et-tarification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alternatives-et-tarification"}},[e._v("#")]),e._v(" Alternatives et tarification")]),e._v(" "),r("p",[e._v("Nous avons commencé à utiliser QField alors qu'il était encore en accès bêta, tout était gratuit, l'espace illimité... et nous en avons abusé. Maintenant que QField est en accès général, il y a une limite de 100 Mo pour chaque projet. On peut souscrire à un abonnement pour en avoir plus (nous avons actuellement plus de 3 Go de photographies géolocalisées d'arbres !). Et les applications commerciales doivent également souscrire. Nous n'en avons plus besoin mais ces détails sont importants à considérer et doivent être mis en comparaison avec d'autres offres plus traditionnelles :")]),e._v(" "),r("ul",[r("li",[e._v("ESRI (900 euros par an)")]),e._v(" "),r("li",[e._v("Mapbox (gratuit jusqu'à une certaine utilisation, puis augmentation abrupte avec l'utilisation, besoin d'écrire votre propre \"application d'édition de données\")")]),e._v(" "),r("li",[e._v("QGIS Cloud (plan gratuit puis 65 euros/mois + possible de payer pour plus de mémoire et de fonctionnalités)")])]),e._v(" "),r("h2",{attrs:{id:"cartographier-plus-que-des-arbres"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cartographier-plus-que-des-arbres"}},[e._v("#")]),e._v(" Cartographier plus que des arbres")]),e._v(" "),r("p",[e._v("Dans le passé, j'ai vu des villes avoir des difficulté avec la gestion des données géospatiales : leurs données sont souvent obsolètes et coûteuses à maintenir à jour. La plupart d'entre elles n'ont pas de moyens de collecte de données \"sur le terrain\", donc tout se fait au bureau après prise de photos sur le terrain, ou avec Google Earth/Google StreetView et essayer d'extraire des informations à partir de là. Il semble que QField pourrait être un moyen bon marché et rapide pour eux de tester sur le terrain des outils de collecte de données. Les résultats montreraient si les outils \"terrain\" peuvent permettre de réduire le coût de maintien des données et améliorer leur qualité. Ce serait une belle preuve de concept pour pousser pour un ensemble d'outils dédiés.")]),e._v(" "),r("p",[e._v("Parmi les données qui pourraient être intéressantes à collecter pour une ville :")]),e._v(" "),r("ul",[r("li",[e._v("les signaux de circulation et les informations en bordure de trottoir")]),e._v(" "),r("li",[e._v("les constructions et les réparations à effectuer")]),e._v(" "),r("li",[e._v("les positions du réseau")]),e._v(" "),r("li",[e._v("les arbres")]),e._v(" "),r("li",[e._v("etc")])])])}),[],!1,null,null,null);r.default=o.exports}}]);