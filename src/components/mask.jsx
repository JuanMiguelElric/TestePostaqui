
// component voltado para mascaras de CPF CEP e telefone

export const cpfMask = value =>{
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}
export const phoneMask = (value) => {
    if (!value) return ""; // Retorna uma string vazia se o valor for nulo ou indefinido
    value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Adiciona parênteses e espaço após os primeiros 2 dígitos
    value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Adiciona hífen após o penúltimo dígito
    return value;
};
export const MoneyMask = (value) => {
    const valorNumerico = parseFloat(value.replace(/[\D]+/g, ''));
    
    // Verifica se valorNumerico é um número válido
    if (!isNaN(valorNumerico)) {
      const valorFormatado = valorNumerico.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      return `R$${valorFormatado}`;
    }
  
    // Se não for um número válido, retorna uma string vazia ou outra mensagem de erro, conforme necessário.
    return '';
};
  