import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { SortingState } from 'src/types';

const SortingContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 10px;
`;

const SortingIconContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Sorting: React.FC<SortingState> = ({ sortAsc, sortDesc }) => {
    return (
        <SortingContainer>
            <Typography sx={{ paddingRight: '10px' }}>Sort By Date</Typography>
            <SortingIconContainer>
                <IconButton sx={{ padding: '0' }} onClick={sortAsc}>
                    <ArrowDropUpIcon />
                </IconButton>
                <IconButton sx={{ padding: '0' }} onClick={sortDesc}>
                    <ArrowDropDownIcon />
                </IconButton>
            </SortingIconContainer>
        </SortingContainer>
    );
};

export default Sorting;
