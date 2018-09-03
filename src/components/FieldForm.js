import React from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { FormInput, FormButton } from '../common';
import { Delete } from '@material-ui/icons';


class FieldForm extends React.Component {
  state = {
    length: 1,
    fields: [
      {
        name: 'Sample',
        type: 'text',
        max: 32,
        required: true,
        error: 'First name is required'
      }
    ]
  }

  onChange = (index) => {
    console.log(index)
  }

  render() {
    const { fields = [] } = this.state;

    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          {fields && fields.map((field, key) => <FieldItem
            key={key}
            field={field}
            onChange={this.onChange.bind(this, key)}
          />)}
        </Grid>
        <Grid container style={{margin: '10px 0px'}}>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <FormButton>+ Add</FormButton>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default FieldForm;

const FieldItem = props => {
  const { onChange, field = {} } = props
  console.log(field, 'field')
  return (
    <Grid container>
      <Grid item xs={12} sm={1} md={1} style={{textAlign: 'center', padding: 20}}>
        # 1
      </Grid>
      <Grid item xs={12} sm={10} md={10} className="item-field">
        <Grid container>
          <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormInput
              name="Name"
              type="text"
              fullWidth
              onChange={e => onChange('name', e.target.value)}
              value={field.name}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormInput
              name="Type"
              type="text"
              fullWidth
              onChange={e => onChange('type', e.target.value)}
              value={field.type}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormControl fullWidth>
              <InputLabel>Mandatory</InputLabel>
              <Select
                onChange={onChange}
                value={field.required}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="item-element">
            <FormInput
              name="Length"
              type="text"
              fullWidth
              onChange={onChange}
              value={field.max}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} className="item-element">
            <FormInput
              name="Error to display"
              type="textarea"
              max="200"
              fullWidth
              onChange={onChange}
              value={field.error}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={1} md={1} style={{textAlign: 'center', padding: '20px 0px'}}>
        <FormButton clr="red"><Delete/></FormButton>
      </Grid>
    </Grid>
  )
}