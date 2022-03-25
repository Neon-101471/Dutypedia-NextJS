import React from 'react';
import DietRoutineTable from '../../../../../../Components/Dashboard_1/Group/Routine/DietRoutine/DietRoutineTable/DietRoutineTable';
import styled from 'styled-components';
import MobileViewTable from '../../../../../../Components/Dashboard_1/Group/Routine/DietRoutine/DietRoutineTable/MobileViewTable/MobileViewTable';

const dietRoutineTable = () => {
    return (
        <div>
            <DesktopView>
                <DietRoutineTable />
            </DesktopView>
            <MobileView>
                <MobileViewTable />
            </MobileView>

        </div>
    );
};

export default dietRoutineTable;

const MobileView = styled('div')`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;
const DesktopView = styled('div')`
    display: block;
    @media (max-width: 768px) {
        display: none;
    }
`;

