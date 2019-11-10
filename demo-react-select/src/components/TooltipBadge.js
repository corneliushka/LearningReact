import React, { Component } from 'react';

import { Badge, Tooltip } from 'reactstrap';

class TooltipBadge extends Component {
    constructor(props) {
        super(props)
        this.toogle = this.toogle.bind(this);
        this.state = {
            tooltipOpen : false
        }
                    
    }

    toogle(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        })
    }

    render(){
        return(
            <div>
                <Badge
                    className="mr-1"
                    color="secondary">   
                </Badge>
                <Tooltip
                isOpen={this.state.tooltipOpen}
                toggle={this.toggle}
                target={"ItemID"}>
                </Tooltip>                
            </div>
        )
    }

}

export default TooltipBadge;