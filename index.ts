// Demo les bases du langage TypeScript

/**
 * Exercice 1 : Types de base
 * Énoncé : Déclarez une variable de chaque type de base
 * de TypeScript : string, number, boolean, null et undefined.
 * Attribuez-leur des valeurs appropriées.
 */

// solution :
let nom: string = "John Doe";
let age: number = 30;
let estMajeur: boolean = true;
let nul: null = null;
let indefini: undefined = undefined;
// -------------------

/**
 * Exercice 2 : Tableaux
 * Énoncé : Créez un tableau de nombres et un tableau
 * de chaînes de caractères. Ajoutez-y quelques éléments.
 */

// solution :
let animaux: string[] = ["chien", "Chat"];
let pourcentages: number[] = [50, 60];
// -------------------

/**
 * Exercice 3 : Fonctions
 * Énoncé : Écrivez une fonction qui prend deux nombres en entrée
 * et retourne leur somme. Spécifiez les types des paramètres
 * et du type de retour.
 */

// solution :
function somme(a: number, b: number): number {
  return a + b;
}

let result = somme(10, 5);
// -----------------

/**
 * Exercice 4 : Interfaces
 * Énoncé : Définissez une interface Personne avec les propriétés
 * nom (string) et âge (number). Créez un objet de type Personne.
 */

// solution :
interface Personne {
  nom: string;
  age: number;
}
const PremierePersonne: Personne = {
  nom: "jeremie",
  age: 52,
};
console.log(`je suis ${PremierePersonne.nom},j'ai ${PremierePersonne.age}`);

// -------------------

/**
 * Exercice 5 : Classes
 * Énoncé : Créez une classe Voiture avec les propriétés
 * marque (string) et modèle (string).
 * Ajoutez une méthode afficherInfos() qui affiche
 * les informations de la voiture.
 */

// solution :
class Voiture {
  private marque: string;
  private modele: string;
  constructor(marque: string = "", modele: string = "") {
    this.marque = marque;
    this.modele = modele;
  }

  public getMarque() {
    return this.marque;
  }

  public setMarque(marque: string) {
    this.marque = marque;
  }

  public getModele() {
    return this.modele;
  }

  public setModele(modele: string) {
    this.modele = modele;
  }

  public afficherInfo() {
    console.log(
      `je suis une voiture de marque: ${this.marque} et de modèle: ${this.modele}`
    );
  }
}
let mavoiture: Voiture = new Voiture("toyota", "corolla");
console.log("---- initialisation de ma voiture");
mavoiture.afficherInfo();
console.log("---- modification de ma voiture");
mavoiture.setMarque("Mercedes");
mavoiture.setModele("207");
mavoiture.afficherInfo();

// -------------------

/**
 * Exercice 6 : Génériques
 * Énoncé : Écrivez une fonction générique qui prend
 * un tableau d'éléments de n'importe quel type et retourne
 * le premier élément.
 */

// solution :
function returnFirstElement<T>(params: T[]) {
  return params[0];
}

let fruits: string[] = ["banane", "mangue", "bonbon", "abricot"];
let prix: number[] = [20, 55, 78, 10, 68, 100];

let monFruit = returnFirstElement<string>(fruits);
let monPrix = returnFirstElement<number>(prix);
console.log("-----------------");
console.log(`Mon fruit est : ${monFruit}`);
console.log(`Mon prix est : ${monPrix}`);

// -------------------

/**
 * Exercice 7 : Types Union
 * Énoncé : Déclarez une variable qui peut être soit un nombre,
 * soit une chaîne de caractères.
 * Attribuez-lui une valeur de chaque type.
 */

// solution :
let password: string | number = "lol";
password = 2548;
// -------------------

/**
 * Exercice 8 : Enums
 * Énoncé : Créez un enum Couleur avec les valeurs Rouge, Vert et Bleu.
 * Utilisez l'enum pour définir la couleur d'une variable.
 */

// solution :

// -------------------

/**
 * Exercice 9 : Tuples
 * Énoncé : Créez un tuple qui représente les coordonnées (x, y)
 * d'un point. Accédez aux éléments du tuple.
 */

// solution :

// -------------------

/**
 * Exercice 10 : Optionnel
 * Énoncé : Déclarez une variable qui peut être soit
 * une chaîne de caractères, soit null.
 * Vérifiez si la variable est null avant de l'utiliser.
 */

// solution :

// -------------------

function afficherElements<T>(params: T[]) {
  params.forEach((element) => {
    console.log(element);
  });
}
afficherElements([10, 30, 59, 57]);
afficherElements(["kinshasa", "paris", "bujumbura"]);

enum creneau {
  Matin = "matin",
  Midi = "midi",
  Soir = "soir",
}
class kadeaStudent {
  nom: string;
  prenom: string;
  creneau: creneau;
  constructor(nom: string = "", prenom: string = "", creneau: creneau) {
    this.nom = nom;
    this.prenom = prenom;
    this.creneau = creneau;
  }
  getNom() {
    return this.nom;
  }
  get;
}
