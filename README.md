# Demo les bases du langage TypeScript

<img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="40"><img src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430" width="40"/>

> Bienvenue dans cette série d'exercices conçue pour vous aider à maîtriser les bases de TypeScript, un sur-ensemble de JavaScript qui ajoute un typage statique optionnel à votre code. TypeScript permet de détecter les erreurs potentielles dès la phase de développement, ce qui améliore la qualité et la maintenabilité de vos projets.

## Exercice 1 : Types de base

-   **Énoncé :** Déclarez une variable de chaque type de base de TypeScript : string, number, boolean, null et undefined. Attribuez-leur des valeurs appropriées.
    
-   **Solution :**
    
    ```
    let nom: string = "John Doe";
    let age: number = 30;
    let estEtudiant: boolean = true;
    let valeurNull: null = null;
    let valeurUndefined: undefined = undefined;
    
    ```
    

## Exercice 2 : Tableaux

-   **Énoncé :** Créez un tableau de nombres et un tableau de chaînes de caractères. Ajoutez-y quelques éléments.
    
-   **Solution :**
    
    ```
    let nombres: number[] = [1, 2, 3];
    let noms: string[] = ["Alice", "Bob", "Charlie"];
    
    nombres.push(4);
    noms.push("David");
    
    ```
    

## Exercice 3 : Fonctions

-   **Énoncé :** Écrivez une fonction qui prend deux nombres en entrée et retourne leur somme. Spécifiez les types des paramètres et du type de retour.
    
-   **Solution :**
    
    ```
    function addition(a: number, b: number): number {
      return a + b;
    }
    
    let resultat: number = addition(5, 3);
    
    ```
    

## Exercice 4 : Interfaces

-   **Énoncé :** Définissez une interface `Personne` avec les propriétés `nom` (string) et `âge` (number). Créez un objet de type `Personne`.
    
-   **Solution :**
    
    ```
    interface Personne {
      nom: string;
      âge: number;
    }
    
    let personne: Personne = {
      nom: "Alice",
      âge: 25,
    };
    
    ```
    

## Exercice 5 : Classes

-   **Énoncé :** Créez une classe `Voiture` avec les propriétés `marque` (string) et `modèle` (string). Ajoutez une méthode `afficherInfos()` qui affiche les informations de la voiture.
    
-   **Solution :**
    
    ```
    class Voiture {
      private marque: string;
      private modèle: string;
    
      constructor(marque: string, modèle: string) {
        this.marque = marque;
        this.modèle = modèle;
      }
    
      afficherInfos() {
        console.log(`Marque : ${this.marque}, Modèle : ${this.modèle}`);
      }
    }
    
    let maVoiture = new Voiture("Toyota", "Camry");
    maVoiture.afficherInfos();
    
    ```
    

## Exercice 6 : Génériques

-   **Énoncé :** Écrivez une fonction générique qui prend un tableau d'éléments de n'importe quel type et retourne le premier élément.
    
-   **Solution :**
    
    ```
    function premierElement<T>(tableau: T[]): T {
      return tableau[0];
    }
    
    let premierNombre = premierElement([1, 2, 3]);
    let premierNom = premierElement(["Alice", "Bob", "Charlie"]);
    
    ```
    

## Exercice 7 : Types Union

-   **Énoncé :** Déclarez une variable qui peut être soit un nombre, soit une chaîne de caractères. Attribuez-lui une valeur de chaque type.
    
-   **Solution :**
    
    ```
    let valeur: number | string;
    
    valeur = 10;
    valeur = "Bonjour";
    
    ```
    

## Exercice 8 : Enums

-   **Énoncé :** Créez un enum `Couleur` avec les valeurs `Rouge`, `Vert` et `Bleu`. Utilisez l'enum pour définir la couleur d'une variable.
    
-   **Solution :**
    
    ```
    enum Couleur {
      Rouge,
      Vert,
      Bleu,
    }
    
    let couleur: Couleur = Couleur.Rouge;
    
    ```
    

## Exercice 9 : Tuples

-   **Énoncé :** Créez un tuple qui représente les coordonnées (x, y) d'un point. Accédez aux éléments du tuple.
    
-   **Solution :**
    
    ```
    let point: [number, number] = [10, 20];
    
    let x = point[0];
    let y = point[1];
    
    ```
    

## Exercice 10 : Optionnel

-   **Énoncé :** Déclarez une variable qui peut être soit une chaîne de caractères, soit `null`. Vérifiez si la variable est `null` avant de l'utiliser.
    
-   **Solution :**
    
    ```
    let nom: string | null = "Alice";
    
    if (nom !== null) {
      console.log("Bonjour, " + nom);
    }
    
    ```
    