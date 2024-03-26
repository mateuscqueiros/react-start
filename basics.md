# As bases do React

- O React detecta mudanças no estado e atualiza somente os elementos que mudaram entre renderizações.
- Hook flow: [React Hook Flow](https://github.com/donavon/hook-flow?tab=readme-ov-file)

## Estados

- Estados são uma forma de armazenar informações que podem mudar em nosso componente.
- TODA vez que um estado muda, uma nova renderização é criada.
- Existem duas maneiras de eu atualizar meu estado:

```js
setState(previous + 1);
setState((previous) => previous + 1);
```

- Primeira maneira: Estamos falando que na próxima renderização, o novo valor será o valor atual + 1.
- Segunda maneira: Estamos "agendando" uma atualização, que depende do valor anterior do estado.

- Toda vez que uma renderização acontece, todas as variáveis e toda a lógica dentro do escopo da função do componente são refeitos (definidos novamente e executados).
- Lazy initializers: Você pode passar uma função para o valor inicial de um estado. Essa função será executada apenas uma vez: quando o estado for criado.

## Efeitos

- Um efeito serve para sincronizar nossa aplicação com algo externo (localStorage, servidor).
- Um efeito é executado de maneira diferente dependendo do array de dependências:
  1. Sem array de dependências: Executado em TODAS as renderizações.
  2. Array de dependências vazio: Executado apenas na primeira renderização.
  3. Array de dependências com valores: Executado quando o valor muda entre renderizações. (Independente de serem estados)

```jsx
useEffect(() => {});
useEffect(() => {}, []);
useEffect(() => {}, [name, email]);
```

# Refs

- Quando precisamos de uma "fuga" das renderizações do React podemos utilizar refs (referências). Elas nos permitem armazenar valores sem o conhecimento do React.
- Refs são valores mutáveis. Pode-se mudar seus valores usando a propriedade current, diferente dos estados com os quais precisaríamos utilizar setState.

```jsx
const countRef = useRef(0);
countRef.current = 1;
```

- Refs são úteis para acessar valores do DOM através da prop especial ref, para armazenar valores entre eventos (click, change).
- NUNCA devemos mudar refs enquanto o componente está renderizando, ou seja no corpo da função.
