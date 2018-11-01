import React, {Component} from 'react';
import Tabs from './Tabs';
import Description from './Description';
import Address from './Address';

class Studio extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: "desc"
        }
        this.setActive = this.setActive.bind(this);
      }

    setActive(active){
        this.setState({
            active: active
        })
    }

    render(){

        let desigerComponents = ""

        if (this.props.studio.contact && this.state.active === "desc"){
            desigerComponents =  <Description 
                                    name={this.props.studio.name} 
                                    description={this.props.studio.description}
                                    cover = {this.props.cover}
                                    contact={this.props.studio.contact}
                                />
        } else if (this.props.studio.contact && this.state.active !== "desc"){
            desigerComponents = <Address logo={this.props.logo} contact={this.props.studio.contact}/>
        } else {
            desigerComponents = <p>Loading</p>
        }

        return <section className="studio">
            <Tabs name={this.props.studio.name} update={this.setActive}/>
            {desigerComponents}
          </section>;
    }
}

export default Studio;