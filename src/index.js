// import React from "react";
// import ReactDOM from "react-dom";

// function TemporaryName() {
//     return (
//         <div>
//         <img src="./favicon.ico" width="40px" alt="img"/>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Meta</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     );
// };

// ReactDOM.render(<TemporaryName/>,document.getElementById("root"))

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


function TemporaryName() {
    return (
        <div>
            <Container>
            <Typography>
            <Header />
            <Card>
            <CardContent>
            <Content />
            </CardContent>
            </Card>
            <Footer />
            </Typography>
            </Container>
        </div>

    )
}

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./amplication-logo.svg" className="width" alt="amplication-logo"></img>
                <ul className="nav-items">
                <Button  href="https://docs.amplication.com/docs/getting-started/" target="_blank">Docs</Button>
                <Button  href='https://github.com/amplication/amplication' target="_blank">GitHub Repo</Button>
                <Button  href='https://twitter.com/amplication' target="_blank">Tweets</Button>
                <Button  href='https://twitter.com/amplication' target="_blank">Discord</Button>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small >© 2022 Hatikankan development. All rights reserved.</small>
        </footer>
    )
}

// function BackgroundVideo() {
//     return (
//         <video loop autoPlay id="myVideo">
//             <source src="./amplication-team.mp4" type="video/mp4" />
//         </video>
//     )
// }

function Content() {
    return (
        <div>

            <h1 className="footer">Amplication Fun Facts</h1>
            <ul>
                <li>Amplication is an open‑source development tool. It helps you develop quality Node.js applications without spending time on repetitive coding tasks.</li>
                <li>Instantly generate GraphQL API.</li>
                <li>Instantly generate Admin UI.</li>
                <li>Instantly generate Logging.</li>
                <li>Instantly generate REST API.</li>
                <li>Instantly generate Authentication.</li>
                <li>Instantly generate Authorization.</li>
                <li>Easily create data models and configure role‑based access control with a simple and intuitive UI or CLI</li>
                <li>Continuously push the generated application to your GitHub repository</li>
                <li>Our vision is to create one platform which will empower professional developers in creating business applications and extend platform capabilities, with the open‑source community's power of collaboration & transparency.</li>
                <li>As our platform is open source, we are looking to create an ecosystem around the project, where you - the professional developers, will always have the freedom to fork and maintain the platform yourselves, with no vendor lock‑in.</li>
                <li>We believe low‑code and open‑source should go hand‑in‑hand. Amplication builds the next generation of development tools with the help of the community, for the community.</li>
                <li>Open-source project</li>
                <li>Typescript & Node.js source code</li>
                <li>Sync with GitHub</li>
                <li>Version Control</li>
                <li>Custom Code</li>
                <li>Freedom to continue on your own</li>
                <li>Docker ready to be deployed</li>
                <li>Role based access-control</li>
                <li>React Admin UI</li>
                <li>Security & Performance</li>
                <li>Cloud agnostic</li>
                <li>Command line interface</li>
                <li>Active, approachable and friendly discord members.</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"))