import React, { useState } from 'react';
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/system';
import actions from './action';
import ClearChart from './ClearCharts';

const DropDownMenu = (props) => {
  const [buttonStatus, setButtonStatus] = useState(true);
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState('');
  const [selectedStepSize, setSelectedStepSize] = useState();
  const [isFormVisible, setFormVisibility] = useState(false);

  const classes = styled((theme) => ({
    customDialog: {
      width: '1500px',
      maxHeight: '350px',
      padding: theme.spacing(2),
    },
    customMenu: {
      width: '1400px',
      maxHeight: '350px',
      padding: theme.spacing(2),
    },
  }));
  const actionTasks = Object.keys(actions.data);
  // Provide the possible PromQL metric look ups, types, and help descriptions
  const ddActionTasks = [];
  for (let i = 0; i < actionTasks.length; i++) {
    ddActionTasks.push(
      <MenuItem key={actionTasks[i]} value={actionTasks[i]}>
        <Grid container spacing={8} key={actionTasks[i]} value={actionTasks[i]}>
          <Grid item xs={4}>
            {actionTasks[i]}
          </Grid>
          <Grid item xs={4}>
            {actions.data[actionTasks[i]][0].type}
          </Grid>
          <Grid item xs={4}>
            {actions.data[actionTasks[i]][0].help}
          </Grid>
        </Grid>
      </MenuItem>
    );
  }

  // Options for collection time in dropdown
  const timeranges = ['1m', '5m', '10m', '30m', '1h', '2h', '4h', '8h'];
  // Options for data step intervals in dropdown
  const stepsizes = [1, 5, 10, 30, 60, 120, 240, 480];

  const ddTimeRanges = timeranges.map((range) => (
    <MenuItem key={range} value={range}>
      {range}
    </MenuItem>
  ));

  const ddStepSizes = stepsizes.map((size) => (
    <MenuItem key={size} value={size}>
      {size}
    </MenuItem>
  ));

  // Form control has a scroll bar incase too many options are listed
  return (
    <div>
      <Button variant='contained' onClick={() => setFormVisibility(true)}>
        Add Metric
      </Button>

      <Dialog
        open={isFormVisible}
        onClose={() => setFormVisibility(false)}
        PaperProps={{
          className: classes.customDialog,
        }}
      >
        <DialogTitle>Add Metric</DialogTitle>

        <DialogContent>
          {
            <div>
              <FormControl fullWidth>
                <InputLabel id='timeRange'>Select a Query</InputLabel>
                <Select
                  id='taskname'
                  value={selectedTask}
                  onChange={(e) => {
                    setButtonStatus(false);
                    const taskname = e.target.value;
                    setSelectedTask(taskname);
                  }}
                  label='Select an option'
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 280, 
                      },
                      className: classes.customMenu,
                    },
                  }}
                >
                  {ddActionTasks}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id='timeRange'>Set a time range</InputLabel>
                <Select
                  id='timeOptions'
                  value={selectedTimeRange}
                  onChange={(e) => {
                    const timeduration = e.target.value;
                    setSelectedTimeRange(timeduration);
                  }}
                  label='Select an option'
                >
                  {ddTimeRanges}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='stepsize'>Set a step size (seconds)</InputLabel>
                <Select
                  id='stepsizeOptions'
                  value={selectedStepSize}
                  onChange={(e) => {
                    const stepsizing = e.target.value;
                    setSelectedStepSize(stepsizing);
                  }}
                  label='Select an option'
                >
                  {ddStepSizes}
                </Select>
              </FormControl>
            </div>
          }
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setFormVisibility(false)}>Cancel</Button>

          <Button
            variant='contained'
            disabled={!selectedTask || !selectedTimeRange}
            onClick={() => {
              props.onSaveToLocalStorage(
                selectedTask,
                selectedTimeRange,
                selectedStepSize
              );
              setFormVisibility(false);
            }}
          >
            Create Chart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const CustomChart = (props) => {
  return (
    <Container id='ddMenu'>
      <ClearChart />
      <DropDownMenu onSaveToLocalStorage={props.onSaveToLocalStorage} />
    </Container>
  );
};
