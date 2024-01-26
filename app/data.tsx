const ProjetData = [
    {
        title:"portfolio",
        techno:["html", "css", "nodejs"],
        content:`creation de mon portefolio vous etes acctuellement dessu
            j'ai utiliser des base de html css et j'ai ensuite utiliser du nextjs pour gere les differtes elements du portefolio. Avec Nextjs j'ai 
            donc du aussi utiliser du  Typescript pour faire quelques fonction afin d'optimiser mes composents.`
    },
    {
        title:"premier portfolio",
        techno:["html", "css", "nodejs"],
        content:`mon premier portefolio etait une one page simple faite uniquement en html css.`
    },
    {
        title:"reservation de firewall",
        techno:["js", "sql", "python", "html","reseau"],
        content:`lors de mon stage de fin de 2eme
            année j'ai du réaliser pour mon entreprise un systeme de reservation. La problèmatique était que tout le monde travaillait sur des firewall
            mais il etait possible que deux personne veuille travailler sur un meme firewall, ils avait alors une page lisatnt les firewall avec differetes statistiques les concernant,
            et ils avait aussi un kanban d'utilisation des firewall(ou la plus pârt du temps les empoyer oubliaient d'indiquer sur quel firewall ils travaillaient)
            j'ai donc trouvé la solution de cree un bouton permetant de selectioner les firewall sur le quel l'emplouer veut travailler directeme,t sur leurs
            page web. En reservatn un firewall il etait indiqué pour tout le monde avec un chagement de couleur pour la ligne correspondant dans le tableau 
            c'est a ce moment ou j'affiche qui a reservé le firewall grace au certificat de l'employer(j'ai donc fait un authentification par certificat)
            pour relier tout ça le front etait principalement du Java Script et le back du Python et effin une base de donnée en sqlite. Point important 
            dans tout ce procesus de cration et pour le maintient de l'application toutes les cations des utilisateurs sont loger.`
    },
    {
        title:"telemetry",
        techno:["elasticsearch", "bash"],
        content:`Pour un deuxieme projet en entreprise j'ai du implementer un serveur elasticsearch.
            On m'a donné comme data un csv(generer tout les jours) celui ci contient toutes les impormations que les firewall retourne, il y a donc beaucoup de donnée
            a tréter et sans visuel c'est compliqué de ce rendre compte si il y a un problème avec un firewall(il y a plus de 1 000 000 lignes chaque jours)
            c'est donc pour ça qu'on ma demandé de cree un visuel ppur ces data(j'ai utiliser kibana de elasticsearch). Pour que les visuels soit biens
            actualisé et su'il soit possible de les utiliser j'ai du cree des script bash permetant, l'insertion des données depuis le csv dans elasticsearch(logstash)
            la suppresion des données trop vielle(anterieur a une date) supression des donnée d'une verssion de firewall non voulue, sauvegarder les donnée mrésentes
            dans elasticsearch et les viseauls de kibana.`
    }
]

const CompetancesData = [
    {
        img_path:"/python.png",
        title:"Python",
        note:5,
        bgColor:"bg-teal-400"
    },
    {
        img_path:"/sql.png",
        title:"sql",
        note:4,
        bgColor:"bg-purple-500"
    },
    {
        img_path:"/psql.png",
        title:"psql",
        note:4,
        bgColor:"bg-violet-500"
    },
    {
        img_path:"/java.png",
        title:"java",
        note:4,
        bgColor:"bg-yellow-500"
    },
    {
        img_path:"/js.png",
        title:"java script",
        note:4,
        bgColor:"bg-yellow-200"
    },
    {
        img_path:"/ts.png",
        title:"typescrypt",
        note:4,
        bgColor:"bg-green-400"
    },
    {
        img_path:"/html.png",
        title:"html",
        note:3,
        bgColor:"bg-rose-800"
    },
    {
        img_path:"/css.png",
        title:"css",
        note:2,
        bgColor:"bg-emerald-400"
    },
    {
        img_path:"/mongodb.png",
        title:"mongodb",
        note:2,
        bgColor:"bg-lime-800"
    },
    {
        img_path:"/bash.png",
        title:"bash",
        note:3,
        bgColor:"bg-indigo-500"
    },
    {
        img_path:"/react.png",
        title:"react",
        note:3,
        bgColor:"bg-slate-900"
    },
    {
        img_path:"/git.png",
        title:"git",
        note:3,
        bgColor:"bg-orange-100"
    },
    {
        img_path:"/php.png",
        title:"php",
        note:3,
        bgColor:"bg-purple-950"
    },
    {
        img_path:"/angular.png",
        title:"angular",
        note:3,
        bgColor:"bg-rose-950"
    },
    {
        img_path:"/reseau.png",
        title:"reseau",
        note:2,
        bgColor:"bg-purple-50"
    },
    {
        img_path:"/docker.png",
        title:"docker",
        note:1,
        bgColor:"bg-blue-200"
    },
]

const ExperienceData = [
    {
        title: "Stage 2eme année",
        content: `Durant une durée de 10 semaines, j'ai pu intégrer une entreprise et j'ai pu découvrir le fonctionnement de celle-ci.
        J'étais en charge d'améliorer leur application web pour leur permettre d'effectuer des réservations de machines virtuelles.
        J'ai donc découvert comment fonctionne une journée en tant que développeur comment gérer l'intégration de mon travail dans un projet existant
        Participer à des réunions, mettre mon code en revue et savoir appliquer les remarques qui ont été fait.`
    },
    {
        title: "Alternace",
        content: `Mon alternace ce déroule chez Stormshield suite a mon stagemon experience porfetionel est renforcé depuis que je suie en alternace j'ai aussi
        pu renforcer mes connaisances, améliorer mon approche sur des taches qui m'etais demandé(c'est plus facile pour moi d'evaluer la difficulté
        des taches qu'on me donne ou le temps qu'il me faudra pour réaliser une tache)`
    },
    {
        title: "Resoration",
        content: `Lors de l'année 2022, afin de financer partiellement mes études, j'ai travaillé en tant que serveur dans la restauration, durant les week-ends et les vacances.
        Cette expérience m'a permis de développer ma relation avec les clients, à apprendre à gérer le mécontentement 
        de ceux-ci tout en restant courtois et calme. Ce travail m'a permis de développer ma polyvalence car j'ai dû remplacer des collègues 
        aux pieds levés à un autre poste que le mien (bar, plonge...).`
    },
    {
        title: "Caserne de Pompier",
        content: `J'ai pu effectuer un stage dans la caserne de pompiers située à Somain (59 Nord).
        J'ai pu apprendre les premiers secours ainsi que le métier de pompier volontaire.
        Cette expérience de quelques jours a été très enrichissante, j'ai pu découvrir un métier où porter secours à autrui, est
        une chose très important  et cela nécessite un engagement très important.
        J'ai pu m'entraîner avec les pompiers, exercices physiques (footing, sports collectifs, musculation).
        J'ai également découvert l'organisation d'une caserne, organisation humaine avec les emplois du temps, les repas, les entraînements
        mais également la gestion des différents véhicules; Véhicules de soins (ambulances), Véhicules basiques, Véhicules particuliers possédant des outils spéciaux ( découpe du métal, accéder aux endroits en hauteur, citernes.)`
    }
]

const NavLinks = [
    {
        href: "/Projets",
        title: "Projets"
    },
    {
        href: "/Competances",
        title: "Compétances"
    },
    {
        href: "/Experiences",
        title: "Experiences"
    },
    {
        href: "/Memoire",
        title: "Memoire"
    }
]

export {ProjetData, ExperienceData, CompetancesData, NavLinks};