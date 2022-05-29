import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';

const CategoryFilter: React.FC = () => {
    return (
        <FormControl>
            <FormLabel>Category</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Sport" />
                <FormControlLabel control={<Checkbox />} label="Fashion" />
            </FormGroup>
        </FormControl>
    );
};

export default CategoryFilter;
