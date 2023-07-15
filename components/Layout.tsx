import { Tabs } from './Tabs';
import styled from 'styled-components';
import { ReactNode } from 'react';
import Header from './Header';

const MyMain = styled.main``;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header/>
      <MyMain className="flex-1 text-black bg-black p-6">
        {children}
      </MyMain>
      <div className="fixed bottom-0 w-full ">
        <Tabs />
      </div>
    </div>
  );
}

export default Layout;
