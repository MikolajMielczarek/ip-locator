import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { searchIpToStore, selectStackUrl } from '../../redux/search';
import { useFetchIpStack } from '../../hooks/useFetchIpStack';
import { stackToStore } from '../../redux/stackSearch';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const stackUrlStore = useAppSelector(selectStackUrl);
  const { data } = useFetchIpStack(stackUrlStore);
  const [ipVariable, setIpVariable] = useState('');

  const isValidUrl = (value: string) => {
    return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(value);
  };

  const isValidIpAddress = (value: string) => {
    return /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(value);
  };

  const formik = useFormik({
    initialValues: {
      inputValue: '',
    },
    validationSchema: Yup.object({
      inputValue: Yup.string().required('This field is required').test(
        'is-valid-input',
        'Please input proper IP or URL',
        (value) => {
          return isValidIpAddress(value) || (isValidUrl(value));
        }
      ),
    }),
    onSubmit: (values) => {      
        if (isValidIpAddress(values.inputValue)) {
          setIpVariable(values.inputValue);
        } else if (isValidUrl(values.inputValue)) {      
          const url = new URL(values.inputValue);
          const ipAddress = url.hostname;
          setIpVariable(ipAddress);
        }
      },
      
  });

  useEffect(() => {
    if (ipVariable) {
      dispatch(searchIpToStore(`${ipVariable}`));
    }
    if (data) {
        dispatch(stackToStore(data));
    }
  }, [ipVariable, data]);

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <TextField
              label="IP or URL"
              variant="outlined"
              fullWidth
              id="inputValue"
              name="inputValue"
              value={formik.values.inputValue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.inputValue && Boolean(formik.errors.inputValue)}
              helperText={formik.touched.inputValue && formik.errors.inputValue}
            />
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Search;
