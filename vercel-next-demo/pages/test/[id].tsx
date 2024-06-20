import * as React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Content from '@/components/Content';
import { getPageData } from 'apis';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./components/LazyContent'), {
    loading: () => <p>Loading...</p>,
});

type SSRPageProps = {
    pageData: string;
};

export default function SSRPage({ pageData }: SSRPageProps) {
    return (
        <>
            <main>
                <Content title='normal conetnt' data={pageData} disabledRealTime={true}/>
            </main>
            <DynamicComponent />
        </>
    );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const pageData = await getPageData(id);
    return {
        props: { pageData: pageData },
    };
};
