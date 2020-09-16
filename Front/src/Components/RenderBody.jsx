import React from "react";

import MainPageRender from "./MainPage/MainPageRender.jsx";
import ContactPageRender from "./ContactPage/ContactPageRender.jsx";
import Projects from "./Projects/Projects.jsx";

import loadGif from "../Static/Images/Loading.gif";
import s from "./Style.module.sass";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      i: 1,
      styleLoad: {}
    };
  }
  componentDidMount() {
    this.fetchLoad(false);
  }
  fetchLoad(retry) {
    fetch("https://sepezho.com:7777/API/RepComViews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        retry: retry
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          dataRepCom: {
            dataComOld: data.Com,
            dataRes: data.Res,
            dataViews: data.Views,
            dataCom: data.Com.slice(0, 11)
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.loading();
  }
  loading() {
    setTimeout(() => {
      if (this.state.i < 5) {
        this.setState({
          i: this.state.i + 1
        })
        if (this.state.dataRepCom) {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          this.setState({
            styleLoad: {
              opacity: 0,
              visibility: "hidden"
            }
          });
        } else {
          this.fetchLoad(true);
        }
      } else {
        alert("There may be problems with the server. Please come back later :/");
      }
    }, 1000*this.state.i);
  }

  renderMain() {
    if (this.state.dataRepCom) {
      if (this.props.path === "/Main") {
        return (
          <MainPageRender
            pathMain={this.props.pathMain}
            language={this.props.language}
            dataCom={this.state.dataRepCom.dataCom.slice(0, 6)}
            dataViews={this.state.dataRepCom.dataViews}
          />
        );
      } else if (this.props.path === "/Projects") {
        return <Projects language={this.props.language} dataRepCom={this.state.dataRepCom} />;
      } else if (this.props.path === "/Contact") {
        return <ContactPageRender language={this.props.language} />;
      } else {
        return <MainPageRender language={this.props.language} pathMain={this.props.pathMain} />;
      }
    }
  }

  render() {
    return (
      <div>
        <div style={this.state.styleLoad} className={s.Loading}>
          <img alt="" src={loadGif} />
        </div>

        {this.renderMain()}
      </div>
    );
  }
}

export default Body;