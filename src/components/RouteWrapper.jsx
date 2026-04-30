import React, { Suspense } from 'react';
import { PageLoading } from './Loading';

const RouteWrapper = ({ children }) => {
    return (
        <Suspense fallback={<PageLoading />}>
            {children}
        </Suspense>
    );
};

export default RouteWrapper;
