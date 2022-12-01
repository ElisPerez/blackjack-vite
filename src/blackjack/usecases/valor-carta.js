/**
 * Esta funcion obtiene el valor de la carta
 * @param {String} carta
 * @return {Number} Retorna el valor de la carta
 */
export const valorCarta = carta => {
  if (!carta) {
    throw new Error('carta es obligatoria')
  }
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};