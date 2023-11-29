# Kubernautics

![Kubernautics-logo](assets/images/nautics.png)

<div >
Kubernautics is an open-source <b> cluster monitoring solution </b> that looks to prioritize ease of deployment, ease of use, and a low resource footprint. The program is placed directly into the cluster it is meant to monitor, and interfaces with your Prometheus deployment to provide detailed, reliable metric data. When you arrive at the UI, at your disposal are two dynamic tools to shape your monitoring experience; the dashboard of prometheus-fed cluster and application metrics, and the kubernetes cluster visualizer.

### Link to product website

### Link to linkedin

</div>

## Table of Contents

<ol>
  <li>
    <a href="#built-with">Built with</a>
  </li>
  <li>
    <a href="#features">Features</a>
  </li>
  <li><a href="#getting-started-with-kubernautics">Getting Started with Kubernautics</a></li>
  <li><a href="#progress">Progress</a></li>
  <li><a href="#how-to-contribute">How to Contribute</a></li>
  <li><a href="#our-team">Our Team</a></li>
  <li><a href="#license">License</a></li>
</ol>

## Built with

<div align= "center">

[![Kubernetes][Kubernetes-logo]](https://kubernetes.io)
[![Docker][Docker-logo]](https://www.docker.com)
[![Prometheus][Prometheus-logo]](https://prometheus.io)
[![ChartJS][Chartjs-logo]](https://www.chartjs.org)
[![ReactRouter][ReactRouter-logo]](https://reactrouter.com/en/main)
[![Express][Express-logo]](https://expressjs.com)
[![React][React-logo]](https://react.dev)
[![Jest][Jest-logo]](https://jestjs.io)
[![MUI][MUI-logo]](https://mui.com)
[![Webpack][Webpack-logo]](https://webpack.js.org)
[![Helm][Helm-logo]](https://helm.sh)
[![Javascript][Javascript-logo]](https://www.javascript.com)
[![npm][npm-logo]](https://www.npmjs.com)
[![Node.JS][Node-logo]](https://nodejs.org/en)
[![HTML5][HTML-logo]](https://developer.mozilla.org/en-US/docs/Web/HTML)

</div>

## Features

### 1. Realtime Monitoring Dashboard

- Kubernautics compiles all metrics you want to track and constantly pulls information based off of the custom metric scrape rate

### 2. Customizable Metrics

- Kubernautics simplifies the Prometheus scraping tasks and provides additional information to each query task
  <br>

![homepage](https://i.imgur.com/Iqkai3C.gif)

### 3. Cluster Visualization

- Kubernautics depicts the interdependencies within your cluster but also employs a color-coded system for ease of navigation
  <br>
  ![visualizer](https://i.imgur.com/wF4wX7t.gif)

## Getting Started with Kubernautics

Let’s walk through how to get your cluster [setup with Kubernautics](/GETTINGSTARTED.md)

## How to Contribute

1. Fork the Project
2. Create your Feature Branch based off of Dev

- `git checkout -b feature/NewFeature`

3. Commit your Changes

- `git commit -m 'What was changed: Description of the NewFeature'`

4. Push to the Branch

- `git push origin feature/NewFeature`

5. Open a Pull Request (from `feature/NewFeature` to `dev`)

- make sure newest dev branch has been merged

## Progress

| Feature                                 | Status |
| --------------------------------------- | ------ |
| Customizable Cluster Visualizer         | ⏳     |
| Additional Chart Typing                 | ⏳     |
| Automate Prometheus Configs/Deployment  | ⏳     |
| Increase Test Coverage                  | 🙏🏻     |
| Reduce Resource Usage                   | 🙏🏻     |
| Deployment with cloud-hosting providers | 🙏🏻     |

- ✅ = Ready to use
- ⏳ = In progress
- 🙏🏻 = Looking for contributors

## Our Team

<table>
  <tr>
    <td align="center">
      <img src="https://gravatar.com/avatar/9636423b6c2c755d6c9f368b38fe92d63d3d39e898a6a8113b467d0a3e6243a5?s=256" alt= “Jordan” width="150px;" alt=""/>
      <br />
      <sub><b>Jordan Buranskas</b></sub>
      <br />
      <a href="https://www.linkedin.com/in/jordan-buranskas-22471841/"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" height="20px"/></a>
      <a href="https://github.com/JordanBuranskas"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" height="20px"/></a>
    </td>
    <td align="center">
      <img src="https://gravatar.com/userimage/243322748/e2ebd147ef0c3ec2881c70e21d3921b7.jpeg?size=256" alt= "Edward" width="150px"/>
      <br />
      <sub><b>Edward Li</b></sub>
      <br />
    <a href="https://www.linkedin.com/in/edward-li-/"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" height="20px"/></a>
      <a href="https://github.com/edli-dot"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" height="20px"/></a>
    </td>
    <td align="center">
      <img src="https://gravatar.com/userimage/243322599/69d6297c1eb2a460f5f31aefa671472a.jpeg?size=256" alt= "Matin" width="150px;" />
      <br />
      <sub><b>Matin Schams</b></sub>
      <br />
      <a href="https://www.linkedin.com/in/matin-schams/"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" height="20px"/></a>
      <a href="https://github.com/matinschams"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" height="20px"/></a>
    </td>
     <td align="center">
      <img src="https://gravatar.com/avatar/9636423b6c2c755d6c9f368b38fe92d63d3d39e898a6a8113b467d0a3e6243a5?s=256" alt= "Tyler" width="150px"/>
      <br />
      <sub><b>Tyler Shelton</b></sub>
      <br />
      <a href="https://www.linkedin.com/in/tylerdshelton/"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" height="20px"/></a>
      <a href="https://github.com/tylershelton"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" height="20px"/></a>
    </td>
  <tr>
  </tr>
</table>

## License

<p align="right"><a href="#readme-top">back to top</a></p>

[Kubernetes-logo]: https://img.shields.io/badge/KUBERNETES-326CE5?style=for-the-badge&logo=KUBERNETES&logoColor=white
[Docker-logo]: https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge&logo=DOCKER&logoColor=white
[Prometheus-logo]: https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&color=black
[Chartjs-logo]: https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=Chart.js&logoColor=white&color=FF6384
[DevSpace-logo]: https://example.com/path/to/devspace-logo.png
[ReactRouter-logo]: https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=React%20Router&color=rgb(180%2C180%2C180)
[React-logo]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&color=rgb(90%2C90%2C90)
[Jest-logo]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest
[MUI-logo]: https://img.shields.io/badge/MUI-%23007FFF?style=for-the-badge&logo=MUI&logoColor=white
[Webpack-logo]: https://img.shields.io/badge/Webpack-%238DD6F9?style=for-the-badge&logo=Webpack&logoColor=blue
[Helm-logo]: https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=Helm
[Javascript-logo]: https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&color=rgb(45%2C45%2C45)
[Express-logo]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express
[npm-logo]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm
[Node-logo]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white&color=339933
[HTML-logo]: https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white&color=E34F26
[Git-logo]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[Linkedin-logo]: https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white
