import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

export default function Chart() {
  const theme = useTheme();
  const [txt, setTxt] = '';

  return (
    <React.Fragment>
      <TextField onChange={(e) => setTxt(e.target.value)} />
      <br />
      <Button type="button" variant="contained">
        ADD TODO
      </Button>
    </React.Fragment>
  );
}
