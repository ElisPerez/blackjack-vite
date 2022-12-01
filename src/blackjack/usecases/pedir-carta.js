/**
 * Esta funcion es para pedir una carta
 * @param {Array<String>} deck Es un arreglo de string
 * @return {String} Retorna una carta del mazo
 */
export const pedirCarta = deck => {
  if (!deck) {
    throw new Error('deck es obligatorio');
  }
  if (deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  const carta = deck.pop();
  return carta;
};
