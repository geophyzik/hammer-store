import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import { fetchUsersSuccess } from "redux/actions/Clients";

export const AppViews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      headers: '',
    };

    const fetchData = async () => {
      try {
        const res = await axios.request(options);
        dispatch(fetchUsersSuccess(res.data));
      } catch (err) {
        if (!err.isAxiosError) {
          console.log('error unknown');
          return;
        }
        if (err.response?.status === 401) {
          console.log('error 401');
        } else {
          console.log('error network');
        }
      }
    };

    fetchData();

  }, [dispatch]);

  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/clients`} component={lazy(() => import(`./clients`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);