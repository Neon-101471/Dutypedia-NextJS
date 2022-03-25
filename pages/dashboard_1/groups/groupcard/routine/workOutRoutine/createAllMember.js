import React from 'react';
import styled from 'styled-components';
import AllMemberRoutine from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/AllMemberRoutineFile/AllMemberRoutine';

const createAllMember = () => {
    return (
        <Wrapper>
            <AllMemberRoutine />
        </Wrapper>
    );
};

export default createAllMember;
const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    background: #fff;
    border-radius: 0 0 29px 29px;

    @media (max-width: 768px) {
        .group-btn {
            display: inline-flex;
        }
        .group-btn h4 {
            font-size: 3vw;
        }
    }
`;
