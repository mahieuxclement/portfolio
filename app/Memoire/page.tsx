import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Memoire() {return (
    <main className='min-h-screen flex-col bg-neutral-900'>
        <Navbar/>
        <div className='mt-24 mx-auto px-12 py-4'>
            <h1 className='mt-24 text-2xl font-extrabold'>en quoi utiliser NextJS permet de réaliser des sites Internet éco conçus ?</h1>
            <p  className='mt-24 text-base font-extrabold'>
                -Une caractéristique primordiale dans le déploiement de sites web éco-responsables et optimisés pour le SEO, puisqu’il permet, entre autres, de limiter les ressources nécessaires à votre site internet. <br/>
                -Il inclut des fonctionnalités d'optimisation automatique des images, comme la compression et la conversion au format WebP. Des images optimisées nécessitent moins de bande passante, ce qui peut améliorer la rapidité de chargement et réduire la consommation d'énergie pour les utilisateurs finaux. <br/>
                -La division du code (code splitting) est une technique utilisée pour charger uniquement le code nécessaire à l'affichage initial d'une page. Cela peut réduire le temps de chargement initial, économisant ainsi des ressources et de l'énergie. c'est l'utilisation des composants <br/>
                -Il intègre des fonctionnalités d'optimisation des performances, comme la gestion automatique du prefetching et la prise en charge du HTTP/2. Ces fonctionnalités peuvent améliorer la vitesse de chargement des pages et réduire la consommation d'énergie liée aux transferts de données.
            </p>
            <h1 className='mt-24 text-2xl font-extrabold'>pourquoi mon site Internet est éco conçon ?</h1>
            <p  className='mt-24 text-base font-extrabold'>
                -utilisation des composants pour ne pas a charger tout le site web a chaque action de l'utilisateur' <br/>
                -utilisation des balises Images qui sont bien plus optiùisé que les basiles HTML img. <br/>
                -backgroud en noir piur ne pas trop consomé d'energie(le blanc consome plus d'energie que le noir) <br/>
                -ergonomie simple, j'ai esayer de faire en sorte que tout le site est facilement comprenhesible afin que les utisiateur n'ai pas a clioquer sur 26 pages avant de trouver ce qu'ils souhaite.
            </p>
        </div>
        <Footer/>
    </main>
);}
