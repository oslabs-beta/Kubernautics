import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const DropDownMenu = () => {
  const [selectedTask, setSelectedTask] = useState('');

  //Provide the possible promql metric look ups

  const promqlOptions = [
    'node_cpu_seconds_total',
    'process_cpu_seconds_total',
    'node_memory_MemTotal_bytes',
    'node_network_receive_bytes_total',
    'node_network_transmit_bytes_total',
    'http_requests_total',
    'http_request_duration_seconds',
    'container_cpu_usage_seconds_total',
    'container_memory_usage_bytes',
    'container_network_receive_bytes_total',
  ];

  const ddMenu = [];
  for (let i = 0; i < promqlOptions.length; i++) {
    ddMenu.push(
      <MenuItem value={`${promqlOptions[i]}`}>{`${promqlOptions[i]}`}</MenuItem>
    );
  }
  //form control has a scroll if there is too many options
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id='dropdown-label'>Search for an Expression</InputLabel>
        <Select
          labelId='dropdown-label'
          id='dropdown'
          value={selectedTask}
          onChange={(e) => {
            const searchTask = e.target.value;
            setSelectedTask(searchTask);
          }}
          label='Select an option'
        >
          {ddMenu}
        </Select>
      </FormControl>

      {/* Display the selected value */}
      <p>Selected Value: {selectedTask}</p>
    </div>
  );
};

// export function DropDownMenu() {
//   const [open, setOpen] = useState(false);
//   const [selection, setSelection] = useState([]);

//   function handleOnClick(item) {}

//   return (
//     <div className='dropdown'>
//       <div
//         tabIndex={0}
//         className='dropdown-items'
//         role='button'
//         onKeyPress={() => toggle(!open)}
//         onClick={() => toggle(!open)}
//       >
//         <div className='dd-title'>
//           <p className='dd-title--bold'></p>
//         </div>
//       </div>
//     </div>
//   );
// }

export const CustomChart = (props) => {
  return (
    <Container id='charts'>
      <DropDownMenu />
    </Container>
  );
};
