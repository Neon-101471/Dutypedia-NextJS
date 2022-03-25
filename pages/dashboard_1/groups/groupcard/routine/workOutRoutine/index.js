import React from 'react';
import styled from 'styled-components';
import SingleMemberRoutine from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/SingleMemberRoutineFile/SingleMemberRoutine';
import { WhiteBg } from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/StyledCssFile/StyledCss';
import createSingleMember from './createSingleMember';

const workOutRoutine = () => {
    return (
        <Wrapper>
            <WhiteBg>
                <SingleMemberRoutine />
            </WhiteBg>
        </Wrapper>
    );
};

export default workOutRoutine;
const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    border-radius: 0 0 15px 15px;

    @media (max-width: 768px) {
        .group-btn {
            display: inline-flex;
        }
        .group-btn h4 {
            font-size: 3vw;
        }
    }
`;
