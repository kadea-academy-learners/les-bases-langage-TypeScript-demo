// Demo les bases du langage TypeScript

/**
 * Exercice 1 : Types de base
 * Énoncé : Déclarez une variable de chaque type de base
 * de TypeScript : string, number, boolean, null et undefined.
 * Attribuez-leur des valeurs appropriées.
 */

// solution :
let nom: string = "alice";
let age: number = 25;
let estInscrits: boolean = false;
let score: null = null;
let valeurIndefiny: undefined = undefined;
// -------------------

/**
 * Exercice 2 : Tableaux
 * Énoncé : Créez un tableau de nombres et un tableau
 * de chaînes de caractères. Ajoutez-y quelques éléments.
 */

// solution :
let prix: number[] = [100, 50, 65];
let capitales: string[] = ["Kinshasa", "Paris", "Bruxelle"];
// -------------------

/**
 * Exercice 3 : Fonctions
 * Énoncé : Écrivez une fonction qui prend deux nombres en entrée
 * et retourne leur somme. Spécifiez les types des paramètres
 * et du type de retour.
 */

// solution :

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(10, 6));

// -------------------

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
const client: Personne = {
  nom: "alice",
  age: 20,
};
// -------------------

/**
 * Exercice 5 : Classes
 * Énoncé : Créez une classe Voiture avec les propriétés
 * marque (string) et modèle (string).
 * Ajoutez une méthode afficherInfos() qui affiche
 * les informations de la voiture.
 */

// solution :
class Automobile {
  protected marque: string;
  protected modele: string;
  protected nombrePneux: number;

  constructor(marque: string = "", modele: string = "", nombrePneux = 0) {
    this.marque = marque;
    this.modele = modele;
    this.nombrePneux = nombrePneux;
  }

  getMarque() {
    return this.marque;
  }

  setMarque(marque: string) {
    this.marque = marque;
  }

  getModele() {
    return this.modele;
  }

  setModele(modele: string) {
    this.modele = modele;
  }

  afficherInfos() {
    console.log(
      `Je suis une voiture de marque ${this.marque} et je suis un modèle ${this.modele}`
    );
  }
}

// -------------------

/**
 * Exercice 7 : Types Union
 * Énoncé : Déclarez une variable qui peut être soit un nombre,
 * soit une chaîne de caractères.
 * Attribuez-lui une valeur de chaque type.
 */

// solution :
let password: string | number = 123;
password = "blabla";
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
