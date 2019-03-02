## Ice Guard Frontend ❄️

Production: https://ice-guard-prod.firebaseapp.com
Test: https://ice-guard-test.firebaseapp.com

---

#### Local project setup

1. Download VS Code from https://code.visualstudio.com
2. Install NodeJS from https://nodejs.org
3. Intall Yarn from https://yarnpkg.com
4. Clone repository from https://github.com/iceguard/frontend
5. In project root run `yarn` to install all node packages
6. Run `yarn dev` for local development

#### Project branches

-   `master`
-   `develop`
-   `feature/[name_of_your_feature]`

#### Collaboration rules

1. Switch to develop branch `git checkout develop`
2. Create new feature branch `git checkout -b feature/[name_of_your_feature]`
3. Push your changes
4. Create pull request on Github to merge your feature branch into `develop`

#### Continous deployment

-   Accepted pull requests for the `develop` branch will be deployed to https://ice-guard-test.firebaseapp.com
-   Accepted pull requests for the `master` branch will be deployed to https://ice-guard-prod.firebaseapp.com

#### Project stack

-   React https://reactjs.org
-   NextJS https://nextjs.org
-   Firebase https://firebase.google.com
-   Azure Pipelines https://dev.azure.com
