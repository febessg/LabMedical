# LabMedical

O LabMedical é um software para gestão de inventário médico, onde é possível cadastrar pacientes, consultas e exames, além de ter acesso ao prontuário dos pacientes cadastrados, com seus respectivos históricos, podendo editar ou deletar tais informações. Para realizar estas operações no sistema, é necessário realizar login, para isso o usuário, que deve ter realizado um cadastro prévio, deverá informar seu email e senha. Dessa forma, é possível manter a segurança dos dados cadastrados.


## Como utilizar:

1. Faça um clone desse repositório na sua máquina
    ```sh
    git clone https://github.com/febessg/LabMedical.git
    ```
    
2. Instale as dependências:
    ```sh
    npm install
    ```
3. Inicie o servidor
    ```sh
    npm run dev
    ```
Após realizar essa sequência de passos, a aplicação estará pronta para ser utilizada!

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando a seguintes tecnologia:

- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.

##Dependências

Também foram utilizadas as seguintes dependências na construção do software:

- **Vite**: Ferramenta de construção e servidor de desenvolvimento rápido e leve.
- **React Router DOM**: Biblioteca para roteamento de páginas do React.
- **Prop-Types**: Biblioteca para verificação de props passadas para os componentes.
- **React Hook Form**: Biblioteca pra criação e validação de formulários no React.
- **Styled Components**: Biblioteca para estilização de componentes.
- **React Icons**: Biblioteca que fornece ícones.

## Técnicas e padrões

O projeto foi organizado em uma estrutura de pastas, permitindo assim uma visualização e acesso facilitados, para a realização de possíveis correções ou melhorias.

| Pasta | Uso |
|-------|--------|
| Components | Onde estão armazenados os arquivos .jsx responsáveis por renderizar os componentes da aplicação. |
| Contexts | Onde estão localizados os arquivos de contexto. |
| Pages | Onde estão localizados os arquivos responsáveis por renderizar as páginas da aplicação. |
| Services | Contém os arquivos onde estão localizadas as operações que manipulam os dados cadastrados. |

## Possíveis melhorias: 
Este projeto é um MVP (Produto Viável Mínimo), portanto devm ser realizadas melhorias futuramente, dentre elas:

 - Habilitação da funcionalidade de redefinição de senha.
 - Habilitação dos botões de edição e deleção.

A implementação das melhorias citadas proporcionará um sistema de gerencimento mais completo, facilitando assim o controle dos prontuários dos pacientes e permitindo uma melhor organização do sistema.