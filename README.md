# Typescript Addon
This is your addon in typescript.  
It uses [typescripttolua](https://typescripttolua.github.io) and [gmod-typescript](https://github.com/lolleko/gmod-typescript) in order to work.

## Building
First run ``npm i`` to install typescript and other dependencies to your workspace.

Then run ``npm run build`` inside of the workspace.  
Lua files will be output exactly as placed in the ``/src/`` folder, but in the ``/lua/`` folder. That's it! Your addon is ready.

You can automate this with ``npm run dev``, which will auto build your project if you change any typescript source code.