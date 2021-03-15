# POC Module Federation

Testando os conceitos do novo Plugin ModuleFederation.

Foi utilizado o React como stack para construir esse conteúdo, mas você pode usar seu flavor favorito, com uma pequena ressalva para o
Angular, que é um pouco menos flexível ou seja, demanda mais trabalho para realizar as configurações.

Detro de packages temos três aplicações `auth`, `shell` e `dashboard`. Foi feita a comunicação entre elas sem um aumento 
exponencial da complexidade de implementação.

O que foi aplicado na POC:

* Configuração do ModuleFederation;
* Como expor módulos na federação;
* Como consumir módulos da federação;
* Como utilizar rotas de outra aplicação;
* Como utilizar providers/contexto de outra aplicação.

É um projeto bem básico, arquitetura sem muitas funcionalidades, mais para testar o conceito. Inteni com isso que o Module Federation é somente 
a ponta do iceberg, ou seja, tudo vai depender da arquitetura desenvolvida para o microfrontend e essa sim é a grande diferença.

Pode concluir que é uma grande aposta para o futuro.

## Packages

Foi criado uma pasta chamada packages, para simplificar o build do projeto, pois para fazer o build paralelo dos Apps o wsrun precisa que tenha
pasta e que os projetos estejam dentro dela.

* concurrently (https://www.npmjs.com/package/concurrently)
* wsrun (https://www.npmjs.com/package/wsrun)

Obs: lembre-se que para utilizar esse tipo de deploy, deve ser instalado o yarn como dependência.

## Inicializar a aplicação

* npm install
* npm start
