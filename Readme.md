# Passo a passo configuração eslint e prettier

# 1-Criar react vite - npm create vite e escolher as opções

# 2-Dar um npm install

# 3-Criar o eslint - npm create @eslint/config e escolher a terceira opção 'check sintax, find problems and enforce code style'

# 4-Escolher o tipo de modulos - Javascript modules (import/export)

# 5-Qual framework usar - React

# 6-Usar Typescript? - Não

# 7-Onde o código roda - Escolher Browser. Se precisar escolher os dois, apertar barra de espaço

# 8-Usar um estilo popular ou responder questões sobre seu estilo - Geralmente o mais usado é o AirBnb, escolher ele inicialmente

# 9-Qual formato quer que esteja - Escolher Json

# 10-Clicar em instalar agora e escolher npm como package manager

# 11-Ir no extensões do VSCode e procurar por ESLINT

# 12-Ir no extensões do VSCode e procurar por prettier

# 13-No terminal, digitar npm install -D eslint-config-prettier prettier

# 14-Depois da instalação, ir no arquivo .eslintrc e em "extensions", adicionar "prettier"

# 15-Deletar o package-lock.json

# 2 caminhos agora:

# O primeiro:

# Dar um ctrl shift p e ir no terminal que vai abrir e digitar 'format' e escolher 'Salvar sem formatar' ou 'save without formating'

# Dar um ctrl vírgula pra abrir as configurações do vscode e no canto superior direito ir no ícone que abre as configurações em json

# Adicionar os comandos

    "editor.formatOnSave": true,
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

# O segundo

# Criar uma pasta vscode/settings.json na raíz e colocar esses comandos de cima lá

# voltar no Prettier e no ESlint em extensões e clicar na engrenagem e colocar "Adicionar para as recomendações do workspace", pois quando alguém pegar o projeto, já sugere a instalação dele. Vai criar um arquivo chamado extensions.json dentro da pasta vscode
