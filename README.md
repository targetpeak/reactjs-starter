[![Dependency Status](https://david-dm.org/targetpeak/reactjs-starter.svg)](https://david-dm.org/targetpeak/reactjs-starter)

# Prismic React Starter
This project has been created with [`create-react-app`](https://github.com/facebookincubator/create-react-app). We added a zest of [prismic](https://github.com/prismicio/javascript-kit) inside it.

### Install dependencies
```
> $ npm install
```
### Runs the app in the development mode
Build and open your browser to http://localhost:3000.
```
> $ npm start
```

### Launches the test runner in the interactive watch mode
```
> $ npm run test
```

### Builds the app for production to the build folder
```
> $ npm run build
```

### Get started with prismic.io

You can find out how to get started with prismic.io from [our React documentation](https://prismic.io/docs/reactjs/getting-started/getting-started-from-scratch).


## Dockerise React:
Passing environment variables to nginx docker - https://github.com/docker-library/docs/issues/496.
From https://mherman.org/blog/dockerizing-a-react-app/. The dev Docker can be built using:

### Building in dev
Manually build dev image using:
```bash
docker build -f Dockerfile-dev -t cms-ui-dev .
```

### Building production image
To build optimised production image:
```bash
docker build -f Dockerfile -t cms-ui .
```

### Start up services
To start in containers:
```bash
docker-compose -f docker-compose-dev.yml up # For dev - with auto-recompiling for code changes
docker-compose -f docker-compose-dev.yml up # For prod stack - assumes image exists
```

### Custom types examples
```text
https://user-guides.prismic.io/examples/nodejs-samples/sample-multi-page-site-with-navigation-in-nodejs
https://user-guides.prismic.io/examples/nodejs-samples/sample-blog-with-api-based-cms-in-nodejs

```
### Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2017 Prismic.io (https://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
