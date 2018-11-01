import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';

class Search extends Component {

    constructor (props) {
        super(props)
        this.state = {
          value: '',
          items: []
        }
      }
    componentWillReceiveProps(nextProps){
        this.setState({
            items: nextProps.items
        })
    }

    updateSelected(value) {
        this.setState({ value })
        this.props.update(value)
    }

    render(){
        return (
            <nav className="search">
                <div className="input-glass">
                    <span className="fa fa-search"></span>
        <Autocomplete
                items={this.state.items}
                shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.name}
                wrapperProps={{className: 'autocomplete-wrapper'}}
                renderItem={(item, highlighted) =>
                    <div className="search-result" key={item.name}
                        style={{ 
                            backgroundColor: highlighted ? 'rgba(185,9,11,.8)' : 'transparent',
                            color: highlighted ? '#ffffff' : '#333333'}}
                    >
                    <div className="thumbnail-container">
                    <img src={`images/${item.name.replace(/\s+/g, '-').toLowerCase()}-logo.jpg`} alt=""/>
                    </div>
                        <div className="item-name"><p>{item.name}</p></div>
                        
                    </div>   
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                onSelect={value => this.updateSelected(value)}
            />
                </div>
            </nav>
        )
    }
}

export default Search;