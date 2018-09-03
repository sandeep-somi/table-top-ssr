import React, { Component } from 'react';
import { Grid, Checkbox, FormControlLabel, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { MainForm, FieldForm } from '../components';
import { Modal, FormButton } from '../common';
import { connect } from 'react-redux';

const data = [
  {
    Name: 'test1',
    age: 26,
    email: 'test@test.com',
  },
  {
    Name: 'test2',
    age: 26,
    email: 'test2@test.com',
  },
  {
    Name: 'test3',
    age: 26,
    email: 'test3@test.com',
  },
  {
    Name: 'test4',
    age: 26,
    email: 'test4@test.com',
  },
  {
    Name: 'test5',
    age: 26,
    email: 'test5@test.com',
  },
  {
    Name: 'test6',
    age: 26,
    email: 'test6@test.com',
  },
]

class App extends Component {
  state = {
    data: {
      headers: [],
      values: [...data],
      item: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    const { item = {} } = this.state.data;
    let items = Object.keys(item);
    let arr = items && items.map( item => ({ [item]: true }));
    this.setState({ data: { ...data, headers: arr }})
  }

  render() {
    const { data = [] } = this.state;
    const { headers = [], values = []} = data;

    return (
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Grid item xs={12}>
            <h4>Show/Hide Columns</h4>
          </Grid>
          {headers && headers.map((header, key) => <Grid container key={key}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked=""
                    onChange=""
                    value="checkedA"
                  />
                }
                label={Object.getOwnPropertyNames(header)}
              />
            </Grid>
          </Grid>)}
        </Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12}>
              <h4>Table</h4>
            </Grid>
            <Grid item xs={12}>
              <Table>
                <TableHead>
                  <TableRow> 
                    <TableCell><FormButton>Hide</FormButton></TableCell>
                    <TableCell><FormButton>Hide</FormButton></TableCell>
                    <TableCell><FormButton>Hide</FormButton></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Grid>
      </Grid>    
    );
  }
}

export default connect((state) => state)(App);
