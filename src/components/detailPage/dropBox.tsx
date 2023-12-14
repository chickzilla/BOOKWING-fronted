import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { relative } from 'path';
import { positions } from '@mui/system';

export default function BasicSelect() {
  const [distance, setDistance] = React.useState('3');

  const handleChange = (event: SelectChangeEvent) => {
    setDistance(event.target.value as string);
    
  };

  return (
    <Box sx={{ width: 4/5 ,position : 'absolute',top : '43%'}}>
      <FormControl fullWidth>
        <InputLabel id="distance-select-label">Distance</InputLabel>
        <Select
          labelId="distance-select-label"
          id="distance-select"
          value={distance}
          label="Distance"
          onChange={handleChange}
        >
          <MenuItem value={3}>3 km.</MenuItem>
          <MenuItem value={5}>5 km.</MenuItem>
          <MenuItem value={10}>10 km.</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}