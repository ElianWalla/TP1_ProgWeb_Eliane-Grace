/**
 * Classe Joueur
 * Représente un joueur avec son nom et son score.
 */
class Joueur {

   #nom;
   #score;

   constructor(nom) {

       this.#nom = nom;
       this.#score = 0;
   }

   get getNom () {

       return nom;
    }



    /**
     * Compare le score avec un autre joueur.
     * @param {Joueur} autre
     * @returns {number} 1 si supérieur, -1 si inférieur, 0 si égalité
     */
    comparerA(autre) {
    }
}
