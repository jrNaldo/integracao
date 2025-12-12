type Componente = {
    new(...args: any[]): {
        render(): any
    }
}

export default function LogRender<C extends Componente>(componente: C) {
    return class extends componente{
        render(){
            console.log('Renderizando Componente')
            const r: any = super.render()
            console.log('Renderização concluída')
            return r
        }
    }
}