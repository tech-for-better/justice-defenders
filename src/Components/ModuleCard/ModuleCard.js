import React from 'react';
import { ModuleContainer } from './ModuleCard.style'

const ModuleCard = ({title}) => {

    return (
        <>
    <ModuleContainer>
    <h4>{title}</h4>
    </ModuleContainer>
    </>
    )
}

export default ModuleCard