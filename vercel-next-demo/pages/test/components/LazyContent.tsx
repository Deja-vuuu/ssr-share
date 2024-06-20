import { useState } from 'react';
import Content from '@/components/Content';
import { useAsyncEffect } from 'ahooks';
import { getPageData } from 'apis';
import { log } from 'console';

export default function LazyContent() {
    const [pageData, setPageData] = useState<any>();
    useAsyncEffect(async () => {
        const pageData = await getPageData(100);
        console.log('pageData', pageData);
        // setPageData(pageData);
        setPageData(pageData);
    }, []);
    return (
        <main>
            <Content
                title='lazy content'
                data={pageData}
                disabledRealTime={true}
            />
        </main>
    );
}
