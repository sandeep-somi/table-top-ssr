import React from 'react';
import { TextField } from '@material-ui/core';

const FormInput = props => {
  const {
    id = '',
    name = '',
    className = '',
    type = 'text',
    error = false,
		fullWidth = false,
		max='100'
  } = props;
  return (
    <React.Fragment>
			{type === 'textarea' ? <TextField
			id={id}
			label={name}
			className={className}
			fullWidth={fullWidth}
			error={error}
			multiline
			rows={max ? max % 100 : null }
			inputProps={{
				maxLength: max
			}}
		/> : 
		<TextField
				id={id}
				label={name}
				className={className}
				fullWidth={fullWidth}
				error={error}
				type={type}
				inputProps={{
					maxLength: max
				}}
			/>}
		</React.Fragment>
  )
}

export default FormInput;