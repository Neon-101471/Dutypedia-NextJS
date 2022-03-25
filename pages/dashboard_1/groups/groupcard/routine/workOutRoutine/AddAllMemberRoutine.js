import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
const CreateRoutineTable = dynamic(() =>
    import(
        '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/CreateRoutineTableFile/CreateRoutineTable'
    )
);

import MobileCreateRoutineTable from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/MobileCreateRoutineTableFile/MobileCreateRoutineTable';

const AddAllMemberRoutine = () => {
    return (
        <Wrapper>
            <DesktopView>
                <CreateRoutineTable callFrom={'allMember'} />
            </DesktopView>
            <MobileView>
                <MobileCreateRoutineTable callFrom={'allMember'} />
            </MobileView>
        </Wrapper>
    );
};

export default AddAllMemberRoutine;
const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    margin-bottom: 40px;
`;
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
