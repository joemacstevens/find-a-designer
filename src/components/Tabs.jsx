import React, {Component} from 'react';

class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : "desc"
        }
    }
    updateTab(active){
        this.setState({
            active: active
        })
        this.props.update(active)
    }

    render() {
        return (
            <header className="tab-navigation-bar">
                <nav className="tab-navigation">
                    <button 
                        className={`button designer-name ${this.state.active === "desc" ? "active" : ""}`}
                        onClick={event => this.updateTab("desc")}>
                        {this.props.name}
                    </button>
                    <button className={`button ${this.state.active === "contact" ? "active" : ""}`}
                    onClick={event => this.updateTab("contact")}>
                        Contact
                    </button>
                </nav>
            </header>
        )
    }
}

export default Tabs 