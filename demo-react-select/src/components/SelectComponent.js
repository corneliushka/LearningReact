import React, { Component } from 'react';

import Select from 'react-select';
import { colourOptions,  } from '../data/data';
import makeAnimated from 'react-select/animated';

import { Badge } from 'reactstrap' 

// TEST #1 - import the tooltipbadge here + render select with Label

const animatedComponents = makeAnimated();


const renderBadge = function 

class SelectComponent extends Component {
    state = {
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: false,
    };


    

    render() {
        const {
            isClearable,
            isSearchable,
            isDisabled,
            isLoading,
            isRtl,
        } = this.state;
        return (
            <Select
                className="basic-single"
                classNamePrefix="select"
                components={animatedComponents}
                defaultValue={colourOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="color"
                isMulti
                closeMenuOnSelect={false}
                options={colourOptions}
            />
        )
    }
}

export default SelectComponent