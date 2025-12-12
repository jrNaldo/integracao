import React, { Component } from "react";
import { useState } from "react";
import ContadorValor from "./ContadorValor";
import './Contador.css'
import LogRender from "../decorators/logRender";

interface ContadorProps {
    valorInicial?: number
}

interface ContadorEstado {
    valor: number
}

@LogRender
export default class Contador extends Component<ContadorProps, ContadorEstado>{
    public state = {valor: this.props.valorInicial || 0}

    private setValor = (delta: number) => {
        this.setState({
            valor: this.state.valor + delta
        })
    }

    render(){
        return (
            <div>
                <ContadorValor contador={this.state.valor} />
                    <button onClick={() => this.setValor(10)}>+</button>
                    <button onClick={() => this.setValor(-10)}>-</button>

            </div>
        )
    }
}