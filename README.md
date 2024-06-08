# VitaliSea 🌊

## Descrição
Este é o frontend da aplicação da VitaliSea, desenvolvido com Next.js e TypeScript. A VitaliSea é uma iniciativa que busca combater a poluição, proteger a vida marinha e promover a sustentabilidade dos ecossistemas oceânicos. 

## Funcionalidades
- **Cadastro de Voluntários e Parceiros**: Permite que novos usuários se registrem como voluntários ou parceiros.
- **Gerenciamento de Eventos**: Interface para visualizar eventos.
- **Envio de Alertas**: Permite que os colaboradores enviem alertas sobre questões ambientais.

## Estrutura do Projeto
O frontend contém as seguintes páginas principais:

1. **Página Principal**: 
   - **Informações e Estatísticas**: Apresenta dados sobre o impacto do plástico no mar.
   - **Projetos**: Destaque para os principais projetos da Vitalisea.
2. **Página do Projeto SeaKer**:
   - **Missão**: Explica a nossa missão.
   - **Projeto SeaKer**: Detalhes sobre o projeto SeaKer.
   - **Reportes**: Explicação sobre como os colaboradores podem enviar alertas sobre questões ambientais.
3. **Página de Cadastro**: Permite que novos usuários façam parte da projeto, registrando-se como voluntários ou parceiros. Além de poderem realizar reportes.
4. **Página de Eventos**: Lista os eventos organizados, permitindo que voluntários se inscrevam e participem.


## Tecnologias Utilizadas
- **Next.js**: Framework React para renderização do lado do servidor.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework utilitário para estilização moderna e responsiva.

## Repositório do Backend
O backend desta aplicação, desenvolvido em Java, pode ser encontrado no seguinte repositório: [Backend Vitalisea](https://github.com/LiviaMarianaLopes/java-global-solution-api)

### Instruções para Rodar o Backend
Para executar o backend, siga os passos abaixo:

Clone o repositório do backend:
   ```bash
   git clone https://github.com/LiviaMarianaLopes/java-global-solution-api.git
````
Navegue até o diretório do projeto:

  ````bash
   cd java-global-solution-api
````

Compile e execute a classe principal Main:

````bash
   javac -d target src/main/java/org.example/Main.java
   java  -cp target main.java.org.example.Main
````


## Instruções para Rodar o Frontend

Pré-requisitos
- Node.js 14 ou superior
- npm ou yarn
  
### Passos para executar:

Clone o repositório do frontend:

````bash
git clone https://github.com/celestemayumi/oceans.git
````
Navegue até o diretório do projeto:

````bash
cd oceans
````
Instale as dependências:

````bash
npm install
````

Execute o servidor de desenvolvimento:

````bash
npm run dev
````
