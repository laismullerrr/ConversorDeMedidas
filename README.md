# ConversorDeMedidas

Este é um projeto de um conversor de unidades implementado com HTML, CSS e JavaScript. 
Ele permite converter valores entre diferentes unidades de medida, como comprimento, peso e temperatura.

## Funcionalidades

- Conversão de unidades de comprimento: metros, centímetros, polegadas.
- Conversão de unidades de peso: quilogramas, gramas, libras.
- Conversão de unidades de temperatura: Celsius, Fahrenheit, Kelvin.
- Possui 3 campos de seleção, além de área de inserção de valor e retorno do cálculo.

## Como usar

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Selecione as unidades de origem e destino conforme indicado.
4. Insira o valor a ser convertido no campo de entrada.
5. O resultado da conversão será exibido na área de saída.

## Estrutura do projeto

O projeto possui a seguinte estrutura de diretórios:

- O arquivo `index.html` contém a estrutura HTML e a interface do conversor de unidades.
- O arquivo `style.css` contém as regras de estilo para a aparência do conversor.
- O arquivo `script.js` contém as funcionalidades de conversão implementadas em JavaScript.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Contribuição

Contribuições são bem-vindas! Se você quiser melhorar este projeto, sinta-se à vontade para fazer um fork deste repositório, criar uma nova branch e enviar um pull request com suas alterações.

## DIÁRIO DE EXECUÇÃO

Tive bastante dificuldade com esse projeto, mas gosto de como foi finalizado.
Precisei alterar toda a estrutura da página ao menos 3 vezes, lendo as rubricas do projeto. Na próxima vez, com certeza farei meu brainstorm antes e me programar melhor para melhores resultados.
Em especial, quero agradecer às aulas e monitorias da Resília que me fizeram capaz de realizar esse projeto. Além disso, a ajuda de colegas (e do chat GPT) foram cruciais para chgar até aqui.
Espero que gostem do meu trabalho! :)

## RESPOSTAS AO FEEDBACK DO PROJETO E REENTREGA

Aqui estão alguns pontos mencionados no feedback do projeto que alterei até aqui:

- remoção de tags br e substituição do espaçamento realizada diretamente no CSS com padding;
- remoção da  section de título (h1);
- alteração em nomes de certas classes para melhor compreensão e padronização;
- separação de arquivos em pastas relacionadas e organizadamente;

E aqui alguns pontos onde defendo minhas escolhas:

- Na validação do campo de input (id="valor"), o próprio input já requer um número (input type="number"). Assim, não achei necessário criar uma validação específica em js para cuidar disso.
- Sobre os form's envoltos por div's, preferi deixá-los assim. Gosto de imaginar que cada form é um bloco, o que na minha cabeça seria a div. Claro, agora aprendi que é mais simples deixar somente o form. Meu código em js é baseado nessas divs, e teria que alterar uma boa parte somente com essa pequena alteração. Sei que não é adequada a utilização dessa maneira, mas com isso tenho certeza de que vou me atentar nesse ponto em próximos projetos.
